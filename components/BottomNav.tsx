
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
    <button onClick={onClick} className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
        {icon}
        <span className="text-xs font-medium">{label}</span>
        {isActive && <div className="h-1 w-8 bg-primary rounded-full mt-1"></div>}
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
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-card shadow-[0_-2px_10px_rgba(0,0,0,0.2)] flex md:hidden border-t border-border">
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
    );
};

export default BottomNav;
