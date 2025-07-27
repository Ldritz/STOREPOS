
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

export type SyncStatus = 'synced' | 'syncing' | 'offline';

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
  description: string;
  date: string; // ISO string
  items?: CartItem[];
}

export interface InventoryItem {
  id:string;
  name: string;
  price: number;
  stock: number;
  unit: string; // e.g. pcs, Kilo, Pack
  category?: string;
  cost?: number;
  imageUrl?: string;
}