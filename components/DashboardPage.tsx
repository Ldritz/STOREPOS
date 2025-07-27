
import React, { useMemo, Suspense, lazy } from 'react';
import Card from './Card';
import { Transaction, TransactionType, InventoryItem, Page } from '../types';
import { TrendingUpIcon, TrendingDownIcon, WalletIcon } from './Icons';
import Skeleton from './Skeleton';

// Correct lazy loading for each chart component
const IncomeExpenseChart = lazy(() => import('./ChartComponents').then(m => ({ default: m.IncomeExpenseChart })));
const TopProductsChart = lazy(() => import('./ChartComponents').then(m => ({ default: m.TopProductsChart })));

// Chart Loading Component
const ChartLoading: React.FC = () => (
  <div className="w-full h-72 md:h-80 flex items-center justify-center">
    <Skeleton className="w-full h-72 md:h-80" />
  </div>
);

// Chart Component (styling changes for dark theme)
interface ChartData { name: string; income: number; expense: number; }
const IncomeExpenseChartWrapper: React.FC<{ data: ChartData[] }> = ({ data }) => {
  return (
    <div className="w-full h-72 md:h-80">
      <Suspense fallback={<ChartLoading />}>
        <IncomeExpenseChart data={data} />
      </Suspense>
    </div>
  );
};

