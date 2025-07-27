import React, { useState, useEffect, useMemo, useRef } from 'react';
import { InventoryItem } from '../types';
import { PlusIcon, EditIcon, TrashIcon, CloseIcon, SearchIcon } from './Icons';

// Inventory Modal Component
interface InventoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (item: InventoryItem | Omit<InventoryItem, 'id'>) => void;
    itemToEdit: InventoryItem | null;
    profitMarginDivisor: number;
}

const InventoryModal: React.FC<InventoryModalProps> = React.memo(({ isOpen, onClose, onSave, itemToEdit, profitMarginDivisor }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [unit, setUnit] = useState('pcs');
    const [category, setCategory] = useState('Feeds');
    const [cost, setCost] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [batchCost, setBatchCost] = useState('');
    const [batchQuantity, setBatchQuantity] = useState('');

    const isAddMode = !itemToEdit;

    const calculatedPrice = useMemo(() => {
        const batchCostNum = parseFloat(batchCost);
        const batchQuantityNum = parseInt(batchQuantity, 10);
        if (batchCostNum > 0 && batchQuantityNum > 0) {
            return Math.round((batchCostNum / batchQuantityNum) / profitMarginDivisor);
        }
        return 0;
    }, [batchCost, batchQuantity, profitMarginDivisor]);

    const profitMarginPercentage = useMemo(() => {
        return ((1 - profitMarginDivisor) * 100).toFixed(1);
    }, [profitMarginDivisor]);

    useEffect(() => {
        if (isOpen) {
            if (itemToEdit) {
                // Edit mode: populate from existing item
                setName(itemToEdit.name);
                setPrice(itemToEdit.price.toString());
                setStock(itemToEdit.stock.toString());
                setUnit(itemToEdit.unit);
                setCategory(itemToEdit.category || 'Feeds');
                setCost(itemToEdit.cost || '');
                setImageUrl(itemToEdit.imageUrl || '');
                // Clear add-mode fields
                setBatchCost('');
                setBatchQuantity('');
            } else {
                // Add mode: reset all fields
                setName('');
                setPrice('');
                setStock('');
                setUnit('pcs');
                setCategory('Feeds');
                setCost('');
                setImageUrl('');
                setBatchCost('');
                setBatchQuantity('');
            }
        }
    }, [itemToEdit, isOpen]);

    if (!isOpen) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (isAddMode) {
            const batchQuantityNum = parseInt(batchQuantity, 10);
            if (name && unit && calculatedPrice > 0 && batchQuantityNum > 0) {
                onSave({
                    name,
                    price: calculatedPrice,
                    stock: batchQuantityNum,
                    unit,
                    category,
                    cost: `Cost: ₱${parseFloat(batchCost).toLocaleString()} / ${batchQuantityNum} ${unit}`,
                    imageUrl,
                });
                onClose();
            }
        } else { // Edit mode
            const priceNum = parseFloat(price);
            const stockNum = parseInt(stock, 10);
            if (name && unit && !isNaN(priceNum) && !isNaN(stockNum) && itemToEdit) {
                onSave({
                    ...itemToEdit,
                    name,
                    price: Math.round(priceNum),
                    stock: stockNum,
                    unit,
                    category,
                    cost,
                    imageUrl,
                });
                onClose();
            }
        }
    };
    
    const inputClass = "w-full px-3 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
    const selectClass = `${inputClass} appearance-none`;
    const labelClass = "block text-sm font-medium text-muted-foreground mb-1.5";

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in p-4">
            <div className="bg-card rounded-lg border border-border shadow-xl w-full max-w-lg animate-slide-in-up max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b border-border flex-shrink-0">
                    <h2 className="text-xl font-bold text-card-foreground">{isAddMode ? 'Add New Product' : 'Edit Product'}</h2>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><CloseIcon className="w-6 h-6"/></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                    <div>
                        <label htmlFor="name" className={labelClass}>Product Name</label>
                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required placeholder="e.g. Grower Pellets" className={inputClass}/>
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="category" className={labelClass}>Category</label>
                            <select id="category" value={category} onChange={e => setCategory(e.target.value)} className={selectClass}>
                                <option value="Feeds">Feeds</option>
                                <option value="Medicines">Medicines</option>
                                <option value="Supplies">Supplies</option>
                                <option value="Equipment">Equipment</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="unit" className={labelClass}>Unit</label>
                            <select id="unit" value={unit} onChange={e => setUnit(e.target.value)} className={selectClass}>
                                <option value="pcs">Pieces</option>
                                <option value="kg">Kilograms</option>
                                <option value="g">Grams</option>
                                <option value="l">Liters</option>
                                <option value="ml">Milliliters</option>
                                <option value="box">Boxes</option>
                                <option value="pack">Packs</option>
                            </select>
                        </div>
                    </div>

                    {isAddMode ? (
                        <>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="batchCost" className={labelClass}>Batch Cost (₱)</label>
                                    <input type="number" id="batchCost" value={batchCost} onChange={e => setBatchCost(e.target.value)} required placeholder="0.00" className={inputClass}/>
                                </div>
                                <div>
                                    <label htmlFor="batchQuantity" className={labelClass}>Batch Quantity</label>
                                    <input type="number" id="batchQuantity" value={batchQuantity} onChange={e => setBatchQuantity(e.target.value)} required placeholder="0" className={inputClass}/>
                                </div>
                            </div>
                            {calculatedPrice > 0 && (
                                <div className="p-3 bg-secondary rounded-md">
                                    <p className="text-sm text-secondary-foreground">
                                        <span className="font-semibold">Calculated Price:</span> ₱{calculatedPrice.toLocaleString()} 
                                        <span className="text-xs ml-2">({profitMarginPercentage}% profit margin)</span>
                                    </p>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="price" className={labelClass}>Price (₱)</label>
                                <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value)} required placeholder="0.00" className={inputClass}/>
                            </div>
                            <div>
                                <label htmlFor="stock" className={labelClass}>Current Stock</label>
                                <input type="number" id="stock" value={stock} onChange={e => setStock(e.target.value)} required placeholder="0" className={inputClass}/>
                            </div>
                        </div>
                    )}

                    <div>
                        <label htmlFor="cost" className={labelClass}>Cost Information (Optional)</label>
                        <input type="text" id="cost" value={cost} onChange={e => setCost(e.target.value)} placeholder="e.g. Cost: ₱1,000 / 50 kg" className={inputClass}/>
                    </div>

                    <div>
                        <label htmlFor="image" className={labelClass}>Product Image (Optional)</label>
                        <input type="file" id="image" accept="image/*" onChange={handleFileChange} className={inputClass}/>
                        {imageUrl && (
                            <div className="mt-2">
                                <img src={imageUrl} alt="Product" className="w-20 h-20 object-cover rounded-md border border-border"/>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button type="submit" className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-md font-semibold hover:bg-primary/90 transition-colors">
                            {isAddMode ? 'Add Product' : 'Update Product'}
                        </button>
                        <button type="button" onClick={onClose} className="flex-1 bg-secondary text-secondary-foreground py-2 px-4 rounded-md font-semibold hover:bg-secondary/80 transition-colors">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
});

// Inventory Item Card Component
interface InventoryItemCardProps {
    item: InventoryItem;
    onEdit: (item: InventoryItem) => void;
    onDelete: (id: string) => void;
}

const InventoryItemCard: React.FC<InventoryItemCardProps> = React.memo(({ item, onEdit, onDelete }) => {
    const stockStatus = item.stock <= 5 ? 'low' : item.stock <= 20 ? 'medium' : 'good';
    const stockColor = stockStatus === 'low' ? 'text-destructive' : stockStatus === 'medium' ? 'text-warning' : 'text-success';

    return (
        <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
                <div className="flex items-center gap-2 ml-2">
                    <button onClick={() => onEdit(item)} className="text-muted-foreground hover:text-foreground p-1">
                        <EditIcon className="w-4 h-4" />
                    </button>
                    <button onClick={() => onDelete(item.id)} className="text-muted-foreground hover:text-destructive p-1">
                        <TrashIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
            
            {item.imageUrl && (
                <div className="mb-3">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-32 object-cover rounded-md"/>
                </div>
            )}
            
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Price:</span>
                    <span className="font-bold text-foreground">₱{item.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Stock:</span>
                    <span className={`font-bold ${stockColor}`}>{item.stock} {item.unit}</span>
                </div>
                {item.cost && (
                    <div className="text-xs text-muted-foreground border-t border-border pt-2">
                        {item.cost}
                    </div>
                )}
            </div>
        </div>
    );
});

interface InventoryPageProps {
  inventory: InventoryItem[];
  onSaveItem: (item: InventoryItem | Omit<InventoryItem, 'id'>) => void;
  onDeleteItem: (id: string) => void;
  profitMarginDivisor: number;
}

const InventoryPage: React.FC<InventoryPageProps> = React.memo(({ inventory, onSaveItem, onDeleteItem, profitMarginDivisor }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToEdit, setItemToEdit] = useState<InventoryItem | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const handleOpenModal = (item?: InventoryItem) => {
        setItemToEdit(item || null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setItemToEdit(null);
    };

    const groupedInventory = useMemo(() => {
        const filtered = inventory.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        const grouped: { [category: string]: InventoryItem[] } = {};
        filtered.forEach(item => {
            if (!grouped[item.category]) {
                grouped[item.category] = [];
            }
            grouped[item.category].push(item);
        });

        return grouped;
    }, [inventory, searchTerm, selectedCategory]);

    const categories = useMemo(() => {
        const cats = ['All', ...Array.from(new Set(inventory.map(item => item.category)))];
        return cats.sort();
    }, [inventory]);

    const totalItems = inventory.length;
    const lowStockItems = inventory.filter(item => item.stock <= 5).length;

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">Inventory Management</h2>
                    <p className="text-muted-foreground">Manage your products and stock levels</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                    <PlusIcon className="w-5 h-5" />
                    Add Product
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card border border-border p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Products</p>
                    <p className="text-2xl font-bold text-foreground">{totalItems}</p>
                </div>
                <div className="bg-card border border-border p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Low Stock Items</p>
                    <p className="text-2xl font-bold text-destructive">{lowStockItems}</p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                </div>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {/* Inventory Grid */}
            {Object.keys(groupedInventory).length > 0 ? (
                <div className="space-y-6">
                    {Object.entries(groupedInventory).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-lg font-semibold text-foreground mb-4">{category} ({items.length})</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {items.map(item => (
                                    <InventoryItemCard
                                        key={item.id}
                                        item={item}
                                        onEdit={handleOpenModal}
                                        onDelete={onDeleteItem}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 text-muted-foreground">
                    <p className="font-semibold">No products found.</p>
                    <p className="text-sm">Add some products to get started!</p>
                </div>
            )}

            <InventoryModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={onSaveItem}
                itemToEdit={itemToEdit}
                profitMarginDivisor={profitMarginDivisor}
            />
        </div>
    );
});

export default InventoryPage;