'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'Blog', href: '/blog', isPage: true },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

    useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Déterminer la section active en fonction du scroll
      const sectionIds = links.filter(l => !l.isPage).map(l => l.href.replace('#', ''));
      const scrollPos = window.scrollY + 150; // Offset de 150px depuis le haut

      let current = '#hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = '#' + id;
        }
      }
      setActiveSection(current);
    };

    handleScroll(); // Vérification initiale

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const navigateToSection = (href: string) => {
    setMobileOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/' + href);
    }
  };

  const isBlogActive = pathname.startsWith('/blog');
  const isPortfolioPage = pathname.startsWith('/portfolio');

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
  scrolled
    ? 'bg-dark-900/85 backdrop-blur-2xl border-b border-dark-700/40 shadow-2xl shadow-black/20'
    : isHome
    ? 'bg-transparent'
    : 'bg-dark-900/85 backdrop-blur-2xl border-b border-dark-700/40 shadow-2xl shadow-black/20'
}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        
        {/* Logo */}
        <Link
          href="/"
          className="relative group flex-shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <span className="text-gold-400 font-display text-2xl lg:text-3xl tracking-tight">
            Abdoulaye
          </span>
          <span className="text-white font-display text-2xl lg:text-3xl tracking-tight">
            Patawala
          </span>
          {/* Ligne dégradée très fine aux extrémités */}
          <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent group-hover:via-gold-400 transition-all duration-500" />
        </Link>

        {/* Desktop : Liens centrés */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
          <div className="flex items-center gap-0 bg-dark-800/40 backdrop-blur-sm border border-dark-700/40 rounded-full px-1.5 py-1.5">
            {links.map((link) => {
              const isActive = link.isPage
                ? isBlogActive || (link.href === '/portfolio' && isPortfolioPage)
                : activeSection === link.href;

              if (link.isPage) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-gold-500/15 text-gold-400'
                        : 'text-gray-400 hover:text-white hover:bg-dark-700/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <button
                  key={link.href}
                  onClick={() => navigateToSection(link.href)}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gold-500/15 text-gold-400'
                      : 'text-gray-400 hover:text-white hover:bg-dark-700/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Desktop */}
        <div className="hidden lg:block flex-shrink-0">
          <button
            onClick={() => navigateToSection('#contact')}
            className="relative px-5 py-2.5 bg-gold-500 text-dark-900 text-sm font-semibold rounded-xl overflow-hidden group/cta transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
          >
            <span className="relative z-10">Démarrer un projet</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300 rounded-xl" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`} />
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`} />
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-900/98 backdrop-blur-2xl border-t border-dark-700/30 px-6 py-8 space-y-1">
          {links.map((link) => {
            const isActive = link.isPage
              ? isBlogActive
              : activeSection === link.href;
            const className = `w-full text-left py-4 px-4 rounded-2xl transition-all duration-300 text-base font-medium flex items-center gap-3 ${
              isActive
                ? 'bg-gold-500/10 text-gold-400 border border-gold-500/20'
                : 'text-gray-300 hover:bg-dark-800 hover:text-white'
            }`;

            if (link.isPage) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={className}
                >
                  {isActive && <span className="w-1.5 h-1.5 bg-gold-400 rounded-full flex-shrink-0" />}
                  {link.label}
                </Link>
              );
            }

            return (
              <button
                key={link.href}
                onClick={() => navigateToSection(link.href)}
                className={className}
              >
                {isActive && <span className="w-1.5 h-1.5 bg-gold-400 rounded-full flex-shrink-0" />}
                {link.label}
              </button>
            );
          })}
          <div className="pt-4">
            <button
              onClick={() => navigateToSection('#contact')}
              className="w-full py-4 bg-gold-500 text-dark-900 rounded-2xl font-semibold text-base hover:bg-gold-400 transition-colors"
            >
              Démarrer un projet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;