import React from 'react';
import type { View } from '../types.ts';
import HomeIcon from './icons/HomeIcon.tsx';
import InventoryIcon from './icons/InventoryIcon.tsx';
import SalesIcon from './icons/SalesIcon.tsx';
import SettingsIcon from './icons/SettingsIcon.tsx';
import CartIcon from './icons/CartIcon.tsx';

interface BottomNavProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const NavButton: React.FC<{
  label: string;
  view: View;
  activeView: View;
  onClick: (view: View) => void;
  children: React.ReactNode;
}> = ({ label, view, activeView, onClick, children }) => {
  const isActive = activeView === view;
  return (
    <button
      onClick={() => onClick(view)}
      className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ${isActive ? 'text-primary-600' : 'text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-500'}`}
    >
      {children}
      <span className={`text-xs font-medium ${isActive ? 'text-primary-600' : 'text-slate-500 dark:text-slate-400'}`}>{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ activeView, setActiveView }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white dark:bg-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_-2px_10px_rgba(0,0,0,0.2)] z-40">
      <div className="flex h-full max-w-lg mx-auto">
        <div className="flex justify-around items-center w-full">
            <NavButton label="Home" view="HOME" activeView={activeView} onClick={setActiveView}>
                <HomeIcon className="h-6 w-6 mb-1" />
            </NavButton>
            <NavButton label="Inventory" view="INVENTORY" activeView={activeView} onClick={setActiveView}>
                <InventoryIcon className="h-6 w-6 mb-1" />
            </NavButton>
            
            {/* Placeholder for the central button */}
            <div className="w-20"></div>

            <NavButton label="Transactions" view="TRANSACTIONS" activeView={activeView} onClick={setActiveView}>
                <SalesIcon className="h-6 w-6 mb-1" />
            </NavButton>
            <NavButton label="Settings" view="SETTINGS" activeView={activeView} onClick={setActiveView}>
                <SettingsIcon className="h-6 w-6 mb-1" />
            </NavButton>
        </div>
      </div>
       {/* Central Quick Sale Button */}
       <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <button
                onClick={() => setActiveView('QUICK_SALE')}
                className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-600 transform hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-700"
                aria-label="Quick Sale"
            >
                <CartIcon className="w-8 h-8" />
            </button>
        </div>
    </nav>
  );
};

export default BottomNav;