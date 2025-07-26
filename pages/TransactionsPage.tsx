

import React, { useState, useMemo } from 'react';
import { useInventory } from '../context/InventoryContext.tsx';
import type { Sale, Expense, ManualExpense, InventoryExpense } from '../types.ts';
import AddExpenseModal from '../components/AddExpenseModal.tsx';
import AddInventoryExpenseModal from '../components/AddInventoryExpenseModal.tsx';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal.tsx';
import PlusIcon from '../components/icons/PlusIcon.tsx';
import ReceiptIcon from '../components/icons/ReceiptIcon.tsx';
import DeleteIcon from '../components/icons/DeleteIcon.tsx';
import ClipboardListIcon from '../components/icons/ClipboardListIcon.tsx';

// Helper to get a date string in YYYY-MM-DD format based on local timezone
const getLocalDateString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const formatDate = (dateValue?: Sale['date'] | Expense['date']) => {
    if (!dateValue) return 'Invalid Date';
    let date;
    if (dateValue instanceof Date) {
        date = dateValue;
    } else if (typeof dateValue === 'object' && 'seconds' in dateValue) {
        date = new Date(dateValue.seconds * 1000);
    } else {
        return 'Invalid Date';
    }
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
};

const formatTransactionId = (dateValue?: Sale['date'] | Expense['date']) => {
    if (!dateValue) return 'N/A';
    let date;
    if (dateValue instanceof Date) {
        date = dateValue;
    } else if (typeof dateValue === 'object' && 'seconds' in dateValue) {
        date = new Date(dateValue.seconds * 1000);
    } else {
        return 'N/A';
    }
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = String(date.getFullYear()).slice(-2);
    const HH = String(date.getHours()).padStart(2, '0');
    const MM = String(date.getMinutes()).padStart(2, '0');
    const SS = String(date.getSeconds()).padStart(2, '0');
    return `${mm}${dd}${yyyy}-${HH}${MM}${SS}`;
};

const getExpenseDate = (e: Expense) => e.date instanceof Date ? e.date : (e.date ? new Date(e.date.seconds * 1000) : new Date(0));

const ChevronDownIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const DateSeparator: React.FC<{ dateString: string }> = ({ dateString }) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const todayStr = getLocalDateString(today);
    const yesterdayStr = getLocalDateString(yesterday);

    let displayText;
    if (dateString === todayStr) {
        displayText = 'Today';
    } else if (dateString === yesterdayStr) {
        displayText = 'Yesterday';
    } else {
        const [year, month, day] = dateString.split('-').map(Number);
        // Use UTC date to avoid timezone issues with date interpretation
        const dateObj = new Date(Date.UTC(year, month - 1, day));
        displayText = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC' // ensure consistency
        });
    }

    return (
        <div className="sticky top-0 z-10 pt-4 pb-2 -mx-4 px-4 md:-mx-6 md:px-6 bg-slate-50 dark:bg-slate-900">
             <div className="flex items-center">
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                <span className="flex-shrink mx-4 text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">{displayText}</span>
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
            </div>
        </div>
    );
};

