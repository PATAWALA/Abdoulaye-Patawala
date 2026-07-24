import React from 'react';

const ServicesSkeleton: React.FC = () => (
  <section className="bg-dark-800">
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <div className="h-4 w-32 bg-dark-600 rounded animate-pulse mx-auto mb-4" />
        <div className="h-10 w-3/4 bg-dark-600 rounded animate-pulse mx-auto mb-6" />
        <div className="h-6 w-1/2 bg-dark-600 rounded animate-pulse mx-auto" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-12 w-28 bg-dark-600 rounded-xl animate-pulse" />
        ))}
      </div>
      <div className="bg-dark-700 border border-dark-600 rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="h-6 w-48 bg-dark-600 rounded animate-pulse" />
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 w-full bg-dark-600 rounded animate-pulse" />
            ))}
          </div>
          <div className="space-y-4">
            <div className="h-6 w-48 bg-dark-600 rounded animate-pulse" />
            <div className="h-20 w-full bg-dark-600 rounded animate-pulse" />
            <div className="h-10 w-3/4 bg-dark-600 rounded animate-pulse" />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="h-14 w-64 bg-dark-600 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSkeleton;