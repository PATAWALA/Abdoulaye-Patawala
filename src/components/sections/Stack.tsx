// src/components/sections/Stack.tsx

'use client';

import React from 'react';
import { stackContent } from '@/content/stack';

const Stack: React.FC = () => {
  const { header, pillars, cta } = stackContent;

  return (
    <section className="bg-dark-900 overflow-hidden">
      <div className="py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-16 lg:mb-20 motion-safe:animate-fade-in">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">
            {header.badge}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            {header.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {header.subtitle}
          </p>
        </div>

        {/* Les 3 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              className="group relative bg-dark-800 border border-dark-600 rounded-3xl p-8 hover:border-gold-500/40 hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.2)] transition-all duration-300 motion-safe:animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icône */}
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                {pillar.icon}
              </div>

              {/* Titre */}
              <h3 className="text-xl md:text-2xl font-display text-white mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Tags technos */}
              <div className="flex flex-wrap gap-2">
                {pillar.techs.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 text-xs font-medium text-gold-400/80 bg-gold-500/5 border border-gold-500/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20 motion-safe:animate-fade-in">
          <a
            href={cta.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors group"
          >
            <span className="text-base font-medium">{cta.text}</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stack;

export const StackSkeleton: React.FC = () => (
  <section className="bg-dark-900 overflow-hidden">
    <div className="py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <div className="h-4 w-32 bg-dark-600 rounded animate-pulse mx-auto mb-4" />
        <div className="h-10 w-3/4 bg-dark-600 rounded animate-pulse mx-auto mb-6" />
        <div className="h-6 w-1/2 bg-dark-600 rounded animate-pulse mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-dark-800 border border-dark-600 rounded-3xl animate-pulse" />
        ))}
      </div>
      <div className="text-center mt-16 lg:mt-20">
        <div className="h-5 w-64 bg-dark-600 rounded animate-pulse mx-auto" />
      </div>
    </div>
  </section>
);