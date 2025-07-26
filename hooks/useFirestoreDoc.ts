import { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import { doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { SyncStatus } from '../types';

function useFirestoreDoc<T>(
    collectionName: string,
    docId: string,
    initialData: T
) {
    const [data, setData] = useState<T>(initialData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [syncStatus, setSyncStatus] = useState<SyncStatus>('syncing');

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, collectionName, docId);

        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                setData(docSnap.data() as T);
            } else {
                console.log(`Document ${collectionName}/${docId} not found, creating with initial data.`);
                setDoc(docRef, initialData).catch(e => console.error("Error creating document:", e));
                setData(initialData);
            }
            setLoading(false);

            if (docSnap.metadata.hasPendingWrites) {
                setSyncStatus('syncing');
            } else if (docSnap.metadata.fromCache) {
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
    }, [collectionName, docId, JSON.stringify(initialData)]);

    const updateData = useCallback(async (updates: Partial<T>) => {
        const docRef = doc(db, collectionName, docId);
        try {
            await updateDoc(docRef, updates);
        } catch (e) {
            console.error("Error updating document: ", e);
            throw e;
        }
    }, [collectionName, docId]);
    
    const setDataDoc = useCallback(async (newData: T) => {
        const docRef = doc(db, collectionName, docId);
        try {
            await setDoc(docRef, newData);
        } catch (e) {
            console.error("Error setting document: ", e);
            throw e;
        }
    }, [collectionName, docId]);

    return { data, loading, error, syncStatus, updateData, setData: setDataDoc };
}

export default useFirestoreDoc;
