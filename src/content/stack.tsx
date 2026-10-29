// src/content/stack.tsx

import React from 'react';

export interface Pillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  techs: string[];
}

export const stackContent = {
  header: {
    badge: 'Mon socle technique',
    title: 'Une base solide, augmentée par l\'IA.',
    subtitle: 'Je ne choisis pas la technologie à la mode. Je choisis celle qui garantit la performance, la sécurité et l\'évolutivité de votre projet.',
  },
  pillars: [
    {
      id: 'performance',
      icon: (
        <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance & SEO',
      description: 'Des sites ultra-rapides, optimisés pour Google, qui convertissent dès le premier clic.',
      techs: ['Next.js', 'React', 'Tailwind'],
    },
    {
      id: 'automation',
      icon: (
        <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Automatisation & IA',
      description: 'Des agents intelligents qui répondent, relancent et qualifient 24h/24, sans intervention.',
      techs: ['n8n', 'OpenAI', 'WhatsApp API'],
    },
    {
      id: 'reliability',
      icon: (
        <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Fiabilité & Sécurité',
      description: 'Un code typé, testé et déployé sur une infrastructure de classe mondiale.',
      techs: ['TypeScript', 'Vercel', 'Git'],
    },
  ] as Pillar[],
  cta: {
    text: 'Discutons de la solution adaptée à votre projet',
    whatsappUrl: 'https://wa.me/22962278090?text=Bonjour%20Abdoulaye%2C%20je%20souhaite%20discuter%20de%20la%20solution%20technique%20adapt%C3%A9e%20%C3%A0%20mon%20projet.',
  },
};