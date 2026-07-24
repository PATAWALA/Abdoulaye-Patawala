'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (href: string) => {
    setMenuOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/' + href);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-900/90 backdrop-blur-2xl border-b border-gold-500/10 shadow-[0_8px_32px_rgba(212,175,55,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="relative group flex-shrink-0" onClick={closeMenu}>
            <span className="text-gold-400 font-display text-3xl lg:text-4xl tracking-tight">Abdoulaye</span>
            <span className="text-white font-display text-3xl lg:text-4xl tracking-tight">Patawala</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent group-hover:via-gold-400 transition-all duration-500" />
          </Link>

          {/* Actions (bouton contact desktop + hamburger) */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Bouton contact – visible uniquement sur desktop (sm et plus) */}
            {!menuOpen && (
              <button
                onClick={() => navigateToSection('#contact')}
                className="hidden sm:inline-flex relative px-5 py-2.5 sm:px-6 sm:py-3 bg-gold-500 text-dark-900 text-sm sm:text-base font-semibold rounded-xl overflow-hidden group/cta transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 items-center gap-2"
              >
                <svg
                  className="relative z-10 w-5 h-5 flex-shrink-0 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
                <span className="relative z-10">Diagnostic offert</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300 rounded-xl" />
              </button>
            )}

            {/* Hamburger – visible sur tous les écrans */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 flex flex-col gap-[6px] items-end group p-2"
              aria-label="Menu"
            >
              <span
                className={`block h-[3px] rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? 'w-7 rotate-45 translate-y-[9px]' : 'w-7'
                }`}
              />
              <span
                className={`block h-[3px] rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? 'w-7 -rotate-45 -translate-y-[9px]' : 'w-5 group-hover:w-7'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar plein écran (mobile) / panneau droit (desktop) */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm" onClick={closeMenu} />
        <div
          className={`absolute right-0 top-0 h-full w-full sm:w-96 bg-dark-800 border-l border-dark-700 shadow-2xl transform transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-10 pt-24 space-y-6">
            <Link href="/" onClick={closeMenu} className="block text-3xl font-display text-white hover:text-gold-400 transition-colors">
              Accueil
            </Link>
            <Link href="/portfolio" onClick={closeMenu} className="block text-3xl font-display text-white hover:text-gold-400 transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" onClick={closeMenu} className="block text-3xl font-display text-white hover:text-gold-400 transition-colors">
              Blog
            </Link>
            <div className="pt-8">
              <button
                onClick={() => navigateToSection('#contact')}
                className="w-full py-4 bg-gold-500 text-dark-900 rounded-xl font-semibold text-lg hover:bg-gold-400 transition-colors"
              >
                Diagnostic offert
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;