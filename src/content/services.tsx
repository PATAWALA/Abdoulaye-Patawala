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
    title: "Une expertise technique au service de votre activité.",
    subtitle: "Découvrez comment je résous les défis spécifiques à votre secteur, quel que soit votre métier.",
  },
  cta: {
    label: "Prendre un diagnostic offert",
    note: "Sans engagement · Réponse sous 24h",
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
        "Votre site actuel ne reflète plus la qualité de vos services et fait fuir les prospects exigeants.",
        "Vos concurrents apparaissent en première page Google, mais pas vous.",
        "Chaque demande de devis arrive par téléphone, sans qualification, submergeant votre équipe.",
        "Votre processus de suivi client est un puzzle de fichiers Excel et de post-it.",
        "Vous perdez des appels d'offres parce que votre présence en ligne ne reflète pas votre savoir-faire.",
      ],
      solution: "Je conçois des plateformes web institutionnelles, optimisées pour le référencement, avec des formulaires intelligents qui qualifient vos prospects et automatisent votre suivi.",
      testimonial: {
        quote: "« Notre nouveau site nous a permis de décrocher trois nouveaux contrats en deux mois. Le formulaire de qualification nous fait gagner un temps fou. »",
        author: 'AG Expert Consulting',
      },
      stats: [
        { value: '+3', label: 'contrats décrochés' },
        { value: '40%', label: 'de leads en plus' },
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
        "Vous perdez un temps précieux à répondre aux mêmes questions par téléphone ou WhatsApp.",
        "Votre agenda est un champ de bataille : vous perdez des clients à cause d'une prise de rendez-vous chaotique.",
        "Vous n'avez aucun système automatique pour relancer ceux qui hésitent à prendre rendez-vous.",
        "Vos concurrents moins qualifiés vous dépassent parce qu'ils ont une machine de prise de contact en ligne.",
        "Vous stagnez à un plafond de revenus sans savoir comment le franchir.",
      ],
      solution: "Je construis un écosystème complet : site vitrine, prise de rendez-vous automatisée et espace sécurisé. Vous redevenez l'expert, pas le secrétaire.",
      testimonial: {
        quote: "« Avant Abdoulaye, je passais mes week-ends à répondre à des prospects qui n'achetaient jamais. Maintenant, mon système filtre et convertit pour moi. »",
        author: 'Sophie M., Coach certifiée',
      },
      stats: [
        { value: '15h', label: 'économisées / semaine' },
        { value: 'x3', label: 'taux de conversion' },
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
        "Votre page de contact convertit très mal et vous perdez des demandes de devis précieuses.",
        "Vous n'avez aucune idée de ce qui se passe entre le clic sur votre site et l'appel téléphonique.",
        "Votre présence en ligne est inexistante ou obsolète.",
        "Vous lancez des promotions sans page dédiée digne de ce nom.",
        "Votre fichier client est une mine d'or… que vous n'exploitez jamais.",
      ],
      solution: "Je crée des sites vitrines efficaces, des formulaires de devis clairs et des automatisations qui transforment chaque visiteur en client.",
      testimonial: {
        quote: "« Mon taux de conversion est passé de 1,8 % à 5,4 % en trois semaines. J'ai remboursé mon investissement en 10 jours. »",
        author: 'Karim D., Infopreneur',
      },
      stats: [
        { value: 'x3', label: 'ROI' },
        { value: '5,4%', label: 'taux de conversion' },
      ],
    },
    {
      id: 'autre',
      label: 'Projets Sur-Mesure',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      problems: [
        "Vous avez un projet numérique complexe mais ne savez pas par où commencer.",
        "Votre solution actuelle est lente, peu fiable ou mal conçue.",
        "Vous cherchez un partenaire technique fiable pour vous accompagner dans la durée.",
        "On vous a déjà livré un site sans explications, et vous êtes bloqué.",
        "Vous voulez digitaliser votre activité sans y perdre votre âme.",
      ],
      solution: "Parlons de votre projet. Je vous aide à poser les bases techniques solides et à construire une solution sur-mesure, avec un accompagnement de 3 mois inclus.",
      testimonial: {
        quote: "« Abdoulaye a pris le temps de comprendre mon activité avant de proposer quoi que ce soit. Résultat : une solution qui me ressemble. »",
        author: 'Elite Import Export',
      },
      stats: [
        { value: '100%', label: 'satisfaction' },
        { value: '3 mois', label: "d'accompagnement" },
      ],
    },
  ],
};