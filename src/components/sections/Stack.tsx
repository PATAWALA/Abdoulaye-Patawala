// src/components/sections/Stack.tsx

'use client';

import React from 'react';
import { stackContent } from '@/content/stack';

const PillarCard: React.FC<{
  pillar: typeof stackContent.pillars[0];
  index: number;
}> = ({ pillar, index }) => {
  const numberLabel = String(index + 1);

  // Gradation de luminosité : 1 = le plus lumineux, 3 = le moins lumineux
  const numberStyles = [
    'text-gold-400 ring-gold-500/60 shadow-[0_0_15px_rgba(212,175,55,0.5)]',
    'text-gold-500/80 ring-gold-500/40',
    'text-gold-500/60 ring-gold-500/30',
  ][index];

  return (
    <div className="relative bg-dark-800 border border-dark-600 rounded-3xl p-6 md:p-8 mt-6 md:mt-0 transition-colors duration-300 hover:border-gold-500/40">
      
      {/* Numéro - Badge flottant sur mobile (arrondi cohérent avec la Navbar) */}
      <div className={`md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-xl bg-dark-900 ring-2 flex items-center justify-center font-display font-bold text-lg select-none ${numberStyles}`}>
        {numberLabel}
      </div>

      {/* Icône */}
      <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6">
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
  );
};

const Stack: React.FC = () => {
  const { header, pillars, cta } = stackContent;

  return (
    <section className="bg-dark-900 overflow-hidden relative">
      
      {/* === HALOS DORÉS (uniquement sur desktop) === */}
      <div className="hidden md:block pointer-events-none">
        {/* Halo principal plus lumineux */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold-500/10 rounded-full blur-3xl" />
        {/* Second halo diffus pour la profondeur */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gold-500/5 rounded-full blur-[120px]" />
        {/* Troisième halo très large pour l'ambiance globale */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[600px] bg-gold-500/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-4 motion-safe:animate-fade-in">
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

        {/* === ACCOLADE DESKTOP (cachée sur mobile) === */}
        <div className="hidden md:block w-full mb-2">
          <svg
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            className="w-full h-[100px]"
            aria-hidden="true"
          >
            {/* Dégradé pour l'accolade */}
            <defs>
              <linearGradient id="brace-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#f5d76e" stopOpacity="1" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0.9" />
              </linearGradient>
              {/* Filtre de glow */}
              <filter id="brace-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Dégradé pour les boules */}
              <radialGradient id="orb-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f5d76e" stopOpacity="1" />
                <stop offset="70%" stopColor="#d4af37" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0.2" />
              </radialGradient>
            </defs>

            {/* Trait vertical descendant du titre */}
            <line
              x1="600" y1="0" x2="600" y2="30"
              stroke="url(#brace-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#brace-glow)"
            />

            {/* Accolade gauche (double épaisseur pour réalisme) */}
            <path
              d="M 600 30 C 600 60, 560 60, 480 60 L 280 60 C 220 60, 200 75, 200 100"
              stroke="url(#brace-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M 600 30 C 600 60, 560 60, 480 60 L 280 60 C 220 60, 200 75, 200 100"
              stroke="url(#brace-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              filter="url(#brace-glow)"
            />

            {/* Accolade droite (double épaisseur pour réalisme) */}
            <path
              d="M 600 30 C 600 60, 640 60, 720 60 L 920 60 C 980 60, 1000 75, 1000 100"
              stroke="url(#brace-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M 600 30 C 600 60, 640 60, 720 60 L 920 60 C 980 60, 1000 75, 1000 100"
              stroke="url(#brace-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              filter="url(#brace-glow)"
            />

            {/* Point central lumineux */}
            <circle cx="600" cy="30" r="3" fill="#f5d76e" filter="url(#brace-glow)" />

            {/* === GROSSES BOULES LUMINEUSES AUX EXTRÉMITÉS === */}
            <circle cx="200" cy="100" r="14" fill="url(#orb-gradient)" filter="url(#brace-glow)" />
            <circle cx="200" cy="100" r="6" fill="#f5d76e" />
            
            <circle cx="1000" cy="100" r="14" fill="url(#orb-gradient)" filter="url(#brace-glow)" />
            <circle cx="1000" cy="100" r="6" fill="#f5d76e" />
          </svg>
        </div>

        {/* Les 3 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20 motion-safe:animate-fade-in">
          <a
            href={cta.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors duration-300 group shadow-lg shadow-gold-500/20"
          >
            <span>{cta.text}</span>
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
        <div className="h-14 w-72 bg-dark-600 rounded-xl animate-pulse mx-auto" />
      </div>
    </div>
  </section>
);