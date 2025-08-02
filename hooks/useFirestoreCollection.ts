
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, QuerySnapshot, DocumentData, Query } from '@firebase/firestore';

interface FirestoreCollection<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
}

export default function useFirestoreCollection<T>(pathOrQuery: string | Query): FirestoreCollection<T> {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // The query object changes on every render, stringifying it for the dependency array
  const queryKey = typeof pathOrQuery === 'string' ? pathOrQuery : JSON.stringify(pathOrQuery);

  useEffect(() => {
    const collectionRef = typeof pathOrQuery === 'string' ? collection(db, pathOrQuery) : pathOrQuery;

    const unsubscribe = onSnapshot(collectionRef, (snapshot: QuerySnapshot<DocumentData>) => {
      try {
        const collectionData = snapshot.docs.map(doc => {
          const docData = doc.data();
          // Firestore timestamps need to be converted to strings to be serializable
          if (docData.date && typeof docData.date.toDate === 'function') {
            docData.date = docData.date.toDate().toISOString();
          }
          return {
            id: doc.id,
            ...docData,
          } as unknown as T;
        });
        setData(collectionData);
        setError(null);
      } catch (e: any) {
         console.error("Error processing snapshot: ", e);
         setError(e);
      }
      setLoading(false);
    }, (err) => {
      console.error("Firestore snapshot error: ", err);
      setError(err);
      setLoading(false);
    });

    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryKey]);

  return { data, loading, error };
}
