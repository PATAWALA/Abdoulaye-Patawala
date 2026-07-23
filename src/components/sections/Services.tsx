'use client';

import React from 'react';

const services = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'Stratégie & Positionnement',
    description: "Je vous aide à clarifier votre offre, définir votre client idéal et structurer un message qui vend.",
    benefits: [
      'Votre offre devient irrésistible',
      'Vous attirez les clients que vous voulez',
      'Plan d’action clair sur 3 mois',
    ],
    audience: 'Coachs · Infopreneurs · Cabinets',
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Système de vente automatisé',
    description: "Je construis des tunnels de vente et des pages de capture qui transforment vos visiteurs en clients 24h/24.",
    benefits: [
      'Pages de capture sur Systeme.io',
      'Workflows automatiques (Make, n8n)',
      'Des clients même quand vous dormez',
    ],
    audience: 'Infopreneurs · Formateurs · Consultants',
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: 'Site web & Crédibilité',
    description: "Un site web premium qui assoit votre autorité, optimisé pour Google et conçu pour convertir.",
    benefits: [
      'Design qui inspire confiance',
      'Référencement optimisé (SEO)',
      'Expérience utilisateur irréprochable',
    ],
    audience: 'Cabinets · Experts · TPE/PME',
  },
];

const Services: React.FC = () => {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="bg-dark-800">
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16 lg:mb-20 motion-safe:animate-fade-in">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">
            Ce que j’apporte aux coachs, infopreneurs & cabinets
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            Des résultats, pas du blabla
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Un système complet pour attirer, convertir et fidéliser vos clients – sans y passer vos journées.
          </p>
        </div>

        {/* Cartes */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-dark-700 border border-dark-600 rounded-2xl p-8 lg:p-10 motion-safe:animate-fade-in hover:border-gold-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <p className="text-6xl font-display text-dark-600 group-hover:text-gold-500/10 transition-colors duration-500 absolute top-6 right-6">
                {service.number}
              </p>
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>
              {/* Public cible */}
              <div className="mb-6">
                <span className="text-xs text-gold-400/70 bg-gold-500/5 border border-gold-500/10 rounded-full px-3 py-1">
                  {service.audience}
                </span>
              </div>
              <div className="w-8 h-px bg-gold-500/30 mb-6 group-hover:w-16 transition-all duration-500" />
              <ul className="space-y-3">
                {service.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <svg className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20 motion-safe:animate-fade-in">
          <p className="text-gray-400 text-lg mb-6">
            Chaque projet commence par une conversation.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors group"
          >
            <span className="text-lg font-medium">Discutons de votre projet</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

export const ServicesSkeleton: React.FC = () => (
  <section className="bg-dark-800">
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <div className="h-4 w-32 bg-dark-600 rounded animate-pulse mx-auto mb-4" />
        <div className="h-10 w-3/4 bg-dark-600 rounded animate-pulse mx-auto mb-6" />
        <div className="h-6 w-1/2 bg-dark-600 rounded animate-pulse mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-dark-700 border border-dark-600 rounded-2xl p-8 lg:p-10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-dark-600 animate-pulse" />
            <div className="h-7 w-3/4 bg-dark-600 rounded animate-pulse" />
            <div className="h-4 w-full bg-dark-600 rounded animate-pulse" />
            <div className="h-4 w-20 bg-dark-600 rounded-full animate-pulse" />
            <div className="w-8 h-px bg-dark-600 animate-pulse" />
            <div className="space-y-3">
              <div className="h-3 w-2/3 bg-dark-600 rounded animate-pulse" />
              <div className="h-3 w-3/4 bg-dark-600 rounded animate-pulse" />
              <div className="h-3 w-1/2 bg-dark-600 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16 lg:mt-20">
        <div className="h-6 w-64 bg-dark-600 rounded animate-pulse mx-auto mb-6" />
        <div className="h-5 w-48 bg-dark-600 rounded animate-pulse mx-auto" />
      </div>
    </div>
  </section>
);