


import React, { useState, useEffect, useRef } from 'react';
import type { InventoryItem } from '../types.ts';
import { useInventory } from '../context/InventoryContext.tsx';
import AddProductModal from '../components/AddProductModal.tsx';
import EditProductModal from '../components/EditProductModal.tsx';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal.tsx';
import EditIcon from '../components/icons/EditIcon.tsx';
import DeleteIcon from '../components/icons/DeleteIcon.tsx';
import ImageIcon from '../components/icons/ImageIcon.tsx';
import FirebaseStatusIndicator from '../components/FirebaseStatusIndicator.tsx';

const EditableStock: React.FC<{
    item: InventoryItem;
    onUpdate: (item: InventoryItem) => void;
}> = ({ item, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentStock, setCurrentStock] = useState(String(item.stock));
    const inputRef = useRef<HTMLInputElement>(null);

    const unit = item.category === 'Feeds' ? item.subtype : 'pcs';
    const isLowStock = item.stock < 10;

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);
    
    useEffect(() => {
        // If the stock is updated from outside (e.g., after a sale), reflect the change, but not while editing.
        if (!isEditing) {
            setCurrentStock(String(item.stock));
        }
    }, [item.stock, isEditing]);

    const handleSave = () => {
        const newStock = parseFloat(currentStock);
        if (!isNaN(newStock) && newStock >= 0 && newStock !== item.stock) {
            onUpdate({ ...item, stock: newStock });
        } else {
            // Revert if invalid value is entered
            setCurrentStock(String(item.stock));
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            setCurrentStock(String(item.stock)); // Revert changes
            setIsEditing(false);
        }
    };
    
    if (isEditing) {
        return (
            <div className={`relative px-1 py-0 rounded-full flex items-center h-8 ${isLowStock ? 'bg-red-100 dark:bg-red-900/50' : 'bg-green-100 dark:bg-green-900/50'}`}>
                <input
                    ref={inputRef}
                    type="number"
                    value={currentStock}
                    onChange={(e) => setCurrentStock(e.target.value)}
                    onBlur={handleSave}
                    onKeyDown={handleKeyDown}
                    className="w-16 bg-transparent text-center font-bold text-sm outline-none focus:ring-1 focus:ring-primary-500 rounded-md py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-slate-800 dark:text-slate-100"
                    step={unit === 'Kilo' ? '0.01' : '1'}
                    min="0"
                />
                 <span className="font-normal text-xs text-slate-500 dark:text-slate-400 pr-2">{unit}</span>
            </div>
        );
    }

    return (
        <button
            onClick={() => setIsEditing(true)}
            className={`px-3 py-1 text-sm font-bold rounded-full transition-colors ${isLowStock ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900' : 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900'}`}
            aria-label={`Current stock: ${item.stock}. Click to edit.`}
        >
            {item.stock} <span className="font-normal text-xs">{unit} in stock</span>
        </button>
    );
};

