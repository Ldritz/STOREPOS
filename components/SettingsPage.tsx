import React, { useState, useRef, useEffect } from 'react';
import { AppSettings, Transaction, InventoryItem } from '../types';
import Card from './Card';
import { UploadIcon, DownloadIcon, ImageIcon, SunIcon, MoonIcon } from './Icons';

interface SettingsPageProps {
  settings: AppSettings;
  onSaveSettings: (settings: Partial<AppSettings>) => void;
  transactions: Transaction[];
  inventory: InventoryItem[];
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ settings, onSaveSettings, transactions, inventory, theme, setTheme }) => {
  const [storeName, setStoreName] = useState(settings.storeName);
  const [storeLogo, setStoreLogo] = useState(settings.storeLogo);
  const [profitDivisor, setProfitDivisor] = useState(settings.profitMarginDivisor.toString());
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setStoreName(settings.storeName);
    setStoreLogo(settings.storeLogo);
    setProfitDivisor(settings.profitMarginDivisor.toString());
  }, [settings]);

  const handleStoreInfoSave = () => {
    onSaveSettings({
      storeName,
      storeLogo,
    });
    alert('Store information saved!');
  };

  const handlePricingSave = () => {
    const divisor = parseFloat(profitDivisor);
    if (!isNaN(divisor) && divisor > 0 && divisor < 1) {
      onSaveSettings({
        profitMarginDivisor: divisor,
      });
      alert('Profit margin saved!');
    } else {
      alert('Please enter a valid profit margin divisor (a number between 0 and 1).');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStoreLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExport = () => {
    if (transactions.length === 0) {
      alert('No transactions to export.');
      return;
    }
    
    const inventoryMap = new Map(inventory.map(i => [i.id, i.name]));
    
    const headers = ['ID', 'Date', 'Type', 'Description', 'Amount', 'Items Sold'];
    const csvRows = [headers.join(',')];

    for (const t of transactions) {
      const itemsSold = t.items?.map(i => {
        const itemName = inventoryMap.get(i.inventoryItemId) || 'Unknown Item';
        return `${itemName} (x${i.quantity})`;
      }).join('; ') || '';
      
      const row = [t.id, t.date, t.type, `"${t.description.replace(/"/g, '""')}"`, t.amount, `"${itemsSold}"`];
      csvRows.push(row.join(','));
    }

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `olesco-export-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  
  const profitMarginPercentage = () => {
    const divisor = parseFloat(profitDivisor);
    if (!isNaN(divisor) && divisor > 0 && divisor < 1) {
      return `~${((1 - divisor) * 100).toFixed(1)}% profit`;
    }
    return 'Invalid divisor';
  }

  const inputClass = "w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  const labelClass = "block text-sm font-medium text-muted-foreground mb-1.5";
  const buttonClass = "bg-primary text-primary-foreground font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors";
  
  return (
    <div className="space-y-6 animate-fade-in">
       <Card title="Appearance">
        <div className="space-y-2">
          <h4 className="font-semibold text-card-foreground">Theme</h4>
          <p className="text-sm text-muted-foreground">Select the theme for the application.</p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              onClick={() => setTheme('light')}
              className={`flex items-center justify-center p-4 rounded-md border-2 transition-colors ${theme === 'light' ? 'border-primary bg-primary/10' : 'border-border bg-secondary hover:border-primary/50'}`}
            >
              <SunIcon className="w-6 h-6 mr-2" /> Light
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`flex items-center justify-center p-4 rounded-md border-2 transition-colors ${theme === 'dark' ? 'border-primary bg-primary/10' : 'border-border bg-secondary hover:border-primary/50'}`}
            >
              <MoonIcon className="w-6 h-6 mr-2" /> Dark
            </button>
          </div>
        </div>
      </Card>
      
      <Card title="Store Information">
        <div className="space-y-4">
          <div>
            <label htmlFor="storeName" className={labelClass}>Store Name</label>
            <input type="text" id="storeName" value={storeName} onChange={e => setStoreName(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Store Logo</label>
            <div className="flex gap-4 items-center">
              <div className="w-24 h-24 flex-shrink-0 bg-secondary rounded-md flex items-center justify-center border border-border">
                {storeLogo ? (
                    <img src={storeLogo} alt="Logo Preview" className="w-full h-full object-cover rounded-md" />
                ) : (
                    <ImageIcon className="w-10 h-10 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 space-y-2">
                <input type="text" value={storeLogo} onChange={e => setStoreLogo(e.target.value)} placeholder="Paste image URL here" className={inputClass} />
                <div className="text-center text-muted-foreground text-sm">OR</div>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                <button type="button" onClick={() => fileInputRef.current?.click()} className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-secondary border border-border rounded-md hover:bg-muted transition-colors">
                  <UploadIcon className="w-5 h-5" />
                  <span>Upload File</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button onClick={handleStoreInfoSave} className={buttonClass}>
              Save Changes
            </button>
          </div>
        </div>
      </Card>
      
      <Card title="Pricing Settings">
        <div className="space-y-4">
          <div>
            <label htmlFor="profitDivisor" className={labelClass}>Profit Margin Divisor</label>
            <input type="number" id="profitDivisor" value={profitDivisor} onChange={e => setProfitDivisor(e.target.value)} step="0.01" min="0.01" max="0.99" className={inputClass} />
            <p className="text-xs text-muted-foreground mt-2">Current: {settings.profitMarginDivisor}</p>
            <p className="text-xs text-muted-foreground mt-1">This value is used to calculate selling price (`Cost / Divisor`). A divisor of {profitDivisor || '...'} results in a {profitMarginPercentage()}.</p>
          </div>
          <div className="flex justify-end">
            <button onClick={handlePricingSave} className="bg-secondary text-secondary-foreground font-bold py-2 px-6 rounded-lg hover:bg-muted transition-colors border border-border">
              Save Margin
            </button>
          </div>
        </div>
      </Card>

      <Card title="Data Management">
        <div className="space-y-2">
          <h4 className="font-semibold text-card-foreground">Export Data</h4>
          <p className="text-sm text-muted-foreground">Export all sales and expenses to a CSV file.</p>
          <div className="flex justify-end pt-2">
            <button onClick={handleExport} className="flex items-center gap-2 bg-secondary text-secondary-foreground font-bold py-2 px-4 rounded-lg hover:bg-muted transition-colors border border-border">
              <DownloadIcon className="w-5 h-5" />
              <span>Export All Data</span>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SettingsPage;