// Enhanced Stat Card for the top row summary
interface StatCardProps {
  title: string;
  amount: number;
  Icon: React.ElementType;
  iconClass: string;
  trend?: number;
}
const StatCard: React.FC<StatCardProps> = ({ title, amount, Icon, iconClass, trend }) => (
    <div className="bg-card border border-border p-4 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-200 flex justify-between items-start">
        <div className="flex-1">
            <p className="text-sm text-muted-foreground font-medium">{title}</p>
            <p className="text-2xl lg:text-3xl font-bold text-foreground mt-1">
                {amount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
            </p>
            {trend !== undefined && (
                <div className={`flex items-center gap-1 mt-1 text-xs font-medium ${trend >= 0 ? 'text-success' : 'text-destructive'}`}>
                    <span>{trend >= 0 ? '↗' : '↘'}</span>
                    <span>{Math.abs(trend)}%</span>
                </div>
            )}
        </div>
        <div className={`p-3 rounded-md ${iconClass}`}> 
            <Icon className="w-8 h-8" aria-label={title} />
        </div>
    </div>
);

// Enhanced Low Stock Alerts Card
interface LowStockAlertsProps {
  inventory: InventoryItem[];
  onNavigate: (page: Page) => void;
}
const LowStockAlerts: React.FC<LowStockAlertsProps> = ({ inventory, onNavigate }) => {
    const lowStockItems = inventory.filter(item => item.stock <= 5 && item.stock > 0);
    const outOfStockItems = inventory.filter(item => item.stock === 0);

    return (
        <Card title="Stock Alerts" actions={
             <button onClick={() => onNavigate(Page.Inventory)} className="text-sm text-primary font-semibold hover:underline">
                Manage &rarr;
            </button>
        }>
            <div className='h-72 overflow-y-auto pr-2 space-y-3'>
                {lowStockItems.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold text-warning mb-2">Low Stock Items</h4>
                        <ul className="space-y-2">
                            {lowStockItems.slice(0, 3).map(item => (
                                <li key={item.id} className="flex justify-between items-center text-sm p-3 bg-warning/10 rounded-md border border-warning/20">
                                    <span className="text-foreground line-clamp-1">{item.name}</span>
                                    <span className="font-bold text-warning">{item.stock} {item.unit} left</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                {outOfStockItems.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold text-destructive mb-2">Out of Stock</h4>
                        <ul className="space-y-2">
                            {outOfStockItems.slice(0, 3).map(item => (
                                <li key={item.id} className="flex justify-between items-center text-sm p-3 bg-destructive/10 rounded-md border border-destructive/20">
                                    <span className="text-foreground line-clamp-1">{item.name}</span>
                                    <span className="font-bold text-destructive">Out of stock</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                {lowStockItems.length === 0 && outOfStockItems.length === 0 && (
                    <div className="text-center text-muted-foreground py-8">
                        <div className="text-4xl mb-2">✅</div>
                        <p className="font-semibold">All items in stock!</p>
                        <p className="text-sm">Great job managing inventory</p>
                    </div>
                )}
            </div>
        </Card>
    );
};

// Top Products Chart
interface TopProductsChartProps {
    data: { name: string; revenue: number }[];
}
const TopProductsChartWrapper: React.FC<TopProductsChartProps> = ({ data }) => {
    return (
        <div className="w-full h-72 md:h-80">
            <Suspense fallback={<ChartLoading />}>
                <TopProductsChart data={data} />
            </Suspense>
        </div>
    );
};

// Enhanced Summary Row component for totals list
interface SummaryRowProps {
    title: string;
    amount: number;
    Icon: React.ElementType;
    iconClass: string;
    subtitle?: string;
}
const SummaryRow: React.FC<SummaryRowProps> = ({ title, amount, Icon, iconClass, subtitle }) => (
    <div className="bg-card border border-border p-4 rounded-lg hover:shadow-md transition-shadow">
        <div className="flex justify-between items-center">
            <div className="flex-1">
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{title}</p>
                <p className="text-2xl font-bold text-foreground mt-1">
                    {amount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                </p>
                {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
            </div>
            <div className={`p-3 rounded-md ${iconClass}`}>
                <Icon className="w-6 h-6" />
            </div>
        </div>
    </div>
);

interface DashboardPageProps {
  transactions: Transaction[];
  inventory: InventoryItem[];
  onNavigate: (page: Page) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ transactions, inventory, onNavigate }) => {
    const { 
        todaysIncome, todaysExpenses, 
        totalIncome, totalExpenses, 
        netIncome, chartData, topProductsData,
        monthlyIncome, monthlyExpenses
    } = useMemo(() => {
        const today = new Date().toISOString().split('T')[0];
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        const monthAgo = new Date();
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        
        let ti = 0, te = 0, totalInc = 0, totalExp = 0;
        let wi = 0, we = 0, mi = 0, me = 0;

        const monthlyData: { [key: string]: { income: number; expense: number } } = {};
        const productRevenue: Record<string, { name: string; revenue: number }> = {};
        
        transactions.forEach(t => {
            const isToday = t.date.startsWith(today);
            const tDate = new Date(t.date);
            const isThisWeek = tDate >= weekAgo;
            const isThisMonth = tDate >= monthAgo;
            
            if (t.type === TransactionType.Income) {
                totalInc += t.amount;
                if (isToday) ti += t.amount;
                if (isThisWeek) wi += t.amount;
                if (isThisMonth) mi += t.amount;

                if (t.items) {
                    t.items.forEach(cartItem => {
                        const inventoryItem = inventory.find(i => i.id === cartItem.inventoryItemId);
                        if (inventoryItem) {
                            const revenue = inventoryItem.price * cartItem.quantity;
                            if (productRevenue[inventoryItem.id]) {
                                productRevenue[inventoryItem.id].revenue += revenue;
                            } else {
                                productRevenue[inventoryItem.id] = {
                                    name: inventoryItem.name,
                                    revenue: revenue,
                                };
                            }
                        }
                    });
                }
            } else {
                totalExp += t.amount;
                if (isToday) te += t.amount;
                if (isThisWeek) we += t.amount;
                if (isThisMonth) me += t.amount;
            }

            const month = new Date(t.date).toLocaleString('default', { month: 'short', year: 'numeric' });
            if (!monthlyData[month]) monthlyData[month] = { income: 0, expense: 0 };
            if (t.type === TransactionType.Income) monthlyData[month].income += t.amount;
            else monthlyData[month].expense += t.amount;
        });

        const sortedMonths = Object.keys(monthlyData).sort((a,b) => new Date(a).getTime() - new Date(b).getTime()).slice(-6);
        const data: ChartData[] = sortedMonths.map(month => ({ name: new Date(month).toLocaleString('default', {month: 'short'}), ...monthlyData[month] }));

        const sortedProducts = Object.values(productRevenue)
            .sort((a, b) => b.revenue - a.revenue)
            .slice(0, 5)
            .reverse();

        return {
            todaysIncome: ti,
            todaysExpenses: te,
            totalIncome: totalInc,
            totalExpenses: totalExp,
            netIncome: totalInc - totalExp,
            chartData: data,
            topProductsData: sortedProducts,
            monthlyIncome: mi,
            monthlyExpenses: me,
        };
    }, [transactions, inventory]);
    
    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header Section */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground mt-2">Overview of your business performance</p>
            </div>

            {/* Today's Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StatCard 
                    title="TODAY'S INCOME" 
                    amount={todaysIncome} 
                    Icon={TrendingUpIcon} 
                    iconClass="bg-success/20 text-success" 
                />
                <StatCard 
                    title="TODAY'S EXPENSES" 
                    amount={todaysExpenses} 
                    Icon={TrendingDownIcon} 
                    iconClass="bg-warning/20 text-warning" 
                />
            </div>

            {/* Charts and Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <LowStockAlerts inventory={inventory} onNavigate={onNavigate} />
                <TopProductsChartWrapper data={topProductsData} />
            </div>

            {/* Monthly Performance Chart */}
            <Card title="Monthly Performance Trends">
                 {chartData.length > 0 ? (
                    <IncomeExpenseChartWrapper data={chartData} />
                ) : (
                    <div className="h-full flex flex-col justify-center items-center text-center py-10 text-muted-foreground">
                        <div className="text-4xl mb-2">📈</div>
                        <p className="font-semibold">No transaction data for chart.</p>
                        <p className="text-sm">Add some transactions to see your performance trends!</p>
                    </div>
                )}
            </Card>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SummaryRow 
                    title="TOTAL INCOME" 
                    amount={totalIncome} 
                    Icon={TrendingUpIcon} 
                    iconClass="bg-success/20 text-success"
                    subtitle={`₱${monthlyIncome.toLocaleString()} this month`}
                />
                <SummaryRow 
                    title="TOTAL EXPENSES" 
                    amount={totalExpenses} 
                    Icon={TrendingDownIcon} 
                    iconClass="bg-warning/20 text-warning"
                    subtitle={`₱${monthlyExpenses.toLocaleString()} this month`}
                />
                <SummaryRow 
                    title="NET INCOME" 
                    amount={netIncome} 
                    Icon={WalletIcon} 
                    iconClass="bg-info/20 text-info"
                    subtitle={netIncome >= 0 ? "Positive cash flow" : "Negative cash flow"}
                />
            </div>
        </div>
    );
};

export default DashboardPage;
