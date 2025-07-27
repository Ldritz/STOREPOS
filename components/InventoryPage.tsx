import React, { useState, useMemo } from 'react';
import Card from './Card';
import { InventoryItem } from '../types';
import { PlusIcon, SearchIcon, EditIcon, TrashIcon, InventoryIcon } from './Icons';

interface InventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: InventoryItem | Omit<InventoryItem, 'id'>) => void;
  item?: InventoryItem;
  profitMarginDivisor: number;
}

const InventoryModal: React.FC<InventoryModalProps> = React.memo(({ isOpen, onClose, onSave, item, profitMarginDivisor }) => {
  const [formData, setFormData] = useState<Partial<InventoryItem>>({
    name: item?.name || '',
    category: item?.category || '',
    unit: item?.unit || '',
    cost: item?.cost || 0,
    price: item?.price || 0,
    stock: item?.stock || 0,
    minStock: item?.minStock || 0,
  });

  const calculatedPrice = useMemo(() => {
    return formData.cost ? formData.cost / profitMarginDivisor : 0;
  }, [formData.cost, profitMarginDivisor]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.category && formData.unit && formData.cost !== undefined && formData.stock !== undefined && formData.minStock !== undefined) {
      const newItem = {
        ...formData,
        price: calculatedPrice,
        cost: formData.cost,
        stock: formData.stock,
        minStock: formData.minStock,
      } as InventoryItem;
      
      if (item) {
        onSave({ ...newItem, id: item.id });
      } else {
        onSave(newItem);
      }
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="card-modern w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 pb-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <InventoryIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {item ? 'Edit Item' : 'Add New Item'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item ? 'Update item details' : 'Add a new product to inventory'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors focus-ring"
          >
            <PlusIcon className="w-5 h-5 rotate-45" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus-ring"
                placeholder="Product name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus-ring"
                required
              >
                <option value="">Select category</option>
                <option value="Fertilizers">Fertilizers</option>
                <option value="Pesticides">Pesticides</option>
                <option value="Seeds">Seeds</option>
                <option value="Tools">Tools</option>
                <option value="Equipment">Equipment</option>
                <option value="Feed">Feed</option>
                <option value="Medicine">Medicine</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Unit</label>
              <select
                value={formData.unit}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus-ring"
                required
              >
                <option value="">Select unit</option>
                <option value="kg">Kilogram (kg)</option>
                <option value="g">Gram (g)</option>
                <option value="L">Liter (L)</option>
                <option value="ml">Milliliter (ml)</option>
                <option value="pcs">Pieces (pcs)</option>
                <option value="box">Box</option>
                <option value="pack">Pack</option>
                <option value="bottle">Bottle</option>
                <option value="bag">Bag</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Cost Price</label>
              <input
                type="number"
                step="0.01"
                value={formData.cost}
                onChange={(e) => setFormData({ ...formData, cost: parseFloat(e.target.value) || 0 })}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus-ring"
                placeholder="0.00"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Selling Price</label>
              <input
                type="number"
                step="0.01"
                value={calculatedPrice.toFixed(2)}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus-ring"
                placeholder="Auto-calculated"
                readOnly
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Current Stock</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus-ring"
                placeholder="0"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Minimum Stock</label>
              <input
                type="number"
                value={formData.minStock}
                onChange={(e) => setFormData({ ...formData, minStock: parseInt(e.target.value) || 0 })}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus-ring"
                placeholder="0"
                required
              />
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-primary text-primary-foreground py-3 px-4 rounded-lg font-semibold hover:shadow-medium transition-all duration-200 btn-modern"
            >
              {item ? 'Update Item' : 'Add Item'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-secondary text-secondary-foreground py-3 px-4 rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

interface InventoryItemCardProps {
  item: InventoryItem;
  onEdit: (item: InventoryItem) => void;
  onDelete: (id: string) => void;
}

const InventoryItemCard: React.FC<InventoryItemCardProps> = React.memo(({ item, onEdit, onDelete }) => {
  const isLowStock = item.stock <= item.minStock;
  const stockPercentage = (item.stock / (item.minStock * 2)) * 100;

  return (
    <div className="card-modern hover:shadow-medium transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1">{item.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {item.category}
              </span>
              <span className="text-sm text-muted-foreground">{item.unit}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onEdit(item)}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors focus-ring"
              title="Edit item"
            >
              <EditIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors focus-ring"
              title="Delete item"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-muted-foreground font-medium">Cost Price</p>
            <p className="text-lg font-bold text-foreground">
              {item.cost.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Selling Price</p>
            <p className="text-lg font-bold text-success">
              {item.price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
            </p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm text-muted-foreground font-medium">Stock Level</p>
              <p className={`text-sm font-bold ${isLowStock ? 'text-destructive' : 'text-success'}`}>
                {item.stock} {item.unit}
              </p>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  isLowStock ? 'bg-destructive' : 'bg-success'
                }`}
                style={{ width: `${Math.min(stockPercentage, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Min: {item.minStock} {item.unit}
            </p>
          </div>
          
          {isLowStock && (
            <div className="flex items-center gap-2 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
              <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-destructive">Low stock alert</span>
            </div>
          )}
        </div>
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
  const [editingItem, setEditingItem] = useState<InventoryItem | undefined>();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const calculatedPrice = useMemo(() => {
    return inventory.reduce((total, item) => total + (item.price * item.stock), 0);
  }, [inventory]);

  const groupedInventory = useMemo(() => {
    let filtered = inventory;
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    const grouped = filtered.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, InventoryItem[]>);
    
    return Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b));
  }, [inventory, searchTerm, selectedCategory]);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(inventory.map(item => item.category))];
    return uniqueCategories.sort();
  }, [inventory]);

  const lowStockItems = useMemo(() => {
    return inventory.filter(item => item.stock <= item.minStock);
  }, [inventory]);

  const handleEdit = (item: InventoryItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleSave = (item: InventoryItem | Omit<InventoryItem, 'id'>) => {
    onSaveItem(item);
    setEditingItem(undefined);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(undefined);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-modern">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <InventoryIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Total Products</p>
              <p className="text-2xl font-bold text-foreground">{inventory.length}</p>
            </div>
          </div>
        </div>
        
        <div className="card-modern">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-success/20 text-success">
              <InventoryIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Inventory Value</p>
              <p className="text-2xl font-bold text-foreground">
                {calculatedPrice.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
              </p>
            </div>
          </div>
        </div>
        
        <div className="card-modern">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-destructive/20 text-destructive">
              <InventoryIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Low Stock Items</p>
              <p className="text-2xl font-bold text-foreground">{lowStockItems.length}</p>
            </div>
          </div>
        </div>
      </div>

      <Card 
        title="Inventory Management" 
        subtitle={`${inventory.length} products in stock`}
        icon={<InventoryIcon className="w-5 h-5" />}
        actions={
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-medium transition-all duration-200 btn-modern flex items-center gap-2"
          >
            <PlusIcon className="w-4 h-4" />
            Add Item
          </button>
        }
      >
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus-ring"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-border rounded-lg bg-background text-foreground focus-ring"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {groupedInventory.length > 0 ? (
            <div className="space-y-6">
              {groupedInventory.map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {category} ({items.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map(item => (
                      <InventoryItemCard
                        key={item.id}
                        item={item}
                        onEdit={handleEdit}
                        onDelete={onDeleteItem}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <InventoryIcon className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="font-semibold text-foreground">No items found</p>
              <p className="text-sm">
                {searchTerm || selectedCategory 
                  ? 'Try adjusting your search or filter criteria' 
                  : 'Add your first product to get started!'
                }
              </p>
            </div>
          )}
        </div>
      </Card>

      <InventoryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        item={editingItem}
        profitMarginDivisor={profitMarginDivisor}
      />
    </div>
  );
});

export default InventoryPage;