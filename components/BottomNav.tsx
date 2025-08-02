
import React from 'react';
import { Page } from '../types';
import { DashboardIcon, TransactionsIcon, InventoryIcon, SettingsIcon } from './Icons';

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, isActive, onClick }) => (
    <button 
        onClick={onClick} 
        className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-all ${
            isActive 
                ? 'text-primary bg-primary/10 scale-105' 
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
        }`}
    >
        {icon}
        <span className="text-xs font-medium mt-1">{label}</span>
    </button>
);


interface BottomNavProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentPage, setCurrentPage }) => {
    const navItems = [
        { page: Page.Dashboard, label: 'Dashboard', icon: <DashboardIcon className="w-6 h-6 mb-1"/> },
        { page: Page.Transactions, label: 'Transactions', icon: <TransactionsIcon className="w-6 h-6 mb-1"/> },
        { page: Page.Inventory, label: 'Inventory', icon: <InventoryIcon className="w-6 h-6 mb-1"/> },
        { page: Page.Settings, label: 'Settings', icon: <SettingsIcon className="w-6 h-6 mb-1"/> },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border z-40 safe-bottom pb-[env(safe-area-inset-bottom)] lg:hidden">
            <div className="container flex h-16 items-center justify-around max-w-md mx-auto">
                {navItems.map(item => (
                    <NavItem 
                        key={item.page}
                        label={item.label}
                        icon={item.icon}
                        isActive={currentPage === item.page}
                        onClick={() => setCurrentPage(item.page)}
                    />
                ))}
            </div>
        </nav>
    );
};

export default BottomNav;