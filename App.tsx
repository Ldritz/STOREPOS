import React, { useState, useEffect, useMemo, Suspense, lazy, useCallback } from 'react';
import useFirestoreCollection from './hooks/useFirestoreCollection';
import useFirestoreDoc from './hooks/useFirestoreDoc';
import { Page, Transaction, InventoryItem, TransactionType, AppSettings, SyncStatus } from './types';
import AddTransactionModal from './components/AddTransactionModal';
import BottomNav from './components/BottomNav';
import SyncStatusIndicator from './components/SyncStatusIndicator';
import { ShoppingCartIcon, DashboardIcon, TransactionsIcon, InventoryIcon, OlescoLogo, SettingsIcon } from './components/Icons';
import { usePerformanceMonitor } from './utils/performance';

// Lazy load page components for better performance
const DashboardPage = lazy(() => import('./components/DashboardPage'));
const TransactionsPage = lazy(() => import('./components/TransactionsPage'));
const InventoryPage = lazy(() => import('./components/InventoryPage'));
const SettingsPage = lazy(() => import('./components/SettingsPage'));

// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[400px] p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold text-foreground mb-2">Something went wrong</h2>
            <p className="text-muted-foreground mb-4">The page encountered an error while loading.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
const PageLoading: React.FC = () => (
  <div className="flex items-center justify-center min-h-[400px] p-8">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Dashboard);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { measureAsync } = usePerformanceMonitor();

  const { data: settings, updateData: updateSettings, syncStatus: settingsSyncStatus } = useFirestoreDoc<AppSettings>('config', 'settings', {
    storeName: 'Olesco Agrivet Trading',
    storeLogo: '',
    profitMarginDivisor: 0.83,
    theme: 'dark',
  });

  const { data: transactions, addItem: addTransaction, deleteItem: deleteTransaction, syncStatus: transactionsSyncStatus } = useFirestoreCollection<Transaction>('transactions', 'date', 'desc');
  const { data: inventory, addItem: addInventoryItem, updateItem: updateInventoryItem, deleteItem: deleteInventoryItem, updateMultipleItems: updateMultipleInventoryItems, syncStatus: inventorySyncStatus } = useFirestoreCollection<InventoryItem>('inventory', 'name', 'asc');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(settings.theme);
  }, [settings.theme]);

  const handleAddTransaction = useCallback(async (transactionData: Omit<Transaction, 'id'>) => {
    await measureAsync('add-transaction', async () => {
      await addTransaction(transactionData);
      
      // For income, decrease stock of sold items based on quantity.
      if (transactionData.type === TransactionType.Income && transactionData.items) {
          const stockUpdates = transactionData.items.map(soldItem => {
              const invItem = inventory.find(i => i.id === soldItem.inventoryItemId);
              if (invItem) {
                  return {
                      id: invItem.id,
                      data: { stock: Math.max(0, invItem.stock - soldItem.quantity) }
                  };
              }
              return null;
          }).filter((i): i is { id: string; data: { stock: number } } => i !== null);
          
          if(stockUpdates.length > 0) {
              await updateMultipleInventoryItems(stockUpdates);
          }
      }
    });
  }, [addTransaction, inventory, updateMultipleInventoryItems, measureAsync]);

  const handleDeleteTransaction = async (transaction: Transaction) => {
    if(window.confirm('Are you sure you want to delete this transaction? This action will not restock items.')) {
        await deleteTransaction(transaction.id);
    }
  };

  const handleSaveInventoryItem = async (itemData: InventoryItem | Omit<InventoryItem, 'id'>) => {
    if ('id' in itemData) {
      const { id, ...dataToUpdate } = itemData;
      await updateInventoryItem(id, dataToUpdate);
    } else {
      await addInventoryItem(itemData);
    }
  };

  const handleDeleteInventoryItem = async (id: string) => {
     if(window.confirm('Are you sure you want to delete this item? This cannot be undone.')) {
        await deleteInventoryItem(id);
     }
  };

  const handleSaveSettings = async (newSettings: Partial<AppSettings>) => {
    await updateSettings(newSettings as AppSettings);
  };
  
  const setTheme = (theme: 'light' | 'dark') => {
    updateSettings({ theme });
  };

  const overallSyncStatus = useMemo((): SyncStatus => {
    const statuses = [settingsSyncStatus, transactionsSyncStatus, inventorySyncStatus];
    if (statuses.includes('syncing')) return 'syncing';
    if (statuses.includes('offline')) return 'offline';
    return 'synced';
  }, [settingsSyncStatus, transactionsSyncStatus, inventorySyncStatus]);
  
  // Memoize page props to prevent unnecessary re-renders
  const pageProps = useMemo(() => ({
    transactions,
    inventory,
    onNavigate: setCurrentPage,
    onDeleteTransaction: handleDeleteTransaction,
    onSaveItem: handleSaveInventoryItem,
    onDeleteItem: handleDeleteInventoryItem,
    profitMarginDivisor: settings.profitMarginDivisor,
    settings,
    onSaveSettings: handleSaveSettings,
    theme: settings.theme,
    setTheme,
  }), [
    transactions,
    inventory,
    settings,
    handleDeleteTransaction,
    handleSaveInventoryItem,
    handleDeleteInventoryItem,
    handleSaveSettings,
  ]);
  
  const pageInfo: { [key in Page]: { title: string; subtitle?: string } } = {
    [Page.Dashboard]: { title: "Dashboard" },
    [Page.Transactions]: { title: "Transaction History", subtitle: "Review past sales and expenses." },
    [Page.Inventory]: { title: "Inventory Management" },
    [Page.Settings]: { title: "Settings", subtitle: "Configure your application and store details." },
  };

  const renderPage = () => {

    switch (currentPage) {
      case Page.Dashboard:
        return (
          <ErrorBoundary>
            <Suspense fallback={<PageLoading />}>
              <DashboardPage {...pageProps} />
            </Suspense>
          </ErrorBoundary>
        );
      case Page.Transactions:
        return (
          <ErrorBoundary>
            <Suspense fallback={<PageLoading />}>
              <TransactionsPage {...pageProps} />
            </Suspense>
          </ErrorBoundary>
        );
      case Page.Inventory:
        return (
          <ErrorBoundary>
            <Suspense fallback={<PageLoading />}>
              <InventoryPage {...pageProps} />
            </Suspense>
          </ErrorBoundary>
        );
      case Page.Settings:
        return (
          <ErrorBoundary>
            <Suspense fallback={<PageLoading />}>
              <SettingsPage {...pageProps} />
            </Suspense>
          </ErrorBoundary>
        );
      default:
        return (
          <ErrorBoundary>
            <Suspense fallback={<PageLoading />}>
              <DashboardPage {...pageProps} />
            </Suspense>
          </ErrorBoundary>
        );
    }
  };

  const AppHeader: React.FC = () => (
    <div className="flex items-center justify-between gap-4 p-4">
      <div className="flex items-center gap-4">
          {settings.storeLogo ? (
              <img src={settings.storeLogo} alt="Store Logo" className="w-12 h-12 rounded-md object-cover flex-shrink-0 bg-secondary" />
          ) : (
              <div className="w-12 h-12 rounded-md flex-shrink-0 bg-secondary flex items-center justify-center text-muted-foreground">
                   <OlescoLogo className="w-full h-full p-1 opacity-50" />
              </div>
          )}
          <div>
              <p className="text-sm text-muted-foreground">Welcome to</p>
              <h1 className="text-xl font-bold text-foreground">{settings.storeName}</h1>
          </div>
      </div>
      <div className="flex-shrink-0">
        <SyncStatusIndicator status={overallSyncStatus} />
      </div>
    </div>
  );
  
  const SideNav: React.FC = () => (
    <aside className="w-64 bg-card shadow-lg hidden md:flex flex-col border-r border-border">
        <div className="border-b border-border">
          <AppHeader />
        </div>
        <nav className="flex flex-col gap-2 p-4">
            {[
                { page: Page.Dashboard, label: 'Dashboard', icon: <DashboardIcon className="w-5 h-5"/> },
                { page: Page.Transactions, label: 'Transactions', icon: <TransactionsIcon className="w-5 h-5"/> },
                { page: Page.Inventory, label: 'Inventory', icon: <InventoryIcon className="w-5 h-5"/> },
                { page: Page.Settings, label: 'Settings', icon: <SettingsIcon className="w-5 h-5"/> },
            ].map(item => (
                <button 
                    key={item.page}
                    onClick={() => setCurrentPage(item.page)}
                    className={`flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${currentPage === item.page ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
                >
                    {item.icon}
                    <span className="font-semibold">{item.label}</span>
                </button>
            ))}
        </nav>
    </aside>
  );

  return (
    <div className="flex min-h-screen bg-background">
        <SideNav />
        <div className="flex-1 flex flex-col max-w-full overflow-hidden">
          {/* Mobile Header */}
          <div className="md:hidden border-b border-border bg-card">
              <AppHeader />
          </div>

          <main className="flex-1 p-4 md:p-8 pb-20 md:pb-8 overflow-y-auto">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-foreground">{pageInfo[currentPage].title}</h2>
                {pageInfo[currentPage].subtitle && (
                  <p className="text-muted-foreground mt-1">{pageInfo[currentPage].subtitle}</p>
                )}
              </div>
              {renderPage()}
          </main>
        </div>
            
        <button
            onClick={() => setIsModalOpen(true)}
            className="fixed bottom-20 right-4 md:bottom-8 md:right-8 w-16 h-16 bg-primary rounded-full text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-transform transform hover:scale-110 z-40"
            aria-label="Add Transaction"
        >
            <ShoppingCartIcon className="w-8 h-8"/>
        </button>
        
        <AddTransactionModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddTransaction={handleAddTransaction}
            inventory={inventory}
        />
        
        <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
