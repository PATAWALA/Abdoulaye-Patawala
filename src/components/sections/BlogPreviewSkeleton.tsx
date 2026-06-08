import React from 'react';

const BlogPreviewSkeleton: React.FC = () => (
  <section className="bg-dark-800">
    <div className="py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <div className="h-4 w-24 bg-dark-600 rounded animate-pulse mx-auto mb-4" />
        <div className="h-10 w-3/4 bg-dark-600 rounded animate-pulse mx-auto mb-6" />
        <div className="h-6 w-1/2 bg-dark-600 rounded animate-pulse mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-dark-700 border border-dark-600 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-dark-600 animate-pulse" />
            <div className="p-6 space-y-3">
              <div className="h-3 w-20 bg-dark-600 rounded-full animate-pulse" />
              <div className="h-5 w-3/4 bg-dark-600 rounded animate-pulse" />
              <div className="h-4 w-full bg-dark-600 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-dark-600 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <div className="h-5 w-48 bg-dark-600 rounded animate-pulse mx-auto" />
      </div>
    </div>
  </section>
);

export default BlogPreviewSkeleton;