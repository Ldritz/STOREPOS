
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, actions }) => {
  return (
    <div className={`bg-card text-card-foreground border border-border rounded-lg overflow-hidden ${className}`}>
      {(title || actions) && (
        <div className="p-4 border-b border-border flex justify-between items-center">
          {title && <h3 className="text-lg font-bold">{title}</h3>}
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
};

export default Card;
