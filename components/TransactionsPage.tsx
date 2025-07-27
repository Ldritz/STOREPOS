
import React, { useState, useMemo } from 'react';
import { Transaction, TransactionType, InventoryItem } from '../types';
import { TrashIcon, ChevronDownIcon, ListBulletIcon, TableCellsIcon } from './Icons';

const formatCurrency = (amount: number, abs = false) => {
    const value = abs ? Math.abs(amount) : amount;
    return value.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' });
};

// --- Sub-components for the new UI ---

interface StatBoxProps {
    title: string;
    value: number;
    avg?: number;
}
const StatBox: React.FC<StatBoxProps> = React.memo(({ title, value, avg }) => (
    <div className="text-center md:text-left">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{title}</p>
        <p className="text-2xl font-bold text-foreground mt-1">{formatCurrency(value)}</p>
        {avg !== undefined && <p className="text-xs text-muted-foreground">avg {formatCurrency(avg)}/day</p>}
    </div>
));

interface OverviewCardProps {
    title: string;
    stats: {
        today: number;
        thisWeek: number;
        allTime: number;
        avgWeek: number;
        avgAllTime: number;
    };
}
const OverviewCard: React.FC<OverviewCardProps> = React.memo(({ title, stats }) => (
    <div className="bg-card border border-border p-4 sm:p-6 rounded-lg">
        <h3 className="text-lg font-bold text-card-foreground mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatBox title={`Today's ${title.split(' ')[0]}`} value={stats.today} />
            <StatBox title="This Week" value={stats.thisWeek} avg={stats.avgWeek} />
            <StatBox title="All Time" value={stats.allTime} avg={stats.avgAllTime} />
        </div>
    </div>
));


// --- Cashbook Components ---
interface CashbookRowData {
    id: string;
    description: string;
    income: number | null;
    expense: number | null;
}
interface GroupedCashbookData {
    [date: string]: {
        transactions: CashbookRowData[];
        totalIncome: number;
        totalExpense: number;
    };
}
interface CashbookTableProps {
    data: GroupedCashbookData;
    sortedDateKeys: string[];
}

