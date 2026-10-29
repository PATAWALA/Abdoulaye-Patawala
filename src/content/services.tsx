// src/content/services.tsx

import React from 'react';

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
}

export interface ServicePersona {
  id: string;
  label: string;
  icon: React.ReactNode;
  problems: string[];
  solution: string;
  testimonial: ServiceTestimonial;
  stats: ServiceStat[];
}

export interface ServicesContent {
  header: {
    badge: string;
    title: string;
    subtitle: string;
  };
  cta: {
    label: string;
    note: string;
    whatsappUrl: string;
  };
  personas: ServicePersona[];
}

export const servicesContent: ServicesContent = {
  header: {
    badge: "Mon approche par profil",
    title: "Une expertise technique et IA au service de votre activité.",
    subtitle: "Chaque projet est unique. J'étudie votre marché pour concevoir la solution exacte — site, automatisation ou agent IA — qui répond à vos défis spécifiques.",
  },
  cta: {
    label: "Prendre un diagnostic offert",
    note: "Sans engagement · Réponse sous 24h · Étude de votre projet incluse",
    whatsappUrl: "https://wa.me/22962278090?text=Bonjour%20Abdoulaye%2C%20je%20souhaite%20un%20diagnostic%20offert%20pour%20mon%20projet.%20Pouvons-nous%20en%20discuter%20%3F",
  },
  personas: [
    {
      id: 'entreprises',
      label: 'Entreprises & PME',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      problems: [
        "Votre site actuel est une simple vitrine statique qui ne reflète pas votre professionnalisme.",
        "Vous perdez un temps précieux à qualifier manuellement chaque demande de devis entrante.",
        "Vos données clients sont éparpillées entre Excel, emails et post-it, rendant le suivi impossible.",
        "Vos concurrents utilisent déjà des agents IA pour répondre à leurs clients 24h/24.",
        "Vous manquez de visibilité sur Google face à des acteurs moins qualifiés mais mieux optimisés.",
      ],
      solution: "Je conçois des plateformes web robustes couplées à des agents IA. Vos prospects sont qualifiés automatiquement, vos données centralisées, et votre équipe se concentre sur l'essentiel : votre métier.",
      testimonial: {
        quote: "« Depuis la refonte, notre site filtre 80% des demandes inutiles. L'agent IA répond aux questions fréquentes la nuit. On a gagné une sérénité incroyable. »",
        author: 'AG Expert Consulting',
      },
      stats: [
        { value: '24/7', label: 'support client via IA' },
        { value: '-70%', label: 'de temps de tri' },
      ],
    },
    {
      id: 'liberales',
      label: 'Professions Libérales',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      problems: [
        "Vous passez vos soirées à répondre aux mêmes questions administratives de vos clients.",
        "Votre prise de rendez-vous se fait par téléphone, avec des allers-retours interminables.",
        "Vous n'avez aucune mémoire de vos échanges clients, chaque dossier repart de zéro.",
        "Vous perdez des patients ou clients potentiels à cause d'un manque de relance automatique.",
        "Vous ne savez pas quels contenus sur votre site génèrent réellement des prises de contact.",
      ],
      solution: "Je déploie un assistant IA connecté à votre agenda et à votre site. Il répond aux questions de premier niveau, prend les rendez-vous et relance les clients en attente, pendant que vous vous concentrez sur vos consultations.",
      testimonial: {
        quote: "« J'ai récupéré mes soirées. L'assistant IA gère les demandes de rendez-vous, relance les indécis et me prépare un résumé de chaque demande. C'est un secrétariat intelligent. »",
        author: 'Dr. Sophie M., Cabinet libéral',
      },
      stats: [
        { value: '15h', label: 'économisées / semaine' },
        { value: 'x2', label: 'de prises de RDV' },
      ],
    },
    {
      id: 'artisans',
      label: 'Artisans & Commerçants',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
      ),
      problems: [
        "Vous n'avez pas de site web et vos clients ne vous trouvent que par bouche-à-oreille.",
        "Vous recevez des dizaines de messages WhatsApp par jour pour des devis, sans pouvoir y répondre.",
        "Vos réalisations ne sont pas mises en valeur sur internet, ce qui limite votre portée.",
        "Vous utilisez un carnet papier pour gérer vos commandes, avec le risque d'oubli constant.",
        "Vous n'avez pas le temps de créer du contenu pour les réseaux sociaux ou votre site.",
      ],
      solution: "Je vous livre un site vitrine moderne avec une galerie de vos œuvres, couplé à un agent IA sur WhatsApp qui répond aux demandes de devis basiques et enregistre les commandes. Vous gagnez en visibilité et en organisation.",
      testimonial: {
        quote: "« Avant, je perdais des commandes parce que je ne répondais pas assez vite. Maintenant, l'IA répond même quand je suis sur un chantier. Mon chiffre a augmenté de 30%. »",
        author: 'Cordier Jardins',
      },
      stats: [
        { value: '30%', label: 'de commandes en plus' },
        { value: '0', label: 'de devis oubliés' },
      ],
    },
    {
      id: 'autre',
      label: 'Projets Sur-Mesure & IA',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      problems: [
        "Vous avez une idée de produit ou de service digital, mais ne savez pas comment la concrétiser.",
        "Vos processus internes sont manuels et vous coûtent une fortune en temps et en erreurs.",
        "Vous voulez intégrer l'IA dans votre activité mais ne savez pas par où commencer.",
        "Vous avez besoin d'un partenaire technique fiable pour développer un projet complexe.",
        "Vous cherchez à automatiser des tâches répétitives sans alourdir votre budget.",
      ],
      solution: "Je suis votre architecte technique. J'analyse vos besoins, conçois la solution sur-mesure (web, API, agent IA, automatisation) et la déploie avec un accompagnement de 3 mois pour garantir son adoption.",
      testimonial: {
        quote: "« Abdoulaye a conçu une API sur-mesure connectée à un agent IA pour gérer nos stocks. On a divisé nos erreurs de saisie par dix. Un vrai partenaire stratégique. »",
        author: 'Elite Import Export',
      },
      stats: [
        { value: '100%', label: 'sur-mesure' },
        { value: '3 mois', label: "d'suivi inclus" },
      ],
    },
  ],
};