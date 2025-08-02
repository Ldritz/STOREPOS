

export enum Page {
  Dashboard = 'DASHBOARD',
  Transactions = 'TRANSACTIONS',
  Inventory = 'INVENTORY',
  Settings = 'SETTINGS',
}

export enum TransactionType {
  Income = 'INCOME',
  Expense = 'EXPENSE',
}

export enum ExpenseSubtype {
  General = 'GENERAL',
  InventoryPurchase = 'INVENTORY_PURCHASE',
}

export interface AppSettings {
  storeName: string;
  storeLogo: string;
  profitMarginDivisor: number;
  theme: 'light' | 'dark';
}

export interface CartItem {
  inventoryItemId: string;
  quantity: number;
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  name: string;
  date: string; // ISO string
  items?: CartItem[];
  expenseSubtype?: ExpenseSubtype;
}

export interface InventoryItem {
  id:string;
  name: string;
  price: number;
  stock: number;
  unit: string; // e.g. pcs, Kilo, Pack
  category?: string;
  cost?: string;
  imageUrl?: string;
  isDisabled?: boolean;
}

// New types for undo functionality
export type AdminActionType = 'recalculateInventory' | 'bulkPriceUpdate' | 'bulkStockUpdate' | 'refreshIncomeNames';

export interface LastActionBackup {
  type: AdminActionType;
  description: string;
  data: { id: string; [key: string]: any }[];
}