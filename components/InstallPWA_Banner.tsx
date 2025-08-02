import React from 'react';
import usePwaInstall from '../hooks/usePwaInstall';
import { ArrowDownTrayIcon, XIcon } from './Icons';

const InstallPwaBanner: React.FC = () => {
  const { shouldShow, handleInstall, handleDismiss } = usePwaInstall();

  // Also check if we're on a mobile device based on user agent, as it's less likely to be useful on desktop
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  
  if (!shouldShow || !isMobile) {
    return null;
  }
  
  return (
    <div 
      role="alert" 
      className="fixed bottom-20 right-0 left-0 mx-auto w-[calc(100%-2rem)] max-w-md lg:hidden z-50 animate-slide-in-up"
    >
      <div className="bg-primary text-primary-foreground p-3 rounded-xl shadow-lg flex items-center gap-3">
        <div className="bg-primary-foreground/20 p-2 rounded-lg">
          <ArrowDownTrayIcon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm">Install Olesco POS App</p>
          <p className="text-xs opacity-80">For a faster, full-screen experience.</p>
        </div>
        <button 
          onClick={handleInstall} 
          className="bg-primary-foreground text-primary font-bold py-1.5 px-4 rounded-md text-sm hover:bg-primary-foreground/90 transition-colors"
        >
          Install
        </button>
        <button 
          onClick={handleDismiss} 
          className="p-1.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
          aria-label="Dismiss install banner"
        >
            <XIcon className="w-5 h-5"/>
        </button>
      </div>
    </div>
  );
};

export default InstallPwaBanner;
