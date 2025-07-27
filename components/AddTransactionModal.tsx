
import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import { Transaction, TransactionType, InventoryItem } from '../types';
import { CloseIcon, TrashIcon, SearchIcon, FilterIcon } from './Icons';

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
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            setType(TransactionType.Income);
            setAmount('');
            setDescription('');
            setDate(new Date().toISOString().split('T')[0]);
            setCart([]);
            setSelectedProductId(null);
            setCurrentQuantity(1);
            setSearchTerm('');
            setSelectedCategory('ALL');
            setError(null);
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

    // Filter inventory based on search and category
    const filteredInventory = useMemo(() => {
        let filtered = inventory;
        
        if (searchTerm) {
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (item.category?.toLowerCase() || '').includes(searchTerm.toLowerCase())
            );
        }
        
        if (selectedCategory !== 'ALL') {
            filtered = filtered.filter(item => item.category === selectedCategory);
        }
        
        return filtered;
    }, [inventory, searchTerm, selectedCategory]);

    // Get unique categories
    const categories = useMemo(() => {
        const cats = ['ALL', ...new Set(inventory.map(item => item.category || 'Non-Feeds'))];
        return cats;
    }, [inventory]);
    
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

    // Utility to remove undefined fields
    function removeUndefinedFields<T extends object>(obj: T): T {
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== undefined)) as T;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        const transactionDate = date ? new Date(date).toISOString() : new Date().toISOString();

        if (type === TransactionType.Income) {
            if (cart.length > 0) {
                const tx = removeUndefinedFields({
                    type,
                    amount: Math.round(totalAmount),
                    description: autoDescription,
                    date: transactionDate,
                    items: cart.map(c => ({ inventoryItemId: c.itemId, quantity: c.quantity })),
                });
                onAddTransaction(tx);
                onClose();
            } else {
                setError('Please add at least one product to the cart.');
            }
        } else { // Expense
            const numericAmount = Number(amount);
            if (!description || isNaN(numericAmount) || numericAmount <= 0) {
                setError('Please enter a valid amount and description.');
                return;
            }
            const tx = removeUndefinedFields({
                type,
                amount: Math.round(numericAmount),
                description,
                date: transactionDate,
                items: undefined // explicitly set to undefined so it will be removed
            });
            onAddTransaction(tx);
            onClose();
        }
    };
    
    const formatCurrency = (num: number) => `₱${Math.round(num).toLocaleString('en-PH')}`;

    const renderIncomeForm = () => {
        const productGrid: ReactNode[] = [];
        filteredInventory.forEach(item => {
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
                    <p className="font-bold text-foreground line-clamp-1">{item.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{item.category}</p>
                    <p className="text-lg font-semibold text-success mt-1">{formatCurrency(item.price)}</p>
                    <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">{item.stock} {item.unit} left</span>
                        {item.stock <= 0 && <span className="text-xs bg-destructive text-destructive-foreground font-bold px-2 py-0.5 rounded-full">Out</span>}
                    </div>
                </button>
            );

            if (isSelected) {
                productGrid.push(<QuantityEditor key={`${item.id}-editor`} item={item} quantity={currentQuantity} setQuantity={setCurrentQuantity} onAddToCart={handleAddToCart} />);
            }
        });

        return (
            <>
                <div className="space-y-4">
                    {/* Search and Filter Section */}
                    <div className="space-y-3">
                        <div className="relative">
                            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <FilterIcon className="w-5 h-5 text-muted-foreground" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === 'ALL' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Select Products</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-h-64 overflow-y-auto bg-muted p-3 rounded-lg">
                           {filteredInventory.length > 0 ? productGrid : (
                               <div className="col-span-full text-center text-muted-foreground py-8">
                                   <p className="font-semibold">No products found</p>
                                   <p className="text-sm">Try adjusting your search or filters</p>
                               </div>
                           )}
                        </div>
                    </div>

                    {/* Cart Section */}
                    <div>
                        <h3 className="text-lg font-bold text-card-foreground mb-2">Current Order</h3>
                        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                           {cart.length === 0 ? (
                                <div className="text-center text-muted-foreground py-8">
                                    <p className="font-semibold">Cart is empty</p>
                                    <p className="text-sm">Select products to start</p>
                                </div>
                            ) : cart.map(cartItem => {
                                const item = inventory.find(i => i.id === cartItem.itemId);
                                if (!item) return null;
                                return (
                                    <div key={cartItem.itemId} className="flex justify-between items-center bg-background border border-border p-3 rounded-md shadow-sm">
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-foreground line-clamp-1">{item.name}</p>
                                            <p className="text-sm text-muted-foreground">{cartItem.quantity} {item.unit} x {formatCurrency(item.price)}</p>
                                        </div>
                                        <div className="flex items-center gap-3 ml-2">
                                            <p className="font-bold text-foreground">{formatCurrency(cartItem.quantity * item.price)}</p>
                                            <button type="button" onClick={() => handleRemoveFromCart(cartItem.itemId)} className="text-muted-foreground hover:text-destructive transition-colors">
                                                <TrashIcon className="w-5 h-5"/>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Total Amount */}
                    <div className="p-4 bg-info/10 rounded-lg text-right">
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
            <div className="bg-card border border-border rounded-lg shadow-xl w-full max-w-4xl animate-slide-in-up max-h-[90vh] flex flex-col" role="dialog" aria-modal="true">
                <div className="flex justify-between items-center p-4 border-b border-border">
                    <h2 className="text-xl font-bold text-card-foreground">Add Transaction</h2>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><CloseIcon className="w-6 h-6"/></button>
                </div>
                <form id="add-transaction-form" onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
                    <div className="grid grid-cols-2 gap-2 rounded-lg p-1 bg-muted">
                       <button type="button" onClick={() => setType(TransactionType.Income)} className={`py-2 rounded-md font-semibold transition-colors ${type === TransactionType.Income ? 'bg-success text-success-foreground shadow' : 'text-muted-foreground'}`}>Income</button>
                       <button type="button" onClick={() => setType(TransactionType.Expense)} className={`py-2 rounded-md font-semibold transition-colors ${type === TransactionType.Expense ? 'bg-error text-error-foreground shadow' : 'text-muted-foreground'}`}>Expense</button>
                    </div>
                    {error && <div className="bg-destructive/10 text-destructive border border-destructive/20 rounded-md px-4 py-2 text-sm">{error}</div>}
                    {type === TransactionType.Income ? renderIncomeForm() : renderExpenseForm()}
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-muted-foreground mb-1">Date</label>
                        <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} required className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                </form>
                 <div className="p-4 sm:p-6 border-t border-border">
                    <button type="submit" form="add-transaction-form" className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-md disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed" disabled={(type === TransactionType.Income && cart.length === 0) || (type === TransactionType.Expense && (!description || !amount))}>
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

    const isFractional = ['kilo', 'kg', 'l', 'litre'].some(u => item.unit.toLowerCase().includes(u.toLowerCase()));

    return (
        <div className="col-span-2 sm:col-span-3 lg:col-span-4 p-3 bg-accent rounded-b-lg -mt-1 mb-2 animate-fade-in border-t-2 border-dashed border-border">
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
