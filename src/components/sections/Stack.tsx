// src/components/sections/Stack.tsx

'use client';

import React, { useRef, useState } from 'react';
import { stackContent } from '@/content/stack';

// --- Composant carte avec effet spotlight ---
const PillarCard: React.FC<{
  pillar: typeof stackContent.pillars[0];
  index: number;
}> = ({ pillar, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const numberLabel = String(index + 1).padStart(2, '0');

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-dark-800 border border-dark-600 rounded-3xl p-8 overflow-hidden transition-all duration-500 motion-safe:animate-fade-in hover:border-gold-500/40"
      style={{
        animationDelay: `${index * 0.15}s`,
        boxShadow: isHovered
          ? '0 20px 60px -15px rgba(212,175,55,0.25), 0 0 0 1px rgba(212,175,55,0.3)'
          : '0 10px 30px -15px rgba(0,0,0,0.5)',
        transform: isHovered ? 'perspective(1000px) rotateX(1.5deg) rotateY(-1.5deg) translateY(-4px)' : 'none',
      }}
    >
      {/* Spotlight (suit la souris) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212,175,55,0.08), transparent 60%)`,
        }}
      />

      {/* Liseré doré en haut */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Numéro filigrane */}
      <div className="absolute top-4 right-5 text-5xl font-display font-bold text-dark-600/50 group-hover:text-gold-500/15 transition-colors duration-500 select-none">
        {numberLabel}
      </div>

      {/* Icône */}
      <div className="relative z-10 w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500/15 transition-all duration-500">
        {pillar.icon}
      </div>

      {/* Titre */}
      <h3 className="relative z-10 text-xl md:text-2xl font-display text-white mb-3">
        {pillar.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-gray-400 text-sm md:text-base leading-relaxed mb-6">
        {pillar.description}
      </p>

      {/* Tags technos */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {pillar.techs.map((tech) => (
          <span
            key={tech}
            className="inline-block px-3 py-1 text-xs font-medium text-gold-400/80 bg-gold-500/5 border border-gold-500/20 rounded-full group-hover:border-gold-500/40 transition-colors duration-300"
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
      {/* Halo doré décoratif en arrière-plan */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        
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
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>

        {/* CTA - Bouton doré plein */}
        <div className="text-center mt-16 lg:mt-20 motion-safe:animate-fade-in">
          <a
            href={cta.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 group shadow-lg shadow-gold-500/10 hover:shadow-gold-500/30 hover:scale-[1.02]"
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