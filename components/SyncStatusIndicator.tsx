import React from 'react';
import { SyncStatus } from '../types';
import { SyncedIcon, SyncingIcon, OfflineIcon } from './Icons';

interface SyncStatusIndicatorProps {
  status: SyncStatus;
}

const SyncStatusIndicator: React.FC<SyncStatusIndicatorProps> = React.memo(({ status }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'synced':
        return {
          icon: SyncedIcon,
          color: 'text-success',
          bgColor: 'bg-success/20',
          borderColor: 'border-success/30',
          label: 'Synced',
          pulse: false
        };
      case 'syncing':
        return {
          icon: SyncingIcon,
          color: 'text-warning',
          bgColor: 'bg-warning/20',
          borderColor: 'border-warning/30',
          label: 'Syncing',
          pulse: true
        };
      case 'offline':
        return {
          icon: OfflineIcon,
          color: 'text-destructive',
          bgColor: 'bg-destructive/20',
          borderColor: 'border-destructive/30',
          label: 'Offline',
          pulse: false
        };
      default:
        return {
          icon: SyncingIcon,
          color: 'text-muted-foreground',
          bgColor: 'bg-muted',
          borderColor: 'border-border',
          label: 'Unknown',
          pulse: false
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <div className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl border ${config.borderColor} ${config.bgColor} transition-all duration-200 hover:shadow-soft cursor-pointer`}>
      <div className={`relative ${config.pulse ? 'animate-pulse-slow' : ''}`}>
        <Icon className={`w-4 h-4 ${config.color}`} />
        {config.pulse && (
          <div className="absolute inset-0 w-4 h-4 border-2 border-current rounded-full animate-ping opacity-20"></div>
        )}
      </div>
      <div className="hidden sm:block">
        <span className={`text-xs font-medium ${config.color}`}>
          {config.label}
        </span>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-foreground rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
        {config.label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
      </div>
    </div>
  );
});

export default SyncStatusIndicator;
