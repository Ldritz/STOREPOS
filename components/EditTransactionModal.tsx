import React, { useState, useEffect } from 'react';
import { Transaction, TransactionType, ExpenseSubtype } from '../types';
import { CloseIcon } from './Icons';

interface EditTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (transaction: Transaction) => void;
  transactionToEdit: Transaction | null;
}

const EditTransactionModal: React.FC<EditTransactionModalProps> = ({ isOpen, onClose, onSave, transactionToEdit }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (transactionToEdit) {
      setName(transactionToEdit.name || '');
      setAmount(transactionToEdit.amount.toString());
      setDate(new Date(transactionToEdit.date).toISOString().split('T')[0]);
    }
  }, [transactionToEdit]);

  if (!isOpen || !transactionToEdit) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionToEdit) return;

    const numericAmount = parseFloat(amount);
    if (name && !isNaN(numericAmount)) {
      onSave({
        ...transactionToEdit,
        name,
        amount: numericAmount,
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
      });
      onClose();
    }
  };

  const isAmountEditable = transactionToEdit.type === TransactionType.Expense && transactionToEdit.expenseSubtype === ExpenseSubtype.General;
  const inputClass = "w-full px-3 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring";
  const disabledInputClass = `${inputClass} bg-muted/50 cursor-not-allowed`;
  const labelClass = "block text-sm font-medium text-muted-foreground mb-1.5";

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="relative w-full max-w-lg rounded-xl bg-background border border-border shadow-2xl animate-slide-in-up">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/40">
          <h2 className="text-xl font-semibold tracking-tight">Edit Transaction</h2>
          <button 
            onClick={onClose} 
            className="rounded-lg p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon className="w-5 h-5"/>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4 space-y-4">
            <div>
              <label htmlFor="edit_name" className={labelClass}>Name</label>
              <input 
                type="text" 
                id="edit_name" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                required 
                className={inputClass} 
              />
            </div>
            <div>
              <label htmlFor="edit_amount" className={labelClass}>Amount</label>
              <input 
                type="number" 
                id="edit_amount" 
                value={amount} 
                onChange={e => setAmount(e.target.value)} 
                required 
                min="0.01" 
                step="0.01" 
                disabled={!isAmountEditable}
                className={isAmountEditable ? inputClass : disabledInputClass}
              />
            </div>
            <div>
              <label htmlFor="edit_date" className={labelClass}>Date</label>
              <input 
                type="date" 
                id="edit_date" 
                value={date} 
                onChange={e => setDate(e.target.value)} 
                required 
                className={inputClass} 
              />
            </div>
          </div>
          <div className="flex items-center justify-end px-6 py-4 border-t border-border/40 bg-muted/40 gap-3">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-4 py-2 rounded-lg font-semibold text-sm bg-muted hover:bg-muted/80 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 rounded-lg font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTransactionModal;
