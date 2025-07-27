
import React from 'react';
import { Page } from '../types';
import { DashboardIcon, TransactionsIcon, InventoryIcon, SettingsIcon } from './Icons';

interface BottomNavProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = React.memo(({ currentPage, setCurrentPage }) => {
  const navItems = [
    { page: Page.Dashboard, label: 'Dashboard', icon: DashboardIcon, color: 'from-blue-500 to-blue-600' },
    { page: Page.Transactions, label: 'Transactions', icon: TransactionsIcon, color: 'from-green-500 to-green-600' },
    { page: Page.Inventory, label: 'Inventory', icon: InventoryIcon, color: 'from-purple-500 to-purple-600' },
    { page: Page.Settings, label: 'Settings', icon: SettingsIcon, color: 'from-gray-500 to-gray-600' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="glass border-t border-border/50 backdrop-blur-xl">
        <div className="flex items-center justify-around p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.page;
            
            return (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`group flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-200 focus-ring ${
                  isActive 
                    ? `bg-gradient-to-r ${item.color} text-white shadow-medium` 
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                <div className={`p-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-white/20' 
                    : 'bg-secondary group-hover:bg-secondary/80'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-medium transition-all duration-200 ${
                  isActive ? 'text-white' : 'text-muted-foreground group-hover:text-foreground'
                }`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute -top-1 w-2 h-2 bg-white rounded-full shadow-sm"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
});

export default BottomNav;
