import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext.tsx';
import type { Sale } from '../types.ts';

// Helper to format date into MM/DD/YYYY
const formatDate = (timestamp?: Sale['date']) => {
    if (!timestamp?.seconds) return 'Invalid Date';
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
};

// Helper to format date into MMDDYYYY-HHMMSS for a unique-looking ID
const formatSaleId = (timestamp?: Sale['date']) => {
    if (!timestamp?.seconds) return 'N/A';
    const date = new Date(timestamp.seconds * 1000);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    const HH = String(date.getHours()).padStart(2, '0');
    const MM = String(date.getMinutes()).padStart(2, '0');
    const SS = String(date.getSeconds()).padStart(2, '0');
    return `${mm}${dd}${yyyy}-${HH}${MM}${SS}`;
};

const ChevronDownIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const SaleCard: React.FC<{ sale: Sale }> = ({ sale }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-4 flex justify-between items-center text-left"
                aria-expanded={isOpen}
            >
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-primary-700 dark:text-primary-500 sm:text-lg truncate" title={`Sale ID: ${formatSaleId(sale.date)}`}>
                        ID: {formatSaleId(sale.date)}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{formatDate(sale.date)}</p>
                </div>
                <div className="text-right ml-2 flex-shrink-0">
                    <p className="font-bold text-lg text-slate-800 dark:text-slate-100">₱{sale.total.toFixed(2)}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{sale.items.length} {sale.items.length === 1 ? 'item' : 'items'}</p>
                </div>
                <ChevronDownIcon className={`w-6 h-6 ml-2 text-slate-400 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}
            >
                <div className={`px-4 pb-4 border-t border-slate-200 dark:border-slate-700 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-200 mt-3 mb-2">Items Purchased:</h4>
                    <ul className="space-y-2">
                        {sale.items.map((item, index) => (
                            <li key={item.productId + index} className="flex justify-between text-sm p-2 bg-slate-50 dark:bg-slate-700/50 rounded-md">
                                <div>
                                    <p className="font-medium text-slate-800 dark:text-slate-100">{item.productName}</p>
                                    <p className="text-slate-500 dark:text-slate-400">
                                        {item.quantity} &times; ₱{item.priceAtSale.toFixed(2)}
                                    </p>
                                </div>
                                <p className="font-semibold text-slate-800 dark:text-slate-100">
                                    ₱{(item.quantity * item.priceAtSale).toFixed(2)}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
};

const SalesPage: React.FC = () => {
  const { transactions: sales, transactionsLoading: salesLoading } = useInventory();

  const totalRevenue = sales.reduce((sum, sale) => sum + sale.total, 0);
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todaysRevenue = sales
    .filter(sale => sale.date && new Date(sale.date.seconds * 1000) >= today)
    .reduce((sum, sale) => sum + sale.total, 0);

  const thisWeekStart = new Date();
  thisWeekStart.setDate(thisWeekStart.getDate() - thisWeekStart.getDay());
  thisWeekStart.setHours(0, 0, 0, 0);

  const thisWeeksRevenue = sales
    .filter(sale => sale.date && new Date(sale.date.seconds * 1000) >= thisWeekStart)
    .reduce((sum, sale) => sum + sale.total, 0);

  return (
    <div className="p-4 md:p-6 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Sales History</h1>
        <p className="text-slate-500 dark:text-slate-400">Review past transactions and sales performance.</p>
      </header>

      <div className="mb-6 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md">
        <h3 className="font-semibold text-lg mb-3 text-slate-700 dark:text-slate-200">Sales Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Today's Revenue</p>
            <p className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-500">₱{todaysRevenue.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">This Week</p>
            <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">₱{thisWeeksRevenue.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">All Time</p>
            <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">₱{totalRevenue.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 px-2">Recent Transactions</h2>
        {salesLoading ? (
            <div className="text-center py-10"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500 mx-auto"></div></div>
        ) : sales.length === 0 ? (
            <div className="text-center py-10 px-4 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">No Sales Yet</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Your sales history will appear here once you make your first sale.</p>
            </div>
        ) : (
            <ul className="space-y-4">
                {sales.map((sale) => (
                    <SaleCard key={sale.id} sale={sale} />
                ))}
            </ul>
        )}
      </div>
    </div>
  );
};

export default SalesPage;