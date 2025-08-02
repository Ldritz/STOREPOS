

            import React, { useState, useEffect, useMemo, useRef } from 'react';
            import Card from './Card';
            import { InventoryItem } from '../types';
            import { PlusIcon, CloseIcon, EditIcon, TrashIcon, ImageIcon, UploadIcon, EyeIcon, EyeSlashIcon } from './Icons';
            import { uploadToCloudinary } from '../cloudinary';

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
                const [imageFile, setImageFile] = useState<File | null>(null);
                const [isUploading, setIsUploading] = useState(false);


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
                            setImageFile(null);
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
                            setImageFile(null);
                            setBatchCost('');
                            setBatchQuantity('');
                        }
                    }
                }, [itemToEdit, isOpen]);

                if (!isOpen) return null;

                const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        setImageFile(file);
                        // Use local URL for instant preview
                        setImageUrl(URL.createObjectURL(file));
                    }
                };

                const handleSubmit = async (e: React.FormEvent) => {
                    e.preventDefault();
                    setIsUploading(true);
                    
                    let finalImageUrl = itemToEdit?.imageUrl || '';
                    if (imageFile) {
                        try {
                            finalImageUrl = await uploadToCloudinary(imageFile);
                        } catch (error) {
                            setIsUploading(false);
                            return; // Error is alerted in the upload function
                        }
                    } else if (imageUrl !== itemToEdit?.imageUrl) {
                        finalImageUrl = imageUrl;
                    }

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
                                imageUrl: finalImageUrl,
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
                                imageUrl: finalImageUrl,
                            });
                            onClose();
                        }
                    }
                    setIsUploading(false);
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
                                    <button type="button" onClick={onClose} className="bg-secondary text-secondary-foreground font-semibold py-2 px-4 rounded-lg hover:bg-muted transition-colors" disabled={isUploading}>Cancel</button>
                                    <button type="submit" className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed" disabled={isUploading}>
                                        {isUploading ? 'Saving...' : 'Save Product'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                );
            };


            // Inventory Item Card Component
            interface InventoryItemCardProps {
                item: InventoryItem;
                onEdit: (item: InventoryItem) => void;
                onDelete: (id: string) => void;
                onSaveItem: (item: InventoryItem | Omit<InventoryItem, 'id'>) => void;
            }
            const InventoryItemCard: React.FC<InventoryItemCardProps> = ({ item, onEdit, onDelete, onSaveItem }) => {
                const isLowStock = item.stock <= 5;
                const stockBadgeColor = isLowStock ? 'bg-destructive/20 text-destructive' : 'bg-success/20 text-success';

                return (
                    <div className={`bg-card border border-border rounded-lg p-4 flex gap-4 relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isLowStock ? 'ring-2 ring-destructive' : ''} ${item.isDisabled ? 'opacity-60 filter grayscale' : ''}`}>
                        {item.isDisabled && (
                            <div className="absolute top-2 right-2 text-xs font-bold uppercase bg-card text-foreground px-2 py-0.5 rounded-full border border-border shadow-sm z-10">
                                Disabled
                            </div>
                        )}
                        {/* Image */}
                        <div className="w-24 h-24 flex-shrink-0">
                            {item.imageUrl ? (
                                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover rounded-md bg-secondary" />
                            ) : (
                                <div className="w-full h-full bg-secondary rounded-md flex items-center justify-center border border-border">
                                    <ImageIcon className="w-10 h-10 text-muted-foreground" />
                                </div>
                            )}
                        </div>
                        {/* Details */}
                        <div className="flex-1">
                            <div className="flex items-baseline">
                                <p className="text-lg font-bold text-card-foreground">{item.name}</p>
                                {isLowStock && item.stock > 0 && <span className="text-xs font-bold uppercase text-warning ml-2">Low</span>}
                            </div>
                            <p className="text-xl font-bold text-success mt-1">
                                {item.price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 })}
                            </p>
                            {item.cost && <p className="text-xs text-muted-foreground mt-1">{item.cost}</p>}

                            <div className={`mt-3 inline-block px-3 py-1 text-sm font-semibold rounded-full ${stockBadgeColor}`}>
                                {item.stock > 0 ? `${item.stock} ${item.unit} in stock` : `Out of stock`}
                            </div>
                        </div>
                        {/* Actions */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            <button 
                                onClick={() => onSaveItem({ ...item, isDisabled: !item.isDisabled })} 
                                className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                title={item.isDisabled ? 'Enable Item' : 'Disable Item'}
                            >
                                {item.isDisabled ? <EyeIcon className="w-4 h-4"/> : <EyeSlashIcon className="w-4 h-4"/>}
                            </button>
                            <button onClick={() => onEdit(item)} className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:bg-info hover:text-info-foreground transition-colors"><EditIcon className="w-4 h-4"/></button>
                            <button onClick={() => onDelete(item.id)} className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"><TrashIcon className="w-4 h-4"/></button>
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

                const handleOpenModal = (item?: InventoryItem) => {
                    setItemToEdit(item || null);
                    setIsModalOpen(true);
                };

                const handleCloseModal = () => {
                    setIsModalOpen(false);
                    setItemToEdit(null);
                };

                const groupedInventory = useMemo(() => {
                    return inventory.reduce((acc, item) => {
                        const category = item.category || 'Non-Feeds'; // Default category
                        if (!acc[category]) {
                            acc[category] = [];
                        }
                        acc[category].push(item);
                        return acc;
                    }, {} as Record<string, InventoryItem[]>);
                }, [inventory]);
                
                // Sort categories to have 'Feeds' first if it exists
                const sortedCategories = Object.keys(groupedInventory).sort((a, b) => {
                    if (a === 'Feeds') return -1;
                    if (b === 'Feeds') return 1;
                    return a.localeCompare(b);
                });
                
                return (
                    <div className="animate-fade-in space-y-6">
                        <div className="flex justify-end">
                            <button onClick={() => handleOpenModal()} className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                                <PlusIcon className="w-5 h-5"/>
                                <span>Add Item</span>
                            </button>
                        </div>
                        
                        {inventory.length > 0 ? (
                            sortedCategories.map(category => (
                                <div key={category}>
                                    <h3 className="text-2xl font-bold text-foreground mb-4">{category}</h3>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {groupedInventory[category].map(item => (
                                            <InventoryItemCard 
                                                key={item.id} 
                                                item={item} 
                                                onEdit={handleOpenModal} 
                                                onDelete={onDeleteItem}
                                                onSaveItem={onSaveItem}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <Card className="text-center py-16">
                                <div className="text-muted-foreground">
                                    <p className="font-semibold text-lg">Your inventory is empty.</p>
                                    <p className="mt-2">Click "Add Item" to get started.</p>
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