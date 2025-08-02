

import React, { useState, useEffect, useMemo } from 'react';
import { Transaction, TransactionType, InventoryItem, ExpenseSubtype } from '../types';
import { CloseIcon, TrashIcon } from './Icons';

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  inventory: InventoryItem[];
}

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({ isOpen, onClose, onAddTransaction, inventory }) => {
    const [type, setType] = useState<TransactionType>(TransactionType.Income);
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [expenseSubtype, setExpenseSubtype] = useState<ExpenseSubtype>(ExpenseSubtype.General);
    const [purchaseNote, setPurchaseNote] = useState('');
    const [expenseNote, setExpenseNote] = useState('');

    // POS state
    const [cart, setCart] = useState<{ itemId: string; quantity: number }[]>([]);
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
    const [currentQuantity, setCurrentQuantity] = useState<number>(1);

    const availableForSale = useMemo(() => {
        return inventory.filter(item => !item.isDisabled);
    }, [inventory]);

    useEffect(() => {
        if (isOpen) {
            setType(TransactionType.Income);
            setAmount('');
            setName('');
            setDate(new Date().toISOString().split('T')[0]);
            setCart([]);
            setSelectedProductId(null);
            setCurrentQuantity(1);
            setExpenseSubtype(ExpenseSubtype.General);
            setPurchaseNote('');
            setExpenseNote('');
        }
    }, [isOpen]);

    const { totalAmount, autoName } = useMemo(() => {
        if ((type === TransactionType.Income || (type === TransactionType.Expense && expenseSubtype === ExpenseSubtype.InventoryPurchase)) && cart.length > 0) {
            let total = 0;
            
            cart.forEach(cartItem => {
                const inventoryItem = inventory.find(i => i.id === cartItem.itemId);
                if(inventoryItem) {
                    const itemPrice = type === TransactionType.Income ? inventoryItem.price : inventoryItem.price; // Can be different if cost is tracked
                    total += itemPrice * cartItem.quantity;
                }
            });

            const desc = type === TransactionType.Income 
                ? 'Point of Sale Transaction' 
                : 'Inventory Purchase';
                
            return { totalAmount: Math.round(total), autoName: desc };
        }
        return { totalAmount: 0, autoName: '' };
    }, [cart, inventory, type, expenseSubtype]);

    useEffect(() => {
        if (type === TransactionType.Expense && expenseSubtype === ExpenseSubtype.InventoryPurchase) {
            setAmount(totalAmount > 0 ? totalAmount.toString() : '');
            setName(autoName);
        } else if (type === TransactionType.Income) {
             setAmount(totalAmount > 0 ? totalAmount.toString() : '');
             setName(autoName);
        } else {
            if (expenseSubtype === ExpenseSubtype.General) {
                 setAmount('');
                 setName('');
            }
        }
    }, [totalAmount, autoName, type, expenseSubtype]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const now = new Date();
        const [year, month, day] = date.split('-').map(Number);
        const transactionDateObj = new Date(
          year,
          month - 1, // month is 0-indexed in Date
          day,
          now.getHours(),
          now.getMinutes(),
          now.getSeconds(),
          now.getMilliseconds()
        );
        const transactionDate = transactionDateObj.toISOString();
        const uniqueSuffix = ` #${Math.random().toString(36).substring(2, 7)}`;


        if (type === TransactionType.Income) {
            if (cart.length > 0) {
                onAddTransaction({
                    type,
                    amount: totalAmount,
                    name: `${autoName}${uniqueSuffix}`,
                    date: transactionDate,
                    items: cart.map(c => ({ inventoryItemId: c.itemId, quantity: c.quantity })),
                });
                onClose();
            }
        } else { // Expense
            const numericAmount = parseFloat(amount);
            if (expenseSubtype === ExpenseSubtype.InventoryPurchase) {
                if (cart.length > 0 && !isNaN(numericAmount) && numericAmount >= 0) {
                    const finalName = `${[purchaseNote.trim(), autoName].filter(Boolean).join(' - ')}${uniqueSuffix}`;
                        
                    onAddTransaction({
                        type: TransactionType.Expense,
                        expenseSubtype: ExpenseSubtype.InventoryPurchase,
                        amount: numericAmount,
                        name: finalName,
                        date: transactionDate,
                        items: cart.map(c => ({ inventoryItemId: c.itemId, quantity: c.quantity })),
                    });
                    onClose();
                }
            } else { // General Expense
                if (name && !isNaN(numericAmount) && numericAmount > 0) {
                    const finalName = `${[expenseNote.trim(), name.trim()].filter(Boolean).join(' - ')}`;
                    onAddTransaction({
                        type: TransactionType.Expense,
                        expenseSubtype: ExpenseSubtype.General,
                        amount: numericAmount,
                        name: `${finalName}${uniqueSuffix}`,
                        date: transactionDate,
                    });
                    onClose();
                }
            }
        }
    };

    const handleTypeChange = (newType: TransactionType) => {
        setType(newType);
        setCart([]);
        setAmount('');
        setName('');
        setSelectedProductId(null);
        setPurchaseNote('');
        setExpenseNote('');
    };

    const handleExpenseSubtypeChange = (subtype: ExpenseSubtype) => {
        setExpenseSubtype(subtype);
        setCart([]);
        setAmount('');
        setName(subtype === ExpenseSubtype.InventoryPurchase ? 'Inventory Purchase' : '');
        setSelectedProductId(null);
        setPurchaseNote('');
        setExpenseNote('');
    }

    const handleProductSelect = (item: InventoryItem) => {
      if (type === TransactionType.Income && item.stock <= 0 && selectedProductId !== item.id) return;
      if (selectedProductId === item.id) {
        setSelectedProductId(null);
      } else {
        setSelectedProductId(item.id);
        setCurrentQuantity(1);
      }
    };

    const handleAddToCart = () => {
      if (!selectedProductId || currentQuantity <= 0) return;

      setCart(prevCart => {
        const existingItemIndex = prevCart.findIndex(item => item.itemId === selectedProductId);
        if (existingItemIndex > -1) {
          const newCart = [...prevCart];
          newCart[existingItemIndex].quantity += currentQuantity;
          return newCart;
        }
        return [...prevCart, { itemId: selectedProductId, quantity: currentQuantity }];
      });
      setSelectedProductId(null);
    };
    
    const handleRemoveFromCart = (itemId: string) => {
        setCart(prev => prev.filter(item => item.itemId !== itemId));
    };

    const inputClass = "w-full px-3 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring";

    return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="relative w-full max-w-3xl rounded-xl bg-background border border-border shadow-2xl animate-slide-in-up max-h-[90vh] flex flex-col overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-border/40">
                    <h2 className="text-xl font-semibold tracking-tight">Add Transaction</h2>
                    <button 
                        onClick={onClose} 
                        className="rounded-lg p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                        aria-label="Close modal"
                    >
                        <CloseIcon className="w-5 h-5"/>
                    </button>
                </div>

                <div className="px-6 py-4 border-b border-border/40 bg-muted/40">
                    <div className="inline-flex p-1 bg-muted rounded-lg">
                        <button
                            type="button"
                            onClick={() => handleTypeChange(TransactionType.Income)}
                            className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                                type === TransactionType.Income 
                                    ? 'bg-success text-success-foreground shadow-sm' 
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            Income
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTypeChange(TransactionType.Expense)}
                            className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                                type === TransactionType.Expense 
                                    ? 'bg-warning text-warning-foreground shadow-sm' 
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            Expense
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                        {type === TransactionType.Income ? (
                             <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-muted-foreground mb-2">Select Products</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-64 overflow-y-auto bg-muted/40 p-3 rounded-lg">
                                       {availableForSale.length > 0 ? availableForSale.map(item => {
                                           const isSelected = selectedProductId === item.id;
                                           const isOutOfStock = item.stock <= 0 && !isSelected;
                                           return (
                                               <button
                                                   type="button"
                                                   key={item.id}
                                                   onClick={() => handleProductSelect(item)}
                                                   disabled={isOutOfStock}
                                                   className={`relative p-3 rounded-lg text-left transition-all duration-200 border ${
                                                       isSelected 
                                                           ? 'border-primary bg-primary/5 shadow-sm' 
                                                           : 'border-border/50 bg-card hover:border-border'
                                                   } ${
                                                       isOutOfStock ? 'opacity-50 cursor-not-allowed' : ''
                                                   }`}
                                               >
                                                   <p className="font-medium truncate">{item.name}</p>
                                                   <p className="text-xs text-muted-foreground">({item.unit})</p>
                                                   <p className="text-lg font-semibold text-success mt-1">{item.price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</p>
                                                   {isSelected && <div className="absolute inset-0 ring-2 ring-primary ring-offset-2 ring-offset-background rounded-lg pointer-events-none" />}
                                                   {item.stock <= 0 && <span className="absolute top-1 right-1 text-xs bg-destructive/10 text-destructive font-medium px-2 py-0.5 rounded-full">Out</span>}
                                               </button>
                                           );
                                       }) : (
                                           <p className="col-span-full text-center text-muted-foreground py-4">No products available for sale.</p>
                                       )}
                                    </div>
                                </div>
                                
                                {selectedProductId && (() => {
                                    const item = inventory.find(i => i.id === selectedProductId);
                                    if (!item) return null;
                                    return <QuantityEditor item={item} quantity={currentQuantity} setQuantity={setCurrentQuantity} onAddToCart={handleAddToCart} />;
                                })()}

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Current Order</h3>
                                    <div className="space-y-2">
                                        {cart.length === 0 ? (
                                            <p className="text-center text-muted-foreground py-4 bg-muted/40 rounded-lg">Select products to add to cart.</p>
                                        ) : cart.map(cartItem => {
                                            const item = inventory.find(i => i.id === cartItem.itemId);
                                            if (!item) return null;
                                            return (
                                                <div key={cartItem.itemId} className="flex items-center justify-between p-3 bg-card border border-border/50 rounded-lg">
                                                    <div>
                                                        <p className="font-medium text-foreground">{item.name}</p>
                                                        <p className="text-sm text-muted-foreground">{cartItem.quantity} {item.unit} × {item.price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <p className="font-semibold">{(cartItem.quantity * item.price).toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</p>
                                                        <button 
                                                            type="button" 
                                                            onClick={() => handleRemoveFromCart(cartItem.itemId)}
                                                            className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                                                        >
                                                            <TrashIcon className="w-4 h-4"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-muted-foreground mb-1.5">Date</label>
                                    <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} required className={inputClass} />
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="inline-flex w-full p-1 bg-muted rounded-lg">
                                    <button type="button" onClick={() => handleExpenseSubtypeChange(ExpenseSubtype.General)} className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${expenseSubtype === ExpenseSubtype.General ? 'bg-card shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                                        General
                                    </button>
                                    <button type="button" onClick={() => handleExpenseSubtypeChange(ExpenseSubtype.InventoryPurchase)} className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${expenseSubtype === ExpenseSubtype.InventoryPurchase ? 'bg-card shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                                        By Product
                                    </button>
                                </div>
                                
                                {expenseSubtype === ExpenseSubtype.General ? (
                                    <div className="space-y-4 animate-fade-in">
                                        <div>
                                            <label htmlFor="amount" className="block text-sm font-medium text-muted-foreground mb-1.5">Amount</label>
                                            <input type="number" id="amount" value={amount} onChange={e => setAmount(e.target.value)} required min="0.01" step="0.01" placeholder="0.00" className={inputClass} />
                                        </div>
                                        <div>
                                            <label htmlFor="expense_name" className="block text-sm font-medium text-muted-foreground mb-1.5">Name</label>
                                            <input type="text" id="expense_name" value={name} onChange={e => setName(e.target.value)} required placeholder="e.g., Rent, Utilities" className={inputClass}/>
                                        </div>
                                        <div>
                                            <label htmlFor="expense_note" className="block text-sm font-medium text-muted-foreground mb-1.5">Note (Optional)</label>
                                            <input
                                                type="text"
                                                id="expense_note"
                                                value={expenseNote}
                                                onChange={(e) => setExpenseNote(e.target.value)}
                                                placeholder="e.g., Office supplies from store X"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-6 animate-fade-in">
                                        <div>
                                            <label className="block text-sm font-medium text-muted-foreground mb-2">Select Products to Purchase</label>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-64 overflow-y-auto bg-muted/40 p-3 rounded-lg">
                                                {inventory.length > 0 ? inventory.map(item => {
                                                    const isSelected = selectedProductId === item.id;
                                                    return (
                                                        <button
                                                            type="button"
                                                            key={item.id}
                                                            onClick={() => handleProductSelect(item)}
                                                            className={`relative p-3 rounded-lg text-left transition-all duration-200 border ${
                                                                isSelected 
                                                                    ? 'border-primary bg-primary/5 shadow-sm' 
                                                                    : 'border-border/50 bg-card hover:border-border'
                                                            }`}
                                                        >
                                                            <p className="font-medium truncate">{item.name}</p>
                                                            <p className="text-xs text-muted-foreground">({item.unit})</p>
                                                            <p className="text-lg font-semibold text-info mt-1">{item.price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</p>
                                                            {isSelected && <div className="absolute inset-0 ring-2 ring-primary ring-offset-2 ring-offset-background rounded-lg pointer-events-none" />}
                                                        </button>
                                                    );
                                                }) : (
                                                    <p className="col-span-full text-center text-muted-foreground py-4">Add items to inventory first.</p>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {selectedProductId && (() => {
                                            const item = inventory.find(i => i.id === selectedProductId);
                                            if (!item) return null;
                                            return <QuantityEditor item={item} quantity={currentQuantity} setQuantity={setCurrentQuantity} onAddToCart={handleAddToCart} />;
                                        })()}

                                        <div>
                                            <h3 className="text-lg font-medium mb-2">Purchase List</h3>
                                            <div className="space-y-2">
                                                {cart.length === 0 ? (
                                                    <p className="text-center text-muted-foreground py-4 bg-muted/40 rounded-lg">Add products to the list.</p>
                                                ) : cart.map(cartItem => {
                                                    const item = inventory.find(i => i.id === cartItem.itemId);
                                                    if (!item) return null;
                                                    return (
                                                        <div key={cartItem.itemId} className="flex items-center justify-between p-3 bg-card border border-border/50 rounded-lg">
                                                            <div>
                                                                <p className="font-medium text-foreground">{item.name}</p>
                                                                <p className="text-sm text-muted-foreground">{cartItem.quantity} {item.unit}</p>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <button 
                                                                    type="button" 
                                                                    onClick={() => handleRemoveFromCart(cartItem.itemId)}
                                                                    className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                                                                    aria-label={`Remove ${item.name}`}
                                                                >
                                                                    <TrashIcon className="w-4 h-4"/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="purchase_note" className="block text-sm font-medium text-muted-foreground mb-1.5">Note (Optional)</label>
                                            <input
                                                type="text"
                                                id="purchase_note"
                                                value={purchaseNote}
                                                onChange={(e) => setPurchaseNote(e.target.value)}
                                                placeholder="e.g., Stocks from primary supplier"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                )}
                                
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-muted-foreground mb-1.5">Date</label>
                                    <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} required className={inputClass} />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between px-6 py-4 border-t border-border/40 bg-muted/40">
                        {(totalAmount > 0 && (type === TransactionType.Income || (type === TransactionType.Expense && expenseSubtype === ExpenseSubtype.InventoryPurchase))) && (
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Amount</p>
                                <p className={`text-2xl font-semibold ${type === TransactionType.Income ? 'text-success' : 'text-warning'}`}>
                                    {totalAmount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                                </p>
                            </div>
                        )}
                        <div className="flex items-center gap-3 ml-auto">
                            <button 
                                type="button" 
                                onClick={onClose} 
                                className="px-4 py-2 rounded-lg font-semibold text-sm bg-muted hover:bg-muted/80 transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="px-4 py-2 rounded-lg font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                                Save Transaction
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

interface QuantityEditorProps {
    item: InventoryItem;
    quantity: number;
    setQuantity: (val: number | ((prev: number) => number)) => void;
    onAddToCart: () => void;
}

const QuantityEditor: React.FC<QuantityEditorProps> = ({ item, quantity, setQuantity, onAddToCart }) => {
    const handleFraction = (fraction: number) => {
        const currentInt = Math.floor(quantity);
        setQuantity(currentInt + fraction);
    };

    const isFractional = ['Kilo', 'kg', 'L', 'Litre'].some(u => item.unit.toLowerCase().includes(u.toLowerCase()));

    return (
        <div className="p-3 bg-accent rounded-lg my-4 animate-fade-in border-t-2 border-dashed border-border">
            <p className="font-semibold mb-2 text-sm text-center text-accent-foreground">Enter Quantity for {item.name} ({item.unit})</p>
            {isFractional && (
                <div className="flex justify-center gap-2 mb-3">
                    {[0.25, 0.5, 0.75].map(frac => (
                        <button type="button" key={frac} onClick={() => handleFraction(frac)} className="w-10 h-8 text-sm font-bold bg-background border border-border rounded-md hover:bg-muted transition">
                            {frac === 0.25 ? '¼' : frac === 0.5 ? '½' : '¾'}
                        </button>
                    ))}
                </div>
            )}
            <div className="flex items-center gap-2 mb-3 justify-center">
                <button type="button" onClick={() => setQuantity(q => Math.max(isFractional ? 0.25 : 1, q - 1))} className="w-10 h-10 text-2xl font-bold bg-background border border-border rounded-md hover:bg-muted transition">-</button>
                <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} step={isFractional ? "0.01" : "1"} className="w-20 h-10 text-center font-bold text-lg bg-background border border-input rounded-md focus:ring-ring focus:border-ring"/>
                <button type="button" onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 text-2xl font-bold bg-background border border-border rounded-md hover:bg-muted transition">+</button>
            </div>
            <button onClick={onAddToCart} className="w-full bg-primary/80 text-primary-foreground font-semibold py-2 px-4 rounded-lg hover:bg-primary transition-colors">Add to Cart</button>
        </div>
    );
};


export default AddTransactionModal;