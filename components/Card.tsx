
import React, { memo } from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = memo(({ title, children, className = '', actions }) => {
  return (
    <div className={`bg-card border border-border rounded-lg shadow-sm transition-all duration-200 hover:shadow-md ${className}`}>
      {(title || actions) && (
        <div className="flex items-center justify-between p-4 pb-2">
          {title && (
            <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
          )}
          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      )}
      <div className="p-4 pt-0">
        {children}
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
