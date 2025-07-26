

import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.tsx';
import { useInventory } from '../context/InventoryContext.tsx';
import StoreIcon from '../components/icons/StoreIcon.tsx';
import UploadIcon from '../components/icons/UploadIcon.tsx';
import DownloadIcon from '../components/icons/DownloadIcon.tsx';
import type { Sale, Expense, ManualExpense, InventoryExpense } from '../types.ts';

// --- Helper Functions for CSV Export ---
const getExpenseDate = (e: Expense) => e.date instanceof Date ? e.date : (e.date ? new Date(e.date.seconds * 1000) : new Date(0));

const formatDate = (dateValue?: Sale['date'] | Expense['date']) => {
    if (!dateValue) return 'Invalid Date';
    let date;
    if (dateValue instanceof Date) {
        date = dateValue;
    } else if (typeof dateValue === 'object' && 'seconds' in dateValue) {
        date = new Date(dateValue.seconds * 1000);
    } else {
        return 'Invalid Date';
    }
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
};

const formatTransactionId = (dateValue?: Sale['date'] | Expense['date']) => {
    if (!dateValue) return 'N/A';
    let date;
    if (dateValue instanceof Date) {
        date = dateValue;
    } else if (typeof dateValue === 'object' && 'seconds' in dateValue) {
        date = new Date(dateValue.seconds * 1000);
    } else {
        return 'N/A';
    }
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    const HH = String(date.getHours()).padStart(2, '0');
    const MM = String(date.getMinutes()).padStart(2, '0');
    const SS = String(date.getSeconds()).padStart(2, '0');
    return `${mm}${dd}${yyyy}-${HH}${MM}${SS}`;
};

const escapeCsvField = (field: any): string => {
    const stringField = String(field ?? '');
    if (stringField.includes(',') || stringField.includes('"') || stringField.includes('\n')) {
        return `"${stringField.replace(/"/g, '""')}"`;
    }
    return stringField;
};

// --- Components ---

const SettingsItem: React.FC<{ title: string, description: string, children: React.ReactNode }> = ({ title, description, children }) => (
  <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
    <div>
      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
    </div>
    {children}
  </div>
);

const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <label htmlFor="theme-toggle" className="relative inline-flex items-center cursor-pointer">
            <input 
                type="checkbox" 
                id="theme-toggle" 
                className="sr-only peer" 
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <div className="w-11 h-6 bg-slate-200 dark:bg-slate-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
    );
};

const PricingSettings: React.FC = () => {
    const { storeInfo, updateStoreInfo, storeInfoLoading } = useInventory();
    const [margin, setMargin] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');

    const handleSave = async () => {
        const newMargin = parseFloat(margin);
        if (isNaN(newMargin) || newMargin <= 0 || newMargin >= 1) {
            setError('Please enter a valid margin between 0.01 and 0.99.');
            return;
        }
        setError('');
        setIsSaving(true);
        try {
            await updateStoreInfo({ profitMargin: newMargin });
            setMargin(''); // Clear input on success
        } catch(e: any) {
            setError(e.message || 'Failed to save settings.');
        } finally {
            setIsSaving(false);
        }
    };

    if (storeInfoLoading) {
        return <div className="p-4"><div className="h-10 w-full bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div></div>
    }

    const currentMargin = storeInfo?.profitMargin ?? 0.83;
    const profitPercentage = ((1 - currentMargin) * 100).toFixed(1);

    return (
        <div className="p-4 space-y-4">
            <div>
                <label htmlFor="profitMargin" className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Profit Margin Divisor</label>
                <input
                    type="number"
                    id="profitMargin"
                    value={margin}
                    onChange={(e) => setMargin(e.target.value)}
                    placeholder={`Current: ${currentMargin}`}
                    min="0.01"
                    max="0.99"
                    step="0.01"
                    className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none"
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    This value is used to calculate selling price (`Cost / Divisor`). A divisor of {currentMargin} results in a ~{profitPercentage}% profit.
                </p>
            </div>
            {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}
            <div className="flex justify-end pt-2">
                <button 
                    onClick={handleSave}
                    disabled={isSaving || !margin}
                    className="px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors shadow-sm disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isSaving && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>}
                    Save Margin
                </button>
            </div>
        </div>
    );
};