const DailySummary: React.FC<{ income: number; expenses: number }> = ({ income, expenses }) => {
    const net = income - expenses;
    const netColor = net >= 0 ? 'text-slate-800 dark:text-slate-100' : 'text-red-600 dark:text-red-500';

    return (
        <div className="grid grid-cols-3 gap-2 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-md mt-2 text-center text-sm">
            <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">Income</p>
                <p className="font-bold text-lg text-primary-600 dark:text-primary-500 mt-1">₱{income.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">Expenses</p>
                <p className="font-bold text-lg text-amber-600 dark:text-amber-500 mt-1">₱{expenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">Net</p>
                <p className={`font-bold text-lg ${netColor} mt-1`}>₱{net.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
        </div>
    );
};

const SaleCard: React.FC<{ sale: Sale }> = ({ sale }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full p-4 flex justify-between items-center text-left" aria-expanded={isOpen}>
                <div className="flex-1 min-w-0"><p className="font-bold text-primary-700 dark:text-primary-500 sm:text-lg truncate" title={`Sale ID: ${formatTransactionId(sale.date)}`}>ID: {formatTransactionId(sale.date)}</p><p className="text-sm text-slate-500 dark:text-slate-400">{formatDate(sale.date)}</p></div>
                <div className="text-right ml-2 flex-shrink-0"><p className="font-bold text-lg text-slate-800 dark:text-slate-100">₱{sale.total.toFixed(2)}</p><p className="text-sm text-slate-500 dark:text-slate-400">{sale.items.length} {sale.items.length === 1 ? 'item' : 'items'}</p></div>
                <ChevronDownIcon className={`w-6 h-6 ml-2 text-slate-400 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                <div className={`px-4 pb-4 border-t border-slate-200 dark:border-slate-700 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-200 mt-3 mb-2">Items Purchased:</h4>
                    <ul className="space-y-2">{sale.items.map((item, index) => (<li key={item.productId + index} className="flex justify-between text-sm p-2 bg-slate-50 dark:bg-slate-700/50 rounded-md"><div><p className="font-medium text-slate-800 dark:text-slate-100">{item.productName}</p><p className="text-slate-500 dark:text-slate-400">{item.quantity} &times; ₱{item.priceAtSale.toFixed(2)}</p></div><p className="font-semibold text-slate-800 dark:text-slate-100">₱{(item.quantity * item.priceAtSale).toFixed(2)}</p></li>))}</ul>
                </div>
            </div>
        </li>
    );
};

const ExpenseCard: React.FC<{ expense: Expense; onDelete: (expense: Expense) => void; }> = ({ expense, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isInventoryExpense = expense.type === 'inventory';
    const expenseId = isInventoryExpense ? formatTransactionId(expense.date) : null;
    const description = isInventoryExpense ? (expense.description || 'Internal Use') : expense.description;
    
    const itemsCount = isInventoryExpense ? expense.items.reduce((sum, item) => sum + item.quantity, 0) : 0;
    const itemsCountText = isInventoryExpense ? `${itemsCount} ${itemsCount === 1 ? 'item' : 'items'}` : null;
    
    return (
        <li className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg">
            <button
                onClick={() => isInventoryExpense && setIsOpen(!isOpen)}
                className="w-full p-4 flex justify-between items-center text-left disabled:cursor-default"
                aria-expanded={isOpen}
                disabled={!isInventoryExpense}
            >
                <div className="flex-1 min-w-0">
                    {isInventoryExpense ? (
                         <p className="font-bold text-green-700 dark:text-green-500 sm:text-lg truncate" title={`Expense ID: ${expenseId}`}>
                            ID: {expenseId}
                        </p>
                    ) : (
                        <p className="font-semibold text-slate-800 dark:text-slate-100 truncate" title={description}>
                            {description}
                        </p>
                    )}
                    <p className="text-sm text-slate-500 dark:text-slate-400">{formatDate(expense.date)}</p>
                </div>
                <div className="text-right ml-2 flex-shrink-0">
                    <p className="font-bold text-lg text-amber-600 dark:text-amber-500">₱{expense.amount.toFixed(2)}</p>
                    {itemsCountText && <p className="text-sm text-slate-500 dark:text-slate-400">{itemsCountText}</p>}
                </div>
                <div className="flex items-center">
                    {isInventoryExpense ? (
                        <ChevronDownIcon className={`w-6 h-6 ml-2 text-slate-400 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    ) : (
                        <div className="w-6 h-6 ml-2 flex-shrink-0"></div> // Placeholder for alignment
                    )}
                </div>
            </button>
             {isInventoryExpense && (
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                    <div className={`px-4 pb-4 border-t border-slate-200 dark:border-slate-700 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                        {expense.description && <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 italic">Note: {expense.description}</p>}
                        <h4 className="font-semibold text-slate-700 dark:text-slate-200 mt-3 mb-2">Items Used:</h4>
                        <ul className="space-y-2">
                            {expense.items.map((item, index) => (
                                <li key={item.productId + index} className="flex justify-between text-sm p-2 bg-slate-50 dark:bg-slate-700/50 rounded-md">
                                    <div>
                                        <p className="font-medium text-slate-800 dark:text-slate-100">{item.productName}</p>
                                        <p className="text-slate-500 dark:text-slate-400">
                                            {item.quantity} &times; ₱{item.costAtTime.toFixed(2)} <span className="text-xs">(cost)</span>
                                        </p>
                                    </div>
                                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                                        ₱{(item.quantity * item.costAtTime).toFixed(2)}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
             <div className="px-4 pb-2 flex justify-end">
                <button 
                    onClick={() => onDelete(expense)} 
                    className="p-2 -mr-2 -mb-1 rounded-full text-slate-400 hover:bg-red-100 dark:hover:bg-red-900/40 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    aria-label={`Delete transaction`}
                >
                    <DeleteIcon className="w-5 h-5" />
                </button>
            </div>
        </li>
    );
};


const groupSalesByDay = (sales: Sale[]) => {
    const grouped = sales.reduce((acc, sale) => {
        if (!sale.date?.seconds) return acc;
        const saleDate = new Date(sale.date.seconds * 1000);
        const dayKey = getLocalDateString(saleDate);
        if (!acc[dayKey]) {
            acc[dayKey] = [];
        }
        acc[dayKey].push(sale);
        return acc;
    }, {} as Record<string, Sale[]>);
    return grouped;
};

const groupExpensesByDay = (expenses: Expense[]) => {
    const grouped = expenses.reduce((acc, expense) => {
        let date: Date | undefined;
        if (expense.date instanceof Date) {
            date = expense.date;
        } else if (expense.date && 'seconds' in expense.date) {
            date = new Date(expense.date.seconds * 1000);
        }
        if (!date) return acc;

        const dayKey = getLocalDateString(date);
        if (!acc[dayKey]) {
            acc[dayKey] = [];
        }
        acc[dayKey].push(expense);
        return acc;
    }, {} as Record<string, Expense[]>);
    return grouped;
};

const TransactionsPage: React.FC = () => {
    const { transactions, transactionsLoading, expenses, expensesLoading, deleteExpense } = useInventory();
    const [activeTab, setActiveTab] = useState<'all' | 'sales' | 'expenses'>('all');
    const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);
    const [isAddInventoryExpenseModalOpen, setIsAddInventoryExpenseModalOpen] = useState(false);
    const [deletingExpense, setDeletingExpense] = useState<Expense | null>(null);

    const groupedSales = useMemo(() => groupSalesByDay(transactions), [transactions]);
    const groupedExpenses = useMemo(() => groupExpensesByDay(expenses), [expenses]);
    
    const groupedTransactions = useMemo(() => {
        if (transactionsLoading || expensesLoading) return {};

        type SaleRecord = { type: 'sale'; date: Date; data: Sale; };
        type ExpenseRecord = { type: 'expense'; date: Date; data: Expense; };
        type TransactionRecord = SaleRecord | ExpenseRecord;

        const salesRecords: SaleRecord[] = transactions.map(sale => ({
            type: 'sale',
            date: sale.date ? new Date(sale.date.seconds * 1000) : new Date(0),
            data: sale,
        }));

        const expensesRecords: ExpenseRecord[] = expenses.map(expense => ({
            type: 'expense',
            date: getExpenseDate(expense),
            data: expense,
        }));

        const allRecords: TransactionRecord[] = [...salesRecords, ...expensesRecords].sort((a, b) => b.date.getTime() - a.date.getTime());

        return allRecords.reduce((acc, record) => {
            const dayKey = getLocalDateString(record.date);
            if (!acc[dayKey]) {
                acc[dayKey] = { income: 0, expenses: 0, records: [] };
            }
            if (record.type === 'sale') {
                acc[dayKey].income += record.data.total;
            } else {
                acc[dayKey].expenses += record.data.amount;
            }
            acc[dayKey].records.push(record);
            return acc;
        }, {} as Record<string, { income: number; expenses: number; records: TransactionRecord[] }>);

    }, [transactions, expenses, transactionsLoading, expensesLoading]);

    // --- Date Boundaries ---
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const thisWeekStart = new Date(); thisWeekStart.setDate(thisWeekStart.getDate() - thisWeekStart.getDay()); thisWeekStart.setHours(0, 0, 0, 0);

    // --- Totals ---
    const totalRevenue = transactions.reduce((sum, sale) => sum + sale.total, 0);
    const todaysRevenue = transactions.filter(sale => sale.date && typeof sale.date === 'object' && 'seconds' in sale.date && new Date(sale.date.seconds * 1000) >= today).reduce((sum, sale) => sum + sale.total, 0);
    const thisWeeksRevenue = transactions.filter(sale => sale.date && typeof sale.date === 'object' && 'seconds' in sale.date && new Date(sale.date.seconds * 1000) >= thisWeekStart).reduce((sum, sale) => sum + sale.total, 0);
    
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const todaysExpenses = expenses.filter(e => getExpenseDate(e) >= today).reduce((sum, e) => sum + e.amount, 0);
    const thisWeeksExpenses = expenses.filter(e => getExpenseDate(e) >= thisWeekStart).reduce((sum, e) => sum + e.amount, 0);

    // --- Averages ---
    const daysInWeekSoFar = new Date().getDay() + 1;
    
    let firstTransactionDate: Date | null = null;
    const oldestSale = transactions.length > 0 ? transactions[transactions.length - 1] : null;
    const oldestExpense = expenses.length > 0 ? expenses[expenses.length - 1] : null;

    if (oldestSale?.date && oldestExpense?.date) {
        const saleTime = oldestSale.date.seconds * 1000;
        const expenseTime = getExpenseDate(oldestExpense).getTime();
        firstTransactionDate = new Date(Math.min(saleTime, expenseTime));
    } else if (oldestSale?.date) {
        firstTransactionDate = new Date(oldestSale.date.seconds * 1000);
    } else if (oldestExpense?.date) {
        firstTransactionDate = getExpenseDate(oldestExpense);
    }

    let allTimeDays = 1;
    if (firstTransactionDate) {
        firstTransactionDate.setHours(0,0,0,0);
        const diffTime = new Date().getTime() - firstTransactionDate.getTime();
        allTimeDays = Math.max(1, Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1);
    }

    const weeklyAvgIncome = thisWeeksRevenue / daysInWeekSoFar;
    const allTimeAvgIncome = totalRevenue / allTimeDays;
    const weeklyAvgExpense = thisWeeksExpenses / daysInWeekSoFar;
    const allTimeAvgExpense = totalExpenses / allTimeDays;

    const loading = transactionsLoading || expensesLoading;

    const handleDeleteConfirm = async () => {
        if (!deletingExpense) return;
        try {
            await deleteExpense(deletingExpense.id);
            setDeletingExpense(null);
        } catch (error: any) {
            alert(`Failed to delete expense: ${error.message}`);
            setDeletingExpense(null);
        }
    };

    return (
    <>
        <div className="p-4 md:p-6 bg-slate-50 dark:bg-slate-900 min-h-screen">
            <header className="mb-6"><h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Transaction History</h1><p className="text-slate-500 dark:text-slate-400">Review past sales and expenses.</p></header>

            <div className="space-y-6 mb-6">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                    <h3 className="font-semibold text-lg mb-3 text-slate-700 dark:text-slate-200">Income Overview</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Today's Income</p>
                            <p className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-500">₱{todaysRevenue.toFixed(2)}</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">This Week</p>
                            <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">₱{thisWeeksRevenue.toFixed(2)}</p>
                            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">avg ₱{weeklyAvgIncome.toFixed(2)}/day</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">All Time</p>
                            <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">₱{totalRevenue.toFixed(2)}</p>
                            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">avg ₱{allTimeAvgIncome.toFixed(2)}/day</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                    <h3 className="font-semibold text-lg mb-3 text-slate-700 dark:text-slate-200">Expense Overview</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Today's Expenses</p>
                            <p className="text-xl sm:text-2xl font-bold text-accent-600 dark:text-accent-500">₱{todaysExpenses.toFixed(2)}</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">This Week</p>
                            <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">₱{thisWeeksExpenses.toFixed(2)}</p>
                            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">avg ₱{weeklyAvgExpense.toFixed(2)}/day</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">All Time</p>
                            <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">₱{totalExpenses.toFixed(2)}</p>
                            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">avg ₱{allTimeAvgExpense.toFixed(2)}/day</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-4"><div className="border-b border-slate-200 dark:border-slate-700"><nav className="-mb-px flex space-x-6" aria-label="Tabs">
                <button onClick={() => setActiveTab('all')} className={`${activeTab === 'all' ? 'border-primary-500 text-primary-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>All</button>
                <button onClick={() => setActiveTab('sales')} className={`${activeTab === 'sales' ? 'border-primary-500 text-primary-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Sales</button>
                <button onClick={() => setActiveTab('expenses')} className={`${activeTab === 'expenses' ? 'border-primary-500 text-primary-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Expenses</button>
            </nav></div></div>

            <div>
                {loading && <div className="text-center py-10"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500 mx-auto"></div></div>}
                
                {!loading && activeTab === 'all' && (
                    Object.keys(groupedTransactions).length === 0
                    ? <div className="text-center py-10 px-4 bg-white dark:bg-slate-800 rounded-xl shadow-md"><h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">No Transactions Yet</h3><p className="text-slate-500 dark:text-slate-400 mt-2">Your transaction history will appear here.</p></div>
                    : <div className="space-y-6">
                        {Object.entries(groupedTransactions).map(([date, { income, expenses, records }]) => (
                            <section key={date}>
                                <DateSeparator dateString={date} />
                                <DailySummary income={income} expenses={expenses} />
                                <ul className="space-y-4 mt-2">
                                    {records.map(record =>
                                        record.type === 'sale'
                                            ? <SaleCard key={record.data.id} sale={record.data} />
                                            : <ExpenseCard key={record.data.id} expense={record.data} onDelete={setDeletingExpense} />
                                    )}
                                </ul>
                            </section>
                        ))}
                    </div>
                )}
                
                {!loading && activeTab === 'sales' && (
                    transactions.length === 0 
                    ? <div className="text-center py-10 px-4 bg-white dark:bg-slate-800 rounded-xl shadow-md"><h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">No Sales Yet</h3><p className="text-slate-500 dark:text-slate-400 mt-2">Your sales history will appear here.</p></div> 
                    : <div className="space-y-6">
                        {Object.entries(groupedSales).map(([date, salesForDay]) => (
                            <section key={date}>
                                <DateSeparator dateString={date} />
                                <ul className="space-y-4 mt-2">
                                    {salesForDay.map(sale => <SaleCard key={sale.id} sale={sale} />)}
                                </ul>
                            </section>
                        ))}
                      </div>
                )}
                
                {!loading && activeTab === 'expenses' && (
                    <div className="space-y-6">
                         <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => setIsAddExpenseModalOpen(true)} className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm">
                                <PlusIcon className="w-5 h-5"/>
                                <span>Add Manual Expense</span>
                            </button>
                            <button onClick={() => setIsAddInventoryExpenseModalOpen(true)} className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm">
                                <ClipboardListIcon className="w-5 h-5"/>
                                <span>Record from Inventory</span>
                            </button>
                        </div>
                        {expenses.length === 0 
                        ? <div className="text-center py-10 px-4 bg-white dark:bg-slate-800 rounded-xl shadow-md"><h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">No Expenses Yet</h3><p className="text-slate-500 dark:text-slate-400 mt-2">Manually add expenses or record items used from inventory.</p></div> 
                        : <>
                            {Object.entries(groupedExpenses).map(([date, expensesForDay]) => (
                                <section key={date}>
                                    <DateSeparator dateString={date} />
                                    <ul className="space-y-4 mt-2">
                                        {expensesForDay.map(expense => <ExpenseCard key={expense.id} expense={expense} onDelete={setDeletingExpense} />)}
                                    </ul>
                                </section>
                            ))}
                          </>
                        }
                    </div>
                )}
            </div>
        </div>
        
        {isAddExpenseModalOpen && <AddExpenseModal onClose={() => setIsAddExpenseModalOpen(false)} />}
        {isAddInventoryExpenseModalOpen && <AddInventoryExpenseModal onClose={() => setIsAddInventoryExpenseModalOpen(false)} />}
        
        {deletingExpense && (
            <DeleteConfirmationModal
                productName={deletingExpense.type === 'manual' ? deletingExpense.description : `Expense ID ${formatTransactionId(deletingExpense.date)}`}
                itemType="Expense"
                onClose={() => setDeletingExpense(null)}
                onConfirm={handleDeleteConfirm}
            />
        )}
    </>
    );
};

export default TransactionsPage;