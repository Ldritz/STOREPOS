import React, { useEffect, useState } from 'react';

const OnlineStatusIndicator: React.FC = () => {
  const [online, setOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div
      className={`flex items-center gap-1 px-2 py-1 rounded-full font-semibold border border-border bg-background shadow-sm ${online ? 'text-success' : 'text-destructive'}`}
      tabIndex={0}
      aria-label={online ? 'Online' : 'Offline'}
      title={online ? 'App is online' : 'App is offline'}
      style={{ outline: 'none' }}
    >
      <span className={`inline-block w-3 h-3 rounded-full ${online ? 'bg-success' : 'bg-destructive'}`}></span>
      <span className="hidden sm:inline text-xs font-medium">{online ? 'Online' : 'Offline'}</span>
    </div>
  );
};

export default OnlineStatusIndicator;