import React from 'react';
import { SyncStatus } from '../types';
import { SyncedIcon, SyncingIcon, OfflineIcon } from './Icons';

interface SyncIndicatorProps {
  status: SyncStatus;
  details?: string;
}

const statusConfig = {
  synced: {
    Icon: SyncedIcon,
    text: 'Synced',
    color: 'bg-success/20 text-success',
    ring: 'ring-success/30',
    animation: '',
  },
  syncing: {
    Icon: SyncingIcon,
    text: 'Syncing…',
    color: 'bg-info/20 text-info',
    ring: 'ring-info/30',
    animation: 'animate-spin',
  },
  offline: {
    Icon: OfflineIcon,
    text: 'Offline',
    color: 'bg-warning/20 text-warning',
    ring: 'ring-warning/30',
    animation: '',
  },
  error: {
    Icon: OfflineIcon,
    text: 'Sync Error',
    color: 'bg-destructive/20 text-destructive',
    ring: 'ring-destructive/30',
    animation: '',
  },
};

const SyncIndicator: React.FC<SyncIndicatorProps> = ({ status, details }) => {
  const { Icon, text, color, ring, animation } = statusConfig[status] || statusConfig['error'];
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1 rounded-full font-semibold shadow-sm border border-border ${color} ring-2 ${ring} transition-all duration-200 cursor-default`}
      tabIndex={0}
      aria-label={text}
      title={details || text}
      style={{ outline: 'none' }}
    >
      <Icon className={`w-5 h-5 ${animation}`} />
      <span className="hidden sm:inline">{text}</span>
    </div>
  );
};

export default SyncIndicator;