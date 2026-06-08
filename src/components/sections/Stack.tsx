'use client';

import React, { useEffect, useState, useRef } from 'react';

const tools = [
  {
    name: 'Next.js',
    logo: (
      <img 
        src="/images/logo-nextjs.svg" 
        alt="Next.js logo" 
        width="32" 
        height="32" 
        className="w-8 h-8 object-contain"
        loading="lazy"
      />
    ),
  },
  {
    name: 'React',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="128" cy="128" r="30" fill="#00D8FF"/>
        <ellipse cx="128" cy="128" rx="110" ry="40" stroke="#00D8FF" strokeWidth="10" transform="rotate(0 128 128)"/>
        <ellipse cx="128" cy="128" rx="110" ry="40" stroke="#00D8FF" strokeWidth="10" transform="rotate(60 128 128)"/>
        <ellipse cx="128" cy="128" rx="110" ry="40" stroke="#00D8FF" strokeWidth="10" transform="rotate(120 128 128)"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="6" fill="#3178C6"/>
        <path d="M28 64.5V74H40V114H54.5V74H66.5V64.5H28Z" fill="white"/>
        <path d="M74 102.5V114H102.5V103.5H84.5V100H100V90H84.5V85.5H102V74.5H74V102.5Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 256 154" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 0C102.4 0 86.4 12.8 80 38.4C89.6 25.6 100.8 20.8 113.6 24C121.527 25.979 127.2 31.777 133.4 38.16C143.067 48.134 154.284 59.36 176 59.36C201.6 59.36 217.6 46.56 224 20.96C214.4 33.76 203.2 38.56 190.4 35.36C182.473 33.381 176.8 27.583 170.6 21.2C160.933 11.226 149.716 0 128 0Z" fill="#06B6D4"/>
        <path d="M80 92.64C54.4 92.64 38.4 105.44 32 131.04C41.6 118.24 52.8 113.44 65.6 116.64C73.5273 118.619 79.2 124.417 85.4 130.8C95.0667 140.774 106.284 152 128 152C153.6 152 169.6 139.2 176 113.6C166.4 126.4 155.2 131.2 142.4 128C134.473 126.021 128.8 120.223 122.6 113.84C112.933 103.866 101.716 92.64 80 92.64Z" fill="#06B6D4"/>
      </svg>
    ),
  },
  {
    name: 'WordPress',
    logo: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#21759B' }}>
        <img 
          src="/images/logo-wordpress.svg" 
          alt="WordPress logo" 
          width="20" 
          height="20" 
          className="w-5 h-5 object-contain brightness-0 invert"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    name: 'Systeme.io',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="40" fill="#2563EB"/>
        <text x="128" y="172" textAnchor="middle" fill="white" fontSize="120" fontWeight="bold" fontFamily="Arial, sans-serif">S</text>
      </svg>
    ),
  },
  {
    name: 'n8n',
    logo: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EA4B71' }}>
        <img 
          src="/images/logo-n8n.svg" 
          alt="n8n logo" 
          width="20" 
          height="20" 
          className="w-5 h-5 object-contain brightness-0 invert"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    name: 'Figma',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45 106C52.732 106 59 99.732 59 93V79H45C38.268 79 32 85.268 32 92.5C32 99.732 38.268 106 45 106Z" fill="#0ACF83"/>
        <path d="M32 60.5C32 53.268 38.268 47 45 47H59V74H45C38.268 74 32 67.732 32 60.5Z" fill="#A259FF"/>
        <path d="M32 28.5C32 21.268 38.268 15 45 15H59V42H45C38.268 42 32 35.732 32 28.5Z" fill="#F24E1E"/>
        <path d="M59 15H73C79.732 15 86 21.268 86 28.5C86 35.732 79.732 42 73 42H59V15Z" fill="#FF7262"/>
        <path d="M86 60.5C86 67.732 79.732 74 73 74C66.268 74 59 67.732 59 60.5C59 53.268 66.268 47 73 47C79.732 47 86 53.268 86 60.5Z" fill="#1ABCFE"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 4L128 116H0L64 4Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Git',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M124.742 58.378L69.622 3.264C68.869 2.511 67.857 2.09 66.796 2.09C65.735 2.09 64.723 2.511 63.97 3.264L52.576 14.658L67.494 29.576C71.002 28.393 75.02 29.24 77.608 31.828C80.27 34.49 81.092 38.67 79.78 42.206L94.032 56.458C97.568 55.146 101.748 55.968 104.41 58.63C108.004 62.224 108.004 68.098 104.41 71.692C100.816 75.286 94.942 75.286 91.348 71.692C88.686 69.03 87.86 64.86 89.176 61.33L75.956 48.11L75.95 84.258C77.154 84.856 78.262 85.684 79.194 86.728C82.788 90.322 82.788 96.196 79.194 99.79C75.6 103.384 69.726 103.384 66.132 99.79C62.538 96.196 62.538 90.322 66.132 86.728C67.65 85.21 69.66 84.246 71.796 84.028V47.316C69.66 47.098 67.65 46.134 66.132 44.616C63.386 41.87 62.594 37.568 64.008 34.102L49.468 19.556L4.264 64.756C2.508 66.51 2.508 69.36 4.264 71.114L59.384 126.234C60.138 126.987 61.15 127.408 62.21 127.408C63.27 127.408 64.282 126.987 65.036 126.234L124.742 66.528C126.498 64.774 126.498 61.924 124.742 60.17V58.378Z" fill="#F03C2E"/>
      </svg>
    ),
  },
];

