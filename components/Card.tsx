import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  actions?: React.ReactNode;
  variant?: 'default' | 'secondary' | 'glass';
  id?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, actions, variant = 'default', id }) => {
  const variants = {
    default: 'bg-card border border-border/50',
    secondary: 'bg-muted border border-muted-foreground/20',
    glass: 'bg-card/70 backdrop-blur-sm border border-border/20'
  };

  return (
    <div id={id} className={`rounded-xl shadow-sm overflow-hidden ${variants[variant]} ${className}`}>
      {(title || actions) && (
        <div className={`px-6 py-4 border-b border-border/50 flex justify-between items-center ${
          variant === 'glass' ? 'backdrop-blur-sm' : ''
        }`}>
          {title && <h2 className="text-lg font-semibold tracking-tight">{title}</h2>}
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};

export default Card;
