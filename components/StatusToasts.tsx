import React, { useEffect, useState } from 'react';
import { SyncedIcon, SyncingIcon, OfflineIcon } from './Icons';

interface Toast {
  id: string;
  type: 'sync' | 'online';
  status: string;
  message: string;
  color: string;
  Icon: React.ElementType;
}

interface StatusToastsProps {
  syncStatus: 'not_synced' | 'syncing' | 'synced';
  online: boolean;
}

const toastConfig = {
  synced: {
    message: 'All data is synced.',
    color: 'bg-success text-success-foreground',
    Icon: SyncedIcon,
  },
  syncing: {
    message: 'Syncing data…',
    color: 'bg-info text-info-foreground',
    Icon: SyncingIcon,
  },
  not_synced: {
    message: 'Data is not synced.',
    color: 'bg-destructive text-destructive-foreground',
    Icon: OfflineIcon,
  },
  online: {
    message: 'You are back online.',
    color: 'bg-success text-success-foreground',
    Icon: SyncedIcon,
  },
  offline: {
    message: 'You are offline.',
    color: 'bg-warning text-warning-foreground',
    Icon: OfflineIcon,
  },
};

const StatusToasts: React.FC<StatusToastsProps> = ({ syncStatus, online }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [prevSync, setPrevSync] = useState(syncStatus);
  const [prevOnline, setPrevOnline] = useState(online);

  // Show sync status toast on change
  useEffect(() => {
    if (prevSync !== syncStatus) {
      setToasts((toasts) => [
        ...toasts,
        {
          id: `sync-${Date.now()}`,
          type: 'sync',
          status: syncStatus,
          message: toastConfig[syncStatus].message,
          color: toastConfig[syncStatus].color,
          Icon: toastConfig[syncStatus].Icon,
        },
      ]);
      setPrevSync(syncStatus);
    }
    // eslint-disable-next-line
  }, [syncStatus]);

  // Show online/offline toast on change
  useEffect(() => {
    if (prevOnline !== online) {
      setToasts((toasts) => [
        ...toasts,
        {
          id: `online-${Date.now()}`,
          type: 'online',
          status: online ? 'online' : 'offline',
          message: toastConfig[online ? 'online' : 'offline'].message,
          color: toastConfig[online ? 'online' : 'offline'].color,
          Icon: toastConfig[online ? 'online' : 'offline'].Icon,
        },
      ]);
      setPrevOnline(online);
    }
    // eslint-disable-next-line
  }, [online]);

  // Auto-dismiss toasts after 4 seconds
  useEffect(() => {
    if (toasts.length === 0) return;
    const timer = setTimeout(() => {
      setToasts((toasts) => toasts.slice(1));
    }, 4000);
    return () => clearTimeout(timer);
  }, [toasts]);

  return (
    <div className="fixed top-4 left-1/2 z-50 flex flex-col items-center gap-2" style={{ transform: 'translateX(-50%)' }}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg font-semibold text-base ${toast.color} animate-fade-in border border-border`}
          style={{ minWidth: 220 }}
        >
          <toast.Icon className="w-6 h-6" />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusToasts;