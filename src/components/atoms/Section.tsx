import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => (
  <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export default Section;