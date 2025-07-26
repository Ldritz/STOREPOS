import { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc, query, orderBy, writeBatch, getDocs, where, WhereFilterOp } from 'firebase/firestore';
import { SyncStatus } from '../types';

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

    useEffect(() => {
        setLoading(true);

        const collectionRef = collection(db, collectionName);
        const queryConstraints = queries.map(q => where(q.field, q.operator, q.value));
        if (defaultSortField) {
            queryConstraints.push(orderBy(defaultSortField, defaultSortDirection));
        }

        const q = query(collectionRef, ...queryConstraints);

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const collectionData: T[] = [];
            querySnapshot.forEach((doc) => {
                collectionData.push({ id: doc.id, ...doc.data() } as T);
            });
            setData(collectionData);
            setLoading(false);

            if (querySnapshot.metadata.hasPendingWrites) {
                setSyncStatus('syncing');
            } else if (querySnapshot.metadata.fromCache) {
                setSyncStatus('offline');
            } else {
                setSyncStatus('synced');
            }
        }, (err) => {
            console.error(err);
            setError(err);
            setLoading(false);
            setSyncStatus('offline');
        });

        return () => unsubscribe();
    }, [collectionName, defaultSortField, defaultSortDirection, JSON.stringify(queries)]);

    const addItem = useCallback(async (item: Omit<T, 'id'>) => {
        try {
            await addDoc(collection(db, collectionName), item);
        } catch (e) {
            console.error("Error adding document: ", e);
            throw e;
        }
    }, [collectionName]);

    const updateItem = useCallback(async (id: string, updates: Partial<Omit<T, 'id'>>) => {
        const docRef = doc(db, collectionName, id);
        try {
            await updateDoc(docRef, updates);
        } catch (e) {
            console.error("Error updating document: ", e);
            throw e;
        }
    }, [collectionName]);

    const deleteItem = useCallback(async (id: string) => {
        const docRef = doc(db, collectionName, id);
        try {
            await deleteDoc(docRef);
        } catch (e) {
            console.error("Error deleting document: ", e);
            throw e;
        }
    }, [collectionName]);

    const updateMultipleItems = useCallback(async (updates: { id: string; data: Partial<Omit<T, 'id'>> }[]) => {
        const batch = writeBatch(db);
        updates.forEach(update => {
            const docRef = doc(db, collectionName, update.id);
            batch.update(docRef, update.data);
        });
        try {
            await batch.commit();
        } catch(e) {
            console.error("Error batch updating documents: ", e);
            throw e;
        }
    }, [collectionName]);

    return { data, loading, error, syncStatus, addItem, updateItem, deleteItem, updateMultipleItems };
}

export default useFirestoreCollection;
