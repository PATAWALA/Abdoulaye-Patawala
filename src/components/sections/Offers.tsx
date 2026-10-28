// src/components/sections/Offers.tsx

'use client';

import React from 'react';
import Button from '@/components/atoms/Button';
import { offersContent } from '@/content/offers';

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-gold-400 shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const Offers: React.FC = () => {
  const { section, starter, custom } = offersContent;

  return (
    <section id="offres" className="py-16 md:py-24 px-4 md:px-16 relative bg-dark-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs md:text-sm font-medium tracking-wide uppercase">
            {section.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-white leading-tight">
            {section.title}
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            {section.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          
          {/* CARTE DÉMARRAGE */}
          <div className="relative flex flex-col p-6 md:p-8 rounded-3xl bg-dark-800 border border-dark-600 hover:border-gold-500/30 transition-colors duration-300">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-dark-700 text-gray-300 text-xs font-medium mb-4">
                {starter.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-display text-white mb-2">{starter.title}</h3>
              <p className="text-gray-400 text-sm">{starter.subtitle}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl md:text-4xl font-bold text-white">{starter.price}</span>
                <span className="text-base md:text-lg text-gray-400">{starter.priceUnit}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">{starter.priceNote}</p>
            </div>

            <ul className="space-y-3 md:space-y-4 mb-8 flex-grow">
              {starter.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <p className="text-xs text-gray-500 italic bg-dark-900/50 p-3 rounded-lg border border-dark-700">
                {starter.disclaimer}
              </p>
            </div>

            <a
              href={starter.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <Button variant="secondary" className="w-full">
                {starter.ctaLabel}
              </Button>
            </a>
          </div>

          {/* CARTE SIGNATURE */}
          <div className="relative flex flex-col p-6 md:p-8 rounded-3xl bg-dark-800 border-2 border-gold-500 shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)] lg:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-500 text-dark-900 text-xs font-bold uppercase tracking-wider shadow-lg">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {custom.recommendedBadge}
              </span>
            </div>

            <div className="mb-6 mt-4">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-medium mb-4 border border-gold-500/20">
                {custom.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-display text-white mb-2">{custom.title}</h3>
              <p className="text-gray-400 text-sm">{custom.subtitle}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-sm text-gray-400">{custom.pricePrefix}</span>
                <span className="text-3xl md:text-4xl font-bold text-gold-400">{custom.price}</span>
                <span className="text-base md:text-lg text-gray-400">{custom.priceUnit}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">{custom.priceNote}</p>
            </div>

            <ul className="space-y-3 md:space-y-4 mb-8 flex-grow">
              {custom.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200 text-sm">
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={custom.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <Button variant="primary" className="w-full shadow-lg shadow-gold-500/20">
                {custom.ctaLabel}
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;