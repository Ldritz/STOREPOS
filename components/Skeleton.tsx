import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  rounded?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', width, height, rounded = 'rounded-lg' }) => (
  <div
    className={`bg-muted animate-pulse ${rounded} ${className}`}
    style={{ width, height }}
    aria-busy="true"
    aria-label="Loading..."
  />
);

export default Skeleton;