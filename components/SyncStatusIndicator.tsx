import React, { useState, useEffect } from 'react';
import { onSnapshot, collection } from '@firebase/firestore';
import { db } from '../firebase';
import { UploadIcon, WarningIcon, SyncedIcon } from './Icons';

const SyncStatusIndicator: React.FC = () => {
    const [status, setStatus] = useState<'synced' | 'syncing' | 'offline'>('syncing');

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'inventory'), 
        { includeMetadataChanges: true },
        (snapshot) => {
            if (!navigator.onLine) {
                setStatus('offline');
                return;
            }
            const hasPendingWrites = snapshot.metadata.hasPendingWrites;
            setStatus(hasPendingWrites ? 'syncing' : 'synced');
        }, 
        (error) => {
            console.error("Sync error:", error);
            setStatus('offline');
        });

        const handleOnline = () => {
            setStatus('syncing');
        };
        const handleOffline = () => setStatus('offline');
        
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        if (!navigator.onLine) {
            setStatus('offline');
        }

        return () => {
            unsub();
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    
    const statusMap = {
        synced: { text: 'Synced', color: 'text-success', Icon: SyncedIcon },
        syncing: { text: 'Syncing...', color: 'text-info', Icon: UploadIcon },
        offline: { text: 'Offline', color: 'text-muted-foreground', Icon: WarningIcon },
    };

    const { text, color, Icon } = statusMap[status];

    return (
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={`flex items-center gap-2 text-xs font-medium ${color}`}
        >
            <Icon className={`w-4 h-4 ${status === 'syncing' ? 'animate-pulse' : ''}`} aria-hidden="true" />
            <span>{text}</span>
            <span className="sr-only">. Data is currently {status}.</span>
        </div>
    );
};

export default SyncStatusIndicator;