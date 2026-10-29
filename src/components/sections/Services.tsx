// src/components/sections/Services.tsx

'use client';

import React, { useState } from 'react';
import { servicesContent } from '@/content/services';

const Services: React.FC = () => {
  const { header, personas, cta } = servicesContent;
  const [activePersona, setActivePersona] = useState(personas[0].id);
  const current = personas.find((p) => p.id === activePersona) || personas[0];

  return (
    <section id="services" className="bg-dark-800">
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

        {/* Sélecteur de persona */}
        <div className="text-center mb-12 motion-safe:animate-fade-in">
          <p className="text-gray-400 text-lg mb-6">
            Vous êtes…
          </p>
          
          <div className="relative">
            <div className="sm:hidden absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-dark-800 to-transparent pointer-events-none z-10" />
            
            <div className="
              flex flex-nowrap overflow-x-auto scrollbar-hide gap-3 px-4 pb-2
              snap-x snap-mandatory
              sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0
            ">
              {personas.map((persona) => (
                <button
                  key={persona.id}
                  onClick={() => setActivePersona(persona.id)}
                  className={`
                    inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold 
                    transition-all duration-300 shrink-0 snap-center
                    ${
                      activePersona === persona.id
                        ? 'bg-gold-500 text-dark-900 shadow-lg shadow-gold-500/20 scale-105'
                        : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600 border border-dark-600'
                    }
                  `}
                >
                  {persona.icon}
                  {persona.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contenu dynamique premium */}
        <div className="bg-dark-700 border border-dark-600 rounded-2xl p-8 md:p-12 motion-safe:animate-fade-in hover:border-gold-500/20 transition-all duration-500">
          <div className="grid md:grid-cols-5 gap-10">
            
            {/* Problèmes – 3 colonnes */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display text-white">
                  Les défis qui vous empêchent d&apos;avancer
                </h3>
              </div>
              <ul className="space-y-5">
                {current.problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300 group">
                    <span className="w-7 h-7 rounded-lg bg-dark-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-gold-400 text-sm font-bold group-hover:bg-gold-500/10 transition-colors">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution + témoignage – 2 colonnes */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display text-white">Ma solution</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">{current.solution}</p>
                
                {/* Stats - CORRIGÉ */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
                  {current.stats.map((stat, i) => (
                    <div key={i} className="bg-dark-800 border border-dark-600 rounded-xl p-3 md:p-4 text-center flex flex-col justify-center min-h-[80px]">
                      <p className="text-xl md:text-2xl font-display text-gold-400 leading-tight">
                        {stat.value}
                      </p>
                      <p className="text-gray-500 text-[10px] md:text-xs mt-1 leading-tight break-words">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-2 border-gold-400 bg-dark-800 border border-dark-700 rounded-r-2xl py-5 px-6 text-gray-300 italic text-sm leading-relaxed">
                {current.testimonial.quote}
                <footer className="text-gold-400 text-xs mt-3 not-italic font-semibold">
                  — {current.testimonial.author}
                </footer>
              </blockquote>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-dark-600 text-center">
            <a
              href={cta.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 group shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20"
            >
              <span>{cta.label}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
            <p className="text-gray-600 text-sm mt-3">
              {cta.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;