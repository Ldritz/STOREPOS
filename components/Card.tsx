
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
  gradient?: boolean;
  hover?: boolean;
}

const Card: React.FC<CardProps> = React.memo(({ 
  children, 
  className = '', 
  title, 
  subtitle, 
  actions, 
  icon,
  gradient = false,
  hover = true
}) => {
  return (
    <div className={`card-modern ${gradient ? 'bg-gradient-to-br from-card to-card/80' : ''} ${hover ? 'hover:shadow-medium' : ''} ${className}`}>
      {(title || actions) && (
        <div className="flex items-center justify-between p-6 pb-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {icon}
              </div>
            )}
            <div>
              {title && (
                <h3 className="text-lg font-semibold text-card-foreground">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-sm text-muted-foreground mt-1">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      )}
      <div className="p-6 pt-4">
        {children}
      </div>
    </div>
  );
});

export default Card;
