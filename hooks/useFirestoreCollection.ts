import { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc, query, orderBy, writeBatch, where, WhereFilterOp } from 'firebase/firestore';
import { SyncStatus } from '../types';
import { useErrorHandler } from '../utils/errorHandling';
import { validateTransaction, validateInventoryItem } from '../utils/validation';

export interface FirestoreQuery {
    field: string;
    operator: WhereFilterOp;
    value: any;
}

function useFirestoreCollection<T extends { id: string }>(
    collectionName: string,
    defaultSortField?: string,
    defaultSortDirection: 'asc' | 'desc' = 'asc',
    queries: FirestoreQuery[] = []
) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [syncStatus, setSyncStatus] = useState<SyncStatus>('syncing');
    const { handleFirebaseError, retryOperation } = useErrorHandler();

    useEffect(() => {
        setLoading(true);
        setError(null);

        const collectionRef = collection(db, collectionName);
        const queryConstraints = queries.map(q => where(q.field, q.operator, q.value));
        const sortConstraints = defaultSortField ? [orderBy(defaultSortField, defaultSortDirection)] : [];
        const allConstraints = [...queryConstraints, ...sortConstraints];

        const q = query(collectionRef, ...allConstraints);

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            try {
                const collectionData: T[] = [];
                querySnapshot.forEach((doc) => {
                    collectionData.push({ id: doc.id, ...doc.data() } as T);
                });
                setData(collectionData);
                setLoading(false);
                setError(null);

                if (querySnapshot.metadata.hasPendingWrites) {
                    setSyncStatus('syncing');
                } else if (querySnapshot.metadata.fromCache) {
                    setSyncStatus('offline');
                } else {
                    setSyncStatus('synced');
                }
            } catch (err) {
                const error = err as Error;
                setError(error);
                setLoading(false);
                handleFirebaseError(error, `${collectionName}_read`);
            }
        }, (err) => {
            console.error(err);
            setError(err);
            setLoading(false);
            setSyncStatus('offline');
            handleFirebaseError(err, `${collectionName}_read`);
        });

        return () => unsubscribe();
    }, [collectionName, defaultSortField, defaultSortDirection, JSON.stringify(queries)]);

    const addItem = useCallback(async (item: Omit<T, 'id'>) => {
        try {
            // Validate data based on collection type
            if (collectionName === 'transactions') {
                const validation = validateTransaction(item as any);
                if (!validation.isValid) {
                    throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
                }
            } else if (collectionName === 'inventory') {
                const validation = validateInventoryItem(item as any);
                if (!validation.isValid) {
                    throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
                }
            }

            return await retryOperation(
                async () => {
                    const docRef = await addDoc(collection(db, collectionName), item);
                    return docRef.id;
                },
                { operation: `${collectionName}_add` }
            );
        } catch (e) {
            const error = e as Error;
            handleFirebaseError(error, `${collectionName}_add`);
            throw error;
        }
    }, [collectionName, retryOperation, handleFirebaseError]);

    const updateItem = useCallback(async (id: string, updates: Partial<Omit<T, 'id'>>) => {
        try {
            return await retryOperation(
                async () => {
                    const docRef = doc(db, collectionName, id);
                    await updateDoc(docRef, updates as any);
                },
                { operation: `${collectionName}_update` }
            );
        } catch (e) {
            const error = e as Error;
            handleFirebaseError(error, `${collectionName}_update`);
            throw error;
        }
    }, [collectionName, retryOperation, handleFirebaseError]);

    const deleteItem = useCallback(async (id: string) => {
        try {
            return await retryOperation(
                async () => {
                    const docRef = doc(db, collectionName, id);
                    await deleteDoc(docRef);
                },
                { operation: `${collectionName}_delete` }
            );
        } catch (e) {
            const error = e as Error;
            handleFirebaseError(error, `${collectionName}_delete`);
            throw error;
        }
    }, [collectionName, retryOperation, handleFirebaseError]);

    const updateMultipleItems = useCallback(async (updates: { id: string; data: Partial<Omit<T, 'id'>> }[]) => {
        try {
            return await retryOperation(
                async () => {
                    const batch = writeBatch(db);
                    updates.forEach(update => {
                        const docRef = doc(db, collectionName, update.id);
                        batch.update(docRef, update.data as any);
                    });
                    await batch.commit();
                },
                { operation: `${collectionName}_batch_update` }
            );
        } catch (e) {
            const error = e as Error;
            handleFirebaseError(error, `${collectionName}_batch_update`);
            throw error;
        }
    }, [collectionName, retryOperation, handleFirebaseError]);

    // Enhanced error recovery
    const retrySync = useCallback(async () => {
        setError(null);
        setSyncStatus('syncing');
        // The useEffect will automatically retry the sync
    }, []);

    return { 
        data, 
        loading, 
        error, 
        syncStatus, 
        addItem, 
        updateItem, 
        deleteItem, 
        updateMultipleItems,
        retrySync
    };
}

export default useFirestoreCollection;
