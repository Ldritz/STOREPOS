
import React from 'react';

const WifiOffIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 18a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h.008a.75.75 0 01-.75-.75v-.008a.75.75 0 01.75-.75h-.008zm0 0l-3.334-3.334a5.5 5.5 0 00-7.778 0M4.444 12.889a10 10 0 0115.112 0M1.5 1.5l21 21" 
    />
  </svg>
);

export default WifiOffIcon;