const StoreInformationSettings: React.FC = () => {
  const { storeInfo, updateStoreInfo, storeInfoLoading } = useInventory();
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (storeInfo) {
      setName(storeInfo.name);
      setImageUrl(storeInfo.imageUrl);
    }
  }, [storeInfo]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!name.trim()) {
        setError('Store name cannot be empty.');
        return;
    }
    setError('');
    setIsSaving(true);
    try {
        await updateStoreInfo({ name, imageUrl });
    } catch (e: any) {
        setError(e.message || 'Failed to save settings. Please try again.');
        console.error(e);
    } finally {
        setIsSaving(false);
    }
  };
  
  const getButtonText = () => {
    if (!isSaving) return 'Save Changes';
    if (imageUrl && imageUrl.startsWith('data:image/')) return 'Uploading & Saving...';
    return 'Saving...';
  };


  if (storeInfoLoading) {
    return (
        <div className="p-4 space-y-4">
            <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
            <div className="h-10 w-full bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
            <div className="h-10 w-full bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
        </div>
    );
  }
  
  return (
    <div className="p-4 space-y-4">
        <div>
            <label htmlFor="storeName" className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Store Name</label>
            <input 
                type="text" 
                id="storeName" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none" 
            />
        </div>
        
        <div>
            <label className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Store Logo</label>
            <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 border dark:border-slate-600">
                    {imageUrl ?
                        <img src={imageUrl} alt="Store Logo Preview" className="w-full h-full object-cover rounded-lg" /> :
                        <StoreIcon className="w-10 h-10 text-slate-300 dark:text-slate-500" />
                    }
                </div>
                <div className="flex-grow space-y-2">
                   <input
                       type="url"
                       value={imageUrl.startsWith('data:') ? '' : imageUrl}
                       onChange={e => setImageUrl(e.target.value)}
                       placeholder="Paste image URL here"
                       className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none"
                   />
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true"><div className="w-full border-t border-slate-300 dark:border-slate-600"></div></div>
                        <div className="relative flex justify-center text-sm"><span className="px-2 bg-white dark:bg-slate-800 text-slate-500">OR</span></div>
                    </div>
                    <div>
                        <label htmlFor="imageUpload" className="w-full cursor-pointer flex items-center justify-center gap-2 px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                            <UploadIcon className="w-5 h-5" />
                            <span>Upload File</span>
                        </label>
                        <input type="file" id="imageUpload" accept="image/*" className="sr-only" onChange={handleImageUpload} />
                    </div>
                </div>
            </div>
        </div>

        {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}

        <div className="flex justify-end pt-2">
            <button 
                onClick={handleSave}
                disabled={isSaving}
                className="px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors shadow-sm disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSaving && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>}
              {getButtonText()}
            </button>
        </div>
    </div>
  );
}