const ProductCard: React.FC<{
    item: InventoryItem;
    onEdit: (item: InventoryItem) => void;
    onDelete: (item: InventoryItem) => void;
    onUpdate: (item: InventoryItem) => void;
}> = ({ item, onEdit, onDelete, onUpdate }) => {
    const unit = item.category === 'Feeds' ? item.subtype : 'pcs';
    
    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-4 flex gap-4 transition-shadow hover:shadow-lg">
            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
            {item.imageUrl ? 
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover rounded-lg" /> :
                <ImageIcon className="w-10 h-10 text-slate-300 dark:text-slate-500" />
            }
            </div>
            <div className="flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 leading-tight" title={item.name}>
                        {item.name}
                    </h3>
                    <p className="text-lg font-semibold text-primary-600 dark:text-primary-500 mt-1">₱{item.price.toFixed(2)}</p>
                    {item.supplierPrice && item.quantityInBatch && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            Cost: ₱{item.supplierPrice.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} / {item.quantityInBatch} {unit.toLowerCase()}
                        </p>
                    )}
                </div>
                <div className="flex justify-between items-center mt-2">
                    <EditableStock item={item} onUpdate={onUpdate} />
                    <div className="flex items-center gap-1">
                        <button 
                            onClick={() => onEdit(item)} 
                            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            aria-label={`Edit ${item.name}`}
                        >
                            <EditIcon className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={() => onDelete(item)} 
                            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-red-100 dark:hover:bg-red-900/40 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                            aria-label={`Delete ${item.name}`}
                        >
                            <DeleteIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const InventoryPage: React.FC = () => {
  const { inventory, loading, addProduct, updateProduct, deleteProduct, recalculateAllPrices } = useInventory();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<InventoryItem | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<InventoryItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProduct = (newProductData: Omit<InventoryItem, 'id'>, supplierPrice: number) => {
    addProduct(newProductData, supplierPrice);
    setIsAddModalOpen(false);
  };

  const handleUpdateProduct = (updatedProduct: InventoryItem) => {
    updateProduct(updatedProduct);
    setEditingProduct(null);
  };

  const handleDeleteConfirm = () => {
    if (!deletingProduct) return;
    deleteProduct(deletingProduct.id);
    setDeletingProduct(null);
  };
  
  const handleRecalculatePrices = async () => {
    if (window.confirm('Are you sure you want to recalculate prices for ALL items with a recorded unit cost? This will use the current profit margin setting. This action cannot be undone.')) {
        try {
            await recalculateAllPrices();
            alert('Prices recalculated successfully!');
        } catch (error: any) {
            alert(`Failed to recalculate prices: ${error.message}`);
        }
    }
  };


  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const feedsInventory = filteredInventory.filter(item => item.category === 'Feeds');
  const nonFeedsInventory = filteredInventory.filter(item => item.category === 'Non-Feeds');

  return (
    <>
      <div className="p-4 md:p-6">
        <header className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Inventory</h1>
            <p className="text-slate-500 dark:text-slate-400">Manage your products and stock levels.</p>
          </div>
          <FirebaseStatusIndicator />
        </header>

        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:flex-grow px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
          />
           <button 
                onClick={handleRecalculatePrices}
                className="bg-amber-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors shadow flex-shrink-0"
                title="Updates prices for all items with a cost basis, using the margin from Settings."
            >
                Recalculate All Prices
            </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors shadow flex-shrink-0"
          >
            Add New Product
          </button>
        </div>
        
        {loading && <p className="text-center text-slate-500 dark:text-slate-400">Loading inventory...</p>}

        {!loading && (
            <div className="space-y-10">
                {filteredInventory.length === 0 ? (
                    <div className="text-center py-10 px-4 bg-white dark:bg-slate-800 rounded-xl shadow-md mt-6">
                        <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">No Products Found</h3>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">
                            {searchTerm ? "No products match your search term." : "Your inventory is empty. Add a new product to get started!"}
                        </p>
                    </div>
                ) : (
                    <>
                        {feedsInventory.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4 pb-2 border-b-2 border-slate-200 dark:border-slate-700">Feeds</h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {feedsInventory.map(item => (
                                        <ProductCard key={item.id} item={item} onEdit={setEditingProduct} onDelete={setDeletingProduct} onUpdate={updateProduct} />
                                    ))}
                                </div>
                            </section>
                        )}

                        {nonFeedsInventory.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4 pb-2 border-b-2 border-slate-200 dark:border-slate-700">Non-Feeds</h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {nonFeedsInventory.map(item => (
                                        <ProductCard key={item.id} item={item} onEdit={setEditingProduct} onDelete={setDeletingProduct} onUpdate={updateProduct} />
                                    ))}
                                </div>
                            </section>
                        )}
                    </>
                )}
            </div>
        )}
      </div>
      {isAddModalOpen && (
        <AddProductModal 
          onClose={() => setIsAddModalOpen(false)}
          onAddProduct={handleAddProduct}
        />
      )}
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onUpdateProduct={handleUpdateProduct}
        />
      )}
      {deletingProduct && (
        <DeleteConfirmationModal
          productName={deletingProduct.name}
          onClose={() => setDeletingProduct(null)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </>
  );
};

export default InventoryPage;