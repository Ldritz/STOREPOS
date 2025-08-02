import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Page, Transaction, InventoryItem, TransactionType, AppSettings, ExpenseSubtype, LastActionBackup } from './types';
import BottomNav from './components/BottomNav';
import { ShoppingCartIcon, DashboardIcon, TransactionsIcon, InventoryIcon, OlescoLogo, SettingsIcon, QuestionMarkCircleIcon } from './components/Icons';
import useFirestoreCollection from './hooks/useFirestoreCollection';
import useFirestoreDoc from './hooks/useFirestoreDoc';
import OfflineBanner from './components/OfflineBanner';
import InstallPwaBanner from './components/InstallPWA_Banner';

import { db } from './firebase';
import {
    collection,
    doc,
    addDoc,
    deleteDoc,
    updateDoc,
    writeBatch,
    query,
    orderBy,
    getDocs,
    setDoc,
    increment
} from '@firebase/firestore';
import SyncStatusIndicator from './components/SyncStatusIndicator';

// Dynamically import page components for code-splitting
const DashboardPage = lazy(() => import('./components/DashboardPage'));
const TransactionsPage = lazy(() => import('./components/TransactionsPage'));
const InventoryPage = lazy(() => import('./components/InventoryPage'));
const SettingsPage = lazy(() => import('./components/SettingsPage'));

// Dynamically import modal components
const AddTransactionModal = lazy(() => import('./components/AddTransactionModal'));
const EditTransactionModal = lazy(() => import('./components/EditTransactionModal'));
const ChangelogModal = lazy(() => import('./components/ChangelogModal'));

const defaultInventoryItems: Omit<InventoryItem, 'id'>[] = [
  { name: 'Grower Feeds', price: 1500, stock: 50, unit: 'bag', category: 'Feeds', cost: '₱1200/bag', imageUrl: 'https://placehold.co/150x150/22c55e/FFFFFF/png?text=Feeds' },
  { name: 'Starter Feeds', price: 1800, stock: 30, unit: 'bag', category: 'Feeds', cost: '₱1500/bag', imageUrl: 'https://placehold.co/150x150/22c55e/FFFFFF/png?text=Feeds' },
  { name: 'Vitamins', price: 250, stock: 100, unit: 'bottle', category: 'Non-Feeds', cost: '₱180/bottle', imageUrl: 'https://placehold.co/150x150/3b82f6/FFFFFF/png?text=Vitamins' },
  { name: 'Antibiotics', price: 300, stock: 4, unit: 'bottle', category: 'Non-Feeds', cost: '₱220/bottle', imageUrl: 'https://placehold.co/150x150/ef4444/FFFFFF/png?text=Meds' },
];

const PageLoader: React.FC = () => (
    <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
);

