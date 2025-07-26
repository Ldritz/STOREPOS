
import React from 'react';
import XIcon from './icons/XIcon.tsx';
import WarningIcon from './icons/WarningIcon.tsx';

interface DeleteConfirmationModalProps {
  productName: string;
  itemType?: string;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ productName, itemType = 'Product', onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 dark:bg-opacity-75 z-50 flex justify-center items-center p-4" aria-modal="true" role="dialog">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-md">
        <header className="flex justify-end p-2">
          <button type="button" onClick={onClose} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600">
            <XIcon className="w-6 h-6 text-slate-500 dark:text-slate-400" />
          </button>
        </header>

        <main className="p-6 pt-0 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
                <WarningIcon className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Delete {itemType}</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
                Are you sure you want to delete <strong className="text-slate-800 dark:text-slate-100">{productName}</strong>? This action cannot be undone.
            </p>
        </main>

        <footer className="flex justify-center gap-4 p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 rounded-b-2xl">
          <button 
            type="button" 
            onClick={onClose} 
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="button" 
            onClick={onConfirm} 
            className="w-full px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-sm"
          >
            Delete
          </button>
        </footer>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;