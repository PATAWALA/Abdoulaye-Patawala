'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/Button';

const words = [
  'Conseil stratégique',
  'Sites & plateformes sur-mesure',
  'Automatisation sur-mesure',
  'Tunnels de vente',
];

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = words[currentWord];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText !== fullText) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 200);
    } else if (!isDeleting && displayedText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 4000);
    } else if (isDeleting && displayedText !== '') {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, 100);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWord]);

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const scrollToPortfolio = () =>
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 pb-12 px-4 md:px-16 max-w-7xl mx-auto">

      {/* Mobile : Badge + Photo collés */}
      <div className="flex flex-col items-center gap-4 mb-10 lg:hidden motion-safe:animate-fade-in">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-500/20 bg-gold-500/5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm text-gray-300">Disponible pour collaborations</span>
        </div>

        <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border border-dark-600 shadow-2xl">
          <Image
            src="/images/portrait.png"
            alt="Abdoulaye - Développeur Web"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 384px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 bg-dark-800/90 backdrop-blur-sm border border-dark-600 rounded-xl px-4 py-2.5">
            <p className="text-gold-400 text-xl font-bold">5+</p>
            <p className="text-gray-400 text-xs">ans d'expertise</p>
          </div>
        </div>
      </div>

      {/* Desktop : Badge centré */}
      <div className="hidden lg:flex justify-center mb-12 motion-safe:animate-fade-in">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-500/20 bg-gold-500/5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm text-gray-300">Disponible pour collaborations</span>
        </div>
      </div>

      {/* Grille desktop */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full">
        {/* Texte */}
        <div className="space-y-8 text-center lg:text-left motion-safe:animate-fade-in">
          <div className="min-h-[5rem] md:min-h-[6rem] flex items-center justify-center lg:justify-start">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-display text-gold-400 leading-tight">
              {displayedText}
              <span className="inline-block w-0.5 h-8 md:h-12 bg-gold-400 ml-1 animate-pulse align-middle rounded-full" />
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Rentabilisez votre activité avec un partenaire technique qui comprend votre business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <div className="flex -space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-dark-900">
                <Image src="/images/client-1.webp" alt="Client" fill className="object-cover" sizes="40px" />
              </div>
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-dark-900">
                <Image src="/images/client-2.webp" alt="Client" fill className="object-cover" sizes="40px" />
              </div>
              <div className="w-10 h-10 rounded-full bg-dark-700 border-2 border-dark-900 flex items-center justify-center text-xs text-gold-400 font-semibold">
                +50
              </div>
            </div>
            <div>
              <div className="flex items-center gap-0.5 justify-center lg:justify-start mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500">+50 clients accompagnés</p>
            </div>
          </div>

          {/* CTAs + Texte rassurant alignés à gauche en mode Desktop */}
          {/* CTAs + Texte rassurant */}
<div className="flex flex-col items-center lg:items-start gap-3">
  {/* Ce conteneur définit la largeur max basée sur les boutons en Desktop */}
  <div className="flex flex-col items-center justify-center lg:justify-start gap-3 w-full max-w-[480px]">
    
    {/* Les Boutons */}
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
      <Button variant="primary" onClick={scrollToContact}>
        Discutons de votre projet
      </Button>
      <Button variant="secondary" onClick={scrollToPortfolio}>
        Voir mes réalisations
      </Button>
    </div>
    
    {/* Le Texte : Reste centré sous les deux boutons grâce au max-w du parent */}
    <p className="text-sm text-gray-600 text-center w-full">
      Réponse sous 24h · Devis gratuit · Sans engagement
    </p>
    
  </div>
</div>
        </div>

        {/* Photo desktop */}
        <div className="hidden lg:flex justify-center motion-safe:animate-fade-in">
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-dark-600 shadow-2xl shadow-gold-500/5">
            <Image
              src="/images/portrait.png"
              alt="Abdoulaye - Développeur Web"
              fill
              className="object-cover"
              sizes="448px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 bg-dark-800/90 backdrop-blur-sm border border-dark-600 rounded-xl px-5 py-3">
              <p className="text-gold-400 text-2xl font-bold">5+</p>
              <p className="text-gray-400 text-xs">ans d'expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

export const HeroSkeleton: React.FC = () => (
  <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 px-4 md:px-16 max-w-7xl mx-auto">
    <div className="flex flex-col items-center gap-4 mb-10 lg:hidden">
      <div className="h-8 w-56 bg-dark-600 rounded-full animate-pulse" />
      <div className="w-full max-w-sm aspect-square rounded-3xl bg-dark-600 animate-pulse" />
    </div>
    <div className="hidden lg:flex justify-center mb-12">
      <div className="h-8 w-56 bg-dark-600 rounded-full animate-pulse" />
    </div>
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full">
      <div className="space-y-8">
        <div className="h-16 w-3/4 bg-dark-600 rounded animate-pulse mx-auto lg:mx-0" />
        <div className="h-6 w-2/3 bg-dark-600 rounded animate-pulse mx-auto lg:mx-0" />
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-dark-600 animate-pulse" />
            <div className="w-10 h-10 rounded-full bg-dark-600 animate-pulse" />
            <div className="w-10 h-10 rounded-full bg-dark-600 animate-pulse" />
          </div>
          <div className="h-4 w-40 bg-dark-600 rounded animate-pulse" />
        </div>
        <div className="flex flex-col items-center lg:items-start gap-3">
          <div className="flex gap-4">
            <div className="h-12 w-56 bg-dark-600 rounded-lg animate-pulse" />
            <div className="h-12 w-48 bg-dark-600 rounded-lg animate-pulse" />
          </div>
          <div className="h-4 w-64 bg-dark-600 rounded animate-pulse" />
        </div>
      </div>
      <div className="hidden lg:flex justify-center">
        <div className="w-full max-w-md aspect-square rounded-3xl bg-dark-600 animate-pulse" />
      </div>
    </div>
  </section>
);