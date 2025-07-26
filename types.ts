

export type View = 'HOME' | 'INVENTORY' | 'TRANSACTIONS' | 'SETTINGS' | 'QUICK_SALE';

// --- Inventory Types ---

export type FeedsSubtype = 'Kilo' | 'Pack';
export type NonFeedsSubtype = 'Medicine' | 'Vitamins' | 'Others';

export interface BaseInventoryItem {
  id: string;
  name: string;
  stock: number;
  price: number;
  unitCost?: number;
  imageUrl?: string;
  supplierPrice?: number;
  quantityInBatch?: number;
}

export interface FeedsInventoryItem extends BaseInventoryItem {
  category: 'Feeds';
  subtype: FeedsSubtype;
}

export interface NonFeedsInventoryItem extends BaseInventoryItem {
  category: 'Non-Feeds';
  subtype: NonFeedsSubtype;
}

export type InventoryItem = FeedsInventoryItem | NonFeedsInventoryItem;

// --- Sales Types ---

export interface SaleItem {
  productId: string;
  productName: string;
  quantity: number;
  priceAtSale: number;
}

export interface Sale {
  id: string; // Firestore document ID
  date?: { seconds: number; nanoseconds: number; }; // Firestore Timestamp structure, made optional to handle serverTimestamp latency
  items: SaleItem[];
  total: number;
}

// --- Expense Types ---
export interface ExpenseItem {
    productId: string;
    productName: string;
    quantity: number;
    costAtTime: number; // The unit cost of the item when it was used
}

export interface BaseExpense {
    id: string;
    // Use a union to handle both JS Date objects from the app and Firestore Timestamps from the DB
    date?: Date | { seconds: number; nanoseconds: number; };
    amount: number;
}

export interface ManualExpense extends BaseExpense {
    type: 'manual';
    description: string;
}

export interface InventoryExpense extends BaseExpense {
    type: 'inventory';
    description?: string; // An optional note for the expense
    items: ExpenseItem[];
}

export type Expense = ManualExpense | InventoryExpense;


// --- Settings Types ---
export interface StoreInfo {
    name: string;
    imageUrl: string;
    profitMargin?: number;
}