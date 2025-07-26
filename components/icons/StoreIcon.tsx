import React from 'react';

const StoreIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={1.5}
    >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A2.25 2.25 0 0011.25 11.25H4.5A2.25 2.25 0 002.25 13.5V21M3 4.5h14.25M3.75 4.5a3.75 3.75 0 01-3.75 0M21.75 4.5a3.75 3.75 0 00-3.75 0M4.5 21V13.5M13.5 21V13.5m0-11.25a1.5 1.5 0 00-3 0m3 0a1.5 1.5 0 01-3 0m0 0H6.75m9 0H15m2.25-3h.008v.008h-.008v-.008z" />
  </svg>
);

export default StoreIcon;
