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
            ? 'bg-dark-900/90 backdrop-blur-2xl border-b border-gold-500/10 shadow-[0_8px_32px_rgba(212,175,55,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="relative group flex-shrink-0" onClick={closeMenu}>
            <span className="text-gold-400 font-display text-2xl lg:text-3xl tracking-tight">Abdoulaye</span>
            <span className="text-white font-display text-2xl lg:text-3xl tracking-tight">Patawala</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent group-hover:via-gold-400 transition-all duration-500" />
          </Link>

          {/* Desktop : uniquement le bouton contact + icône menu */}
          <div className="flex items-center gap-4">
            {/* Bouton contact visible tout le temps */}
            <button
              onClick={() => navigateToSection('#contact')}
              className="relative px-5 py-2.5 bg-gold-500 text-dark-900 text-sm font-semibold rounded-xl overflow-hidden group/cta transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 hidden sm:inline-flex items-center gap-2"
            >
              <span className="relative z-10">Me contacter</span>
              <svg className="relative z-10 w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <div className="absolute inset-0 bg-white translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300 rounded-xl" />
            </button>

            {/* Icône menu (desktop et mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 flex flex-col gap-[5px] items-end group"
              aria-label="Menu"
            >
              <span className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'}`} />
              <span className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-4 group-hover:w-6'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay menu coulissant depuis la droite */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      >
        <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm" />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-dark-800 border-l border-dark-700 shadow-2xl transform transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 pt-24 space-y-6">
            <Link href="/" onClick={closeMenu} className="block text-2xl font-display text-white hover:text-gold-400 transition-colors">Accueil</Link>
            <Link href="/portfolio" onClick={closeMenu} className="block text-2xl font-display text-white hover:text-gold-400 transition-colors">Portfolio</Link>
            <Link href="/blog" onClick={closeMenu} className="block text-2xl font-display text-white hover:text-gold-400 transition-colors">Blog</Link>
            <div className="pt-8">
              <button
                onClick={() => navigateToSection('#contact')}
                className="w-full py-3 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors"
              >
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;