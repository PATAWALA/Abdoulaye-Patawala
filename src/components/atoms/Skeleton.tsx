import React from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`animate-pulse bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded ${className}`} />
);

export default Skeleton;