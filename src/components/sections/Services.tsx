'use client';

import React, { useState } from 'react';

const personas = [
  {
    id: 'coach',
    label: 'Coach',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    problems: [
      'Vos prospects vous posent 50 fois les mêmes questions par jour sur WhatsApp.',
      'Vous n’avez aucun système automatique pour relancer ceux qui hésitent.',
      'Votre agenda est un champ de bataille : vous perdez des clients à cause d’une prise de rendez-vous chaotique.',
      'Vos concurrents moins qualifiés vous dépassent parce qu’ils ont une machine de vente en ligne.',
      'Vous stagnez à un plafond de revenus sans savoir comment le franchir.',
    ],
    solution:
      'Je vous construis un écosystème complet : page de capture, tunnel de vente, automatisation des relances et prise de rendez-vous. Vous redevenez le coach, pas le secrétaire.',
    testimonial: {
      quote:
        '« Avant Abdoulaye, je passais mes week-ends à répondre à des prospects qui n’achetaient jamais. Maintenant, mon tunnel filtre et convertit pour moi. »',
      author: 'Sophie M., Coach certifiée',
    },
    stats: [
      { value: '15h', label: 'économisées / semaine' },
      { value: 'x3', label: 'taux de conversion' },
    ],
  },
  {
    id: 'infopreneur',
    label: 'Infopreneur',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
    problems: [
      'Votre page de capture convertit à moins de 2 % et vous brûlez votre budget publicitaire.',
      'Vous n’avez aucune idée de ce qui se passe entre le clic sur une pub et l’achat.',
      'Votre séquence d’emails est inexistante ou part dans les spams.',
      'Vous lancez des formations sans page de vente digne de ce nom.',
      'Votre fichier client est une mine d’or… que vous n’exploitez jamais.',
    ],
    solution:
      'Je crée des pages de capture irrésistibles, des tunnels de vente complets et des séquences d’automatisation qui transforment chaque visiteur en client.',
    testimonial: {
      quote:
        '« Mon taux de conversion est passé de 1,8 % à 5,4 % en trois semaines. J’ai remboursé mon investissement en 10 jours. »',
      author: 'Karim D., Infopreneur',
    },
    stats: [
      { value: 'x3', label: 'ROI publicitaire' },
      { value: '5,4%', label: 'taux de conversion' },
    ],
  },
  {
    id: 'cabinet',
    label: 'Cabinet',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    problems: [
      'Votre site actuel date de 2018 et fait fuir les prospects exigeants.',
      'Vos concurrents directs apparaissent en première page Google, pas vous.',
      'Chaque demande de devis arrive par téléphone, sans qualification, et submerge votre équipe.',
      'Votre processus de suivi client est un puzzle de fichiers Excel et de post-it.',
      'Vous perdez des appels d’offres parce que votre présence en ligne ne reflète pas votre savoir-faire.',
    ],
    solution:
      'Je conçois des sites institutionnels premium, optimisés SEO, avec des formulaires intelligents qui qualifient vos prospects et automatisent votre suivi.',
    testimonial: {
      quote:
        '« Notre nouveau site nous a permis de décrocher trois nouveaux contrats en deux mois. Le formulaire de qualification nous fait gagner un temps fou. »',
      author: 'AG Expert Consulting',
    },
    stats: [
      { value: '+3', label: 'contrats décrochés' },
      { value: '40%', label: 'de leads en plus' },
    ],
  },
  {
    id: 'autre',
    label: 'Autre',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problems: [
      'Vous avez un projet numérique mais ne savez pas par où commencer.',
      'Votre solution actuelle est lente, peu fiable ou mal conçue.',
      'Vous cherchez un partenaire technique fiable pour vous accompagner dans la durée.',
      'On vous a déjà livré un site sans explications, et vous êtes bloqué.',
      'Vous voulez digitaliser votre activité sans y perdre votre âme.',
    ],
    solution:
      'Parlons de votre projet. Je vous aide à poser les bases techniques solides et à construire une solution sur-mesure, avec un accompagnement de 3 mois inclus.',
    testimonial: {
      quote:
        '« Abdoulaye a pris le temps de comprendre mon activité avant de proposer quoi que ce soit. Résultat : une solution qui me ressemble. »',
      author: 'Elite Import Export',
    },
    stats: [
      { value: '100%', label: 'satisfaction' },
      { value: '3 mois', label: 'd\'accompagnement' },
    ],
  },
];

const Services: React.FC = () => {
  const [activePersona, setActivePersona] = useState(personas[0].id);
  const current = personas.find((p) => p.id === activePersona) || personas[0];

  return (
    <section id="services" className="bg-dark-800">
      <div className="py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16 lg:mb-20 motion-safe:animate-fade-in">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">
            Ce que j&apos;apporte aux coachs, infopreneurs & cabinets
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            Des résultats, pas du blabla
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Un système complet pour attirer, convertir et fidéliser vos clients – sans y passer vos journées.
          </p>
        </div>
        {/* Sélecteur de persona */}
<div className="text-center mb-12 motion-safe:animate-fade-in">
  <p className="text-gray-400 text-lg mb-6">
    Vous êtes…
  </p>
  <div className="flex flex-wrap justify-center gap-4">
    {personas.map((persona) => (
      <button
        key={persona.id}
        onClick={() => setActivePersona(persona.id)}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
          activePersona === persona.id
            ? 'bg-gold-500 text-dark-900 shadow-lg shadow-gold-500/20 scale-105'
            : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600 border border-dark-600'
        }`}
      >
        {persona.icon}
        {persona.label}
      </button>
    ))}
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
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {current.stats.map((stat, i) => (
                    <div key={i} className="bg-dark-800 border border-dark-600 rounded-xl p-4 text-center">
                      <p className="text-2xl font-display text-gold-400">{stat.value}</p>
                      <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
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
  <button
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 group shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20"
  >
    <span>Prendre un diagnostic offert</span>
    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  </button>
  <p className="text-gray-600 text-sm mt-3">
    Sans engagement · Réponse sous 24h
  </p>
</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
export { default as ServicesSkeleton } from './ServicesSkeleton';