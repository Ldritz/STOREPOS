

import React, { useState, useMemo } from 'react';
import type { View, InventoryItem } from '../types.ts';
import { useInventory } from '../context/InventoryContext.tsx';
import XIcon from '../components/icons/XIcon.tsx';
import FirebaseStatusIndicator from '../components/FirebaseStatusIndicator.tsx';
import CalculatorIcon from '../components/icons/CalculatorIcon.tsx';
import CalculatorModal from '../components/CalculatorModal.tsx';

// --- Type definitions for items in the cart ---
interface CartItemBase {
  id: string; // Unique identifier for the cart line item.
  name: string;
  price: number;
  quantity: number;
}
interface ProductCartItem extends CartItemBase {
  isCustom: false;
  stock: number; // To check against for incrementing quantity.
  category: 'Feeds' | 'Non-Feeds';
  subtype: string;
}
interface CustomCartItem extends CartItemBase {
  isCustom: true;
}
type CartItem = ProductCartItem | CustomCartItem;


interface QuickSalePageProps {
  setActiveView: (view: View) => void;
}

const QuickSalePage: React.FC<QuickSalePageProps> = ({ setActiveView }) => {
  const { inventory, loading, handleSale } = useInventory();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeSelectionId, setActiveSelectionId] = useState<string | null>(null);
  const [customQuantity, setCustomQuantity] = useState('1');
  const [searchTerm, setSearchTerm] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const activeSelection = useMemo(
    () => inventory.find((p) => p.id === activeSelectionId),
    [inventory, activeSelectionId]
  );

  const handleAddToCart = () => {
    if (!activeSelection) return;
    
    const quantity = parseFloat(customQuantity);
    if (isNaN(quantity) || quantity <= 0) {
      alert('Please enter a valid quantity.');
      return;
    }

    if (quantity > activeSelection.stock) {
        alert(`Not enough stock. Only ${activeSelection.stock} available.`);
        return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => !item.isCustom && item.id === activeSelection.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > activeSelection.stock) {
            alert(`Adding ${quantity} would exceed stock. You have ${existingItem.quantity} in cart already, and only ${activeSelection.stock} total available.`);
            return prevCart;
        }
        return prevCart.map((item) =>
          item.id === activeSelection.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
      const newCartItem: ProductCartItem = {
          id: activeSelection.id,
          name: activeSelection.name,
          price: activeSelection.price,
          quantity,
          stock: activeSelection.stock,
          isCustom: false,
          category: activeSelection.category,
          subtype: activeSelection.subtype,
      };
      return [...prevCart, newCartItem];
    });
    
    setActiveSelectionId(null);
  };
  
  const handleAddCustomToCart = ({ name, price }: { name: string; price: number }) => {
    const newCustomItem: CustomCartItem = {
      id: `custom-${Date.now()}`,
      name,
      price,
      quantity: 1,
      isCustom: true,
    };
    setCart(prevCart => [...prevCart, newCustomItem]);
  };

  const updateCartQuantity = (itemId: string, newQuantity: number) => {
      const itemIndex = cart.findIndex(i => i.id === itemId);
      if (itemIndex === -1) return;
      
      const item = cart[itemIndex];
      
      if ('stock' in item && newQuantity > item.stock) {
          alert(`Cannot exceed stock. Only ${item.stock} available.`);
          return;
      }

      if (newQuantity <= 0) {
        setCart((prevCart) => prevCart.filter((i) => i.id !== itemId));
        return;
      }
      
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
        )
      );
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setIsCheckingOut(true);
    setCheckoutError(null);
    try {
        await handleSale(cart);
        setCart([]);
        setActiveView('TRANSACTIONS'); // Go to transactions page to see the new record
    } catch(error: any) {
        console.error("Checkout failed:", error);
        if (error.code === 'permission-denied') {
             setCheckoutError("Permission Denied: Cannot record sale. Please check your Firestore security rules to allow writes to the 'sales' collection.");
        } else {
             setCheckoutError(`Checkout Failed: ${error.message || "An unknown error occurred."}`);
        }
    } finally {
        setIsCheckingOut(false);
    }
  };
  
  const stepQty = (amount: number) => {
    const current = parseFloat(customQuantity) || 0;
    const unit = activeSelection?.category === 'Feeds' ? activeSelection.subtype : 'pcs';
    let newQty = Math.max(0.0, current + amount);
    if (unit === 'Kilo') {
        newQty = parseFloat(newQty.toFixed(2));
    } else {
        newQty = Math.round(newQty);
    }
    setCustomQuantity(String(newQty));
  };


  const filteredInventory = useMemo(() => {
    if (!searchTerm) return inventory;
    return inventory.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [inventory, searchTerm]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const Cart = () => (
     <div className="flex flex-col h-full">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold">Current Order</h2>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
        {cart.length === 0 ? (
            <p className="text-slate-500 dark:text-slate-400 text-center mt-8">Select a product or use the calculator.</p>
        ) : (
            <ul className="space-y-3">
            {cart.map((item) => (
                <li key={item.id} className="flex items-center bg-slate-50 dark:bg-slate-700/50 p-2 rounded-lg">
                <div className="flex-grow">
                    <p className="font-medium text-slate-800 dark:text-slate-100">{item.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                    ₱{item.price.toFixed(2)} x {item.quantity}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className="w-7 h-7 bg-slate-200 dark:bg-slate-600 rounded-md font-bold text-lg">-</button>
                     <p className="font-semibold text-slate-900 dark:text-slate-50 w-20 text-right">₱{(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} 
                        className="w-7 h-7 bg-slate-200 dark:bg-slate-600 rounded-md font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={'stock' in item && item.quantity >= item.stock}
                    >
                        +
                    </button>
                </div>
                </li>
            ))}
            </ul>
        )}
        </div>
        <div className="p-4 bg-slate-100 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 mt-auto">
            <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total</span>
                <span>₱{total.toFixed(2)}</span>
            </div>
            {checkoutError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4 text-sm" role="alert">
                <span className="block sm:inline">{checkoutError}</span>
              </div>
            )}
            <button
                onClick={handleCheckout}
                disabled={cart.length === 0 || isCheckingOut}
                className="w-full bg-primary-500 text-white font-bold py-3 rounded-lg hover:bg-primary-600 transition-colors disabled:bg-slate-300 dark:disabled:bg-slate-600 disabled:cursor-not-allowed"
            >
                {isCheckingOut ? 'Processing...' : 'Checkout'}
            </button>
        </div>
    </div>
  );

  return (
    <>
    <div className="flex flex-col h-screen">
       <header className="p-4 bg-white dark:bg-slate-800 shadow-md z-10 flex justify-center items-center relative">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Quick Sale</h1>
        <div className="absolute right-4 top-0 bottom-0 flex items-center">
          <FirebaseStatusIndicator />
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Products Grid */}
        <div className="w-full md:w-3/5 p-4 overflow-y-auto bg-slate-50 dark:bg-slate-900">
           <div className="mb-4 flex gap-2">
            <input 
              type="text" 
              placeholder="Search products to add..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none"
            />
            <button
                onClick={() => setIsCalculatorOpen(true)}
                className="flex-shrink-0 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Open Calculator for Custom Sale"
                title="Custom Sale"
            >
                <CalculatorIcon className="w-6 h-6" />
            </button>
           </div>
          {loading ? <p>Loading products...</p> : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
                {filteredInventory.map((product) => {
                    const unit = product.category === 'Feeds' ? product.subtype : 'pcs';
                    const isSelected = activeSelectionId === product.id;
                    
                    return (
                        <div key={product.id} className={`bg-white dark:bg-slate-800 rounded-lg shadow-sm border transition-all duration-300 ${isSelected ? 'border-primary-500 ring-2 ring-primary-500' : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'}`}>
                            <button
                                onClick={() => {
                                    setActiveSelectionId(isSelected ? null : product.id);
                                    setCustomQuantity('1');
                                }}
                                disabled={product.stock <= 0}
                                className={`w-full p-3 text-center transition-colors disabled:opacity-50 disabled:bg-slate-100 dark:disabled:bg-slate-800/50 disabled:cursor-not-allowed relative ${isSelected ? 'bg-primary-50 dark:bg-primary-900/20' : 'hover:bg-primary-50 dark:hover:bg-slate-700'}`}
                            >
                                {product.stock <= 0 && <span className="absolute top-1 right-1 text-xs bg-red-500 text-white font-bold px-1.5 py-0.5 rounded-full">Out</span>}
                                <p className="font-semibold text-slate-700 dark:text-slate-200">{product.name}</p>
                                <p className="text-sm text-slate-400">({unit})</p>
                                <p className="text-base text-primary-600 font-bold mt-1">₱{product.price.toFixed(2)}</p>
                            </button>
                            {isSelected && (
                                <div className="p-4 border-t border-slate-200 dark:border-slate-700 space-y-4">
                                    <div>
                                      <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2 text-center">Enter Quantity ({unit})</label>
                                      {unit === 'Kilo' && (
                                          <div className="grid grid-cols-3 gap-2 mb-3">
                                              <button onClick={() => stepQty(0.25)} className="py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-200 font-semibold hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-800 dark:hover:text-primary-300 transition">¼</button>
                                              <button onClick={() => stepQty(0.5)} className="py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-200 font-semibold hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-800 dark:hover:text-primary-300 transition">½</button>
                                              <button onClick={() => stepQty(0.75)} className="py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-200 font-semibold hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-800 dark:hover:text-primary-300 transition">¾</button>
                                          </div>
                                      )}
                                      <div className="flex items-center gap-2">
                                          <button onClick={() => stepQty(-1)} className="w-10 h-10 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-xl rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition flex-shrink-0">-</button>
                                          <input 
                                              type="number"
                                              value={customQuantity}
                                              onChange={(e) => setCustomQuantity(e.target.value)}
                                              className="w-full text-center text-xl font-bold border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 border-2 rounded-lg py-1.5 focus:ring-primary-500 focus:border-primary-500"
                                              min="0"
                                              max={product.stock}
                                              step={unit === 'Kilo' ? "0.01" : "1"}
                                              onFocus={(e) => e.target.select()}
                                          />
                                          <button onClick={() => stepQty(1)} className="w-10 h-10 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-xl rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition flex-shrink-0">+</button>
                                      </div>
                                    </div>
                                    <button 
                                      onClick={handleAddToCart}
                                      className="w-full bg-primary-500 text-white font-bold py-2 rounded-lg hover:bg-primary-600 transition-colors"
                                    >
                                      Add to Cart
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
           )}
        </div>

        {/* Interaction Panel */}
        <aside className="w-full md:w-2/5 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 flex flex-col">
          <Cart />
        </aside>
      </div>
    </div>
    {isCalculatorOpen && (
        <CalculatorModal 
            onClose={() => setIsCalculatorOpen(false)}
            onAddToCart={handleAddCustomToCart}
        />
    )}
    </>
  );
};

export default QuickSalePage;