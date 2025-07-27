import React from 'react';
import { SyncStatus } from '../types';
import { SyncedIcon, SyncingIcon, OfflineIcon } from './Icons';

interface SyncStatusIndicatorProps {
    status: SyncStatus;
}

const SyncStatusIndicator: React.FC<SyncStatusIndicatorProps> = ({ status }) => {
    const statusConfig = {
        synced: {
            Icon: SyncedIcon,
            text: 'Synced',
            color: 'text-success',
            animation: '',
        },
        syncing: {
            Icon: SyncingIcon,
            text: 'Syncing...',
            color: 'text-info',
            animation: 'animate-spin',
        },
        offline: {
            Icon: OfflineIcon,
            text: 'Offline',
            color: 'text-warning',
            animation: '',
        },
    };

    const { Icon, text, color, animation } = statusConfig[status];

    return (
        <div className={`flex items-center gap-2 text-sm font-semibold ${color}`}>
            <Icon className={`w-5 h-5 ${animation}`} />
            <span className="hidden sm:inline">{text}</span>
        </div>
    );
};

export default SyncStatusIndicator;
