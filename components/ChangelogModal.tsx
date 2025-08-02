import React from 'react';
import { CloseIcon } from './Icons';

interface ChangelogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangelogModal: React.FC<ChangelogModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const changes = [
     {
      version: "v1.3.0",
      date: "July 2024",
      title: "Product Disabling",
      points: [
        "Added the ability to disable/enable products from the inventory page.",
        "Disabled products are visually indicated (grayed out with a 'Disabled' badge).",
        "Disabled products no longer appear when creating a new sale, but can still be restocked via an 'Inventory Purchase' expense."
      ]
    },
    {
      version: "v1.2.0",
      date: "July 2024",
      title: "Onboarding & UI Enhancements",
      points: [
        "User Onboarding: Added first-time user coach marks to guide you through key features.",
        "Prominent Low Stock Alerts: The low stock widget on the dashboard now flashes to draw attention when items are running low.",
        "Offline Indicator: A banner now appears at the top of the screen when your connection is lost, clarifying the app's offline status.",
        "UI Consistency: Standardized the appearance of all primary action buttons (like 'New Sale' and 'Save') for a more cohesive experience.",
      ]
    },
    {
      version: "v1.1.0 (Experimental)",
      date: "July 2024",
      title: "Experimental Admin Tools & Features",
      points: [
        "Added a new 'Experimental Features' section to the Settings page.",
        "Full Inventory Recalculation: A tool to recalculate stock counts based on the entire transaction history.",
        "Orphaned Data Check: Scans transactions for items that point to deleted products.",
        "Bulk Price Updater: Recalculates selling prices for all items based on their cost and the configured profit margin.",
        "Bulk Stock Updater: A sample tool to restock items with low inventory.",
        "Financial Report Generator: Exports a detailed transaction history for the last 30 days to a CSV file, similar to the cashbook view, with totals for income, expenses, and net profit.",
        "Profitability Analysis: A tool to identify the most profitable items based on sales and cost data.",
        "Undo Last Action: Most data-modifying admin tools can be undone immediately after use.",
        "Changelog: You're looking at it! A new button in the header to see what's new."
      ]
    },
    {
      version: "v1.0.0",
      date: "June 2024",
      title: "Initial Release",
      points: [
        "Dashboard with key metrics and charts.",
        "Transaction history with list and cashbook views.",
        "Inventory management with categories and image uploads.",
        "POS-style interface for adding sales and purchases.",
        "Dark/Light theme support.",
        "Offline data persistence with Firebase."
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in p-4">
      <div className="bg-card rounded-lg border border-border shadow-xl w-full max-w-2xl animate-slide-in-up max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-border flex-shrink-0">
          <h2 className="text-xl font-bold text-card-foreground">What's New</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 space-y-6 overflow-y-auto">
          {changes.map(change => (
            <div key={change.version}>
              <div className="flex items-baseline gap-3">
                <h3 className="text-lg font-bold">{change.title}</h3>
                <span className="text-sm text-muted-foreground">{change.version} - {change.date}</span>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-foreground/80">
                {change.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChangelogModal;