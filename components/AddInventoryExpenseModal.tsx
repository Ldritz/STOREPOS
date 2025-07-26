
import React, { useState, useMemo } from 'react';
import type { InventoryItem } from '../types.ts';
import { useInventory } from '../context/InventoryContext.tsx';
import XIcon from './icons/XIcon.tsx';
import DeleteIcon from './icons/DeleteIcon.tsx';

interface CartItem {
    id: string;
    name: string;
    quantity: number;
    unitCost: number;
    stock: number;
}

interface AddInventoryExpenseModalProps {
  onClose: () => void;
}

const AddInventoryExpenseModal: React.FC<AddInventoryExpenseModalProps> = ({ onClose }) => {
    const { inventory, loading, addInventoryExpense } = useInventory();
    const [cart, setCart] = useState<CartItem[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [note, setNote] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleAddToCart = (product: InventoryItem) => {
        if (product.unitCost === undefined || product.unitCost <= 0) {
            alert(`'${product.name}' has no unit cost recorded. Please edit the product to add a cost before expensing it.`);
            return;
        }

        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            updateCartQuantity(product.id, existingItem.quantity + 1);
        } else {
            setCart(prev => [...prev, {
                id: product.id,
                name: product.name,
                quantity: 1,
                unitCost: product.unitCost!,
                stock: product.stock,
            }]);
        }
    };
    
    const updateCartQuantity = (itemId: string, newQuantity: number) => {
        const itemInCart = cart.find(i => i.id === itemId);
        if (!itemInCart) return;

        if (newQuantity > itemInCart.stock) {
            alert(`Cannot exceed stock. Only ${itemInCart.stock} available.`);
            return;
        }

        if (newQuantity <= 0) {
            setCart(prev => prev.filter(i => i.id !== itemId));
        } else {
            setCart(prev => prev.map(item => item.id === itemId ? { ...item, quantity: newQuantity } : item));
        }
    };

    const handleSave = async () => {
        if (cart.length === 0) {
            setError('Please select at least one item to expense.');
            return;
        }
        setError(null);
        setIsSaving(true);
        try {
            await addInventoryExpense(cart, note.trim());
            onClose();
        } catch (e: any) {
            setError(e.message || 'Failed to save expense.');
        } finally {
            setIsSaving(false);
        }
    };

    const filteredInventory = useMemo(() => {
        return inventory.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [inventory, searchTerm]);

    const totalCost = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.unitCost * item.quantity, 0);
    }, [cart]);

    return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-50 flex justify-center items-center" aria-modal="true" role="dialog">
      <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-xl w-full h-full flex flex-col">
          <header className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-t-2xl flex-shrink-0">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Record Expense from Inventory</h2>
            <button type="button" onClick={onClose} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600">
              <XIcon className="w-6 h-6 text-slate-500 dark:text-slate-400" />
            </button>
          </header>

          <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
            {/* Product List */}
            <main className="w-full md:w-3/5 p-4 overflow-y-auto">
                <input
                    type="text"
                    placeholder="Search products to expense..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none mb-4"
                />
                {loading ? <p>Loading...</p> : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredInventory.map(product => (
                            <button
                                key={product.id}
                                onClick={() => handleAddToCart(product)}
                                disabled={product.stock <= 0 || product.unitCost === undefined || product.unitCost <= 0}
                                className="bg-white dark:bg-slate-800 rounded-lg p-3 text-center shadow-sm border border-slate-200 dark:border-slate-700 transition-colors hover:border-primary-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-slate-200 dark:disabled:hover:border-slate-700"
                            >
                                <p className="font-semibold text-slate-700 dark:text-slate-200">{product.name}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {product.unitCost ? `Cost: ₱${product.unitCost.toFixed(2)}` : 'No cost set'}
                                </p>
                                <p className="text-xs text-slate-400 dark:text-slate-500">{product.stock} in stock</p>
                            </button>
                        ))}
                    </div>
                )}
            </main>
            
            {/* Cart / Summary */}
            <aside className="w-full md:w-2/5 bg-white dark:bg-slate-800 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700 flex flex-col">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-bold">Items to Expense</h3>
                </div>
                <div className="flex-1 p-4 overflow-y-auto">
                    {cart.length === 0 ? (
                        <p className="text-slate-500 dark:text-slate-400 text-center mt-8">Select products from the left.</p>
                    ) : (
                        <ul className="space-y-3">
                            {cart.map(item => (
                                <li key={item.id} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-700/50 p-2 rounded-lg">
                                    <div className="flex-grow">
                                        <p className="font-medium text-slate-800 dark:text-slate-100">{item.name}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            ₱{item.unitCost.toFixed(2)} (cost)
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-md font-bold text-lg">-</button>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => updateCartQuantity(item.id, parseInt(e.target.value) || 0)}
                                            className="w-12 text-center bg-transparent font-semibold"
                                        />
                                        <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-md font-bold text-lg">+</button>
                                    </div>
                                    <p className="font-semibold text-slate-900 dark:text-slate-50 w-24 text-right">
                                        ₱{(item.unitCost * item.quantity).toFixed(2)}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 mt-auto">
                    <div>
                        <label htmlFor="expense-note" className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Note (Optional)</label>
                        <input
                            id="expense-note"
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="e.g., Spoiled goods, store supplies"
                            className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none mb-4"
                        />
                    </div>
                    <div className="flex justify-between font-bold text-xl mb-4">
                        <span>Total Cost:</span>
                        <span>₱{totalCost.toFixed(2)}</span>
                    </div>
                    {error && <p className="text-sm text-red-500 dark:text-red-400 mb-4">{error}</p>}
                    <button
                        onClick={handleSave}
                        disabled={cart.length === 0 || isSaving}
                        className="w-full bg-primary-500 text-white font-bold py-3 rounded-lg hover:bg-primary-600 transition-colors disabled:bg-slate-300 dark:disabled:bg-slate-600 disabled:cursor-not-allowed"
                    >
                        {isSaving ? 'Saving...' : 'Save Expense'}
                    </button>
                </div>
            </aside>
          </div>
      </div>
    </div>
  );
};

export default AddInventoryExpenseModal;
