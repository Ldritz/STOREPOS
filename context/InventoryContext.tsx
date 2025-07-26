
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { db } from '../firebase.ts';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, runTransaction, serverTimestamp, query, orderBy, setDoc, writeBatch } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import type { InventoryItem, Sale, SaleItem, Expense, ExpenseItem, StoreInfo, ManualExpense, InventoryExpense } from '../types.ts';

interface CartItemForSale {
    id: string;
    quantity: number;
    name: string;
    price: number;
    isCustom?: boolean;
}

interface InventoryExpenseCartItem {
    id: string;
    name: string;
    quantity: number;
    unitCost: number;
    stock: number;
}

interface InventoryContextType {
    inventory: InventoryItem[];
    loading: boolean;
    error: Error | null;
    connectionStatus: 'connecting' | 'connected' | 'error';
    transactions: Sale[];
    transactionsLoading: boolean;
    expenses: Expense[];
    expensesLoading: boolean;
    storeInfo: StoreInfo | null;
    storeInfoLoading: boolean;
    addProduct: (productData: Omit<InventoryItem, 'id'>, supplierPrice: number) => Promise<void>;
    updateProduct: (product: InventoryItem) => Promise<void>;
    deleteProduct: (productId: string) => Promise<void>;
    handleSale: (cart: CartItemForSale[]) => Promise<void>;
    updateStoreInfo: (info: Partial<StoreInfo>) => Promise<void>;
    addExpense: (expenseData: { description: string, amount: number, date: Date }) => Promise<void>;
    addInventoryExpense: (items: InventoryExpenseCartItem[], note: string) => Promise<void>;
    deleteExpense: (expenseId: string) => Promise<void>;
    recalculateAllPrices: () => Promise<void>;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export const InventoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [inventory, setInventory] = useState<InventoryItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');
    const [transactions, setTransactions] = useState<Sale[]>([]);
    const [transactionsLoading, setTransactionsLoading] = useState<boolean>(true);
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [expensesLoading, setExpensesLoading] = useState<boolean>(true);
    const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null);
    const [storeInfoLoading, setStoreInfoLoading] = useState<boolean>(true);

    useEffect(() => {
        setStoreInfoLoading(true);
        const storeInfoDocRef = doc(db, 'settings', 'storeInfo');
        const unsubscribe = onSnapshot(storeInfoDocRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data() as StoreInfo;
                setStoreInfo({ ...data, profitMargin: data.profitMargin ?? 0.83 });
            } else {
                // Set default if it doesn't exist to prevent null state in UI
                setStoreInfo({ name: 'AgriVet POS', imageUrl: '', profitMargin: 0.83 });
            }
            setStoreInfoLoading(false);
        }, (err) => {
            console.error("Firebase storeInfo onSnapshot error: ", err);
            setStoreInfo({ name: 'AgriVet POS', imageUrl: '', profitMargin: 0.83 }); // Fallback on error
            setStoreInfoLoading(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        setLoading(true);
        setConnectionStatus('connecting');
        const inventoryCollectionRef = collection(db, 'inventory');

        const unsubscribe = onSnapshot(inventoryCollectionRef, (snapshot) => {
            const inventoryData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            } as InventoryItem));
            setInventory(inventoryData);
            setLoading(false);
            setConnectionStatus('connected');
            setError(null);
        }, (err: any) => {
            const errorMessage = err.message || 'An unknown error occurred with Firestore.';
            console.error(`Firebase onSnapshot error: ${errorMessage} (code: ${err.code})`);
            setError(new Error(errorMessage));
            setLoading(false);
            setConnectionStatus('error');
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        setTransactionsLoading(true);
        const salesCollectionRef = collection(db, 'sales');
        const q = query(salesCollectionRef, orderBy('date', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const salesData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            } as Sale));
            setTransactions(salesData);
            setTransactionsLoading(false);
        }, (err: any) => {
            console.error(`Firebase sales onSnapshot error: ${err.message}`);
            setError(new Error(err.message)); // Use the shared error state
            setTransactionsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        setExpensesLoading(true);
        const expensesCollectionRef = collection(db, 'expenses');
        const q = query(expensesCollectionRef, orderBy('date', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const expensesData: Expense[] = snapshot.docs.map(doc => {
                const data = doc.data();
                // For backward compatibility, if 'type' is missing, assume 'manual'
                const type = data.type || 'manual';
                
                // Firestore Timestamps need to be converted to JS Dates for consistent handling in the app
                const date = data.date && data.date.toDate ? data.date.toDate() : data.date;

                if (type === 'inventory' && data.items) {
                    return {
                        id: doc.id,
                        date,
                        amount: data.amount,
                        type: 'inventory',
                        description: data.description,
                        items: data.items,
                    } as InventoryExpense;
                }

                return {
                    id: doc.id,
                    date,
                    amount: data.amount,
                    type: 'manual',
                    description: data.description,
                } as ManualExpense;
            });
            setExpenses(expensesData);
            setExpensesLoading(false);
        }, (err: any) => {
            console.error(`Firebase expenses onSnapshot error: ${err.message}`);
            setError(new Error(err.message)); // Use the shared error state
            setExpensesLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const addProduct = async (productData: Omit<InventoryItem, 'id'>, supplierPrice: number) => {
        try {
             await addDoc(collection(db, 'inventory'), productData);

             if (supplierPrice > 0) {
                const expenseData = {
                    description: `Purchase of ${productData.stock} x ${productData.name}`,
                    amount: supplierPrice,
                    date: serverTimestamp(),
                    type: 'manual'
                };
                await addDoc(collection(db, 'expenses'), expenseData);
            }
        } catch (e: any) {
            console.error("Error adding document: ", e.message || "An unknown error occurred while adding product.");
        }
    };
    
    const addExpense = async (expenseData: { description: string, amount: number, date: Date }) => {
        try {
            // The date from the form is a JS Date object, which Firestore automatically converts to a Timestamp.
            await addDoc(collection(db, 'expenses'), { ...expenseData, type: 'manual' });
        } catch (e: any) {
            console.error("Error adding expense: ", e.message || "An unknown error occurred.");
            throw e; // re-throw to be handled by the component
        }
    };
    
    const deleteExpense = async (expenseId: string) => {
        const expenseDocRef = doc(db, 'expenses', expenseId);
        try {
            await deleteDoc(expenseDocRef);
        } catch (e: any) {
            console.error("Error deleting expense:", e);
            throw e;
        }
    };

    const updateProduct = async (product: InventoryItem) => {
        const { id, ...productData } = product;
        const productDocRef = doc(db, 'inventory', id);
        try {
            await updateDoc(productDocRef, productData);
        } catch (e: any) {
            console.error("Error updating document: ", e.message || "An unknown error occurred while updating product.");
        }
    };

    const deleteProduct = async (productId: string) => {
        const productDocRef = doc(db, 'inventory', productId);
        try {
            await deleteDoc(productDocRef);
        } catch (e: any) {
            console.error("Error deleting document: ", e.message || "An unknown error occurred while deleting product.");
        }
    };

    const updateStoreInfo = async (info: Partial<StoreInfo>) => {
        const storeInfoDocRef = doc(db, 'settings', 'storeInfo');
        try {
            await setDoc(storeInfoDocRef, info, { merge: true });
        } catch (e: any) {
             console.error("Error updating store info:", e);
             if (e.code === 'permission-denied') {
                throw new Error("Firestore Error: Permission denied. Check your Firestore security rules to allow writes to 'settings/storeInfo'.");
             }
            throw e;
        }
    };

    const recalculateAllPrices = async () => {
        const margin = storeInfo?.profitMargin;
        if (!margin || margin <= 0 || margin >= 1) {
            console.error("Invalid profit margin:", margin);
            throw new Error("A valid profit margin (between 0 and 1) must be set in Settings.");
        }
    
        const itemsWithCost = inventory.filter(item => item.unitCost && item.unitCost > 0);
        if (itemsWithCost.length === 0) {
            console.log("No items with recorded unit cost found to recalculate.");
            return;
        }
    
        const batch = writeBatch(db);
    
        let updatedCount = 0;
        itemsWithCost.forEach(item => {
            const newPrice = Math.round(item.unitCost! / margin);
            if (newPrice > 0 && newPrice !== item.price) {
                const productDocRef = doc(db, 'inventory', item.id);
                batch.update(productDocRef, { price: newPrice });
                updatedCount++;
            }
        });
    
        if (updatedCount === 0) {
            console.log("All prices are already up to date.");
            return;
        }

        try {
            await batch.commit();
            console.log(`${updatedCount} item prices recalculated successfully.`);
        } catch (e) {
            console.error("Error recalculating prices in batch:", e);
            throw e;
        }
    };


    const handleSale = async (cart: CartItemForSale[]) => {
        try {
            await runTransaction(db, async (transaction) => {
                const inventoryItemsInCart = cart.filter(item => !item.isCustom);
                
                if (inventoryItemsInCart.length > 0) {
                    const productRefsAndData = inventoryItemsInCart.map(item => ({
                        ref: doc(db, 'inventory', item.id),
                        item: item,
                    }));

                    const productSnapshots = await Promise.all(
                        productRefsAndData.map(p => transaction.get(p.ref))
                    );

                    for (let i = 0; i < productSnapshots.length; i++) {
                        const productSnap = productSnapshots[i];
                        const cartItem = productRefsAndData[i].item;

                        if (!productSnap.exists()) {
                            throw new Error(`Product "${cartItem.name}" could not be found. It may have been recently deleted.`);
                        }

                        const currentStock = productSnap.data().stock;
                        if (currentStock < cartItem.quantity) {
                            throw new Error(`Not enough stock for "${cartItem.name}". Only ${currentStock} available.`);
                        }

                        const newStock = currentStock - cartItem.quantity;
                        transaction.update(productRefsAndData[i].ref, { stock: newStock });
                    }
                }

                // Log the entire sale, including custom items
                const saleRef = doc(collection(db, 'sales'));
                const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
                const saleItems: SaleItem[] = cart.map(item => ({
                    productId: item.isCustom ? `custom-${item.id}` : item.id,
                    productName: item.name,
                    quantity: item.quantity,
                    priceAtSale: item.price,
                }));

                transaction.set(saleRef, {
                    date: serverTimestamp(),
                    items: saleItems,
                    total: total
                });
            });
            console.log("Sale successfully committed, stock updated, and sale logged.");
        } catch (e: any) {
            console.error("Sale transaction failed: ", e.message || "An unknown error occurred during the sale.");
            throw e; // re-throw to be handled in the UI
        }
    };
    
    const addInventoryExpense = async (items: InventoryExpenseCartItem[], note: string) => {
        try {
            await runTransaction(db, async (transaction) => {
                const productRefsAndData = items.map(item => ({
                    ref: doc(db, 'inventory', item.id),
                    item: item,
                }));

                const productSnapshots = await Promise.all(
                    productRefsAndData.map(p => transaction.get(p.ref))
                );

                for (let i = 0; i < productSnapshots.length; i++) {
                    const productSnap = productSnapshots[i];
                    const cartItem = productRefsAndData[i].item;

                    if (!productSnap.exists()) {
                        throw new Error(`Product "${cartItem.name}" could not be found.`);
                    }
                    const currentStock = productSnap.data().stock;
                    if (currentStock < cartItem.quantity) {
                        throw new Error(`Not enough stock for "${cartItem.name}". Only ${currentStock} available.`);
                    }
                    const newStock = currentStock - cartItem.quantity;
                    transaction.update(productRefsAndData[i].ref, { stock: newStock });
                }

                const expenseRef = doc(collection(db, 'expenses'));
                const totalCost = items.reduce((sum, item) => sum + (item.unitCost || 0) * item.quantity, 0);
                const expenseItems: ExpenseItem[] = items.map(item => ({
                    productId: item.id,
                    productName: item.name,
                    quantity: item.quantity,
                    costAtTime: item.unitCost || 0,
                }));

                transaction.set(expenseRef, {
                    date: serverTimestamp(),
                    items: expenseItems,
                    amount: totalCost,
                    type: 'inventory',
                    description: note,
                });
            });
            console.log("Inventory expense successfully committed.");
        } catch (e: any) {
            console.error("Inventory expense transaction failed: ", e);
            throw e;
        }
    };


    return (
        <InventoryContext.Provider value={{ 
            inventory, loading, error, connectionStatus, transactions, transactionsLoading, 
            expenses, expensesLoading, storeInfo, storeInfoLoading, 
            addProduct, updateProduct, deleteProduct, handleSale, updateStoreInfo, 
            addExpense, addInventoryExpense, deleteExpense, recalculateAllPrices 
        }}>
            {children}
        </InventoryContext.Provider>
    );
};

export const useInventory = (): InventoryContextType => {
    const context = useContext(InventoryContext);
    if (context === undefined) {
        throw new Error('useInventory must be used within an InventoryProvider');
    }
    return context;
};