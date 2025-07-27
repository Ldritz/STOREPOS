import React, { useState, useMemo } from 'react';
import { InventoryItem } from '../types';
import { PlusIcon, SearchIcon, TrashIcon, PencilIcon } from './Icons';

interface InventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: InventoryItem | Omit<InventoryItem, 'id'>) => void;
  item?: InventoryItem;
  profitMarginDivisor: number;
}

const InventoryModal: React.FC<InventoryModalProps> = React.memo(({ isOpen, onClose, onSave, item, profitMarginDivisor }) => {
  const [formData, setFormData] = useState({
    name: item?.name || '',
    category: item?.category || '',
    unit: item?.unit || '',
    cost: item?.cost || 0,
    price: item?.price || 0,
    stock: item?.stock || 0,
  });

  const calculatedPrice = useMemo(() => {
    return formData.cost / profitMarginDivisor;
  }, [formData.cost, profitMarginDivisor]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const itemData = {
      ...formData,
      price: calculatedPrice,
    };
    onSave(itemData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{item ? 'Edit Item' : 'Add New Item'}</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <PlusIcon className="w-6 h-6 rotate-45" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border border-border rounded-md bg-background text-foreground"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full p-2 border border-border rounded-md bg-background text-foreground"
              required
            >
              <option value="">Select Category</option>
              <option value="Fertilizers">Fertilizers</option>
              <option value="Pesticides">Pesticides</option>
              <option value="Seeds">Seeds</option>
              <option value="Tools">Tools</option>
              <option value="Equipment">Equipment</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Unit</label>
            <select
              value={formData.unit}
              onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
              className="w-full p-2 border border-border rounded-md bg-background text-foreground"
              required
            >
              <option value="">Select Unit</option>
              <option value="kg">Kilogram (kg)</option>
              <option value="g">Gram (g)</option>
              <option value="L">Liter (L)</option>
              <option value="ml">Milliliter (ml)</option>
              <option value="pcs">Pieces (pcs)</option>
              <option value="pack">Pack</option>
              <option value="box">Box</option>
              <option value="bottle">Bottle</option>
              <option value="bag">Bag</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Cost Price (₱)</label>
            <input
              type="number"
              step="0.01"
              value={formData.cost}
              onChange={(e) => setFormData({ ...formData, cost: parseFloat(e.target.value) || 0 })}
              className="w-full p-2 border border-border rounded-md bg-background text-foreground"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Selling Price (₱)</label>
            <input
              type="number"
              step="0.01"
              value={calculatedPrice.toFixed(2)}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
              className="w-full p-2 border border-border rounded-md bg-background text-foreground"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Stock</label>
            <input
              type="number"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
              className="w-full p-2 border border-border rounded-md bg-background text-foreground"
              required
            />
          </div>
          <div className="flex gap-2 pt-4">
            <button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
            >
              {item ? 'Update' : 'Add'} Item
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-secondary text-secondary-foreground py-2 px-4 rounded-md hover:bg-secondary/80 transition-colors"
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
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-foreground">{item.name}</h3>
        <div className="flex gap-1">
          <button
            onClick={() => onEdit(item)}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            title="Edit item"
          >
            <PencilIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="p-1 text-destructive hover:text-destructive/80 transition-colors"
            title="Delete item"
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <span className="text-muted-foreground">Category:</span>
          <span className="ml-1 text-foreground">{item.category}</span>
        </div>
        <div>
          <span className="text-muted-foreground">Unit:</span>
          <span className="ml-1 text-foreground">{item.unit}</span>
        </div>
        <div>
          <span className="text-muted-foreground">Cost:</span>
          <span className="ml-1 text-foreground">₱{item.cost.toFixed(2)}</span>
        </div>
        <div>
          <span className="text-muted-foreground">Price:</span>
          <span className="ml-1 text-foreground">₱{item.price.toFixed(2)}</span>
        </div>
        <div className="col-span-2">
          <span className="text-muted-foreground">Stock:</span>
          <span className={`ml-1 font-semibold ${item.stock <= 5 ? 'text-destructive' : 'text-foreground'}`}>
            {item.stock} {item.unit}
          </span>
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

  const filteredInventory = useMemo(() => {
    return inventory.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [inventory, searchTerm, selectedCategory]);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(inventory.map(item => item.category))];
    return uniqueCategories.sort();
  }, [inventory]);

  const totalProducts = inventory.length;
  const lowStockItems = inventory.filter(item => item.stock <= 5).length;

  const handleAddItem = () => {
    setEditingItem(undefined);
    setIsModalOpen(true);
  };

  const handleEditItem = (item: InventoryItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleSaveItem = (item: InventoryItem | Omit<InventoryItem, 'id'>) => {
    onSaveItem(item);
    setIsModalOpen(false);
    setEditingItem(undefined);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card border border-border p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground">Total Products</h3>
          <p className="text-3xl font-bold text-primary">{totalProducts}</p>
        </div>
        <div className="bg-card border border-border p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground">Low Stock Items</h3>
          <p className="text-3xl font-bold text-destructive">{lowStockItems}</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background text-foreground"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-border rounded-md bg-background text-foreground"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button
          onClick={handleAddItem}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <PlusIcon className="w-4 h-4" />
          Add Item
        </button>
      </div>

      {/* Inventory Grid */}
      {filteredInventory.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredInventory.map(item => (
            <InventoryItemCard
              key={item.id}
              item={item}
              onEdit={handleEditItem}
              onDelete={onDeleteItem}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p className="font-semibold">No items found.</p>
          <p className="text-sm">Add some items to get started!</p>
        </div>
      )}

      <InventoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveItem}
        item={editingItem}
        profitMarginDivisor={profitMarginDivisor}
      />
    </div>
  );
});

export default InventoryPage;