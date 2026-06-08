import React from 'react';

const PortfolioSkeleton: React.FC = () => (
  <section className="bg-dark-900">
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <div className="h-4 w-24 bg-dark-600 rounded animate-pulse mx-auto mb-4" />
        <div className="h-10 w-3/4 bg-dark-600 rounded animate-pulse mx-auto mb-6" />
        <div className="h-6 w-1/2 bg-dark-600 rounded animate-pulse mx-auto" />
      </div>
      <div className="space-y-24 lg:space-y-32">
        {[1, 2, 3].map((i) => (
          <div key={i} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="aspect-[4/3] rounded-2xl bg-dark-600 animate-pulse" />
            <div className="space-y-5">
              <div className="h-4 w-24 bg-dark-600 rounded animate-pulse" />
              <div className="h-8 w-3/4 bg-dark-600 rounded animate-pulse" />
              <div className="h-4 w-full bg-dark-600 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-dark-600 rounded animate-pulse" />
              <div className="h-10 w-40 bg-dark-600 rounded-xl animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSkeleton;