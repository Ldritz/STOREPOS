
import React, { useState } from 'react';
import XIcon from './icons/XIcon.tsx';

interface CalculatorModalProps {
  onClose: () => void;
  onAddToCart: (item: { price: number; name: string }) => void;
}

const NumpadButton: React.FC<{ onClick: () => void; children: React.ReactNode; className?: string }> = ({ onClick, children, className = '' }) => (
    <button
        type="button"
        onClick={onClick}
        className={`py-4 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-800 dark:text-slate-100 font-semibold text-xl hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-800 dark:hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 ${className}`}
    >
        {children}
    </button>
);


const CalculatorModal: React.FC<CalculatorModalProps> = ({ onClose, onAddToCart }) => {
    const [displayValue, setDisplayValue] = useState('0');
    const [note, setNote] = useState('');

    const handleInput = (char: string) => {
        if (displayValue.length >= 9) return;
        
        if (char === '.') {
            if (!displayValue.includes('.')) {
                setDisplayValue(displayValue + '.');
            }
        } else if (char === '00') {
             if (displayValue !== '0' && displayValue.length < 8) {
                setDisplayValue(displayValue + '00');
            }
        } else {
            if (displayValue === '0') {
                setDisplayValue(char);
            } else {
                setDisplayValue(displayValue + char);
            }
        }
    };
    
    const handleBackspace = () => {
        if (displayValue.length > 1) {
            setDisplayValue(displayValue.slice(0, -1));
        } else {
            setDisplayValue('0');
        }
    };

    const handleClear = () => {
        setDisplayValue('0');
    };

    const handleAddToCart = () => {
        const price = parseFloat(displayValue);
        if (isNaN(price) || price <= 0) {
            alert('Please enter a valid amount.');
            return;
        }
        onAddToCart({
            price,
            name: note.trim() || 'Custom Sale',
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-50 flex justify-center items-center p-4" aria-modal="true" role="dialog">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-sm">
                <header className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Custom Sale</h2>
                    <button type="button" onClick={onClose} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600">
                        <XIcon className="w-6 h-6 text-slate-500 dark:text-slate-400" />
                    </button>
                </header>
                
                <main className="p-4 space-y-4">
                    <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg text-right">
                        <span className="text-slate-500 dark:text-slate-400 text-3xl font-mono">₱</span>
                        <span className="text-slate-800 dark:text-slate-100 text-5xl font-mono font-bold tracking-tight">{displayValue}</span>
                    </div>

                     <div>
                        <label htmlFor="custom-note" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Note / Item Name (Optional)</label>
                        <input
                            id="custom-note"
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="e.g., Miscellaneous Item"
                            className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                       <NumpadButton onClick={handleClear} className="col-span-2 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900">C</NumpadButton>
                       <NumpadButton onClick={handleBackspace}>&larr;</NumpadButton>
                       
                       <NumpadButton onClick={() => handleInput('7')}>7</NumpadButton>
                       <NumpadButton onClick={() => handleInput('8')}>8</NumpadButton>
                       <NumpadButton onClick={() => handleInput('9')}>9</NumpadButton>

                       <NumpadButton onClick={() => handleInput('4')}>4</NumpadButton>
                       <NumpadButton onClick={() => handleInput('5')}>5</NumpadButton>
                       <NumpadButton onClick={() => handleInput('6')}>6</NumpadButton>

                       <NumpadButton onClick={() => handleInput('1')}>1</NumpadButton>
                       <NumpadButton onClick={() => handleInput('2')}>2</NumpadButton>
                       <NumpadButton onClick={() => handleInput('3')}>3</NumpadButton>

                       <NumpadButton onClick={() => handleInput('00')}>00</NumpadButton>
                       <NumpadButton onClick={() => handleInput('0')}>0</NumpadButton>
                       <NumpadButton onClick={() => handleInput('.')}>.</NumpadButton>
                    </div>
                </main>

                <footer className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                     <button
                        onClick={handleAddToCart}
                        className="w-full bg-primary-500 text-white font-bold py-3 rounded-lg hover:bg-primary-600 transition-colors disabled:bg-slate-300 dark:disabled:bg-slate-600"
                        disabled={parseFloat(displayValue) <= 0}
                    >
                        Add to Cart
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default CalculatorModal;
