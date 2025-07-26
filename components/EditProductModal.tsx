

import React, { useState, useEffect } from 'react';
import type { InventoryItem, FeedsSubtype, NonFeedsSubtype, FeedsInventoryItem, NonFeedsInventoryItem } from '../types.ts';
import { useInventory } from '../context/InventoryContext.tsx';
import XIcon from './icons/XIcon.tsx';
import ImageIcon from './icons/ImageIcon.tsx';
import UploadIcon from './icons/UploadIcon.tsx';

interface EditProductModalProps {
  product: InventoryItem;
  onClose: () => void;
  onUpdateProduct: (updatedProduct: InventoryItem) => void;
}

const InputField: React.FC<{ label: string; id: string; children: React.ReactNode }> = ({ label, id, children }) => (
  <div>
    <label htmlFor={id} className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
    {children}
  </div>
);

const EditProductModal: React.FC<EditProductModalProps> = ({ product, onClose, onUpdateProduct }) => {
  const { storeInfo } = useInventory();
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState<'Feeds' | 'Non-Feeds'>(product.category);
  const [subtype, setSubtype] = useState<FeedsSubtype | NonFeedsSubtype>(product.subtype);
  const [stock, setStock] = useState<string>(String(product.stock));
  const [price, setPrice] = useState<string>(String(Math.round(product.price)));
  const [imageUrl, setImageUrl] = useState(product.imageUrl || '');

  const [supplierPrice, setSupplierPrice] = useState('');
  const [recalcQuantity, setRecalcQuantity] = useState('');

  const feedsSubtypes: FeedsSubtype[] = ['Kilo', 'Pack'];
  const nonFeedsSubtypes: NonFeedsSubtype[] = ['Medicine', 'Vitamins', 'Others'];
  const margin = storeInfo?.profitMargin ?? 0.83;

  useEffect(() => {
    const isFeedsSubtype = (st: any): st is FeedsSubtype => feedsSubtypes.includes(st);
    const isNonFeedsSubtype = (st: any): st is NonFeedsSubtype => nonFeedsSubtypes.includes(st);

    if (category === 'Feeds' && !isFeedsSubtype(subtype)) {
      setSubtype('Kilo');
    } else if (category === 'Non-Feeds' && !isNonFeedsSubtype(subtype)) {
      setSubtype('Medicine');
    }
  }, [category, subtype]);
  
  useEffect(() => {
    const sp = parseFloat(supplierPrice);
    const qty = parseFloat(recalcQuantity);

    if (sp > 0 && qty > 0) {
        const unitCost = sp / qty;
        const calculatedPrice = Math.round(unitCost / margin);
        setPrice(String(calculatedPrice));
    }
  }, [supplierPrice, recalcQuantity, margin]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    if (!name.trim() || !stock || !price || Number(price) <= 0 || Number(stock) < 0) {
      alert('Please fill out all fields correctly.');
      return;
    }

    const sp = parseFloat(supplierPrice);
    const qty = parseFloat(recalcQuantity);
    const newUnitCost = (sp > 0 && qty > 0) ? sp / qty : product.unitCost;

    let newSupplierPrice = product.supplierPrice;
    let newQuantityInBatch = product.quantityInBatch;
    if (sp > 0 && qty > 0) {
        newSupplierPrice = sp;
        newQuantityInBatch = qty;
    }

    const commonData = {
      id: product.id,
      name,
      stock: Number(stock),
      price: Number(price),
      imageUrl,
      unitCost: newUnitCost,
      supplierPrice: newSupplierPrice,
      quantityInBatch: newQuantityInBatch,
    };

    if (category === 'Feeds') {
      const updatedProduct: FeedsInventoryItem = {
        ...commonData,
        category: 'Feeds',
        subtype: subtype as FeedsSubtype,
      };
      onUpdateProduct(updatedProduct);
    } else {
      const updatedProduct: NonFeedsInventoryItem = {
        ...commonData,
        category: 'Non-Feeds',
        subtype: subtype as NonFeedsSubtype,
      };
      onUpdateProduct(updatedProduct);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-50 flex justify-center items-center p-4" aria-modal="true" role="dialog">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-lg">
        <form onSubmit={handleSubmit}>
          <header className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Edit Product</h2>
            <button type="button" onClick={onClose} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600">
              <XIcon className="w-6 h-6 text-slate-500 dark:text-slate-400" />
            </button>
          </header>

          <main className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            <InputField label="Product Name" id="productName">
              <input type="text" id="productName" value={name} onChange={e => setName(e.target.value)} required className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none" />
            </InputField>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Category" id="category">
                <select id="category" value={category} onChange={e => setCategory(e.target.value as 'Feeds' | 'Non-Feeds')} className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none">
                  <option value="Feeds">Feeds</option>
                  <option value="Non-Feeds">Non-Feeds</option>
                </select>
              </InputField>
              <InputField label="Sub-Category" id="subtype">
                <select id="subtype" value={subtype} onChange={e => setSubtype(e.target.value as any)} className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none">
                  {(category === 'Feeds' ? feedsSubtypes : nonFeedsSubtypes).map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </InputField>
            </div>
            
            <InputField label="Stock Quantity" id="stock">
                <input type="number" id="stock" value={stock} onChange={e => setStock(e.target.value)} placeholder="e.g., 50" min="0" step="1" required className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500" />
            </InputField>

            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg space-y-3">
                <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">Recalculate Price (Optional)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <InputField label="Supplier Price (₱)" id="recalcSupplierPrice">
                        <input type="number" id="recalcSupplierPrice" value={supplierPrice} onChange={e => setSupplierPrice(e.target.value)} placeholder="New cost" min="0.01" step="0.01" className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                    </InputField>
                    <InputField label="Quantity" id="recalcQuantity">
                        <input type="number" id="recalcQuantity" value={recalcQuantity} onChange={e => setRecalcQuantity(e.target.value)} placeholder="In batch" min="1" step="1" className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                    </InputField>
                </div>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg text-center">
                <label htmlFor="price" className="block mb-1 text-sm font-medium text-primary-800 dark:text-primary-200">Selling Price (per item)</label>
                <div className="relative mt-1">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 dark:text-slate-400 text-xl">₱</span>
                    <input 
                        type="number"
                        id="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        required
                        min="1"
                        step="1"
                        placeholder="0"
                        className="w-full pl-8 pr-3 py-2 bg-white dark:bg-slate-700 border-0 rounded-lg font-bold text-2xl text-primary-700 dark:text-primary-300 text-center focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none" 
                    />
                </div>
                <p className="text-xs text-primary-700 dark:text-primary-300 mt-2">Adjust manually or use the recalculation tool.</p>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Product Image</label>
                <div className="flex items-start gap-4">
                    <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 border dark:border-slate-600">
                        {imageUrl ?
                            <img src={imageUrl} alt="Product Preview" className="w-full h-full object-cover rounded-lg" /> :
                            <ImageIcon className="w-10 h-10 text-slate-300 dark:text-slate-500" />
                        }
                    </div>
                    <div className="flex-grow space-y-2">
                        <InputField label="Image URL" id="imageUrl">
                           <input
                               type="url"
                               id="imageUrl"
                               value={imageUrl.startsWith('data:') ? '' : imageUrl}
                               onChange={e => setImageUrl(e.target.value)}
                               placeholder="Paste image URL here"
                               className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                           />
                       </InputField>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true"><div className="w-full border-t border-slate-300 dark:border-slate-600"></div></div>
                            <div className="relative flex justify-center text-sm"><span className="px-2 bg-white dark:bg-slate-800 text-slate-500">OR</span></div>
                        </div>
                        <div>
                            <label htmlFor="imageUpload" className="w-full cursor-pointer flex items-center justify-center gap-2 px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                                <UploadIcon className="w-5 h-5" />
                                <span>Upload File</span>
                            </label>
                            <input type="file" id="imageUpload" accept="image/*" className="sr-only" onChange={handleImageUpload} />
                        </div>
                    </div>
                </div>
            </div>
          </main>

          <footer className="flex justify-end gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 rounded-b-2xl">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors shadow-sm disabled:bg-slate-300 dark:disabled:bg-slate-600"
              disabled={!name || !stock || !price}>
              Save Changes
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;