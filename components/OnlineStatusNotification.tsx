import React, { useState, useEffect } from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus.ts';
import WifiIcon from './icons/WifiIcon.tsx';
import WifiOffIcon from './icons/WifiOffIcon.tsx';

const OnlineStatusNotification: React.FC = () => {
    const isOnline = useOnlineStatus();
    const [visible, setVisible] = useState(false);
    const [wasOffline, setWasOffline] = useState(!isOnline);

    useEffect(() => {
        // If we go offline, show the banner immediately and mark that we were offline.
        if (!isOnline) {
            setVisible(true);
            setWasOffline(true);
            return; // No timeout needed, banner should persist.
        }

        // If we come back online AND we were previously offline, show a success message.
        if (isOnline && wasOffline) {
            setVisible(true);
            // Set a timer to hide the "back online" message after a few seconds.
            const timer = setTimeout(() => {
                setVisible(false);
                setWasOffline(false); // Reset the state for the next offline event.
            }, 3000);

            return () => clearTimeout(timer);
        }

    }, [isOnline, wasOffline]);

    useEffect(() => {
        // This handles the initial load case. If app loads while offline, show banner.
        if (!isOnline) {
            setVisible(true);
        }
    }, []);


    if (!visible) {
        return null;
    }

    const content = isOnline
        ? {
            Icon: WifiIcon,
            bgColor: 'bg-green-100 dark:bg-green-900',
            textColor: 'text-green-800 dark:text-green-200',
            message: "You're back online. Data is syncing."
        }
        : {
            Icon: WifiOffIcon,
            bgColor: 'bg-slate-200 dark:bg-slate-700',
            textColor: 'text-slate-800 dark:text-slate-200',
            message: 'You are offline. Changes will be saved locally.'
        };

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 p-3 text-center text-sm font-medium transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${content.bgColor} ${content.textColor}`}>
            <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
                <content.Icon className="w-5 h-5" />
                <span>{content.message}</span>
            </div>
        </div>
    );
};

export default OnlineStatusNotification;
