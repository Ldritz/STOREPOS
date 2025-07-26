import React, { useState, Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import type { View } from './types.ts';
import BottomNav from './components/BottomNav.tsx';
import { InventoryProvider } from './context/InventoryContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import OnlineStatusNotification from './components/OnlineStatusNotification.tsx';

// Dynamically import pages for code-splitting to reduce initial bundle size
const HomePage = React.lazy(() => import('/pages/HomePage.tsx'));
const InventoryPage = React.lazy(() => import('/pages/InventoryPage.tsx'));
const TransactionsPage = React.lazy(() => import('/pages/TransactionsPage.tsx'));
const SettingsPage = React.lazy(() => import('/pages/SettingsPage.tsx'));
const QuickSalePage = React.lazy(() => import('/pages/QuickSalePage.tsx'));

const LoadingFallback: React.FC = () => (
    <div className="flex justify-center items-center w-full h-[calc(100vh-7rem)] bg-slate-50 dark:bg-slate-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
    </div>
);

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('HOME');

  const renderView = () => {
    switch (activeView) {
      case 'HOME':
        return <HomePage setActiveView={setActiveView} />;
      case 'INVENTORY':
        return <InventoryPage />;
      case 'TRANSACTIONS':
        return <TransactionsPage />;
      case 'SETTINGS':
        return <SettingsPage />;
      case 'QUICK_SALE':
        return <QuickSalePage setActiveView={setActiveView} />;
      default:
        return <HomePage setActiveView={setActiveView} />;
    }
  };

  return (
    <>
      <ThemeProvider>
          <InventoryProvider>
          <div className="bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
              <OnlineStatusNotification />
              <main className="pb-28">
              <Suspense fallback={<LoadingFallback />}>
                  {renderView()}
              </Suspense>
              </main>
              <BottomNav activeView={activeView} setActiveView={setActiveView} />
          </div>
          </InventoryProvider>
      </ThemeProvider>
      <SpeedInsights />
    </>
  );
};

export default App;