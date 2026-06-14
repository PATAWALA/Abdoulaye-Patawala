'use client';

import React from 'react';

const services = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Conseil & Stratégie',
    description: "Je définis avec vous la meilleure approche pour atteindre vos objectifs et maximiser votre retour sur investissement.",
    benefits: [
      'Analyse de votre marché et vos besoins',
      'Plan d\'action clair et priorisé',
      'Suivi personnalisé offert pendant 3 mois',
    ],
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: 'Sites & plateformes sur-mesure',
    description: "Je crée des sites et des applications web rapides, sécurisés et conçus pour transformer chaque visiteur en client.",
    benefits: [
      'Expérience utilisateur fluide et élégante',
      'Optimisé pour Google et tous les écrans',
      'Accompagnement inclus après la mise en ligne',
    ],
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Tunnels de vente & Automatisation',
    description: "Je construis des systèmes qui captent, qualifient et convertissent vos prospects automatiquement.",
    benefits: [
      'Pages de capture et tunnels sur Systeme.io',
      'Workflows automatisés (Make, n8n)',
      'Optimisation continue pendant 3 mois',
    ],
  },
];

const Services: React.FC = () => {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="bg-dark-800 dark:bg-dark-800 light:bg-white">
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16 lg:mb-20 motion-safe:animate-fade-in">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">Ce que je fais</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white dark:text-white light:text-dark-900 mb-6">
            Des résultats, pas du blabla
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed dark:text-gray-400 light:text-gray-600">
            Chaque projet est pensé pour répondre à un seul objectif : <span className="text-white dark:text-white light:text-dark-900">faire grandir votre business</span>.
          </p>
        </div>

        {/* Cartes */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-dark-700 border border-dark-600 rounded-2xl p-8 lg:p-10 motion-safe:animate-fade-in hover:border-gold-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5 dark:bg-dark-700 dark:border-dark-600 light:bg-gray-50 light:border-gray-200 light:hover:border-gold-500/30 light:hover:shadow-md"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <p className="text-6xl font-display text-dark-600 group-hover:text-gold-500/10 transition-colors duration-500 absolute top-6 right-6 dark:text-dark-600 light:text-gray-200">
                {service.number}
              </p>
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white dark:text-white light:text-dark-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="w-8 h-px bg-gold-500/30 mb-6 group-hover:w-16 transition-all duration-500" />
              <ul className="space-y-3">
                {service.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors dark:text-gray-400 dark:group-hover:text-gray-300 light:text-gray-600 light:group-hover:text-gray-700">
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
          <p className="text-gray-400 text-lg mb-6 dark:text-gray-400 light:text-gray-600">
            Chaque projet commence par une conversation.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors group dark:hover:text-gold-300 light:hover:text-gold-600"
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
  <section className="bg-dark-800 dark:bg-dark-800 light:bg-white">
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <div className="h-4 w-32 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse mx-auto mb-4" />
        <div className="h-10 w-3/4 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse mx-auto mb-6" />
        <div className="h-6 w-1/2 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-dark-700 border border-dark-600 rounded-2xl p-8 lg:p-10 space-y-4 dark:bg-dark-700 dark:border-dark-600 light:bg-gray-50 light:border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-dark-600 dark:bg-dark-600 light:bg-gray-200 animate-pulse" />
            <div className="h-7 w-3/4 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-full bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse" />
            <div className="w-8 h-px bg-dark-600 dark:bg-dark-600 light:bg-gray-300 animate-pulse" />
            <div className="space-y-3">
              <div className="h-3 w-2/3 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-3/4 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-1/2 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16 lg:mt-20">
        <div className="h-6 w-64 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse mx-auto mb-6" />
        <div className="h-5 w-48 bg-dark-600 dark:bg-dark-600 light:bg-gray-200 rounded animate-pulse mx-auto" />
      </div>
    </div>
  </section>
);