
import React, { memo } from 'react';
import { Page } from '../types';
import { DashboardIcon, TransactionsIcon, InventoryIcon, SettingsIcon } from './Icons';

interface BottomNavProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = memo(({ currentPage, setCurrentPage }) => {
  const navItems = [
    { page: Page.Dashboard, label: 'Dashboard', icon: DashboardIcon },
    { page: Page.Transactions, label: 'Transactions', icon: TransactionsIcon },
    { page: Page.Inventory, label: 'Inventory', icon: InventoryIcon },
    { page: Page.Settings, label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border md:hidden z-50">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map(({ page, label, icon: Icon }) => {
          const isActive = currentPage === page;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ease-in-out relative group ${
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label={label}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-b-full transition-all duration-200" />
              )}
              
              {/* Icon with smooth transitions */}
              <div className={`transition-all duration-200 ${isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'}`}>
                <Icon className={`w-6 h-6 transition-colors duration-200 ${
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                }`} />
              </div>
              
              {/* Label with fade animation */}
              <span className={`text-xs font-medium mt-1 transition-all duration-200 ${
                isActive 
                  ? 'text-primary opacity-100' 
                  : 'text-muted-foreground opacity-70 group-hover:opacity-100'
              }`}>
                {label}
              </span>
              
              {/* Ripple effect on click */}
              <div className="absolute inset-0 rounded-lg transition-opacity duration-200 opacity-0 group-active:opacity-20 group-active:bg-primary/20" />
            </button>
          );
        })}
      </div>
      
      {/* Safe area for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-card" />
    </nav>
  );
});

BottomNav.displayName = 'BottomNav';

export default BottomNav;
