'use client';
export { default as ServicesSkeleton } from './ServicesSkeleton';
import React, { useState } from 'react';

const personas = [
  {
    id: 'coach',
    label: 'Coach',
    problems: [
      'Vous perdez des heures à répondre manuellement à vos prospects.',
      'Votre site ne reflète pas votre expertise.',
      'Vous n’avez pas de tunnel de vente automatisé.',
    ],
    solution:
      'Je construis des tunnels de vente et des pages de capture qui transforment vos visiteurs en clients, 24h/24, sans que vous leviez le petit doigt.',
    testimonial: {
      quote:
        '« Grâce à son accompagnement, j’ai automatisé mes inscriptions et gagné 15h par semaine. »',
      author: 'Sophie M., Coach certifiée',
    },
  },
  {
    id: 'infopreneur',
    label: 'Infopreneur',
    problems: [
      'Votre page de capture ne convertit pas assez.',
      'Vous perdez de l’argent en publicité à cause d’un tunnel mal optimisé.',
      'Vous n’avez pas de système de relance automatique.',
    ],
    solution:
      'Je crée des pages de capture optimisées et des tunnels de vente qui maximisent votre retour sur investissement publicitaire.',
    testimonial: {
      quote:
        '« Mon taux de conversion a doublé après la refonte de ma page de capture. »',
      author: 'Karim D., Infopreneur',
    },
  },
  {
    id: 'cabinet',
    label: 'Cabinet',
    problems: [
      'Votre site manque de crédibilité face à vos concurrents.',
      'Vous n’arrivez pas à générer des leads qualifiés en ligne.',
      'Votre équipe perd du temps sur des tâches répétitives.',
    ],
    solution:
      'Je conçois des sites vitrines premium et des systèmes d’automatisation qui renforcent votre autorité et génèrent des prospects qualifiés.',
    testimonial: {
      quote:
        '« Notre nouveau site nous a apporté une crédibilité immédiate auprès de nos prospects. »',
      author: 'AG Expert Consulting',
    },
  },
  {
    id: 'autre',
    label: 'Autre',
    problems: [
      'Vous avez un projet numérique mais ne savez pas par où commencer.',
      'Votre solution actuelle est lente, peu fiable ou mal conçue.',
      'Vous cherchez un partenaire technique fiable pour vous accompagner.',
    ],
    solution:
      'Parlons de votre projet. Je vous aide à poser les bases techniques solides et à construire une solution sur-mesure adaptée à vos objectifs.',
    testimonial: {
      quote:
        '« Abdoulaye a su comprendre mon besoin et proposer une solution parfaitement adaptée. »',
      author: 'Elite Import Export',
    },
  },
];

const Services: React.FC = () => {
  const [activePersona, setActivePersona] = useState(personas[0].id);
  const current = personas.find((p) => p.id === activePersona) || personas[0];

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

        {/* Sélecteur de persona */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 motion-safe:animate-fade-in">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setActivePersona(persona.id)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activePersona === persona.id
                  ? 'bg-gold-500 text-dark-900 shadow-lg shadow-gold-500/20'
                  : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600 border border-dark-600'
              }`}
            >
              {persona.label}
            </button>
          ))}
        </div>

        {/* Contenu dynamique */}
        <div className="bg-dark-700 border border-dark-600 rounded-2xl p-8 md:p-12 motion-safe:animate-fade-in">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Problèmes */}
            <div>
              <h3 className="text-xl font-display text-white mb-6">
                🚧 Les défis que vous rencontrez
              </h3>
              <ul className="space-y-4">
                {current.problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution + témoignage */}
            <div>
              <h3 className="text-xl font-display text-white mb-6">
                ✅ Ma solution
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                {current.solution}
              </p>
              <blockquote className="border-l-2 border-gold-400 pl-4 text-gray-400 italic text-sm">
                {current.testimonial.quote}
                <footer className="text-gold-400 text-xs mt-2 not-italic">
                  — {current.testimonial.author}
                </footer>
              </blockquote>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://patawalaabdoulaye2003.systeme.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 group shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20"
            >
              <span>Prendre un diagnostic offert</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;