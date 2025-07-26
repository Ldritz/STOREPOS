import React, { Suspense } from 'react';
import { useInventory } from '../context/InventoryContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import TrendingUpIcon from '../components/icons/TrendingUpIcon.tsx';
import TrendingDownIcon from '../components/icons/TrendingDownIcon.tsx';
import WalletIcon from '../components/icons/WalletIcon.tsx';
import StoreIcon from '../components/icons/StoreIcon.tsx';
import WarningIcon from '../components/icons/WarningIcon.tsx';
import CheckCircleIcon from '../components/icons/CheckCircleIcon.tsx';
import ArrowRightIcon from '../components/icons/ArrowRightIcon.tsx';
import type { View } from '../types.ts';

// Lazy load chart components for better initial page performance and code splitting
const DashboardChart = React.lazy(() => import('../components/DashboardChart.tsx'));
const ExpensePieChart = React.lazy(() => import('../components/ExpensePieChart.tsx'));
const TopProductsBarChart = React.lazy(() => import('../components/TopProductsBarChart.tsx'));

const formatCurrency = (value: number) => {
    // Use the Intl.NumberFormat API for robust, locale-aware currency formatting.
    // 'en-PH' is used for Philippine Peso context.
    // This handles negative signs, grouping separators, and the currency symbol correctly.
    return new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};

const ChartLoadingFallback = () => (
    <div className="relative h-96 w-full bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
    </div>
);


interface DashboardCardProps {
    title: string;
    value: number;
    icon: React.ComponentType<{ className?: string }>;
    loading?: boolean;
    tooltip?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon: Icon, loading, tooltip }) => {
    const valueColor = value < 0 ? 'text-red-600 dark:text-red-400' : 'text-slate-800 dark:text-slate-100';
    return (
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-6 relative overflow-hidden flex-1 min-w-[240px]" title={tooltip}>
            <Icon className="absolute -right-4 -bottom-4 h-28 w-28 text-slate-100 dark:text-slate-700/50" />
            <div className="relative">
                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{title}</h3>
                <div className={`text-3xl font-bold mt-2 ${valueColor}`}>
                    {loading ? (
                        <div className="h-9 w-4/5 bg-slate-200 dark:bg-slate-700 animate-pulse rounded-md"></div>
                    ) : (
                        formatCurrency(value)
                    )}
                </div>
            </div>
        </div>
    );
};

