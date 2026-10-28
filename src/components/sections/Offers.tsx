'use client';

import React from 'react';
import Button from '@/components/atoms/Button';

const Offers: React.FC = () => {
  const whatsappStarter = "https://wa.me/22962278090?text=Bonjour%20Abdoulaye%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pack%20Starter%20%C3%A0%208000%20FCFA.%20Pouvons-nous%20en%20discuter%20%3F";
  const whatsappSurMesure = "https://wa.me/22962278090?text=Bonjour%20Abdoulaye%2C%20je%20souhaite%20discuter%20du%20Pack%20Sur-Mesure.%20Voici%20mon%20projet%20%3A%20";

  return (
    <section id="offres" className="py-24 px-4 md:px-16 relative bg-dark-900">
      {/* Effet de lumière dorée en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-medium tracking-wide uppercase">
            Mes Offres
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-white">
            Choisissez votre point de départ.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Que vous souhaitiez tester le marché ou déployer une plateforme complète, j'ai la formule adaptée à votre ambition.
          </p>
        </div>

        {/* Grille des offres */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* CARTE 1 : STARTER */}
          <div className="relative flex flex-col p-8 rounded-3xl bg-dark-800 border border-dark-600 hover:border-gold-500/30 transition-colors duration-300">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-dark-700 text-gray-300 text-xs font-medium mb-4">
                Pour démarrer
              </span>
              <h3 className="text-2xl font-display text-white mb-2">Pack Starter</h3>
              <p className="text-gray-400 text-sm">Votre présence en ligne, simplement.</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-white">8 000</span>
                <span className="text-lg text-gray-400">FCFA / an</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Frais de réservation de votre nom de domaine (.com) uniquement.</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                'Maquette de site prête à l\'emploi',
                'Nom de domaine professionnel .com',
                'Bouton WhatsApp connecté',
                'Hébergement web rapide et sécurisé'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <p className="text-xs text-gray-500 italic bg-dark-900/50 p-3 rounded-lg border border-dark-700">
                Modèle fixe. Les modifications sur-mesure et la gestion de dossiers ne sont pas incluses.
              </p>
            </div>

            <a href={whatsappStarter} target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="secondary" className="w-full">
                Discuter de l'offre Starter sur WhatsApp
              </Button>
            </a>
          </div>

          {/* CARTE 2 : SUR-MESURE (Mise en avant) */}
          <div className="relative flex flex-col p-8 rounded-3xl bg-dark-800 border-2 border-gold-500 shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)] transform lg:-translate-y-4">
            {/* Badge Recommandé */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-500 text-dark-900 text-xs font-bold uppercase tracking-wider shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Recommandé
              </span>
            </div>

            <div className="mb-6 mt-4">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-medium mb-4 border border-gold-500/20">
                Solution complète
              </span>
              <h3 className="text-2xl font-display text-white mb-2">Pack Sur-Mesure & Privé</h3>
              <p className="text-gray-400 text-sm">Votre plateforme complète, automatisée et sécurisée.</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-400">À partir de</span>
                <span className="text-4xl md:text-5xl font-bold text-gold-400">150 000</span>
                <span className="text-lg text-gray-400">FCFA</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Devis personnalisé selon la complexité de votre projet.</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                'Design 100% personnalisé (vos photos, vos couleurs)',
                'Formulaire de devis intelligent',
                'Espace privé sécurisé (clients, commandes)',
                'Automatisation des tâches (n8n, IA, WhatsApp)',
                'Accompagnement technique de 3 mois'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200 text-sm">
                  <svg className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a href={whatsappSurMesure} target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="primary" className="w-full shadow-lg shadow-gold-500/20">
                Démarrer mon projet sur WhatsApp
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;