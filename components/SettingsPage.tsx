import React, { useState, useRef, useEffect } from 'react';
import { AppSettings, Transaction, InventoryItem, LastActionBackup } from '../types';
import Card from './Card';
import { UploadIcon, ImageIcon, SunIcon, MoonIcon, WarningIcon } from './Icons';
import { uploadToCloudinary } from '../cloudinary';

interface SettingsPageProps {
  settings: AppSettings;
  onSaveSettings: (settings: Partial<AppSettings>) => void;
  transactions: Transaction[];
  inventory: InventoryItem[];
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  onRefreshIncomeTransactionNames: () => Promise<void>;
  onRecalculateInventory: () => Promise<void>;
  onBulkPriceUpdate: () => Promise<void>;
  onBulkStockUpdate: () => Promise<void>;
  onOrphanedDataCleanup: () => void;
  onGenerateFinancialReport: () => void;
  onProfitabilityAnalysis: () => void;
  lastActionBackup: LastActionBackup | null;
  onUndoLastAction: () => Promise<void>;
}

const SettingsPage: React.FC<SettingsPageProps> = (props) => {
  const { 
      settings, onSaveSettings, theme, setTheme,
      onRefreshIncomeTransactionNames, onRecalculateInventory, onBulkPriceUpdate,
      onBulkStockUpdate, onOrphanedDataCleanup, onGenerateFinancialReport,
      onProfitabilityAnalysis, lastActionBackup, onUndoLastAction
  } = props;
  
  const [storeName, setStoreName] = useState(settings.storeName);
  const [storeLogo, setStoreLogo] = useState(settings.storeLogo);
  const [profitDivisor, setProfitDivisor] = useState(settings.profitMarginDivisor.toString());
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setStoreName(settings.storeName);
    setStoreLogo(settings.storeLogo);
    setProfitDivisor(settings.profitMarginDivisor.toString());
    setLogoFile(null);
  }, [settings]);
  
  const handleToolClick = async (action: () => Promise<void> | void, actionName: string) => {
      setLoadingAction(actionName);
      await action();
      setLoadingAction(null);
  };
  
  const handleUndoClick = async () => {
      setLoadingAction('undo');
      await onUndoLastAction();
      setLoadingAction(null);
  };

  const handleStoreInfoSave = async () => {
    setIsUploading(true);
    let finalLogoUrl = storeLogo;
    if (logoFile) {
        try {
            finalLogoUrl = await uploadToCloudinary(logoFile);
        } catch(error) {
            setIsUploading(false);
            return;
        }
    }
    onSaveSettings({
      storeName,
      storeLogo: finalLogoUrl,
    });
    setLogoFile(null);
    setIsUploading(false);
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
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setStoreLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const profitMarginPercentage = () => {
    const divisor = parseFloat(profitDivisor);
    if (!isNaN(divisor) && divisor > 0 && divisor < 1) {
      return `~${((1 - divisor) * 100).toFixed(1)}% profit`;
    }
    return 'Invalid divisor';
  }

  const inputClass = "w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  const labelClass = "block text-sm font-medium text-muted-foreground mb-1.5";
  const buttonClass = "bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50";
  const toolButtonClass = "flex-shrink-0 bg-secondary text-secondary-foreground font-semibold py-2 px-4 rounded-lg hover:bg-muted transition-colors border border-border disabled:opacity-50 disabled:cursor-not-allowed";
  
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
            <button onClick={handleStoreInfoSave} className={buttonClass} disabled={isUploading}>
              {isUploading ? 'Saving...' : 'Save Changes'}
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
            <button onClick={handlePricingSave} className="bg-secondary text-secondary-foreground font-semibold py-2 px-4 rounded-lg hover:bg-muted transition-colors border border-border">
              Save Margin
            </button>
          </div>
        </div>
      </Card>
        
      {lastActionBackup && (
          <Card title="Undo Last Action" variant="glass">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Last action:</p>
                  <p className="font-semibold">{lastActionBackup.description}</p>
                </div>
                <button onClick={handleUndoClick} disabled={!!loadingAction} className={toolButtonClass}>
                   {loadingAction === 'undo' ? "Undoing..." : "Undo"}
                </button>
              </div>
          </Card>
      )}

      <Card title="Experimental Features" variant="secondary">
        <div className="p-3 mb-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-3">
            <WarningIcon className="w-8 h-8 text-destructive flex-shrink-0" />
            <div>
                <h4 className="font-bold text-destructive">Warning</h4>
                <p className="text-xs text-destructive/80">These tools perform powerful, bulk operations on your data. While some actions can be undone, proceed with caution.</p>
            </div>
        </div>
        <div className="space-y-4">
            {/* Tool Row */}
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-semibold text-card-foreground">Full Inventory Recalculation</h4>
                    <p className="text-sm text-muted-foreground">Recalculates all item stocks based on your entire transaction history. Overwrites manual stock edits.</p>
                </div>
                <button onClick={() => handleToolClick(onRecalculateInventory, 'recalc')} disabled={!!loadingAction} className={toolButtonClass}>
                    {loadingAction === 'recalc' ? 'Running...' : 'Run'}
                </button>
            </div>
            
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-semibold text-card-foreground">Bulk Price Update</h4>
                    <p className="text-sm text-muted-foreground">Recalculates selling prices for all items based on their cost and the configured profit margin.</p>
                </div>
                <button onClick={() => handleToolClick(onBulkPriceUpdate, 'priceUpdate')} disabled={!!loadingAction} className={toolButtonClass}>
                    {loadingAction === 'priceUpdate' ? 'Running...' : 'Run'}
                </button>
            </div>

             <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-semibold text-card-foreground">Bulk Stock Update (Sample)</h4>
                    <p className="text-sm text-muted-foreground">Restocks items with less than 5 units back to 20 units.</p>
                </div>
                <button onClick={() => handleToolClick(onBulkStockUpdate, 'stockUpdate')} disabled={!!loadingAction} className={toolButtonClass}>
                    {loadingAction === 'stockUpdate' ? 'Running...' : 'Run'}
                </button>
            </div>
            
             <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-semibold text-card-foreground">Orphaned Data Check</h4>
                    <p className="text-sm text-muted-foreground">Finds transaction items that point to products that have been deleted.</p>
                </div>
                <button onClick={() => handleToolClick(onOrphanedDataCleanup, 'orphan')} disabled={!!loadingAction} className={toolButtonClass}>
                    {loadingAction === 'orphan' ? 'Running...' : 'Run Check'}
                </button>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-semibold text-card-foreground">Refresh POS Transaction Names</h4>
                    <p className="text-sm text-muted-foreground">Regenerate unique names for all "Point of Sale" transactions. Fixes duplicates.</p>
                </div>
                <button onClick={() => handleToolClick(onRefreshIncomeTransactionNames, 'refreshNames')} disabled={!!loadingAction} className={toolButtonClass}>
                    {loadingAction === 'refreshNames' ? 'Refreshing...' : 'Refresh Names'}
                </button>
            </div>
        </div>
      </Card>
      
      <Card title="Advanced Reporting">
          <div className="space-y-4">
              <div className="flex items-center justify-between">
                  <div>
                      <h4 className="font-semibold text-card-foreground">Generate Financial Report</h4>
                      <p className="text-sm text-muted-foreground">Exports a detailed transaction history to a CSV file, similar to the cashbook view, with totals for income and expenses.</p>
                  </div>
                  <button onClick={() => handleToolClick(onGenerateFinancialReport, 'financialReport')} disabled={!!loadingAction} className={toolButtonClass}>
                       {loadingAction === 'financialReport' ? 'Generating...' : 'Generate'}
                  </button>
              </div>
              <div className="flex items-center justify-between">
                  <div>
                      <h4 className="font-semibold text-card-foreground">Profitability Analysis</h4>
                      <p className="text-sm text-muted-foreground">Identify the most profitable items based on their cost and sales history.</p>
                  </div>
                  <button onClick={() => handleToolClick(onProfitabilityAnalysis, 'profitAnalysis')} disabled={!!loadingAction} className={toolButtonClass}>
                      {loadingAction === 'profitAnalysis' ? 'Analyzing...' : 'Analyze'}
                  </button>
              </div>
          </div>
      </Card>
    </div>
  );
};

export default SettingsPage;