const Stack: React.FC = () => {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Mettre à jour l'index actif lors du défilement manuel
  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(cards).indexOf(entry.target);
            if (index !== -1) setActiveToolIndex(index);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );
    Array.from(cards).forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const handleDotClick = (index: number) => {
    setActiveToolIndex(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[index] as HTMLElement;
      if (card) {
        const scrollLeft =
          card.offsetLeft -
          container.offsetLeft -
          (container.offsetWidth - card.offsetWidth) / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="bg-dark-800 overflow-hidden">
      <div className="py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16 lg:mb-20 motion-safe:animate-fade-in">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">Stack technique</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            Des outils modernes,<br />des résultats durables
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Je choisis les meilleures technologies pour chaque projet. Rien de superflu, que de l'efficacité.
          </p>
        </div>

        {/* Desktop : grille 5 colonnes */}
        <div className="hidden lg:grid grid-cols-5 gap-5">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="group relative bg-dark-700 border border-dark-600 rounded-2xl p-6 flex flex-col items-center gap-4 motion-safe:animate-fade-in hover:border-gold-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold-500/5 transition-all duration-500"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-dark-900/50 flex items-center justify-center group-hover:bg-dark-900 group-hover:scale-110 transition-all duration-500">
                {tool.logo}
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-500">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile : scroll horizontal avec indicateurs */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
          >
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className="snap-start flex-shrink-0 w-36 bg-dark-700 border border-dark-600 rounded-2xl p-5 flex flex-col items-center gap-3 motion-safe:animate-fade-in"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-dark-900/50 flex items-center justify-center">
                  {tool.logo}
                </div>
                <span className="text-xs font-medium text-gray-400 text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          {/* Indicateurs (dots) */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {tools.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`rounded-full transition-all duration-500 ${
                  i === activeToolIndex
                    ? 'w-6 h-1.5 bg-gold-400'
                    : 'w-1.5 h-1.5 bg-dark-600 hover:bg-dark-500'
                }`}
                aria-label={`Outil ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20 motion-safe:animate-fade-in">
          <p className="text-gray-500 text-sm mb-6">
            Une stack complète, maîtrisée de bout en bout.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors group"
          >
            <span className="text-base font-medium">Construisons votre projet ensemble</span>
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

export default Stack;

export const StackSkeleton: React.FC = () => (
  <section className="bg-dark-800 overflow-hidden">
    <div className="py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <div className="h-4 w-32 bg-dark-600 rounded animate-pulse mx-auto mb-4" />
        <div className="h-10 w-3/4 bg-dark-600 rounded animate-pulse mx-auto mb-6" />
        <div className="h-6 w-1/2 bg-dark-600 rounded animate-pulse mx-auto" />
      </div>
      <div className="hidden lg:grid grid-cols-5 gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div key={i} className="bg-dark-700 border border-dark-600 rounded-2xl p-6 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-dark-600 animate-pulse" />
            <div className="h-4 w-16 bg-dark-600 rounded animate-pulse" />
          </div>
        ))}
      </div>
      <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex-shrink-0 w-36 bg-dark-700 border border-dark-600 rounded-2xl p-5 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-dark-600 animate-pulse" />
            <div className="h-3 w-14 bg-dark-600 rounded animate-pulse" />
          </div>
        ))}
      </div>
      <div className="text-center mt-16 lg:mt-20">
        <div className="h-4 w-64 bg-dark-600 rounded animate-pulse mx-auto mb-6" />
        <div className="h-5 w-48 bg-dark-600 rounded animate-pulse mx-auto" />
      </div>
    </div>
  </section>
);