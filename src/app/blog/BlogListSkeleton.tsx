import React from 'react';

const BlogListSkeleton: React.FC = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden">
        <div className="aspect-video bg-dark-600 animate-pulse" />
        <div className="p-5 space-y-2">
          <div className="h-3 w-32 bg-dark-600 rounded animate-pulse" />
          <div className="h-5 w-3/4 bg-dark-600 rounded animate-pulse" />
          <div className="h-4 w-full bg-dark-600 rounded animate-pulse" />
        </div>
      </div>
    ))}
  </div>
);

export default BlogListSkeleton;