interface HomePageProps {
  setActiveView: (view: View) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActiveView }) => {
    const { 
        inventory, 
        loading: inventoryLoading, 
        transactions, 
        expenses, 
        transactionsLoading, 
        expensesLoading, 
        storeInfo, 
        storeInfoLoading 
    } = useInventory();
    const { theme } = useTheme();

    const dashboardCardsLoading = transactionsLoading || expensesLoading;
    const chartLoading = transactionsLoading || expensesLoading;
    const analyticsLoading = transactionsLoading || expensesLoading || inventoryLoading;

    const totalIncome = React.useMemo(() => transactions.reduce((acc, sale) => acc + sale.total, 0), [transactions]);
    const totalExpenses = React.useMemo(() => expenses.reduce((acc, expense) => acc + expense.amount, 0), [expenses]);
    const netIncome = totalIncome - totalExpenses;

    const lowStockItems = React.useMemo(() => {
        return inventory.filter(item => item.stock < 10);
    }, [inventory]);
    
    const monthlyData = React.useMemo(() => {
        const data: { [key: string]: { income: number, expenses: number } } = {
            'JANUARY': { income: 0, expenses: 0 }, 'FEBRUARY': { income: 0, expenses: 0 },
            'MARCH': { income: 0, expenses: 0 }, 'APRIL': { income: 0, expenses: 0 },
            'MAY': { income: 0, expenses: 0 }, 'JUNE': { income: 0, expenses: 0 },
            'JULY': { income: 0, expenses: 0 }, 'AUGUST': { income: 0, expenses: 0 },
            'SEPTEMBER': { income: 0, expenses: 0 }, 'OCTOBER': { income: 0, expenses: 0 },
            'NOVEMBER': { income: 0, expenses: 0 }, 'DECEMBER': { income: 0, expenses: 0 },
        };
        const monthNames = Object.keys(data);
        const currentYear = new Date().getFullYear();

        transactions.forEach(sale => {
            if (sale.date && typeof sale.date === 'object' && 'seconds' in sale.date) {
                const saleDate = new Date(sale.date.seconds * 1000);
                if (saleDate.getFullYear() === currentYear) {
                    const monthIndex = saleDate.getMonth();
                    data[monthNames[monthIndex]].income += sale.total;
                }
            }
        });

        expenses.forEach(expense => {
            // From the context, expense.date is already a JS Date object or undefined.
            if (expense.date instanceof Date && expense.date.getFullYear() === currentYear) {
                const monthIndex = expense.date.getMonth();
                data[monthNames[monthIndex]].expenses += expense.amount;
            }
        });

        return Object.entries(data).map(([month, values]) => ({ month, ...values }));
    }, [transactions, expenses]);

    const chartData = {
        labels: monthlyData.map((_d, i) => {
            const date = new Date();
            date.setMonth(i);
            return date.toLocaleString('en-US', { month: 'short' });
        }),
        datasets: [
            {
                label: 'TOTAL INCOME',
                data: monthlyData.map(d => d.income),
                borderColor: '#16a34a', // green-600
                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                tension: 0.4,
                borderWidth: 3,
                pointBackgroundColor: '#16a34a',
            },
            {
                label: 'TOTAL EXPENSES',
                data: monthlyData.map(d => d.expenses),
                borderColor: '#d97706', // amber-600
                backgroundColor: 'rgba(217, 119, 6, 0.1)',
                tension: 0.4,
                borderWidth: 3,
                pointBackgroundColor: '#d97706',
            }
        ]
    };

    const maxChartValue = Math.max(...monthlyData.flatMap(d => [d.income, d.expenses]), 0);
    const chartYMax = maxChartValue > 0 ? Math.ceil(maxChartValue / 1000) * 1000 + 1000 : 5000;

    // --- New Chart Data Calculations ---

    const expenseBreakdown = React.useMemo(() => {
        const breakdown = { manual: 0, inventory: 0 };
        expenses.forEach(expense => {
            if (expense.type === 'inventory') {
                breakdown.inventory += expense.amount;
            } else {
                breakdown.manual += expense.amount;
            }
        });
        return breakdown;
    }, [expenses]);

    const expensePieChartData = {
        labels: ['Manual Expenses', 'Inventory Usage'],
        datasets: [{
            data: [expenseBreakdown.manual, expenseBreakdown.inventory],
            backgroundColor: [
                '#f59e0b', // amber-500
                '#ef4444', // red-500
            ],
            borderWidth: 2,
        }]
    };

    const topSellingProducts = React.useMemo(() => {
        const productRevenue: { [productId: string]: { name: string, revenue: number } } = {};

        transactions.forEach(sale => {
            sale.items.forEach(item => {
                if (item.productId.startsWith('custom-')) return;

                if (!productRevenue[item.productId]) {
                    const product = inventory.find(p => p.id === item.productId);
                    productRevenue[item.productId] = {
                        name: product ? product.name : item.productName,
                        revenue: 0,
                    };
                }
                productRevenue[item.productId].revenue += item.priceAtSale * item.quantity;
            });
        });

        return Object.values(productRevenue)
            .sort((a, b) => b.revenue - a.revenue)
            .slice(0, 5);
    }, [transactions, inventory]);

    const topProductsChartData = {
        labels: topSellingProducts.map(p => p.name),
        datasets: [{
            label: 'Total Revenue',
            data: topSellingProducts.map(p => p.revenue),
            backgroundColor: theme === 'dark' ? '#16a34a' : '#22c55e', // primary-600 dark, primary-500 light
            borderRadius: 4,
        }]
    };


    return (
        <div className="bg-slate-100 dark:bg-slate-900 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-10">
                
                <header className="flex items-center gap-4">
                    {storeInfoLoading ? (
                        <>
                           <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse"></div>
                           <div className="space-y-2">
                               <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                               <div className="h-8 w-48 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                           </div>
                        </>
                    ) : (
                        <>
                           <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center overflow-hidden border-2 border-white dark:border-slate-800 shadow-md">
                                {storeInfo?.imageUrl ? (
                                    <img src={storeInfo.imageUrl} alt="Store Logo" className="w-full h-full object-cover" />
                                ) : (
                                    <StoreIcon className="w-8 h-8 text-slate-400 dark:text-slate-500" />
                                )}
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Welcome to</p>
                                <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{storeInfo?.name}</h1>
                            </div>
                        </>
                    )}
                </header>

                {/* Dashboard Section */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Dashboard</h2>
                    <div className="flex flex-wrap gap-6 mb-8">
                        <DashboardCard title="Total Income" value={totalIncome} icon={TrendingUpIcon} loading={dashboardCardsLoading} tooltip="Total revenue from all completed sales." />
                        <DashboardCard title="Total Expenses" value={-totalExpenses} icon={TrendingDownIcon} loading={dashboardCardsLoading} tooltip="Sum of all recorded expenses, both manual and from inventory usage." />
                        <DashboardCard title="Net Income" value={netIncome} icon={WalletIcon} loading={dashboardCardsLoading} tooltip="The difference between total income and total expenses." />
                    </div>

                    {/* Low Stock Alerts Section */}
                    <div className="mb-8">
                        {inventoryLoading ? (
                             <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-6">
                                <div className="h-6 w-1/2 bg-slate-200 dark:bg-slate-700 animate-pulse rounded-md mb-4"></div>
                                <div className="space-y-3">
                                    <div className="h-5 w-full bg-slate-200 dark:bg-slate-700 animate-pulse rounded-md"></div>
                                    <div className="h-5 w-5/6 bg-slate-200 dark:bg-slate-700 animate-pulse rounded-md"></div>
                                </div>
                            </div>
                        ) : lowStockItems.length > 0 ? (
                            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 shadow-md">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <WarningIcon className="w-6 h-6 text-amber-500" />
                                        <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200">Low Stock Alerts</h3>
                                    </div>
                                    <button onClick={() => setActiveView('INVENTORY')} className="group flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 transition-colors">
                                        Manage Inventory
                                        <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                                <ul className="space-y-2 max-h-48 overflow-y-auto pr-2">
                                    {lowStockItems.map(item => (
                                        <li key={item.id} className="flex justify-between items-center p-2 rounded-lg bg-white/50 dark:bg-slate-800/30">
                                            <span className="font-medium text-slate-700 dark:text-slate-200">{item.name}</span>
                                            <span className="font-bold text-red-600 dark:text-red-400">
                                                {item.stock} {item.category === 'Feeds' ? item.subtype : 'pcs'} left
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                             <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 shadow-md">
                                <div className="flex items-center gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-green-500" />
                                    <div>
                                        <h3 className="text-xl font-bold text-green-800 dark:text-green-200">Stock Levels Healthy</h3>
                                        <p className="text-sm text-green-700 dark:text-green-300">All products are well-stocked.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {chartLoading ? (
                        <ChartLoadingFallback />
                    ) : (
                        <Suspense fallback={<ChartLoadingFallback />}>
                            <DashboardChart
                                data={chartData}
                                yMax={chartYMax}
                                tooltip="This chart visualizes the total income versus total expenses for each month of the current year."
                            />
                        </Suspense>
                    )}
                </section>

                 {/* Visual Analytics Section */}
                 <section>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Visual Analytics</h2>
                    {analyticsLoading ? (
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <ChartLoadingFallback />
                            <ChartLoadingFallback />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Suspense fallback={<ChartLoadingFallback />}>
                                <ExpensePieChart
                                    title="Expense Breakdown"
                                    data={expensePieChartData}
                                    tooltip="This chart shows the proportion of expenses from manual entries versus the cost of items used from inventory."
                                />
                            </Suspense>
                            <Suspense fallback={<ChartLoadingFallback />}>
                                <TopProductsBarChart
                                    title="Top 5 Products by Revenue"
                                    data={topProductsChartData}
                                    tooltip="This chart ranks your top 5 products based on the total revenue each has generated."
                                />
                            </Suspense>
                        </div>
                    )}
                </section>

                {/* Monthly Summary Section */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Monthly Summary</h2>
                    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="border-b border-slate-200 dark:border-slate-700">
                                <tr>
                                    <th className="p-4 px-5 text-sm font-semibold text-slate-600 dark:text-slate-300 uppercase">Month</th>
                                    <th className="p-4 px-5 text-sm font-semibold text-slate-600 dark:text-slate-300 uppercase text-right">Total Income</th>
                                    <th className="p-4 px-5 text-sm font-semibold text-slate-600 dark:text-slate-300 uppercase text-right">Total Expenses</th>
                                    <th className="p-4 px-5 text-sm font-semibold text-slate-600 dark:text-slate-300 uppercase text-right">Net Income</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chartLoading ? (
                                    [...Array(12)].map((_, i) => (
                                        <tr key={i} className="border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                                            <td className="p-4 px-5"><div className="h-5 w-24 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div></td>
                                            <td className="p-4 px-5 text-right"><div className="h-5 w-32 bg-slate-200 dark:bg-slate-700 rounded animate-pulse ml-auto"></div></td>
                                            <td className="p-4 px-5 text-right"><div className="h-5 w-32 bg-slate-200 dark:bg-slate-700 rounded animate-pulse ml-auto"></div></td>
                                            <td className="p-4 px-5 text-right"><div className="h-5 w-32 bg-slate-200 dark:bg-slate-700 rounded animate-pulse ml-auto"></div></td>
                                        </tr>
                                    ))
                                ) : monthlyData.map((data) => {
                                    const net = data.income - data.expenses;
                                    const netColor = net < 0 ? 'text-red-600 dark:text-red-400' : 'text-slate-600 dark:text-slate-300';
                                    return (
                                        <tr key={data.month} className="border-b border-slate-200 dark:border-slate-700 last:border-b-0 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                                            <td className="p-4 px-5 font-semibold text-slate-800 dark:text-slate-100">{data.month}</td>
                                            <td className="p-4 px-5 text-right text-slate-600 dark:text-slate-300">{formatCurrency(data.income)}</td>
                                            <td className="p-4 px-5 text-right text-slate-600 dark:text-slate-300">{formatCurrency(data.expenses)}</td>
                                            <td className={`p-4 px-5 text-right font-medium ${netColor}`}>{formatCurrency(net)}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;