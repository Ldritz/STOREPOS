import React, { useState, useEffect, useMemo, useRef } from 'react';
import Card from './Card';
import { InventoryItem } from '../types';
import { PlusIcon, CloseIcon, EditIcon, TrashIcon, ImageIcon, UploadIcon, SearchIcon, FilterIcon } from './Icons';

// Modal for Adding/Editing Inventory Items
interface InventoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (item: InventoryItem | Omit<InventoryItem, 'id'>) => void;
    itemToEdit: InventoryItem | null;
    profitMarginDivisor: number;
}

const InventoryModal: React.FC<InventoryModalProps> = ({ isOpen, onClose, onSave, itemToEdit, profitMarginDivisor }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(''); // For direct edit
    const [stock, setStock] = useState(''); // For direct edit
    const [unit, setUnit] = useState('pcs');
    const [category, setCategory] = useState('Feeds');
    const [cost, setCost] = useState(''); // For direct edit (descriptive cost)
    const [imageUrl, setImageUrl] = useState('');

    // State for "Add Product" calculation
    const [batchCost, setBatchCost] = useState('');
    const [batchQuantity, setBatchQuantity] = useState('');

    const fileInputRef = useRef<HTMLInputElement>(null);
    const isAddMode = !itemToEdit;

    const calculatedPrice = useMemo(() => {
        const costNum = parseFloat(batchCost);
        const quantityNum = parseInt(batchQuantity, 10);
        if (isAddMode && costNum > 0 && quantityNum > 0 && profitMarginDivisor > 0) {
            const pricePerItem = costNum / quantityNum;
            return Math.round(pricePerItem / profitMarginDivisor);
        }
        return 0;
    }, [batchCost, batchQuantity, isAddMode, profitMarginDivisor]);

    const profitMarginPercentage = useMemo(() => {
        if (profitMarginDivisor > 0 && profitMarginDivisor < 1) {
            return ((1 - profitMarginDivisor) * 100).toFixed(1);
        }
        return 0;
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
                               <option>Feeds</option>
                               <option>Non-Feeds</option>
                           </select>
                       </div>
                        <div>
                           <label htmlFor="unit" className={labelClass}>Unit</label>
                           <select id="unit" value={unit} onChange={e => setUnit(e.target.value)} required className={selectClass}>
                               <option>kilo</option>
                               <option>pcs</option>
                               <option>pack</option>
                               <option>bottle</option>
                               <option>box</option>
                               <option>sachet</option>
                           </select>
                       </div>
                    </div>

                    {isAddMode ? (
                        <>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="batchCost" className={labelClass}>Batch Cost</label>
                                    <input type="number" id="batchCost" value={batchCost} onChange={e => setBatchCost(e.target.value)} required min="0" step="any" placeholder="e.g., 1000" className={inputClass}/>
                                </div>
                                <div>
                                    <label htmlFor="batchQuantity" className={labelClass}>Quantity in Batch</label>
                                    <input type="number" id="batchQuantity" value={batchQuantity} onChange={e => setBatchQuantity(e.target.value)} required min="1" step="1" placeholder="e.g., 50" className={inputClass}/>
                                </div>
                            </div>
                        </>
                    ) : (
                         <>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                <label htmlFor="price" className={labelClass}>Price</label>
                                <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value)} required min="0" step="1" className={inputClass}/>
                            </div>
                                <div>
                                <label htmlFor="stock" className={labelClass}>Stock Quantity</label>
                                <input type="number" id="stock" value={stock} onChange={e => setStock(e.target.value)} required min="0" step="1" className={inputClass}/>
                            </div>
                            </div>
                            <div>
                               <label htmlFor="cost" className={labelClass}>Cost Details (Optional)</label>
                               <input type="text" id="cost" value={cost} onChange={e => setCost(e.target.value)} placeholder="e.g. Cost: P543 / 12 pack" className={inputClass}/>
                           </div>
                         </>
                    )}

                    <div>
                        <label className={labelClass}>Product Image (Optional)</label>
                        <div className="flex gap-4">
                            <div className="w-24 h-24 flex-shrink-0 bg-secondary rounded-md flex items-center justify-center border border-border">
                                {imageUrl ? (
                                    <img src={imageUrl} alt="Product Preview" className="w-full h-full object-cover rounded-md" />
                                ) : (
                                    <ImageIcon className="w-10 h-10 text-muted-foreground" />
                                )}
                            </div>
                            <div className="flex-1 space-y-2">
                                <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="Paste image URL here" className={inputClass}/>
                                <div className="text-center text-muted-foreground text-sm">OR</div>
                                 <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden"/>
                                <button type="button" onClick={() => fileInputRef.current?.click()} className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-secondary border border-border rounded-md hover:bg-muted transition-colors">
                                    <UploadIcon className="w-5 h-5" />
                                    <span>Upload File</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {isAddMode && (
                        <div className="bg-secondary border border-border rounded-lg p-4 text-center">
                            <p className="text-sm text-muted-foreground">Calculated Selling Price (per item)</p>
                            <p className="text-3xl font-bold text-success my-1">
                                {calculatedPrice > 0 ? calculatedPrice.toLocaleString('en-PH', {style: 'currency', currency: 'PHP', maximumFractionDigits: 0}) : '₱0'}
                            </p>
                            <p className="text-xs text-muted-foreground">Based on a ~{profitMarginPercentage}% profit margin.</p>
                        </div>
                    )}

                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={onClose} className="bg-secondary text-secondary-foreground font-bold py-2 px-6 rounded-lg hover:bg-muted transition-colors">Cancel</button>
                        <button type="submit" className="bg-primary text-primary-foreground font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors">Save Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Enhanced Inventory Item Card Component
interface InventoryItemCardProps {
    item: InventoryItem;
    onEdit: (item: InventoryItem) => void;
    onDelete: (id: string) => void;
}
const InventoryItemCard: React.FC<InventoryItemCardProps> = ({ item, onEdit, onDelete }) => {
    const isLowStock = item.stock <= 5;
    const isOutOfStock = item.stock === 0;
    const stockBadgeColor = isOutOfStock ? 'bg-destructive/20 text-destructive' : isLowStock ? 'bg-warning/20 text-warning' : 'bg-success/20 text-success';

    return (
        <div className={`bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${isLowStock ? 'ring-2 ring-warning' : ''} ${isOutOfStock ? 'ring-2 ring-destructive' : ''}`}>
            {/* Image Section */}
            <div className="relative mb-4">
                <div className="w-full h-48 rounded-lg overflow-hidden bg-secondary">
                    {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center border border-border">
                            <ImageIcon className="w-16 h-16 text-muted-foreground" />
                        </div>
                    )}
                </div>
                
                {/* Stock Status Badge */}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${stockBadgeColor}`}>
                    {isOutOfStock ? 'Out of Stock' : isLowStock ? 'Low Stock' : 'In Stock'}
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    <button onClick={() => onEdit(item)} className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-info hover:text-info-foreground transition-colors">
                        <EditIcon className="w-4 h-4"/>
                    </button>
                    <button onClick={() => onDelete(item.id)} className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors">
                        <TrashIcon className="w-4 h-4"/>
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="space-y-3">
                {/* Product Name and Category */}
                <div>
                    <h3 className="text-lg font-bold text-card-foreground line-clamp-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-success">
                    {item.price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 })}
                </div>

                {/* Stock Information */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${isOutOfStock ? 'bg-destructive' : isLowStock ? 'bg-warning' : 'bg-success'}`}></div>
                        <span className="text-sm font-medium text-muted-foreground">
                            {item.stock} {item.unit}
                        </span>
                    </div>
                    
                    {/* Stock Progress Bar */}
                    <div className="flex-1 ml-3">
                        <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                                className={`h-2 rounded-full transition-all ${
                                    isOutOfStock ? 'bg-destructive' : 
                                    isLowStock ? 'bg-warning' : 'bg-success'
                                }`}
                                style={{ width: `${Math.min((item.stock / 10) * 100, 100)}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Cost Details */}
                {item.cost && (
                    <div className="text-xs text-muted-foreground bg-secondary/50 rounded-md p-2">
                        {item.cost}
                    </div>
                )}
            </div>
        </div>
    );
};

// Main Inventory Page Component
interface InventoryPageProps {
  inventory: InventoryItem[];
  onSaveItem: (item: InventoryItem | Omit<InventoryItem, 'id'>) => void;
  onDeleteItem: (id: string) => void;
  profitMarginDivisor: number;
}

const InventoryPage: React.FC<InventoryPageProps> = ({ inventory, onSaveItem, onDeleteItem, profitMarginDivisor }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToEdit, setItemToEdit] = useState<InventoryItem | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    const handleOpenModal = (item?: InventoryItem) => {
        setItemToEdit(item || null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setItemToEdit(null);
    };

    // Filter and group inventory
    const { filteredInventory, groupedInventory, stats } = useMemo(() => {
        let filtered = inventory;
        
        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (item.category?.toLowerCase() || '').includes(searchTerm.toLowerCase())
            );
        }
        
        // Apply category filter
        if (selectedCategory !== 'ALL') {
            filtered = filtered.filter(item => item.category === selectedCategory);
        }

        // Group by category
        const grouped = filtered.reduce((acc, item) => {
            const category = item.category || 'Non-Feeds';
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(item);
            return acc;
        }, {} as Record<string, InventoryItem[]>);

        // Calculate stats
        const totalItems = filtered.length;
        const lowStockItems = filtered.filter(item => item.stock <= 5 && item.stock > 0).length;
        const outOfStockItems = filtered.filter(item => item.stock === 0).length;
        const totalValue = filtered.reduce((sum, item) => sum + (item.price * item.stock), 0);

        return {
            filteredInventory: filtered,
            groupedInventory: grouped,
            stats: { totalItems, lowStockItems, outOfStockItems, totalValue }
        };
    }, [inventory, searchTerm, selectedCategory]);
    
    // Sort categories to have 'Feeds' first if it exists
    const sortedCategories = Object.keys(groupedInventory).sort((a, b) => {
        if (a === 'Feeds') return -1;
        if (b === 'Feeds') return 1;
        return a.localeCompare(b);
    });

    const categories = ['ALL', 'Feeds', 'Non-Feeds'];
    
    return (
        <div className="animate-fade-in space-y-6">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Inventory</h1>
                    <p className="text-muted-foreground">Manage your products and stock levels</p>
                </div>
                <button 
                    onClick={() => handleOpenModal()} 
                    className="flex items-center gap-2 bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
                >
                    <PlusIcon className="w-5 h-5"/>
                    <span>Add Product</span>
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-foreground">{stats.totalItems}</div>
                    <div className="text-sm text-muted-foreground">Total Products</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-success">{stats.totalValue.toLocaleString('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 })}</div>
                    <div className="text-sm text-muted-foreground">Total Value</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-warning">{stats.lowStockItems}</div>
                    <div className="text-sm text-muted-foreground">Low Stock</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-destructive">{stats.outOfStockItems}</div>
                    <div className="text-sm text-muted-foreground">Out of Stock</div>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
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
                        className="px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category === 'ALL' ? 'All Categories' : category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
             
            {/* Inventory Grid */}
            {filteredInventory.length > 0 ? (
                sortedCategories.map(category => (
                    <div key={category} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <h3 className="text-xl font-bold text-foreground">{category}</h3>
                            <span className="text-sm text-muted-foreground">({groupedInventory[category].length} items)</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {groupedInventory[category].map(item => (
                                <InventoryItemCard 
                                    key={item.id} 
                                    item={item} 
                                    onEdit={handleOpenModal} 
                                    onDelete={onDeleteItem} 
                                />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <Card className="text-center py-16">
                    <div className="text-muted-foreground">
                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                            <ImageIcon className="w-8 h-8" />
                        </div>
                        <p className="font-semibold text-lg">No products found</p>
                        <p className="mt-2">Try adjusting your search or filters, or add your first product.</p>
                    </div>
                </Card>
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
};

export default InventoryPage;