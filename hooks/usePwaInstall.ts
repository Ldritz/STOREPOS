import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const PWA_INSTALL_BANNER_DISMISSED_KEY = 'pwa-install-banner-dismissed';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function usePwaInstall() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isDismissed, setIsDismissed] = useLocalStorage<boolean>(PWA_INSTALL_BANNER_DISMISSED_KEY, false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      if (!isStandalone) {
        setInstallPrompt(e as BeforeInstallPromptEvent);
      }
    };
    
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };
  
  const handleDismiss = () => {
    setIsDismissed(true);
  };

  const shouldShow = !!installPrompt && !isDismissed;

  return { shouldShow, handleInstall, handleDismiss };
}
