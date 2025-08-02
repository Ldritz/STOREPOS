import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Card from './Card';
import { Transaction, TransactionType, InventoryItem, Page } from '../types';
import { TrendingUpIcon, TrendingDownIcon, WalletIcon } from './Icons';

// Chart Component (styling changes for dark theme)
interface ChartData { name: string; income: number; expense: number; }
const IncomeExpenseChart: React.FC<{ data: ChartData[] }> = ({ data }) => {
  const formatYAxis = (tick: number) => `₱${tick.toLocaleString()}`;
  return (
    <div className="w-full h-72 md:h-80">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false}/>
          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={formatYAxis} tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1.5, strokeDasharray: '3 3' }}
            contentStyle={{
              backgroundColor: 'hsl(var(--popover))',
              borderColor: 'hsl(var(--border))',
              borderRadius: '0.5rem',
              color: 'hsl(var(--popover-foreground))'
            }}
             labelStyle={{ fontWeight: 'bold' }}
          />
          <Legend wrapperStyle={{ color: 'hsl(var(--foreground))', paddingTop: '10px' }}/>
          <Line 
            type="monotone" 
            dataKey="income" 
            stroke="hsl(var(--success))" 
            strokeWidth={2.5} 
            name="Income"
            dot={false}
            activeDot={{ r: 6, strokeWidth: 2, fill: 'hsl(var(--background))', stroke: 'hsl(var(--success))' }} 
          />
          <Line 
            type="monotone" 
            dataKey="expense" 
            stroke="hsl(var(--warning))" 
            strokeWidth={2.5} 
            name="Expense"
            dot={false}
            activeDot={{ r: 6, strokeWidth: 2, fill: 'hsl(var(--background))', stroke: 'hsl(var(--warning))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Stat Card for the top row summary
interface StatCardProps {
  title: string;
  amount: number;
  Icon: React.ElementType;
  iconClass: string;
  isToday?: boolean;
}
const StatCard: React.FC<StatCardProps> = ({ title, amount, Icon, iconClass, isToday }) => (
    <div className="bg-card border border-border p-4 rounded-lg flex justify-between items-center">
        <div>
            <p className="text-sm text-muted-foreground font-medium">{title}</p>
            <p className="text-2xl lg:text-3xl font-bold text-foreground mt-1">
                {amount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
            </p>
             {isToday && amount === 0 && (
              <p className="text-xs text-muted-foreground mt-1">No transactions for today yet.</p>
            )}
        </div>
        <div className={`p-3 rounded-md ${iconClass}`}>
            <Icon className="w-8 h-8" />
        </div>
    </div>
);

// Low Stock Alerts Card
interface LowStockAlertsProps {
  inventory: InventoryItem[];
  onNavigate: (page: Page) => void;
}
const LowStockAlerts: React.FC<LowStockAlertsProps> = ({ inventory, onNavigate }) => {
    const lowStockItems = inventory.filter(item => item.stock <= 5 && !item.isDisabled);
    const hasLowStock = lowStockItems.length > 0;

    return (
        <Card 
            title="Low Stock Alerts" 
            className={hasLowStock ? 'animate-flash-warning' : ''}
            actions={
                <button onClick={() => onNavigate(Page.Inventory)} className="text-sm text-primary font-semibold hover:underline">
                    Manage &rarr;
                </button>
            }>
            {hasLowStock ? (
                <div className='h-72 overflow-y-auto pr-2'>
                    <ul className="space-y-2">
                        {lowStockItems.slice(0, 5).map(item => (
                            <li key={item.id} className="flex justify-between items-center text-sm p-3 bg-secondary rounded-md">
                                <span className="text-secondary-foreground">{item.name}</span>
                                <span className="font-bold text-destructive">{item.stock} {item.unit} left</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="text-center text-muted-foreground h-72 flex flex-col justify-center items-center">
                    <p className="font-semibold">No low stock items.</p>
                    <p className="text-sm">Well done!</p>
                </div>
            )}
        </Card>
    );
};

// Top Products Chart
interface TopProductsChartProps {
    data: { name: string; revenue: number }[];
}
const COLORS = [
    'hsl(var(--info))', 
    'hsl(var(--success))', 
    'hsl(var(--warning))', 
    'hsl(var(--destructive))', 
    'hsl(260, 70%, 60%)' // A nice purple
];

const TopProductsChart: React.FC<TopProductsChartProps> = ({ data }) => {
    const formatCurrency = (value: number) => `₱${value.toLocaleString()}`;
    return (
        <Card title="Top 5 Products by Revenue">
            <div className="w-full h-72">
                {data.length > 0 ? (
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="45%"
                                labelLine={false}
                                outerRadius="80%"
                                fill="#8884d8"
                                dataKey="revenue"
                                nameKey="name"
                            >
                                {data.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={'hsl(var(--background))'} strokeWidth={2}/>
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--popover))',
                                    borderColor: 'hsl(var(--border))',
                                    borderRadius: '0.5rem',
                                    color: 'hsl(var(--popover-foreground))'
                                }}
                                formatter={(value: number | string) => [typeof value === 'number' ? formatCurrency(value) : value, 'Revenue']}
                            />
                            <Legend 
                                iconSize={12} 
                                layout="horizontal" 
                                verticalAlign="bottom" 
                                align="center"
                                wrapperStyle={{ 
                                    color: 'hsl(var(--foreground))', 
                                    fontSize: '14px',
                                    paddingTop: '20px'
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="h-full flex items-center justify-center text-muted-foreground text-center">
                        <div>
                            <p className="font-semibold">No sales data available.</p>
                            <p className="text-sm">Sell some products to see top performers!</p>
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
};

// Summary Row component for totals list
interface SummaryRowProps {
    title: string;
    amount: number;
    Icon: React.ElementType;
    iconClass: string;
}
const SummaryRow: React.FC<SummaryRowProps> = ({ title, amount, Icon, iconClass }) => (
    <div className="bg-card border border-border p-4 rounded-lg flex justify-between items-center">
        <div>
            <p className="text-sm text-muted-foreground font-medium uppercase">{title}</p>
            <p className="text-2xl font-bold text-foreground mt-1">
                {amount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
            </p>
        </div>
        <div className={`p-3 rounded-md ${iconClass}`}>
            <Icon className="w-6 h-6" />
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
        netIncome, chartData, topProductsData
    } = useMemo(() => {
        const today = new Date().toISOString().split('T')[0];
        let ti = 0, te = 0, totalInc = 0, totalExp = 0;

        const monthlyData: { [key: string]: { income: number; expense: number } } = {};
        const currentDate = new Date();
        for (let i = 5; i >= 0; i--) {
            const d = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
            const monthKey = d.toLocaleString('default', { month: 'short', year: 'numeric' });
            monthlyData[monthKey] = { income: 0, expense: 0 };
        }

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
            if (monthlyData[month]) {
                if (t.type === TransactionType.Income) monthlyData[month].income += t.amount;
                else monthlyData[month].expense += t.amount;
            }
        });

        const data: ChartData[] = Object.keys(monthlyData).map(monthKey => ({ 
            name: `${new Date(monthKey).toLocaleString('default', {month: 'short'})} '${new Date(monthKey).getFullYear().toString().slice(2)}`,
            ...monthlyData[monthKey] 
        }));

        const sortedProducts = Object.values(productRevenue)
            .sort((a, b) => b.revenue - a.revenue)
            .slice(0, 5);

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
                <StatCard title="TODAY'S INCOME" amount={todaysIncome} Icon={TrendingUpIcon} iconClass="bg-success text-success-foreground" isToday />
                <StatCard title="TODAY'S EXPENSES" amount={todaysExpenses} Icon={TrendingDownIcon} iconClass="bg-warning text-warning-foreground" isToday />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <LowStockAlerts inventory={inventory} onNavigate={onNavigate} />
                <TopProductsChart data={topProductsData} />
            </div>

            <Card title="Monthly Performance">
                 {chartData.length > 0 ? (
                    <IncomeExpenseChart data={chartData} />
                ) : (
                    <div className="h-full flex flex-col justify-center items-center text-center py-10 text-muted-foreground">
                        <p className="font-semibold">No transaction data for chart.</p>
                        <p className="text-sm">Add some transactions to get started!</p>
                    </div>
                )}
            </Card>s

            <div className="space-y-4">
                <SummaryRow title="TOTAL INCOME" amount={totalIncome} Icon={TrendingUpIcon} iconClass="bg-success text-success-foreground" />
                <SummaryRow title="TOTAL EXPENSES" amount={totalExpenses} Icon={TrendingDownIcon} iconClass="bg-warning text-warning-foreground" />
                <SummaryRow title="NET INCOME" amount={netIncome} Icon={WalletIcon} iconClass="bg-info text-info-foreground" />
            </div>
        </div>
    );
};

export default DashboardPage;