const CashbookTable: React.FC<CashbookTableProps> = React.memo(({ data, sortedDateKeys }) => {
    return (
        <div className="bg-card border border-border rounded-lg overflow-hidden animate-fade-in">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-muted-foreground">
                    <thead className="text-xs text-muted-foreground uppercase bg-secondary">
                        <tr>
                            <th scope="col" className="px-4 py-3">Date</th>
                            <th scope="col" className="px-4 py-3 min-w-[250px]">Description</th>
                            <th scope="col" className="px-4 py-3 text-right">Income (Credit)</th>
                            <th scope="col" className="px-4 py-3 text-right">Expense (Debit)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedDateKeys.length > 0 ? sortedDateKeys.map(dateKey => {
                            const group = data[dateKey];
                            return (
                                <React.Fragment key={dateKey}>
                                    {group.transactions.map((row, index) => (
                                        <tr key={row.id} className="border-b border-border hover:bg-muted">
                                            <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                                                {index === 0 ? new Date(dateKey + 'T00:00:00').toLocaleDateString('en-CA') : ''}
                                            </td>
                                            <td className="px-4 py-3">{row.description}</td>
                                            <td className="px-4 py-3 text-right font-mono text-success">{row.income ? formatCurrency(row.income) : '-'}</td>
                                            <td className="px-4 py-3 text-right font-mono text-warning">{row.expense ? formatCurrency(row.expense) : '-'}</td>
                                        </tr>
                                    ))}
                                    {/* Summary Row */}
                                    <tr className="bg-secondary border-b-2 border-border">
                                        <td colSpan={2} className="px-4 py-2 text-right font-bold text-foreground">Total</td>
                                        <td className="px-4 py-2 text-right font-mono font-bold text-success">{formatCurrency(group.totalIncome)}</td>
                                        <td className="px-4 py-2 text-right font-mono font-bold text-warning">{formatCurrency(group.totalExpense)}</td>
                                    </tr>
                                </React.Fragment>
                            );
                        }) : (
                            <tr>
                                <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                                    <p className="font-semibold">No transactions found.</p>
                                    <p className="text-sm">Add some transactions to get started!</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
});

interface TransactionsPageProps {
  transactions: Transaction[];
  inventory: InventoryItem[];
  onDeleteTransaction: (transaction: Transaction) => void;
}

const TransactionsPage: React.FC<TransactionsPageProps> = React.memo(({ transactions, onDeleteTransaction }) => {
    const [viewMode, setViewMode] = useState<'cashbook' | 'list'>('cashbook');
    const [expandedDates, setExpandedDates] = useState<Set<string>>(new Set());

    const { incomeStats, expenseStats } = useMemo(() => {
        const today = new Date().toISOString().split('T')[0];
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());
        const weekStartStr = weekStart.toISOString().split('T')[0];

        let todayIncome = 0, todayExpense = 0;
        let weekIncome = 0, weekExpense = 0;
        let allTimeIncome = 0, allTimeExpense = 0;

        transactions.forEach(t => {
            const isToday = t.date.startsWith(today);
            const isThisWeek = t.date >= weekStartStr;

            if (t.type === TransactionType.Income) {
                allTimeIncome += t.amount;
                if (isToday) todayIncome += t.amount;
                if (isThisWeek) weekIncome += t.amount;
            } else {
                allTimeExpense += t.amount;
                if (isToday) todayExpense += t.amount;
                if (isThisWeek) weekExpense += t.amount;
            }
        });

        const daysInWeek = 7;
        const totalDays = transactions.length > 0 ? Math.max(1, Math.ceil((new Date().getTime() - new Date(transactions[transactions.length - 1].date).getTime()) / (1000 * 60 * 60 * 24))) : 1;

        return {
            incomeStats: {
                today: todayIncome,
                thisWeek: weekIncome,
                allTime: allTimeIncome,
                avgWeek: weekIncome / daysInWeek,
                avgAllTime: allTimeIncome / totalDays
            },
            expenseStats: {
                today: todayExpense,
                thisWeek: weekExpense,
                allTime: allTimeExpense,
                avgWeek: weekExpense / daysInWeek,
                avgAllTime: allTimeExpense / totalDays
            }
        };
    }, [transactions]);

    const { groupedCashbookData, sortedCashbookDateKeys } = useMemo(() => {
        const grouped: GroupedCashbookData = {};
        
        transactions.forEach(t => {
            const dateKey = t.date;
            if (!grouped[dateKey]) {
                grouped[dateKey] = {
                    transactions: [],
                    totalIncome: 0,
                    totalExpense: 0
                };
            }

            const rowData: CashbookRowData = {
                id: t.id,
                description: t.description,
                income: t.type === TransactionType.Income ? t.amount : null,
                expense: t.type === TransactionType.Expense ? t.amount : null
            };

            grouped[dateKey].transactions.push(rowData);
            
            if (t.type === TransactionType.Income) {
                grouped[dateKey].totalIncome += t.amount;
            } else {
                grouped[dateKey].totalExpense += t.amount;
            }
        });

        const sortedKeys = Object.keys(grouped).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

        return { groupedCashbookData: grouped, sortedCashbookDateKeys: sortedKeys };
    }, [transactions]);

    const groupedTransactions = useMemo(() => {
        const grouped: { [date: string]: Transaction[] } = {};
        
        transactions.forEach(t => {
            const dateKey = t.date;
            if (!grouped[dateKey]) {
                grouped[dateKey] = [];
            }
            grouped[dateKey].push(t);
        });

        return Object.entries(grouped)
            .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
            .map(([date, transactions]) => ({
                date,
                transactions: transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            }));
    }, [transactions]);

    const formatDateHeader = (dateStr: string) => {
        const date = new Date(dateStr + 'T00:00:00');
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === yesterday.toDateString()) {
            return 'Yesterday';
        } else {
            return date.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        }
    };

    const toggleDateExpansion = (date: string) => {
        const newExpanded = new Set(expandedDates);
        if (newExpanded.has(date)) {
            newExpanded.delete(date);
        } else {
            newExpanded.add(date);
        }
        setExpandedDates(newExpanded);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <OverviewCard title="Income" stats={incomeStats} />
                <OverviewCard title="Expenses" stats={expenseStats} />
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-foreground">Transaction History</h3>
                <div className="flex bg-secondary rounded-lg p-1">
                    <button
                        onClick={() => setViewMode('cashbook')}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            viewMode === 'cashbook' 
                                ? 'bg-primary text-primary-foreground' 
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        <div className="flex items-center gap-2">
                            <TableCellsIcon className="w-4 h-4" />
                            Cashbook
                        </div>
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            viewMode === 'list' 
                                ? 'bg-primary text-primary-foreground' 
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        <div className="flex items-center gap-2">
                            <ListBulletIcon className="w-4 h-4" />
                            List
                        </div>
                    </button>
                </div>
            </div>

            {/* Content */}
            {viewMode === 'cashbook' ? (
                <CashbookTable data={groupedCashbookData} sortedDateKeys={sortedCashbookDateKeys} />
            ) : (
                <div className="space-y-4">
                    {groupedTransactions.length > 0 ? groupedTransactions.map(({ date, transactions }) => (
                        <div key={date} className="bg-card border border-border rounded-lg overflow-hidden">
                            <div className="p-4 border-b border-border">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-semibold text-foreground">{formatDateHeader(date)}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {transactions.length} transaction{transactions.length !== 1 ? 's' : ''}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => toggleDateExpansion(date)}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <ChevronDownIcon className={`w-5 h-5 transition-transform ${expandedDates.has(date) ? 'rotate-180' : ''}`} />
                                    </button>
                                </div>
                            </div>
                            
                            {expandedDates.has(date) && (
                                <div className="divide-y divide-border">
                                    {transactions.map(transaction => (
                                        <div key={transaction.id} className="p-4 flex items-center justify-between">
                                            <div className="flex-1">
                                                <p className="font-medium text-foreground">{transaction.description}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {new Date(transaction.date).toLocaleTimeString('en-US', { 
                                                        hour: '2-digit', 
                                                        minute: '2-digit' 
                                                    })}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className={`font-mono font-bold ${
                                                    transaction.type === TransactionType.Income 
                                                        ? 'text-success' 
                                                        : 'text-warning'
                                                }`}>
                                                    {transaction.type === TransactionType.Income ? '+' : '-'}
                                                    {formatCurrency(transaction.amount, true)}
                                                </span>
                                                <button
                                                    onClick={() => onDeleteTransaction(transaction)}
                                                    className="text-muted-foreground hover:text-destructive transition-colors p-1"
                                                    title="Delete transaction"
                                                >
                                                    <TrashIcon className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )) : (
                        <div className="text-center py-12 text-muted-foreground">
                            <p className="font-semibold">No transactions found.</p>
                            <p className="text-sm">Add some transactions to get started!</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
});

export default TransactionsPage;
