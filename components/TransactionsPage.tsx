
import React, { useState, useMemo } from 'react';
import Card from './Card';
import { Transaction, TransactionType } from '../types';
import { TrendingUpIcon, TrendingDownIcon, WalletIcon, TrashIcon, TableCellsIcon, ListBulletIcon } from './Icons';

interface StatBoxProps {
  title: string;
  amount: number;
  Icon: React.ElementType;
  iconClass: string;
  trend?: number;
}
const StatBox: React.FC<StatBoxProps> = React.memo(({ title, amount, Icon, iconClass, trend }) => (
  <div className="card-modern group hover:shadow-medium transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-xl ${iconClass} group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{title}</p>
        <p className="text-2xl font-bold text-foreground mt-1">
          {amount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
        </p>
        {trend !== undefined && (
          <p className={`text-xs mt-1 ${trend > 0 ? 'text-success' : 'text-destructive'}`}>
            {trend > 0 ? '+' : ''}{trend}% from last month
          </p>
        )}
      </div>
    </div>
  </div>
));

interface OverviewCardProps {
  title: string;
  subtitle: string;
  amount: number;
  Icon: React.ElementType;
  iconClass: string;
}
const OverviewCard: React.FC<OverviewCardProps> = React.memo(({ title, subtitle, amount, Icon, iconClass }) => (
  <div className="card-modern hover:shadow-medium transition-all duration-300">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${iconClass}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-foreground">
          {amount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
        </p>
      </div>
    </div>
  </div>
));

interface CashbookTableProps {
  transactions: Transaction[];
  onDeleteTransaction: (transaction: Transaction) => void;
}
const CashbookTable: React.FC<CashbookTableProps> = React.memo(({ transactions, onDeleteTransaction }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-PH', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border/50">
            <th className="text-left p-4 font-semibold text-muted-foreground uppercase tracking-wider">Date</th>
            <th className="text-left p-4 font-semibold text-muted-foreground uppercase tracking-wider">Type</th>
            <th className="text-left p-4 font-semibold text-muted-foreground uppercase tracking-wider">Description</th>
            <th className="text-right p-4 font-semibold text-muted-foreground uppercase tracking-wider">Amount</th>
            <th className="text-center p-4 font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-secondary/30 transition-colors">
              <td className="p-4 text-sm text-muted-foreground font-mono">{formatDate(transaction.date)}</td>
              <td className="p-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  transaction.type === TransactionType.Income 
                    ? 'bg-success/20 text-success' 
                    : 'bg-warning/20 text-warning'
                }`}>
                  {transaction.type === TransactionType.Income ? 'Income' : 'Expense'}
                </span>
              </td>
              <td className="p-4">
                <div>
                  <p className="font-medium text-foreground">{transaction.description}</p>
                  {transaction.items && transaction.items.length > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {transaction.items.length} item{transaction.items.length > 1 ? 's' : ''}
                    </p>
                  )}
                </div>
              </td>
              <td className="p-4 text-right">
                <span className={`font-bold ${
                  transaction.type === TransactionType.Income ? 'text-success' : 'text-warning'
                }`}>
                  {transaction.type === TransactionType.Income ? '+' : '-'}
                  {transaction.amount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                </span>
              </td>
              <td className="p-4 text-center">
                <button
                  onClick={() => onDeleteTransaction(transaction)}
                  className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors focus-ring"
                  title="Delete transaction"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

interface TransactionsPageProps {
  transactions: Transaction[];
  inventory: any[];
  onDeleteTransaction: (transaction: Transaction) => void;
}

const TransactionsPage: React.FC<TransactionsPageProps> = React.memo(({ transactions, inventory, onDeleteTransaction }) => {
  const [viewMode, setViewMode] = useState<'cashbook' | 'list'>('cashbook');
  const [expandedDates, setExpandedDates] = useState<Set<string>>(new Set());

  const { incomeStats, expenseStats } = useMemo(() => {
    const income = transactions.filter(t => t.type === TransactionType.Income);
    const expenses = transactions.filter(t => t.type === TransactionType.Expense);
    
    const incomeTotal = income.reduce((sum, t) => sum + t.amount, 0);
    const expenseTotal = expenses.reduce((sum, t) => sum + t.amount, 0);
    
    return {
      incomeStats: {
        total: incomeTotal,
        count: income.length,
        average: income.length > 0 ? incomeTotal / income.length : 0
      },
      expenseStats: {
        total: expenseTotal,
        count: expenses.length,
        average: expenses.length > 0 ? expenseTotal / expenses.length : 0
      }
    };
  }, [transactions]);

  const groupedCashbookData = useMemo(() => {
    const grouped = transactions.reduce((acc, transaction) => {
      const date = transaction.date.split('T')[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(transaction);
      return acc;
    }, {} as Record<string, Transaction[]>);

    return Object.entries(grouped)
      .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
      .map(([date, dayTransactions]) => ({
        date,
        transactions: dayTransactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
        totalIncome: dayTransactions
          .filter(t => t.type === TransactionType.Income)
          .reduce((sum, t) => sum + t.amount, 0),
        totalExpense: dayTransactions
          .filter(t => t.type === TransactionType.Expense)
          .reduce((sum, t) => sum + t.amount, 0)
      }));
  }, [transactions]);

  const groupedTransactions = useMemo(() => {
    const grouped = transactions.reduce((acc, transaction) => {
      const date = transaction.date.split('T')[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(transaction);
      return acc;
    }, {} as Record<string, Transaction[]>);

    return Object.entries(grouped)
      .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
      .map(([date, dayTransactions]) => ({
        date,
        transactions: dayTransactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      }));
  }, [transactions]);

  const toggleDateExpansion = (date: string) => {
    const newExpanded = new Set(expandedDates);
    if (newExpanded.has(date)) {
      newExpanded.delete(date);
    } else {
      newExpanded.add(date);
    }
    setExpandedDates(newExpanded);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-PH', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatBox 
          title="Total Income" 
          amount={incomeStats.total} 
          Icon={TrendingUpIcon} 
          iconClass="bg-success/20 text-success"
          trend={12}
        />
        <StatBox 
          title="Total Expenses" 
          amount={expenseStats.total} 
          Icon={TrendingDownIcon} 
          iconClass="bg-warning/20 text-warning"
          trend={-5}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OverviewCard 
          title="Income Overview" 
          subtitle={`${incomeStats.count} transactions`}
          amount={incomeStats.average} 
          Icon={TrendingUpIcon} 
          iconClass="bg-success/20 text-success"
        />
        <OverviewCard 
          title="Expense Overview" 
          subtitle={`${expenseStats.count} transactions`}
          amount={expenseStats.average} 
          Icon={TrendingDownIcon} 
          iconClass="bg-warning/20 text-warning"
        />
      </div>

      <Card 
        title="Transaction History" 
        subtitle={`${transactions.length} total transactions`}
        icon={<WalletIcon className="w-5 h-5" />}
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('cashbook')}
              className={`p-2 rounded-lg transition-colors focus-ring ${
                viewMode === 'cashbook' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
              title="Cashbook view"
            >
              <TableCellsIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors focus-ring ${
                viewMode === 'list' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
              title="List view"
            >
              <ListBulletIcon className="w-5 h-5" />
            </button>
          </div>
        }
      >
        {viewMode === 'cashbook' ? (
          <CashbookTable transactions={transactions} onDeleteTransaction={onDeleteTransaction} />
        ) : (
          <div className="space-y-4">
            {groupedTransactions.map(({ date, transactions: dayTransactions }) => (
              <div key={date} className="border border-border/50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleDateExpansion(date)}
                  className="w-full p-4 text-left hover:bg-secondary/30 transition-colors focus-ring"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{formatDate(date)}</h3>
                      <p className="text-sm text-muted-foreground">
                        {dayTransactions.length} transaction{dayTransactions.length > 1 ? 's' : ''}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">
                          {dayTransactions
                            .filter(t => t.type === TransactionType.Income)
                            .reduce((sum, t) => sum + t.amount, 0)
                            .toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                        </p>
                        <p className="text-xs text-muted-foreground">Income</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">
                          {dayTransactions
                            .filter(t => t.type === TransactionType.Expense)
                            .reduce((sum, t) => sum + t.amount, 0)
                            .toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                        </p>
                        <p className="text-xs text-muted-foreground">Expense</p>
                      </div>
                    </div>
                  </div>
                </button>
                
                {expandedDates.has(date) && (
                  <div className="border-t border-border/50 bg-secondary/20">
                    {dayTransactions.map((transaction) => (
                      <div key={transaction.id} className="p-4 border-b border-border/50 last:border-b-0 hover:bg-secondary/30 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                transaction.type === TransactionType.Income 
                                  ? 'bg-success/20 text-success' 
                                  : 'bg-warning/20 text-warning'
                              }`}>
                                {transaction.type === TransactionType.Income ? 'Income' : 'Expense'}
                              </span>
                              <p className="font-medium text-foreground">{transaction.description}</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {new Date(transaction.date).toLocaleTimeString('en-PH', { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`font-bold ${
                              transaction.type === TransactionType.Income ? 'text-success' : 'text-warning'
                            }`}>
                              {transaction.type === TransactionType.Income ? '+' : '-'}
                              {transaction.amount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                            </span>
                            <button
                              onClick={() => onDeleteTransaction(transaction)}
                              className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors focus-ring"
                              title="Delete transaction"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
});

export default TransactionsPage;
