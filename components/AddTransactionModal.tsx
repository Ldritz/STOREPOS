
import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import { Transaction, TransactionType, InventoryItem } from '../types';
import { PlusIcon, TrashIcon } from './Icons';

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  inventory: InventoryItem[];
}

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({ isOpen, onClose, onAddTransaction, inventory }) => {
    const [type, setType] = useState<TransactionType>(TransactionType.Income);
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    
    // POS state for Income type
    const [cart, setCart] = useState<{ itemId: string; quantity: number }[]>([]);
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
    const [currentQuantity, setCurrentQuantity] = useState<number>(1);

    useEffect(() => {
        if (isOpen) {
            setType(TransactionType.Income);
            setAmount('');
            setDescription('');
            setDate(new Date().toISOString().split('T')[0]);
            setCart([]);
            setSelectedProductId(null);
            setCurrentQuantity(1);
        }
    }, [isOpen]);

    const { totalAmount, autoDescription } = useMemo(() => {
        if (type !== TransactionType.Income) return { totalAmount: 0, autoDescription: '' };
        
        let total = 0;
        const itemNames: string[] = [];
        
        cart.forEach(cartItem => {
            const inventoryItem = inventory.find(i => i.id === cartItem.itemId);
            if(inventoryItem) {
                total += inventoryItem.price * cartItem.quantity;
                itemNames.push(`${inventoryItem.name} (x${cartItem.quantity})`);
            }
        });

        return { totalAmount: total, autoDescription: itemNames.join(', ') || 'Point of Sale Transaction' };
    }, [cart, inventory, type]);
    
    if (!isOpen) return null;

    const handleTypeChange = (newType: TransactionType) => {
      setType(newType);
    };

    const handleProductSelect = (item: InventoryItem) => {
      if (item.stock <= 0) return;
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const transactionDate = date ? new Date(date).toISOString() : new Date().toISOString();

        if (type === TransactionType.Income) {
            if (cart.length > 0) {
                onAddTransaction({
                    type,
                    amount: totalAmount,
                    description: autoDescription,
                    date: transactionDate,
                    items: cart.map(c => ({ inventoryItemId: c.itemId, quantity: c.quantity })),
                });
                onClose();
            }
        } else { // Expense
            const numericAmount = parseFloat(amount);
            if (description && !isNaN(numericAmount) && numericAmount > 0) {
                onAddTransaction({
                    type,
                    amount: numericAmount,
                    description,
                    date: transactionDate,
                });
                onClose();
            }
        }
    };
    
    const formatCurrency = (num: number) => num.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' });

    const renderIncomeForm = () => {
        const productGrid: ReactNode[] = [];
        inventory.forEach(item => {
            const isSelected = selectedProductId === item.id;
            const isOutOfStock = item.stock <= 0 && !isSelected;
            productGrid.push(
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleProductSelect(item)}
                  disabled={isOutOfStock}
                  className={`relative p-3 rounded-lg text-left transition-all duration-200 shadow-sm border ${
                    isSelected ? 'ring-2 ring-primary ring-offset-2 ring-offset-muted bg-accent' : 'bg-background hover:bg-accent'
                  } ${
                    isOutOfStock ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                    <p className="font-bold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">({item.unit})</p>
                    <p className="text-lg font-semibold text-success mt-1">{item.price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 })}</p>
                    {item.stock <= 0 && <span className="absolute top-1 right-1 text-xs bg-destructive text-destructive-foreground font-bold px-2 py-0.5 rounded-full">Out</span>}
                </button>
            );

            if (isSelected) {
                productGrid.push(<QuantityEditor key={`${item.id}-editor`} item={item} quantity={currentQuantity} setQuantity={setCurrentQuantity} onAddToCart={handleAddToCart} />);
            }
        });

        return (
            <>
                <div className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Select Products</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-64 overflow-y-auto bg-muted p-3 rounded-lg">
                           {inventory.length > 0 ? productGrid : <p className="col-span-full text-center text-muted-foreground py-4">Add items to inventory first.</p>}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-card-foreground mb-2">Current Order</h3>
                        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                           {cart.length === 0 ? (
                                <p className="text-center text-muted-foreground py-4">Select a product to start.</p>
                            ) : cart.map(cartItem => {
                                const item = inventory.find(i => i.id === cartItem.itemId);
                                if (!item) return null;
                                return (
                                    <div key={cartItem.itemId} className="flex justify-between items-center bg-background border border-border p-2 rounded-md shadow-sm">
                                        <div>
                                            <p className="font-semibold text-foreground">{item.name}</p>
                                            <p className="text-sm text-muted-foreground">{cartItem.quantity} {item.unit} x {formatCurrency(item.price)}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <p className="font-bold text-foreground">{formatCurrency(cartItem.quantity * item.price)}</p>
                                            <button type="button" onClick={() => handleRemoveFromCart(cartItem.itemId)} className="text-muted-foreground hover:text-destructive">
                                                <TrashIcon className="w-5 h-5"/>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="p-3 bg-info/10 rounded-lg text-right">
                        <span className="text-sm text-info">Total Amount</span>
                        <p className="text-2xl font-bold text-info">{formatCurrency(totalAmount)}</p>
                    </div>
                </div>
            </>
        );
    };
    
    const renderExpenseForm = () => (
         <>
             <div>
                <label htmlFor="amount" className="block text-sm font-medium text-muted-foreground mb-1">Amount</label>
                <input type="number" id="amount" value={amount} onChange={e => setAmount(e.target.value)} required min="0.01" step="0.01" placeholder="0.00" className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"/>
            </div>
            <div>
                <label htmlFor="expense_description" className="block text-sm font-medium text-muted-foreground mb-1">Description</label>
                <input type="text" id="expense_description" value={description} onChange={e => setDescription(e.target.value)} required placeholder="e.g., Rent, Utilities" className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"/>
            </div>
        </>
    );

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in p-4">
            <div className="bg-card border border-border rounded-lg shadow-xl w-full max-w-lg animate-slide-in-up max-h-[90vh] flex flex-col" role="dialog" aria-modal="true">
                <div className="flex justify-between items-center p-4 border-b border-border">
                    <h2 className="text-xl font-bold text-card-foreground">Add Transaction</h2>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><PlusIcon className="w-6 h-6 rotate-45"/></button>
                </div>
                <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 overflow-y-auto">
                    <div className="grid grid-cols-2 gap-2 rounded-lg p-1 bg-muted">
                       <button type="button" onClick={() => handleTypeChange(TransactionType.Income)} className={`py-2 rounded-md font-semibold transition-colors ${type === TransactionType.Income ? 'bg-success text-success-foreground shadow' : 'text-muted-foreground'}`}>Income</button>
                       <button type="button" onClick={() => handleTypeChange(TransactionType.Expense)} className={`py-2 rounded-md font-semibold transition-colors ${type === TransactionType.Expense ? 'bg-error text-error-foreground shadow' : 'text-muted-foreground'}`}>Expense</button>
                    </div>
                    
                    {type === TransactionType.Income ? renderIncomeForm() : renderExpenseForm()}

                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-muted-foreground mb-1">Date</label>
                        <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} required className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                </form>
                 <div className="p-4 sm:p-6 border-t border-border mt-auto">
                    <button type="submit" form="add-transaction-form" onClick={handleSubmit} className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-md disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed" disabled={(type === TransactionType.Income && cart.length === 0) || (type === TransactionType.Expense && (!description || !amount))}>
                        Add Transaction
                    </button>
                </div>
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
        <div className="col-span-2 sm:col-span-3 p-3 bg-accent rounded-b-lg -mt-1 mb-2 animate-fade-in border-t-2 border-dashed border-border">
            <p className="font-semibold mb-2 text-sm text-center text-accent-foreground">Enter Quantity ({item.unit})</p>
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
            <button onClick={onAddToCart} className="w-full bg-primary/80 text-primary-foreground font-bold py-2 px-4 rounded-lg hover:bg-primary transition-colors">Add to Cart</button>
        </div>
    );
};

export default AddTransactionModal;
