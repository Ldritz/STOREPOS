import React from 'react';
import { SyncStatus } from '../types';
import { SyncedIcon, SyncingIcon, OfflineIcon } from './Icons';

interface SyncStatusIndicatorProps {
    status: SyncStatus;
    details?: string;
}

const SyncStatusIndicator: React.FC<SyncStatusIndicatorProps> = ({ status, details }) => {
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
        error: {
            Icon: OfflineIcon,
            text: 'Sync Error',
            color: 'text-destructive',
            animation: '',
        },
    };

    const { Icon, text, color, animation } = statusConfig[status] || statusConfig['error'];

    return (
        <div className={`flex items-center gap-2 text-sm font-semibold ${color}`} tabIndex={0} aria-label={text} title={details || text} style={{ outline: 'none' }}>
            <Icon className={`w-5 h-5 ${animation}`} />
            <span className="hidden sm:inline">{text}</span>
            {details && (
                <span className="sr-only">{details}</span>
            )}
        </div>
    );
};

export default SyncStatusIndicator;
