import React, { useState, useEffect, useMemo } from 'react';
import useFirestoreCollection from './hooks/useFirestoreCollection';
import useFirestoreDoc from './hooks/useFirestoreDoc';
import { Page, Transaction, InventoryItem, TransactionType, AppSettings, SyncStatus } from './types';
import DashboardPage from './components/DashboardPage';
import TransactionsPage from './components/TransactionsPage';
import InventoryPage from './components/InventoryPage';
import SettingsPage from './components/SettingsPage';
import AddTransactionModal from './components/AddTransactionModal';
import BottomNav from './components/BottomNav';
import SyncStatusIndicator from './components/SyncStatusIndicator';
import { ShoppingCartIcon, DashboardIcon, TransactionsIcon, InventoryIcon, OlescoLogo, SettingsIcon } from './components/Icons';

const App: React.FC = () => {
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
  
  const pageInfo: { [key in Page]: { title: string; subtitle?: string } } = {
    [Page.Dashboard]: { title: "Dashboard" },
    [Page.Transactions]: { title: "Transaction History", subtitle: "Review past sales and expenses." },
    [Page.Inventory]: { title: "Inventory Management" },
    [Page.Settings]: { title: "Settings", subtitle: "Configure your application and store details." },
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Dashboard:
        return <DashboardPage transactions={transactions} inventory={inventory} onNavigate={setCurrentPage}/>;
      case Page.Transactions:
        return <TransactionsPage transactions={transactions} inventory={inventory} onDeleteTransaction={handleDeleteTransaction}/>;
      case Page.Inventory:
        return <InventoryPage inventory={inventory} onSaveItem={handleSaveInventoryItem} onDeleteItem={handleDeleteInventoryItem} profitMarginDivisor={settings.profitMarginDivisor} />;
      case Page.Settings:
        return <SettingsPage settings={settings} onSaveSettings={handleSaveSettings} transactions={transactions} inventory={inventory} theme={settings.theme} setTheme={setTheme}/>;
      default:
        return <DashboardPage transactions={transactions} inventory={inventory} onNavigate={setCurrentPage}/>;
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
