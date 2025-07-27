// Input validation and data sanitization utilities
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  sanitizedData?: any;
}

// Transaction validation
export interface TransactionValidationData {
  type: 'INCOME' | 'EXPENSE';
  amount: number;
  description: string;
  date: string;
  items?: Array<{
    inventoryItemId: string;
    quantity: number;
  }>;
}

export const validateTransaction = (data: Partial<TransactionValidationData>): ValidationResult => {
  const errors: string[] = [];

  // Type validation
  if (!data.type || !['INCOME', 'EXPENSE'].includes(data.type)) {
    errors.push('Transaction type must be INCOME or EXPENSE');
  }

  // Amount validation
  if (!data.amount || typeof data.amount !== 'number' || data.amount <= 0) {
    errors.push('Amount must be a positive number');
  }

  // Description validation
  if (!data.description || typeof data.description !== 'string' || data.description.trim().length === 0) {
    errors.push('Description is required');
  }

  if (data.description && data.description.length > 500) {
    errors.push('Description must be less than 500 characters');
  }

  // Date validation
  if (!data.date || !isValidDate(data.date)) {
    errors.push('Valid date is required');
  }

  // Items validation for income transactions
  if (data.type === 'INCOME' && data.items) {
    if (!Array.isArray(data.items)) {
      errors.push('Items must be an array');
    } else {
      data.items.forEach((item, index) => {
        if (!item.inventoryItemId || typeof item.inventoryItemId !== 'string') {
          errors.push(`Item ${index + 1}: Valid inventory item ID is required`);
        }
        if (!item.quantity || typeof item.quantity !== 'number' || item.quantity <= 0) {
          errors.push(`Item ${index + 1}: Quantity must be a positive number`);
        }
      });
    }
  }

  // Sanitize data
  const sanitizedData = {
    type: data.type,
    amount: Number(data.amount),
    description: data.description?.trim(),
    date: data.date,
    items: data.items?.map(item => ({
      inventoryItemId: item.inventoryItemId,
      quantity: Number(item.quantity)
    }))
  };

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData
  };
};

// Inventory item validation
export interface InventoryItemValidationData {
  name: string;
  price: number;
  stock: number;
  unit: string;
  category?: string;
  cost?: string;
  imageUrl?: string;
}

export const validateInventoryItem = (data: Partial<InventoryItemValidationData>): ValidationResult => {
  const errors: string[] = [];

  // Name validation
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Item name is required');
  }

  if (data.name && data.name.length > 100) {
    errors.push('Item name must be less than 100 characters');
  }

  // Price validation
  if (!data.price || typeof data.price !== 'number' || data.price < 0) {
    errors.push('Price must be a non-negative number');
  }

  // Stock validation
  if (typeof data.stock !== 'number' || data.stock < 0) {
    errors.push('Stock must be a non-negative number');
  }

  // Unit validation
  if (!data.unit || typeof data.unit !== 'string' || data.unit.trim().length === 0) {
    errors.push('Unit is required');
  }

  // Category validation
  if (data.category && data.category.length > 50) {
    errors.push('Category must be less than 50 characters');
  }

  // Image URL validation
  if (data.imageUrl && !isValidUrl(data.imageUrl)) {
    errors.push('Invalid image URL');
  }

  // Sanitize data
  const sanitizedData = {
    name: data.name?.trim(),
    price: Number(data.price),
    stock: Number(data.stock),
    unit: data.unit?.trim(),
    category: data.category?.trim(),
    cost: data.cost?.trim(),
    imageUrl: data.imageUrl?.trim()
  };

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData
  };
};

// Settings validation
export interface SettingsValidationData {
  storeName: string;
  storeLogo?: string;
  profitMarginDivisor: number;
  theme: 'light' | 'dark';
}

export const validateSettings = (data: Partial<SettingsValidationData>): ValidationResult => {
  const errors: string[] = [];

  // Store name validation
  if (!data.storeName || typeof data.storeName !== 'string' || data.storeName.trim().length === 0) {
    errors.push('Store name is required');
  }

  if (data.storeName && data.storeName.length > 100) {
    errors.push('Store name must be less than 100 characters');
  }

  // Profit margin validation
  if (typeof data.profitMarginDivisor !== 'number' || data.profitMarginDivisor <= 0 || data.profitMarginDivisor >= 1) {
    errors.push('Profit margin divisor must be between 0 and 1');
  }

  // Theme validation
  if (!data.theme || !['light', 'dark'].includes(data.theme)) {
    errors.push('Theme must be light or dark');
  }

  // Logo URL validation
  if (data.storeLogo && !isValidUrl(data.storeLogo)) {
    errors.push('Invalid logo URL');
  }

  // Sanitize data
  const sanitizedData = {
    storeName: data.storeName?.trim(),
    storeLogo: data.storeLogo?.trim(),
    profitMarginDivisor: Number(data.profitMarginDivisor),
    theme: data.theme
  };

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData
  };
};

// Utility functions
export const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const sanitizeString = (str: string): string => {
  return str.trim().replace(/[<>]/g, '');
};

export const sanitizeNumber = (num: any): number => {
  const parsed = Number(num);
  return isNaN(parsed) ? 0 : parsed;
};

// Form validation helpers
export const validateRequired = (value: any, fieldName: string): string | null => {
  if (!value || (typeof value === 'string' && value.trim().length === 0)) {
    return `${fieldName} is required`;
  }
  return null;
};

export const validateMinLength = (value: string, minLength: number, fieldName: string): string | null => {
  if (value && value.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters`;
  }
  return null;
};

export const validateMaxLength = (value: string, maxLength: number, fieldName: string): string | null => {
  if (value && value.length > maxLength) {
    return `${fieldName} must be less than ${maxLength} characters`;
  }
  return null;
};

export const validateNumberRange = (value: number, min: number, max: number, fieldName: string): string | null => {
  if (typeof value !== 'number' || value < min || value > max) {
    return `${fieldName} must be between ${min} and ${max}`;
  }
  return null;
};