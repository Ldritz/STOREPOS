import React, { useState, useEffect, useMemo, Suspense, lazy } from 'react';
import useFirestoreCollection from './hooks/useFirestoreCollection';
import useFirestoreDoc from './hooks/useFirestoreDoc';
import { Page, Transaction, InventoryItem, TransactionType, AppSettings, SyncStatus } from './types';
import AddTransactionModal from './components/AddTransactionModal';
import BottomNav from './components/BottomNav';
import SyncStatusIndicator from './components/SyncStatusIndicator';
import ErrorBoundary from './components/ErrorBoundary';
import { ShoppingCartIcon, DashboardIcon, TransactionsIcon, InventoryIcon, OlescoLogo, SettingsIcon, BellIcon, UserIcon } from './components/Icons';

// Lazy load page components for better performance
const DashboardPage = lazy(() => import('./components/DashboardPage'));
const TransactionsPage = lazy(() => import('./components/TransactionsPage'));
const InventoryPage = lazy(() => import('./components/InventoryPage'));
const SettingsPage = lazy(() => import('./components/SettingsPage'));

// Loading component for lazy-loaded pages
const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center h-64">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-primary/60 rounded-full animate-pulse-slow"></div>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Dashboard);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleAddTransaction = async (transactionData: Omit<Transaction, 'id'>) => {
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
  };

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

  const handleSaveSettings = async (newSettings: AppSettings) => {
    await updateSettings(newSettings);
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
  
  const pageInfo: { [key in Page]: { title: string; subtitle?: string; icon: React.ReactNode } } = {
    [Page.Dashboard]: { 
      title: "Dashboard", 
      subtitle: "Overview of your business performance",
      icon: <DashboardIcon className="w-6 h-6" />
    },
    [Page.Transactions]: { 
      title: "Transactions", 
      subtitle: "Manage your sales and expenses",
      icon: <TransactionsIcon className="w-6 h-6" />
    },
    [Page.Inventory]: { 
      title: "Inventory", 
      subtitle: "Track your products and stock levels",
      icon: <InventoryIcon className="w-6 h-6" />
    },
    [Page.Settings]: { 
      title: "Settings", 
      subtitle: "Configure your store and preferences",
      icon: <SettingsIcon className="w-6 h-6" />
    },
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Dashboard:
        return (
          <Suspense fallback={<PageLoader />}>
            <DashboardPage transactions={transactions} inventory={inventory} onNavigate={setCurrentPage}/>
          </Suspense>
        );
      case Page.Transactions:
        return (
          <Suspense fallback={<PageLoader />}>
            <TransactionsPage transactions={transactions} inventory={inventory} onDeleteTransaction={handleDeleteTransaction}/>
          </Suspense>
        );
      case Page.Inventory:
        return (
          <Suspense fallback={<PageLoader />}>
            <InventoryPage inventory={inventory} onSaveItem={handleSaveInventoryItem} onDeleteItem={handleDeleteInventoryItem} profitMarginDivisor={settings.profitMarginDivisor} />
          </Suspense>
        );
      case Page.Settings:
        return (
          <Suspense fallback={<PageLoader />}>
            <SettingsPage settings={settings} onSaveSettings={handleSaveSettings} transactions={transactions} inventory={inventory} theme={settings.theme} setTheme={setTheme}/>
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={<PageLoader />}>
            <DashboardPage transactions={transactions} inventory={inventory} onNavigate={setCurrentPage}/>
          </Suspense>
        );
    }
  };

  const AppHeader: React.FC = React.memo(() => (
    <div className="glass border-b border-border/50 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 p-4 md:p-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            {settings.storeLogo ? (
              <img src={settings.storeLogo} alt="Store Logo" className="w-12 h-12 rounded-xl object-cover flex-shrink-0 bg-secondary shadow-soft" />
            ) : (
              <div className="w-12 h-12 rounded-xl flex-shrink-0 bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-soft">
                <OlescoLogo className="w-7 h-7" />
              </div>
            )}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background flex items-center justify-center">
              <div className="w-2 h-2 bg-success-foreground rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Welcome to</p>
            <h1 className="text-xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {settings.storeName}
            </h1>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-ring">
              <BellIcon className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-ring">
              <UserIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-shrink-0">
            <SyncStatusIndicator status={overallSyncStatus} />
          </div>
        </div>
      </div>
    </div>
  ));
  
  const SideNav: React.FC = React.memo(() => (
    <aside className="w-64 bg-card/50 backdrop-blur-xl border-r border-border/50 hidden md:flex flex-col shadow-soft">
      <div className="border-b border-border/50">
        <AppHeader />
      </div>
      <nav className="flex flex-col gap-1 p-4">
        {[
          { page: Page.Dashboard, label: 'Dashboard', icon: <DashboardIcon className="w-5 h-5"/>, color: 'from-blue-500 to-blue-600' },
          { page: Page.Transactions, label: 'Transactions', icon: <TransactionsIcon className="w-5 h-5"/>, color: 'from-green-500 to-green-600' },
          { page: Page.Inventory, label: 'Inventory', icon: <InventoryIcon className="w-5 h-5"/>, color: 'from-purple-500 to-purple-600' },
          { page: Page.Settings, label: 'Settings', icon: <SettingsIcon className="w-5 h-5"/>, color: 'from-gray-500 to-gray-600' },
        ].map(item => (
          <button 
            key={item.page}
            onClick={() => setCurrentPage(item.page)}
            className={`group flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 focus-ring ${
              currentPage === item.page 
                ? `bg-gradient-to-r ${item.color} text-white shadow-medium` 
                : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
            }`}
          >
            <div className={`p-2 rounded-lg transition-all duration-200 ${
              currentPage === item.page 
                ? 'bg-white/20' 
                : 'bg-secondary group-hover:bg-secondary/80'
            }`}>
              {item.icon}
            </div>
            <span className="font-semibold">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  ));

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <SideNav />
      <div className="flex-1 flex flex-col max-w-full overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden glass border-b border-border/50">
          <AppHeader />
        </div>

        <main className="flex-1 p-4 md:p-8 pb-20 md:pb-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${
                  currentPage === Page.Dashboard ? 'bg-blue-500/20 text-blue-600' :
                  currentPage === Page.Transactions ? 'bg-green-500/20 text-green-600' :
                  currentPage === Page.Inventory ? 'bg-purple-500/20 text-purple-600' :
                  'bg-gray-500/20 text-gray-600'
                }`}>
                  {pageInfo[currentPage].icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">{pageInfo[currentPage].title}</h2>
                  {pageInfo[currentPage].subtitle && (
                    <p className="text-muted-foreground mt-1">{pageInfo[currentPage].subtitle}</p>
                  )}
                </div>
              </div>
            </div>
            {renderPage()}
          </div>
        </main>
      </div>
          
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-20 right-4 md:bottom-8 md:right-8 w-16 h-16 bg-gradient-primary rounded-full text-primary-foreground shadow-strong flex items-center justify-center hover:shadow-strong/80 transition-all duration-200 transform hover:scale-110 active:scale-95 z-40 btn-modern"
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

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
};

export default App;
