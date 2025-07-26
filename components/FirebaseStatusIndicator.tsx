import React, { useState, useEffect } from 'react';
import { useInventory } from '../context/InventoryContext.tsx';

const FirebaseStatusIndicator: React.FC = () => {
    const { inventory, connectionStatus, error } = useInventory();
    const [showSyncedText, setShowSyncedText] = useState(false);

    // This effect will trigger on initial successful connection and every subsequent data update.
    useEffect(() => {
        if (connectionStatus === 'connected') {
            setShowSyncedText(true);
            const timer = setTimeout(() => {
                setShowSyncedText(false);
            }, 2500); // Show text for 2.5 seconds
            return () => clearTimeout(timer);
        }
    }, [inventory, connectionStatus]); // Re-run when inventory data changes or status changes

    const getStatusContent = () => {
        switch (connectionStatus) {
            case 'connecting':
                return (
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-500"></span>
                        </span>
                        <span>Connecting...</span>
                    </div>
                );
            case 'connected':
                return (
                    <div className="flex items-center gap-2 text-sm text-primary-700 dark:text-primary-500" title="Data is synced in real-time.">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
                        </span>
                        <div className="w-20 text-left">
                            <span className={`transition-opacity duration-300 ${showSyncedText ? 'opacity-100' : 'opacity-0'}`}>
                                Synced
                            </span>
                        </div>
                    </div>
                );
            case 'error':
                return (
                    <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-500" title={error?.message || 'An unknown error occurred.'}>
                         <span className="relative flex h-2.5 w-2.5">
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                        </span>
                        <span>Sync Error</span>
                    </div>
                );
            default:
                return <div className="h-[20px]"></div>; // Placeholder to prevent layout shift
        }
    };

    return <div className="flex justify-end">{getStatusContent()}</div>;
};

export default FirebaseStatusIndicator;