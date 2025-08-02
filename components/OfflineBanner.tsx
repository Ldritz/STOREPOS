import React, { useState, useEffect } from 'react';
import { WarningIcon } from './Icons';

const OfflineBanner: React.FC = () => {
    const [isOffline, setIsOffline] = useState(!navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    if (!isOffline) {
        return null;
    }

    return (
        <div 
            role="status"
            className="w-full bg-warning text-warning-foreground text-center py-2 text-sm font-semibold animate-fade-in sticky top-0 z-50"
        >
            <div className="container flex items-center justify-center gap-2">
                <WarningIcon className="w-5 h-5" />
                <span>You are currently offline. Changes will sync when you're back online.</span>
            </div>
        </div>
    );
};

export default OfflineBanner;
