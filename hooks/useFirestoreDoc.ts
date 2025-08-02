
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, onSnapshot, DocumentSnapshot, DocumentData } from '@firebase/firestore';

interface FirestoreDoc<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export default function useFirestoreDoc<T>(path: string): FirestoreDoc<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!path) {
        setLoading(false);
        return;
    };

    const docRef = doc(db, path);

    const unsubscribe = onSnapshot(docRef, (snapshot: DocumentSnapshot<DocumentData>) => {
      if (snapshot.exists()) {
        try {
            setData({ id: snapshot.id, ...snapshot.data() } as unknown as T);
            setError(null);
        } catch (e: any) {
            console.error("Error processing document snapshot: ", e);
            setError(e);
        }
      } else {
        // Doc doesn't exist. This isn't an error, but data is null.
        setData(null);
      }
      setLoading(false);
    }, (err) => {
      console.error("Firestore document snapshot error: ", err);
      setError(err);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [path]);

  return { data, loading, error };
}
