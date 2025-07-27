
import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from './Card';
import { Transaction, TransactionType, InventoryItem, Page } from '../types';
import { TrendingUpIcon, TrendingDownIcon, WalletIcon, WarningIcon, TrendingUpIcon as TrendingUpIcon2 } from './Icons';

// Chart Component (styling changes for dark theme)
interface ChartData { name: string; income: number; expense: number; }
const IncomeExpenseChart: React.FC<{ data: ChartData[] }> = React.memo(({ data }) => {
  const formatYAxis = (tick: number) => `₱${tick.toLocaleString()}`;
  return (
    <div className="w-full h-72 md:h-80">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={formatYAxis} />
          <Tooltip
            cursor={{ fill: 'hsl(var(--accent))' }}
            contentStyle={{
              backgroundColor: 'hsl(var(--popover))',
              borderColor: 'hsl(var(--border))',
              borderRadius: '0.75rem',
              color: 'hsl(var(--popover-foreground))',
              boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
            }}
             labelStyle={{ fontWeight: 'bold' }}
          />
          <Legend wrapperStyle={{ color: 'hsl(var(--foreground))' }}/>
          <Bar dataKey="income" fill="hsl(var(--success))" name="Income" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expense" fill="hsl(var(--warning))" name="Expense" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});

// Stat Card for the top row summary
interface StatCardProps {
  title: string;
  amount: number;
  Icon: React.ElementType;
  iconClass: string;
  trend?: number;
  trendLabel?: string;
}
const StatCard: React.FC<StatCardProps> = React.memo(({ title, amount, Icon, iconClass, trend, trendLabel }) => (
    <div className="card-modern group hover:shadow-strong transition-all duration-300">
        <div className="flex justify-between items-start">
            <div className="flex-1">
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{title}</p>
                <p className="text-2xl lg:text-3xl font-bold text-foreground mt-2">
                    {amount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                </p>
                {trend !== undefined && (
                  <div className={`flex items-center gap-1 mt-2 text-sm ${
                    trend > 0 ? 'text-success' : trend < 0 ? 'text-destructive' : 'text-muted-foreground'
                  }`}>
                    <TrendingUpIcon2 className={`w-4 h-4 ${trend < 0 ? 'rotate-180' : ''}`} />
                    <span className="font-medium">{Math.abs(trend)}%</span>
                    <span className="text-muted-foreground">{trendLabel}</span>
                  </div>
                )}
            </div>
            <div className={`p-3 rounded-xl ${iconClass} group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8" />
            </div>
        </div>
    </div>
));

// Low Stock Alerts Card
interface LowStockAlertsProps {
  inventory: InventoryItem[];
  onNavigate: (page: Page) => void;
}
const LowStockAlerts: React.FC<LowStockAlertsProps> = React.memo(({ inventory, onNavigate }) => {
    const lowStockItems = useMemo(() => 
        inventory.filter(item => item.stock <= 5), [inventory]
    );

    return (
        <Card 
          title="Low Stock Alerts" 
          subtitle={`${lowStockItems.length} items need attention`}
          icon={<WarningIcon className="w-5 h-5" />}
          actions={
            <button onClick={() => onNavigate(Page.Inventory)} className="text-sm text-primary font-semibold hover:underline transition-colors">
                Manage &rarr;
            </button>
          }
        >
            {lowStockItems.length > 0 ? (
                <div className='h-72 overflow-y-auto pr-2 space-y-2'>
                    {lowStockItems.slice(0, 5).map(item => (
                        <div key={item.id} className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-foreground">{item.name}</span>
                            </div>
                            <span className="font-bold text-destructive text-sm">
                                {item.stock} {item.unit} left
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-muted-foreground py-8">
                    <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUpIcon className="w-8 h-8 text-success" />
                    </div>
                    <p className="font-semibold text-foreground">No low stock items</p>
                    <p className="text-sm">Well done! All items are well stocked.</p>
                </div>
            )}
        </Card>
    );
});

// Top Products Chart
interface TopProductsChartProps {
    data: { name: string; revenue: number }[];
}
const TopProductsChart: React.FC<TopProductsChartProps> = React.memo(({ data }) => {
    const formatCurrency = (value: number) => `₱${value.toLocaleString()}`;
    return (
        <Card 
          title="Top Products by Revenue" 
          subtitle="Best performing products this month"
          icon={<TrendingUpIcon className="w-5 h-5" />}
        >
            {data.length > 0 ? (
                <div className="space-y-3">
                    {data.map((product, index) => (
                        <div key={product.name} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-bold flex items-center justify-center">
                                    {index + 1}
                                </div>
                                <span className="font-medium text-foreground">{product.name}</span>
                            </div>
                            <span className="font-bold text-success font-mono">{formatCurrency(product.revenue)}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-muted-foreground py-8">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUpIcon className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="font-semibold text-foreground">No product data available</p>
                    <p className="text-sm">Add some sales to see top products!</p>
                </div>
            )}
        </Card>
    );
});

// Summary Row Component
interface SummaryRowProps {
    title: string;
    amount: number;
    Icon: React.ElementType;
    iconClass: string;
    trend?: number;
}
const SummaryRow: React.FC<SummaryRowProps> = React.memo(({ title, amount, Icon, iconClass, trend }) => (
    <div className="card-modern hover:shadow-medium transition-all duration-300">
        <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${iconClass}`}>
                <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{title}</p>
                <p className="text-xl font-bold text-foreground">{amount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</p>
                {trend !== undefined && (
                  <p className={`text-xs mt-1 ${trend > 0 ? 'text-success' : 'text-destructive'}`}>
                    {trend > 0 ? '+' : ''}{trend}% from last month
                  </p>
                )}
            </div>
        </div>
    </div>
));

interface DashboardPageProps {
  transactions: Transaction[];
  inventory: InventoryItem[];
  onNavigate: (page: Page) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = React.memo(({ transactions, inventory, onNavigate }) => {
    const { 
        todaysIncome, todaysExpenses, 
        totalIncome, totalExpenses, 
        netIncome, chartData, topProductsData
    } = useMemo(() => {
        const today = new Date().toISOString().split('T')[0];
        let ti = 0, te = 0, totalInc = 0, totalExp = 0;

        const monthlyData: { [key: string]: { income: number; expense: number } } = {};
        const productRevenue: Record<string, { name: string; revenue: number }> = {};
        
        transactions.forEach(t => {
            const isToday = t.date.startsWith(today);
            if (t.type === TransactionType.Income) {
                totalInc += t.amount;
                if (isToday) ti += t.amount;

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
        };
    }, [transactions, inventory]);
    
    return (
        <div className="space-y-6 animate-fade-in">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StatCard 
                  title="TODAY'S INCOME" 
                  amount={todaysIncome} 
                  Icon={TrendingUpIcon} 
                  iconClass="bg-success/20 text-success" 
                  trend={12}
                  trendLabel="vs yesterday"
                />
                <StatCard 
                  title="TODAY'S EXPENSES" 
                  amount={todaysExpenses} 
                  Icon={TrendingDownIcon} 
                  iconClass="bg-warning/20 text-warning"
                  trend={-5}
                  trendLabel="vs yesterday"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <LowStockAlerts inventory={inventory} onNavigate={onNavigate} />
                <TopProductsChart data={topProductsData} />
            </div>

            <Card 
              title="Monthly Performance" 
              subtitle="Income vs Expenses over time"
              icon={<TrendingUpIcon className="w-5 h-5" />}
            >
                 {chartData.length > 0 ? (
                    <IncomeExpenseChart data={chartData} />
                ) : (
                    <div className="h-full flex flex-col justify-center items-center text-center py-10 text-muted-foreground">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                            <TrendingUpIcon className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="font-semibold text-foreground">No transaction data for chart</p>
                        <p className="text-sm">Add some transactions to get started!</p>
                    </div>
                )}
            </Card>

            <div className="space-y-4">
                <SummaryRow title="TOTAL INCOME" amount={totalIncome} Icon={TrendingUpIcon} iconClass="bg-success/20 text-success" trend={8} />
                <SummaryRow title="TOTAL EXPENSES" amount={totalExpenses} Icon={TrendingDownIcon} iconClass="bg-warning/20 text-warning" trend={-3} />
                <SummaryRow title="NET INCOME" amount={netIncome} Icon={WalletIcon} iconClass="bg-info/20 text-info" trend={15} />
            </div>
        </div>
    );
});

export default DashboardPage;
