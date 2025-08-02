
import React, { useState, useMemo } from 'react';
import { Transaction, TransactionType, InventoryItem, ExpenseSubtype } from '../types';
import { TrashIcon, ChevronDownIcon, ListBulletIcon, TableCellsIcon, EditIcon } from './Icons';

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
const StatBox: React.FC<StatBoxProps> = ({ title, value, avg }) => (
    <div className="text-center md:text-left">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{title}</p>
        <p className="text-2xl font-bold text-foreground mt-1">{formatCurrency(value)}</p>
        {avg !== undefined && <p className="text-xs text-muted-foreground">avg {formatCurrency(avg)}/day</p>}
    </div>
);

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
const OverviewCard: React.FC<OverviewCardProps> = ({ title, stats }) => (
    <div className="bg-card border border-border p-4 sm:p-6 rounded-lg">
        <h3 className="text-lg font-bold text-card-foreground mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatBox title={`Today's ${title.split(' ')[0]}`} value={stats.today} />
            <StatBox title="This Week" value={stats.thisWeek} avg={stats.avgWeek} />
            <StatBox title="All Time" value={stats.allTime} avg={stats.avgAllTime} />
        </div>
    </div>
);

interface TransactionRowProps {
    transaction: Transaction;
    inventory: InventoryItem[];
    onDeleteTransaction: (transaction: Transaction) => void;
    onEditTransaction: (transaction: Transaction) => void;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction: t, inventory, onDeleteTransaction, onEditTransaction }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const canExpand = (t.type === TransactionType.Income || (t.type === TransactionType.Expense && t.expenseSubtype === ExpenseSubtype.InventoryPurchase)) && t.items && t.items.length > 0;

    const toggleExpand = () => {
        if (canExpand) setIsExpanded(!isExpanded);
    };
    
    const totalItems = t.items?.reduce((acc, i) => acc + i.quantity, 0) || 0;

    const itemDetailsButton = (
         <button onClick={toggleExpand} className="flex items-center justify-end gap-1 text-muted-foreground w-full hover:text-foreground transition-colors">
            <span className="text-xs">{totalItems} item(s)</span>
            <ChevronDownIcon className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
    );

    const itemDetailsStatic = (
        <span className="text-xs text-muted-foreground">{totalItems} item(s)</span>
    );

    return (
        <div className="space-y-2">
            <div className="bg-card border border-border p-4 rounded-lg flex justify-between items-center group">
                <div className="flex-1 min-w-0 pr-4">
                     <p className="font-bold text-foreground truncate">{t.name || ''}</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="text-right">
                        <p className={`font-bold text-lg ${t.type === TransactionType.Income ? 'text-success' : 'text-warning'}`}>
                            {formatCurrency(t.amount)}
                        </p>
                        {canExpand ? itemDetailsButton : (t.items && t.items.length > 0 ? itemDetailsStatic : null)}
                    </div>

                    <button onClick={() => onEditTransaction(t)} className="text-muted-foreground hover:text-info transition-colors opacity-0 group-hover:opacity-100">
                        <EditIcon className="w-5 h-5"/>
                    </button>
                    <button onClick={() => onDeleteTransaction(t)} className="text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100">
                        <TrashIcon className="w-5 h-5"/>
                    </button>
                </div>
            </div>
            {isExpanded && canExpand && (
                <div className="bg-secondary p-4 rounded-b-lg animate-fade-in border border-border border-t-0">
                    <h5 className="font-semibold mb-2 text-secondary-foreground">
                        {t.type === TransactionType.Income ? 'Items Sold' : 'Items Purchased'}
                    </h5>
                    <ul className="space-y-2 text-sm">
                        {t.items?.map(item => {
                            const invItem = inventory.find(i => i.id === item.inventoryItemId);
                            if (!invItem) return null;
                            const subtotal = invItem.price * item.quantity;
                            return (
                                <li key={item.inventoryItemId} className="flex justify-between items-center">
                                    <div>
                                      <span className="text-muted-foreground">{invItem.name} </span> 
                                      <span className="text-xs text-muted-foreground/70">(x{item.quantity})</span>
                                    </div>
                                    <span className="font-mono text-foreground">{formatCurrency(subtotal)}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};


// --- Cashbook Components ---
interface CashbookRowData {
    id: string;
    name: string;
    note?: string;
    income: number | null;
    expense: number | null;
    items?: { name: string; quantity: number; unit: string }[];
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

const CashbookTable: React.FC<CashbookTableProps> = ({ data, sortedDateKeys }) => {
    return (
        <div className="bg-card border border-border rounded-lg overflow-hidden animate-fade-in">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-muted-foreground">
                    <thead className="text-xs text-muted-foreground uppercase bg-secondary">
                        <tr>
                            <th scope="col" className="px-4 py-3">Date</th>
                            <th scope="col" className="px-4 py-3 min-w-[250px]">Name</th>
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
                                            <td className="px-4 py-3">
                                                {row.note ? (
                                                    <div>
                                                        <div className="font-medium text-foreground">{row.note}</div>
                                                        <div className="text-sm text-muted-foreground">{row.name}</div>
                                                    </div>
                                                ) : (
                                                    <div>{row.name}</div>
                                                )}
                                                {row.items && row.items.length > 0 && (
                                                    <ul className="text-xs text-muted-foreground/80 mt-1 pl-4 list-disc">
                                                        {row.items.map((item, itemIndex) => (
                                                            <li key={itemIndex}>
                                                                {item.quantity} {item.unit} - {item.name}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </td>
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
                                <td colSpan={4} className="text-center py-16 text-muted-foreground">
                                     <p className="font-semibold text-lg">No transactions found.</p>
                                     <p>Try changing the filter.</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// --- Main Page Component ---

interface TransactionsPageProps {
  transactions: Transaction[];
  inventory: InventoryItem[];
  onDeleteTransaction: (transaction: Transaction) => void;
  onEditTransaction: (transaction: Transaction) => void;
}

const TransactionsPage: React.FC<TransactionsPageProps> = ({ transactions, inventory, onDeleteTransaction, onEditTransaction }) => {
    const [filterType, setFilterType] = useState<TransactionType | 'ALL'>('ALL');
    const [viewMode, setViewMode] = useState<'list' | 'cashbook'>('list');

    const { incomeStats, expenseStats } = useMemo(() => {
        const now = new Date();
        const todayStr = now.toISOString().split('T')[0];
        
        const weekAgo = new Date(now);
        weekAgo.setDate(now.getDate() - 6);
        weekAgo.setHours(0, 0, 0, 0);

        let todaysIncome = 0, weeklyIncome = 0, totalIncome = 0;
        let todaysExpenses = 0, weeklyExpenses = 0, totalExpenses = 0;

        if (transactions.length === 0) {
            return {
                incomeStats: { today: 0, thisWeek: 0, allTime: 0, avgWeek: 0, avgAllTime: 0 },
                expenseStats: { today: 0, thisWeek: 0, allTime: 0, avgWeek: 0, avgAllTime: 0 }
            };
        }
        
        const sortedTransactions = [...transactions].sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        sortedTransactions.forEach(t => {
            const tDate = new Date(t.date);

            if (t.type === TransactionType.Income) {
                totalIncome += t.amount;
                if (t.date.startsWith(todayStr)) todaysIncome += t.amount;
                if (tDate >= weekAgo) weeklyIncome += t.amount;
            } else {
                totalExpenses += t.amount;
                if (t.date.startsWith(todayStr)) todaysExpenses += t.amount;
                if (tDate >= weekAgo) weeklyExpenses += t.amount;
            }
        });
        
        const firstTransactionDate = new Date(sortedTransactions[0].date);
        const dayDiff = Math.ceil((now.getTime() - firstTransactionDate.getTime()) / (1000 * 3600 * 24));
        const daysToAvg = dayDiff > 0 ? dayDiff : 1;

        return {
            incomeStats: { today: todaysIncome, thisWeek: weeklyIncome, allTime: totalIncome, avgWeek: weeklyIncome / 7, avgAllTime: totalIncome / daysToAvg },
            expenseStats: { today: todaysExpenses, thisWeek: weeklyExpenses, allTime: totalExpenses, avgWeek: weeklyExpenses / 7, avgAllTime: totalExpenses / daysToAvg }
        };
    }, [transactions]);

    const { groupedCashbookData, sortedCashbookDateKeys } = useMemo(() => {
        const groups: GroupedCashbookData = {};
        
        const filtered = transactions.filter(t => filterType === 'ALL' || t.type === filterType);
        
        filtered.forEach(t => {
            const dateStr = t.date.split('T')[0];
            if (!groups[dateStr]) {
                groups[dateStr] = { transactions: [], totalIncome: 0, totalExpense: 0 };
            }
            
            let itemsInfo;
             if (t.items && (t.type === TransactionType.Income || t.expenseSubtype === ExpenseSubtype.InventoryPurchase)) {
                itemsInfo = t.items.map(item => {
                    const inventoryItem = inventory.find(i => i.id === item.inventoryItemId);
                    return {
                        name: inventoryItem?.name || 'Unknown Item',
                        quantity: item.quantity,
                        unit: inventoryItem?.unit || '',
                    };
                });
            }

            const row: CashbookRowData = {
                id: t.id,
                name: t.name || '',
                income: t.type === TransactionType.Income ? t.amount : null,
                expense: t.type === TransactionType.Expense ? t.amount : null,
                items: itemsInfo,
            };

            if (t.expenseSubtype === ExpenseSubtype.InventoryPurchase && t.name) {
                const autoName = ' - Inventory Purchase';
                const suffixRegex = / #\w{5}$/;
                const nameWithoutSuffix = t.name.replace(suffixRegex, '');

                if (nameWithoutSuffix.includes(autoName)) {
                    const notePart = nameWithoutSuffix.split(autoName)[0];
                    if (notePart) {
                        row.note = notePart;
                        row.name = t.name.substring(notePart.length + 3);
                    }
                }
            }

            groups[dateStr].transactions.push(row);

            if (t.type === TransactionType.Income) {
                groups[dateStr].totalIncome += t.amount;
            } else {
                groups[dateStr].totalExpense += t.amount;
            }
        });
        
        for (const dateKey in groups) {
            groups[dateKey].transactions.sort((a,b) => {
                const transactionA = transactions.find(t => t.id === a.id);
                const transactionB = transactions.find(t => t.id === b.id);
                if (!transactionA || !transactionB) return 0;
                return new Date(transactionA.date).getTime() - new Date(transactionB.date).getTime();
            });
        }
        
        const sortedKeys = Object.keys(groups).sort((a,b) => new Date(b).getTime() - new Date(a).getTime());


        return { groupedCashbookData: groups, sortedCashbookDateKeys: sortedKeys };
    }, [transactions, filterType, inventory]);

    const groupedTransactions = useMemo(() => {
        return transactions
            .filter(t => filterType === 'ALL' || t.type === filterType)
            .reduce((acc, t) => {
                const dateStr = t.date.split('T')[0];
                if (!acc[dateStr]) acc[dateStr] = [];
                acc[dateStr].push(t);
                return acc;
            }, {} as Record<string, Transaction[]>);
    }, [transactions, filterType]);
    
    const sortedDateKeys = Object.keys(groupedTransactions).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

    const formatDateHeader = (dateStr: string) => {
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        const date = new Date(dateStr  + 'T00:00:00');
        
        if (date.toDateString() === today.toDateString()) return 'TODAY';
        if (date.toDateString() === yesterday.toDateString()) return 'YESTERDAY';
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    const tabs = [ { label: 'All', value: 'ALL' }, { label: 'Sales', value: TransactionType.Income }, { label: 'Expenses', value: TransactionType.Expense } ];

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OverviewCard title="Income Overview" stats={incomeStats} />
                <OverviewCard title="Expense Overview" stats={expenseStats} />
            </div>

            <div className="flex justify-between items-center border-b border-border">
                <div className="flex space-x-6">
                    {tabs.map(tab => (
                        <button 
                            key={tab.value}
                            onClick={() => setFilterType(tab.value as any)}
                            className={`py-2 font-semibold transition-colors ${filterType === tab.value ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                 <div className="flex items-center gap-1 bg-secondary p-1 rounded-lg">
                    <button 
                        onClick={() => setViewMode('list')} 
                        className={`px-3 py-1.5 flex items-center gap-2 rounded-md text-sm font-medium transition-colors ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`} 
                        aria-label="List View"
                    >
                        <ListBulletIcon className="w-5 h-5"/>
                        <span>List</span>
                    </button>
                    <button 
                        onClick={() => setViewMode('cashbook')} 
                        className={`px-3 py-1.5 flex items-center gap-2 rounded-md text-sm font-medium transition-colors ${viewMode === 'cashbook' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`} 
                        aria-label="Cashbook View"
                    >
                        <TableCellsIcon className="w-5 h-5"/>
                        <span>Cashbook</span>
                    </button>
                </div>
            </div>

            {viewMode === 'list' ? (
                 <div className="space-y-6 animate-fade-in">
                    {sortedDateKeys.length > 0 ? sortedDateKeys.map(dateKey => {
                        const dailyTransactions = groupedTransactions[dateKey];
                        const dailyIncome = dailyTransactions.filter(t => t.type === TransactionType.Income).reduce((sum, t) => sum + t.amount, 0);
                        const dailyExpenses = dailyTransactions.filter(t => t.type === TransactionType.Expense).reduce((sum, t) => sum + t.amount, 0);
                        const dailyNet = dailyIncome - dailyExpenses;

                        return (
                            <div key={dateKey} className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-px flex-1 bg-border"></div>
                                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{formatDateHeader(dateKey)}</h4>
                                    <div className="h-px flex-1 bg-border"></div>
                                </div>
                                
                                <div className="grid grid-cols-3 gap-2 text-center bg-card border border-border p-3 rounded-lg">
                                    <div><span className="text-xs text-muted-foreground block">INCOME</span><span className="font-bold text-success">{formatCurrency(dailyIncome)}</span></div>
                                    <div><span className="text-xs text-muted-foreground block">EXPENSES</span><span className="font-bold text-warning">{formatCurrency(dailyExpenses)}</span></div>
                                    <div><span className={`font-bold ${dailyNet < 0 ? 'text-destructive' : 'text-info'}`}><span className="text-xs text-muted-foreground block">NET</span>{formatCurrency(dailyNet)}</span></div>
                                </div>
                                
                                <div className="space-y-2">
                                    {dailyTransactions.map(t => (
                                        <TransactionRow 
                                            key={t.id}
                                            transaction={t} 
                                            inventory={inventory}
                                            onDeleteTransaction={onDeleteTransaction}
                                            onEditTransaction={onEditTransaction}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    }) : (
                        <div className="text-center py-16 text-muted-foreground">
                            <p className="font-semibold text-lg">No transactions found.</p>
                            <p>Try changing the filter or adding a new transaction.</p>
                        </div>
                    )}
                </div>
            ) : (
                <CashbookTable data={groupedCashbookData} sortedDateKeys={sortedCashbookDateKeys} />
            )}
        </div>
    );
};

export default TransactionsPage;
