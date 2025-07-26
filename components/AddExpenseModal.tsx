import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext.tsx';
import XIcon from './icons/XIcon.tsx';

const AddExpenseModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { addExpense } = useInventory();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!description.trim() || !amount || Number(amount) <= 0) {
            setError('Please enter a valid description and amount.');
            return;
        }

        setIsSaving(true);
        try {
            // The date string from the input needs to be correctly parsed.
            // new Date('YYYY-MM-DD') can have timezone issues.
            // A safer way is to split and construct.
            const [year, month, day] = date.split('-').map(Number);
            const expenseDate = new Date(year, month - 1, day);

            await addExpense({
                description,
                amount: Number(amount),
                date: expenseDate,
            });
            onClose();
        } catch (e: any) {
            console.error(e);
            setError(e.message || 'Failed to save expense. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-50 flex justify-center items-center p-4" aria-modal="true" role="dialog">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-md">
                <form onSubmit={handleSubmit}>
                    <header className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Add New Expense</h2>
                        <button type="button" onClick={onClose} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600">
                            <XIcon className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                        </button>
                    </header>

                    <main className="p-6 space-y-4">
                        <div>
                            <label htmlFor="description" className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
                            <input
                                type="text"
                                id="description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                placeholder="e.g., Monthly Rent"
                                required
                                className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="amount" className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Amount (₱)</label>
                                <input
                                    type="number"
                                    id="amount"
                                    value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                    placeholder="e.g., 500.00"
                                    min="0.01"
                                    step="0.01"
                                    required
                                    className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="date" className="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none"
                                />
                            </div>
                        </div>
                        {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}
                    </main>

                    <footer className="flex justify-end gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 rounded-b-2xl">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors shadow-sm disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isSaving && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>}
                            Save Expense
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    );
};

export default AddExpenseModal;