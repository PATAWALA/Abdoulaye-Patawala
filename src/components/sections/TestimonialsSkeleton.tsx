import React from 'react';
import Section from '@/components/atoms/Section';

const TestimonialsSkeleton: React.FC = () => (
  <Section>
    <div className="h-10 w-64 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse mx-auto mb-12" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-dark-800 border border-dark-700 p-6 rounded-xl space-y-4 dark:bg-dark-800 dark:border-dark-700 light:bg-white light:border-gray-200">
          <div className="h-8 w-8 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded-full animate-pulse" />
          <div className="h-4 w-full bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-1/3 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  </Section>
);

export default TestimonialsSkeleton;