const parseItemCost = (costString?: string): number | null => {
    if (!costString) return null;
    const costMatch = costString.match(/(\d[\d,.]*)/);
    if (!costMatch) return null;
    const totalCost = parseFloat(costMatch[1].replace(/,/g, ''));
    if (isNaN(totalCost)) return null;
    const quantityMatch = costString.match(/\s*\/\s*(\d+)/);
    if (quantityMatch && quantityMatch[1]) {
        const quantity = parseInt(quantityMatch[1], 10);
        if (!isNaN(quantity) && quantity > 0) {
            return totalCost / quantity;
        }
    }
    return totalCost;
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Dashboard);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState<Transaction | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const [lastActionBackup, setLastActionBackup] = useState<LastActionBackup | null>(null);

  // --- Firestore Data Hooks ---
  const { data: settings, loading: settingsLoading } = useFirestoreDoc<AppSettings>('settings/main');
  const { data: transactions, loading: transactionsLoading } = useFirestoreCollection<Transaction>(
    query(collection(db, 'transactions'), orderBy('date', 'desc'))
  );
  const { data: inventory, loading: inventoryLoading } = useFirestoreCollection<InventoryItem>(
    query(collection(db, 'inventory'), orderBy('name', 'asc'))
  );
  
  // --- One-time Data Seeding ---
  useEffect(() => {
      const seedData = async () => {
          if (settingsLoading || inventoryLoading) return;
          
          try {
              // Check and seed settings
              if (!settings) {
                  console.log("No settings found, seeding default settings...");
                  const defaultSettings: Omit<AppSettings, 'id'> = {
                      storeName: 'Olesco Agrivet Trading',
                      storeLogo: '',
                      profitMarginDivisor: 0.83,
                      theme: 'dark',
                  };
                  await setDoc(doc(db, 'settings', 'main'), defaultSettings);
              }
              
              // Check and seed inventory
              const inventorySnapshot = await getDocs(collection(db, 'inventory'));
              if (inventorySnapshot.empty) {
                  console.log("Inventory is empty, seeding default items...");
                  const batch = writeBatch(db);
                  defaultInventoryItems.forEach(item => {
                      const docRef = doc(collection(db, 'inventory'));
                      batch.set(docRef, item);
                  });
                  await batch.commit();
              }
          } catch (error) {
              console.error("Error seeding data:", error);
          } finally {
              setIsInitializing(false);
          }
      };

      seedData();
  }, [settingsLoading, inventoryLoading, settings]);

  useEffect(() => {
    if (settings?.theme) {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(settings.theme);
    }
  }, [settings?.theme]);

  const handleAddTransaction = async (transactionData: Omit<Transaction, 'id'>) => {
    const batch = writeBatch(db);
    
    const newTransactionRef = doc(collection(db, "transactions"));
    batch.set(newTransactionRef, transactionData);

    if (transactionData.items && transactionData.items.length > 0) {
      transactionData.items.forEach(cartItem => {
        const invItemRef = doc(db, 'inventory', cartItem.inventoryItemId);
        let stockChange = 0;
        if (transactionData.type === TransactionType.Income) {
             stockChange = -cartItem.quantity;
        } else if (transactionData.type === TransactionType.Expense && transactionData.expenseSubtype === ExpenseSubtype.InventoryPurchase) {
             stockChange = cartItem.quantity;
        }

        if (stockChange !== 0) {
            batch.update(invItemRef, { stock: increment(stockChange) });
        }
      });
    }
    
    await batch.commit();
  };

  const handleUpdateTransaction = async (updatedTransaction: Transaction) => {
    const { id, ...dataToUpdate } = updatedTransaction;
    await updateDoc(doc(db, 'transactions', id), dataToUpdate);
    setTransactionToEdit(null);
  };

  const handleDeleteTransaction = async (transaction: Transaction) => {
    if(window.confirm('Are you sure you want to delete this transaction? This action will also adjust inventory stock.')) {
        const batch = writeBatch(db);
        
        const transactionRef = doc(db, 'transactions', transaction.id);
        batch.delete(transactionRef);

         if (transaction.items && transaction.items.length > 0) {
            transaction.items.forEach(cartItem => {
                const invItemRef = doc(db, 'inventory', cartItem.inventoryItemId);
                let stockChange = 0;
                if (transaction.type === TransactionType.Income) {
                    stockChange = cartItem.quantity; // Restock sold items
                } else if (transaction.type === TransactionType.Expense && transaction.expenseSubtype === ExpenseSubtype.InventoryPurchase) {
                    stockChange = -cartItem.quantity; // "Un-purchase" items
                }

                if (stockChange !== 0) {
                    batch.update(invItemRef, { stock: increment(stockChange) });
                }
            });
        }

        await batch.commit();
    }
  };

  const handleSaveInventoryItem = async (itemData: InventoryItem | Omit<InventoryItem, 'id'>) => {
    if ('id' in itemData) {
      const { id, ...dataToSave } = itemData;
      await updateDoc(doc(db, 'inventory', id), dataToSave);
    } else {
      await addDoc(collection(db, 'inventory'), itemData);
    }
  };

  const handleDeleteInventoryItem = async (id: string) => {
     if(window.confirm('Are you sure you want to delete this item? This cannot be undone.')) {
        await deleteDoc(doc(db, 'inventory', id));
     }
  };

  const handleSaveSettings = async (newSettings: Partial<AppSettings>) => {
    await setDoc(doc(db, "settings", "main"), newSettings, { merge: true });
  };
  
  const handleRefreshIncomeTransactionNames = async () => {
    if (!window.confirm(
      'Are you sure you want to refresh all income transaction names? This will assign new random IDs to them. This can be undone.'
    )) {
      return;
    }
  
    const incomeTransactions = transactions.filter(
      (t) => t.type === TransactionType.Income && t.name.startsWith('Point of Sale')
    );
  
    if (incomeTransactions.length === 0) {
      alert('No income transactions to refresh.');
      return;
    }
  
    try {
      const batch = writeBatch(db);
      const backup = incomeTransactions.map(t => ({ id: t.id, name: t.name }));
      
      incomeTransactions.forEach((transaction) => {
        const newSuffix = Math.random().toString(36).substring(2, 7);
        const newName = `Point of Sale Transaction #${newSuffix}`;
        const transactionRef = doc(db, 'transactions', transaction.id);
        batch.update(transactionRef, { name: newName });
      });
  
      await batch.commit();
      setLastActionBackup({
          type: 'refreshIncomeNames',
          description: `Refreshed names for ${incomeTransactions.length} income transactions.`,
          data: backup,
      });
      alert(`Successfully refreshed ${incomeTransactions.length} transaction names.`);
    } catch (error) {
      console.error('Error refreshing transaction names:', error);
      alert('An error occurred while refreshing transaction names. Please check the console.');
    }
  };

  const handleRecalculateInventory = async () => {
    if (!window.confirm('This will recalculate all item stocks based on transaction history, overwriting any manual stock edits. This can be undone. Are you sure?')) {
        return;
    }
    try {
        const stockMap = new Map<string, number>();
        transactions.forEach(t => {
            if (!t.items) return;
            t.items.forEach(cartItem => {
                const currentStock = stockMap.get(cartItem.inventoryItemId) || 0;
                let stockChange = 0;
                if (t.type === TransactionType.Income) {
                     stockChange = -cartItem.quantity;
                } else if (t.type === TransactionType.Expense && t.expenseSubtype === ExpenseSubtype.InventoryPurchase) {
                     stockChange = cartItem.quantity;
                }
                stockMap.set(cartItem.inventoryItemId, currentStock + stockChange);
            });
        });

        const batch = writeBatch(db);
        const backup = inventory.map(item => ({ id: item.id, stock: item.stock }));
        let updatedCount = 0;

        inventory.forEach(item => {
            const newStock = stockMap.get(item.id);
            if (newStock !== undefined && item.stock !== newStock) {
                const docRef = doc(db, 'inventory', item.id);
                batch.update(docRef, { stock: newStock });
                updatedCount++;
            }
        });
        
        await batch.commit();
        setLastActionBackup({
            type: 'recalculateInventory',
            description: `Recalculated stock for ${updatedCount} items.`,
            data: backup
        });
        alert(`Successfully recalculated stock for ${updatedCount} items.`);
    } catch (error) {
        console.error("Error recalculating inventory:", error);
        alert("An error occurred. Check the console.");
    }
  };
  
  const handleBulkPriceUpdate = async () => {
    if (!window.confirm(`This will recalculate the price of ALL items based on their cost and the current profit margin divisor (${settings?.profitMarginDivisor}). This can be undone. Are you sure?`)) {
        return;
    }
    try {
        const profitMarginDivisor = settings?.profitMarginDivisor;
        if (!profitMarginDivisor || profitMarginDivisor <= 0 || profitMarginDivisor >= 1) {
            alert('A valid profit margin divisor (between 0 and 1) is not set. Cannot perform bulk price update.');
            return;
        }

        const batch = writeBatch(db);
        const backup = inventory.map(item => ({ id: item.id, price: item.price }));
        
        let updatedCount = 0;
        inventory.forEach(item => {
            const costPerItem = parseItemCost(item.cost);
            if (costPerItem !== null && costPerItem > 0) {
                const newPrice = Math.round(costPerItem / profitMarginDivisor);
                if (newPrice !== item.price) {
                    const docRef = doc(db, 'inventory', item.id);
                    batch.update(docRef, { price: newPrice });
                    updatedCount++;
                }
            }
        });
        
        if (updatedCount === 0) {
            alert('No item prices needed to be updated based on their cost.');
            return;
        }

        await batch.commit();
        setLastActionBackup({
            type: 'bulkPriceUpdate',
            description: `Updated price for ${updatedCount} items based on cost and profit margin.`,
            data: backup
        });
        alert(`Successfully updated prices for ${updatedCount} items.`);
    } catch(error) {
        console.error("Error with bulk price update:", error);
        alert("An error occurred. Check console.");
    }
  };

  const handleBulkStockUpdate = async () => {
    if (!window.confirm('This will restock any item with less than 5 stock back to 20. This can be undone. Are you sure?')) {
        return;
    }
    try {
        const batch = writeBatch(db);
        const itemsToUpdate = inventory.filter(i => i.stock < 5);
        const backup = itemsToUpdate.map(item => ({ id: item.id, stock: item.stock }));
        if (itemsToUpdate.length === 0) {
            alert("No items with low stock to update.");
            return;
        }

        itemsToUpdate.forEach(item => {
            const docRef = doc(db, 'inventory', item.id);
            batch.update(docRef, { stock: 20 });
        });

        await batch.commit();
        setLastActionBackup({
            type: 'bulkStockUpdate',
            description: `Restocked ${itemsToUpdate.length} low-stock items.`,
            data: backup
        });
        alert(`Successfully restocked ${itemsToUpdate.length} items.`);

    } catch(error) {
        console.error("Error with bulk stock update:", error);
        alert("An error occurred. Check console.");
    }
  }

  const handleOrphanedDataCleanup = () => {
    const inventoryIds = new Set(inventory.map(i => i.id));
    const orphanedTransactions = new Set<string>();
    let orphanedCount = 0;

    transactions.forEach(t => {
        if (!t.items) return;
        t.items.forEach(item => {
            if (!inventoryIds.has(item.inventoryItemId)) {
                orphanedCount++;
                orphanedTransactions.add(t.id);
            }
        });
    });

    if (orphanedCount > 0) {
        alert(`Found ${orphanedCount} item entries in transactions that point to deleted inventory items.\nCheck transactions with these IDs: ${Array.from(orphanedTransactions).slice(0, 5).join(', ')}...\nThis tool is for reporting only and does not delete any data.`);
    } else {
        alert('No orphaned transaction data found. Your data is clean!');
    }
  };

  const handleGenerateFinancialReport = () => {
    // Group transactions by date string 'YYYY-MM-DD'
    const groupedTransactions = transactions.reduce((acc, t) => {
      const dateStr = new Date(t.date).toISOString().split('T')[0];
      if (!acc[dateStr]) {
        acc[dateStr] = [];
      }
      acc[dateStr].push(t);
      return acc;
    }, {} as Record<string, Transaction[]>);

    const sortedDates = Object.keys(groupedTransactions).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

    let csvContent = 'DATE,DESCRIPTION,PRODUCTS,"INCOME (CREDIT)","EXPENSE (DEBIT)"\n';
    let totalIncome = 0;
    let totalExpenses = 0;

    const inventoryMap = new Map(inventory.map(i => [i.id, i]));

    sortedDates.forEach(date => {
      const dailyTransactions = groupedTransactions[date];
      dailyTransactions.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      dailyTransactions.forEach((t, index) => {
        const dateCell = index === 0 ? `"${date}"` : '""';
        
        const descriptionContent = (t.name || '').replace(/"/g, '""');
        const descriptionCell = `"${descriptionContent}"`;
        
        let productsContent = "";
        if (t.items && t.items.length > 0) {
            productsContent = t.items.map(item => {
                const invItem = inventoryMap.get(item.inventoryItemId);
                if (!invItem) return `Unknown Item`;
                return `${item.quantity} ${invItem.unit || 'pcs'} - ${invItem.name}`;
            }).join('\n').replace(/"/g, '""');
        }
        
        const productsCell = `"${productsContent}"`;
        const incomeCell = t.type === TransactionType.Income ? `"${t.amount.toFixed(2)}"` : '"-"';
        const expenseCell = t.type === TransactionType.Expense ? `"${t.amount.toFixed(2)}"` : '"-"';

        csvContent += `${dateCell},${descriptionCell},${productsCell},${incomeCell},${expenseCell}\n`;

        if (t.type === TransactionType.Income) {
            totalIncome += t.amount;
        } else {
            totalExpenses += t.amount;
        }
      });
    });

    csvContent += '\n'; // Add a blank line before the total
    csvContent += `"",,Total,"${totalIncome.toFixed(2)}","${totalExpenses.toFixed(2)}"`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `olesco-cashbook-export-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleProfitabilityAnalysis = () => {
    const profitData: { [key: string]: { name: string; profit: number; count: number } } = {};

    transactions.forEach(t => {
        if (t.type !== TransactionType.Income || !t.items) return;

        t.items.forEach(item => {
            const invItem = inventory.find(i => i.id === item.inventoryItemId);
            if (invItem) {
                const cost = parseItemCost(invItem.cost);
                if (cost !== null) {
                    const profitPerItem = invItem.price - cost;
                    const totalProfit = profitPerItem * item.quantity;
                    if (!profitData[invItem.id]) {
                        profitData[invItem.id] = { name: invItem.name, profit: 0, count: 0 };
                    }
                    profitData[invItem.id].profit += totalProfit;
                    profitData[invItem.id].count += item.quantity;
                }
            }
        });
    });

    const sortedProfit = Object.values(profitData).sort((a, b) => b.profit - a.profit);

    if (sortedProfit.length > 0) {
        let report = 'Top 3 Most Profitable Items:\n\n';
        sortedProfit.slice(0, 3).forEach((item, index) => {
            report += `${index + 1}. ${item.name}\n`;
            report += `   - Total Profit: ${item.profit.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}\n`;
            report += `   - Units Sold: ${item.count}\n\n`;
        });
        alert(report);
    } else {
        alert('Could not analyze profitability. Ensure items have valid, machine-readable cost information (e.g., "Cost: ₱1200 / 50 bag").');
    }
  };

  const handleUndoLastAction = async () => {
    if (!lastActionBackup) {
        alert("No action to undo.");
        return;
    }
    const { type, data } = lastActionBackup;
    const batch = writeBatch(db);
    try {
        switch (type) {
            case 'recalculateInventory':
            case 'bulkStockUpdate':
                data.forEach(item => {
                    const docRef = doc(db, 'inventory', item.id);
                    batch.update(docRef, { stock: item.stock });
                });
                break;
            case 'bulkPriceUpdate':
                 data.forEach(item => {
                    const docRef = doc(db, 'inventory', item.id);
                    batch.update(docRef, { price: item.price });
                });
                break;
            case 'refreshIncomeNames':
                 data.forEach(item => {
                    const docRef = doc(db, 'transactions', item.id);
                    batch.update(docRef, { name: item.name });
                });
                break;
            default:
                throw new Error("Unknown action type to undo.");
        }
        await batch.commit();
        alert(`Successfully undone: ${lastActionBackup.description}`);
        setLastActionBackup(null);
    } catch (error) {
        console.error("Error undoing last action:", error);
        alert("An error occurred while undoing the action. Please check the console.");
    }
};
  
  const setTheme = (theme: 'light' | 'dark') => {
    handleSaveSettings({ theme });
  };
  
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
        return <TransactionsPage transactions={transactions} inventory={inventory} onDeleteTransaction={handleDeleteTransaction} onEditTransaction={setTransactionToEdit}/>;
      case Page.Inventory:
        return <InventoryPage inventory={inventory} onSaveItem={handleSaveInventoryItem} onDeleteItem={handleDeleteInventoryItem} profitMarginDivisor={settings?.profitMarginDivisor || 0.8} />;
      case Page.Settings:
        return <SettingsPage 
            settings={settings!} 
            onSaveSettings={handleSaveSettings} 
            transactions={transactions} 
            inventory={inventory} 
            theme={settings!.theme} 
            setTheme={setTheme} 
            onRefreshIncomeTransactionNames={handleRefreshIncomeTransactionNames} 
            onRecalculateInventory={handleRecalculateInventory}
            onBulkPriceUpdate={handleBulkPriceUpdate}
            onBulkStockUpdate={handleBulkStockUpdate}
            onOrphanedDataCleanup={handleOrphanedDataCleanup}
            onGenerateFinancialReport={handleGenerateFinancialReport}
            onProfitabilityAnalysis={handleProfitabilityAnalysis}
            lastActionBackup={lastActionBackup}
            onUndoLastAction={handleUndoLastAction}
        />;
      default:
        return <DashboardPage transactions={transactions} inventory={inventory} onNavigate={setCurrentPage}/>;
    }
  };

  const isLoading = isInitializing || settingsLoading || transactionsLoading || inventoryLoading;

  if (isLoading || !settings) {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-background text-foreground gap-4">
            {settings && settings.storeLogo ? (
                <img src={settings.storeLogo} alt="Store Logo" className="w-24 h-24 rounded-full object-cover animate-pulse shadow-lg"/>
            ) : (
                <OlescoLogo className="w-24 h-24 text-primary animate-pulse" />
            )}
            <p className="text-lg font-semibold tracking-tight">Loading Olesco Feeds Trading...</p>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <OfflineBanner />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            {settings.storeLogo ? (
              <img src={settings.storeLogo} alt="Store Logo" className="w-10 h-10 rounded-lg object-cover flex-shrink-0 bg-secondary" />
            ) : (
              <div className="w-10 h-10 rounded-lg flex-shrink-0 bg-secondary flex items-center justify-center text-muted-foreground">
                <OlescoLogo className="w-full h-full p-1 opacity-50" />
              </div>
            )}
            <div>
              <h1 className="text-xl font-bold tracking-tight">{settings.storeName}</h1>
              <p className="text-sm text-muted-foreground">POS & Inventory System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <SyncStatusIndicator />
            </div>
             <button
              onClick={() => setIsChangelogOpen(true)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
              aria-label="What's new"
            >
              <QuestionMarkCircleIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="font-semibold">New Sale</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container flex-1 flex gap-8 pt-8">
        <nav className="hidden lg:block w-56">
          <div className="space-y-1 sticky top-24">
            {Object.entries(pageInfo).map(([key, info]) => {
              const page = key as Page;
              const Icon = (() => {
                switch(page) {
                  case Page.Dashboard: return DashboardIcon;
                  case Page.Transactions: return TransactionsIcon;
                  case Page.Inventory: return InventoryIcon;
                  case Page.Settings: return SettingsIcon;
                  default: return DashboardIcon;
                }
              })();
              
              return (
                <button
                  key={key}
                  title={info.title}
                  onClick={() => setCurrentPage(page)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {info.title}
                </button>
              );
            })}
          </div>
        </nav>

        <main className="flex-1 min-w-0 pb-20 lg:pb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">{pageInfo[currentPage].title}</h2>
            {pageInfo[currentPage].subtitle && (
              <p className="text-muted-foreground mt-1">{pageInfo[currentPage].subtitle}</p>
            )}
          </div>
          <Suspense fallback={<PageLoader />}>
            {renderPage()}
          </Suspense>
        </main>
      </div>

      {/* Mobile Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed lg:hidden bottom-20 right-4 w-14 h-14 bg-primary rounded-full text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 active:scale-95 transition-all z-40"
        aria-label="Add Transaction"
      >
        <ShoppingCartIcon className="w-6 h-6" />
      </button>

      <InstallPwaBanner />

      <Suspense fallback={null}>
        {isModalOpen && (
            <AddTransactionModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddTransaction={handleAddTransaction}
                inventory={inventory}
            />
        )}
        
        {transactionToEdit && (
            <EditTransactionModal
                isOpen={!!transactionToEdit}
                onClose={() => setTransactionToEdit(null)}
                onSave={handleUpdateTransaction}
                transactionToEdit={transactionToEdit}
            />
        )}

        {isChangelogOpen && (
            <ChangelogModal isOpen={isChangelogOpen} onClose={() => setIsChangelogOpen(false)} />
        )}
      </Suspense>


      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default App;