const SettingsPage: React.FC = () => {
  const { transactions, expenses, transactionsLoading, expensesLoading } = useInventory();
  const [isExporting, setIsExporting] = useState(false);

  const handleExportData = () => {
      if (transactions.length === 0 && expenses.length === 0) {
          alert('No financial data available to export.');
          return;
      }
      
      setIsExporting(true);

      try {
          const header = ['Date', 'Type', 'Description/ID', 'Items', 'Amount'];

          const allRecords = [
              ...transactions.map(sale => ({ record: sale, type: 'income', date: sale.date ? new Date(sale.date.seconds * 1000) : new Date(0) })),
              ...expenses.map(expense => ({ record: expense, type: 'expense', date: getExpenseDate(expense) }))
          ].sort((a, b) => b.date.getTime() - a.date.getTime());

          const rows = allRecords.map(record => {
              if (record.type === 'income') {
                  const sale = record.record as Sale;
                  const date = formatDate(sale.date);
                  const type = 'Income';
                  const description = `Sale ID: ${formatTransactionId(sale.date)}`;
                  const items = sale.items.map(i => `${i.quantity} x ${i.productName}`).join('; ');
                  const amount = sale.total.toFixed(2);
                  return [date, type, description, items, amount];
              } else {
                  const expense = record.record as Expense;
                  const date = formatDate(expense.date);
                  const type = 'Expense';
                  const amount = (-expense.amount).toFixed(2);
                  let description = '';
                  let items = '';

                  if (expense.type === 'inventory') {
                    description = expense.description || `Internal Use ID: ${formatTransactionId(expense.date)}`;
                    items = expense.items.map(i => `${i.quantity} x ${i.productName} (cost)`).join('; ');
                  } else { // manual
                    description = expense.description;
                  }
                  
                  return [date, type, description, items, amount];
              }
          });

          const csvContent = [
              header.join(','),
              ...rows.map(row => row.map(escapeCsvField).join(','))
          ].join('\n');

          const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.setAttribute('href', url);
          const today = new Date().toISOString().slice(0, 10);
          link.setAttribute('download', `agrivet-pos-export-${today}.csv`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);

      } catch (err) {
          console.error("Failed to export data:", err);
          alert("An error occurred while preparing the export file.");
      } finally {
          setIsExporting(false);
      }
  };

  return (
    <div className="p-4 md:p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Settings</h1>
        <p className="text-slate-500 dark:text-slate-400">Configure your application and store details.</p>
      </header>

      <div className="space-y-8">
        
        {/* Store Information Section */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
          <h2 className="text-lg font-bold p-4 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700 text-primary-800 dark:text-primary-300">Store Information</h2>
          <StoreInformationSettings />
        </div>

        {/* Pricing Settings Section */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
          <h2 className="text-lg font-bold p-4 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700 text-primary-800 dark:text-primary-300">Pricing Settings</h2>
          <PricingSettings />
        </div>


        {/* Data Management Section */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
            <h2 className="text-lg font-bold p-4 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700 text-primary-800 dark:text-primary-300">Data Management</h2>
            <SettingsItem title="Export Data" description="Export all sales and expenses to a CSV file.">
                <button
                    onClick={handleExportData}
                    disabled={isExporting || transactionsLoading || expensesLoading}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isExporting ? (
                        <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate-500"></div>
                            <span>Exporting...</span>
                        </>
                    ) : (transactionsLoading || expensesLoading) ? (
                        <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate-500"></div>
                            <span>Loading data...</span>
                        </>
                    ) : (
                        <>
                            <DownloadIcon className="w-5 h-5" />
                            <span>Export All Data</span>
                        </>
                    )}
                </button>
            </SettingsItem>
        </div>

        {/* Profile Section */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
          <h2 className="text-lg font-bold p-4 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700 text-primary-800 dark:text-primary-300">Account</h2>
          <SettingsItem title="Store Manager" description="manager@agrivet.com">
            <button className="text-sm font-medium text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300">Edit Profile</button>
          </SettingsItem>
          <SettingsItem title="Password" description="Change your account password">
            <button className="text-sm font-medium text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300">Change</button>
          </SettingsItem>
        </div>

        {/* App Settings Section */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
          <h2 className="text-lg font-bold p-4 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700 text-primary-800 dark:text-primary-300">Application</h2>
           <SettingsItem title="Dark Mode" description="Switch between light and dark themes">
            <ThemeToggle />
          </SettingsItem>
          <SettingsItem title="Notifications" description="Enable or disable app notifications">
            <label htmlFor="notifications-toggle" className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" id="notifications-toggle" className="sr-only peer" defaultChecked/>
              <div className="w-11 h-6 bg-slate-200 dark:bg-slate-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
          </SettingsItem>
           <SettingsItem title="Logout" description="Sign out of your account">
            <button className="text-sm font-medium text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500">Logout</button>
          </SettingsItem>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;