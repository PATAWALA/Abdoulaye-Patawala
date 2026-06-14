'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-800 border-t border-dark-700 dark:bg-dark-800 dark:border-dark-700 light:bg-white light:border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        
        {/* Grille principale */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Marque */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="relative group inline-block">
              <span className="text-gold-400 font-display text-2xl tracking-tight">
                Abdoulaye
              </span>
              <span className="text-white font-display text-2xl tracking-tight dark:text-white light:text-dark-900">
                Patawala
              </span>
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent group-hover:via-gold-400 transition-all duration-500" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs dark:text-gray-500 light:text-gray-600">
              Développeur fullstack & architecte digital. Je crée des expériences web premium qui transforment votre vision en résultats concrets.
            </p>
            <div className="pt-2">
              <p className="text-gray-600 text-xs mb-3 dark:text-gray-600 light:text-gray-500">Me suivre</p>
              <div className="flex items-center gap-3">
                <a href="https://web.facebook.com/Patawala" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-all dark:bg-dark-700 dark:border-dark-600 light:bg-gray-100 light:border-gray-300 light:text-gray-600 light:hover:text-gold-400 light:hover:border-gold-500/30" aria-label="Facebook">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/patawalaabdoulaye1900/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-all dark:bg-dark-700 dark:border-dark-600 light:bg-gray-100 light:border-gray-300 light:text-gray-600 light:hover:text-gold-400 light:hover:border-gold-500/30" aria-label="Instagram">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://x.com/AbdoulayeP79682" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-all dark:bg-dark-700 dark:border-dark-600 light:bg-gray-100 light:border-gray-300 light:text-gray-600 light:hover:text-gold-400 light:hover:border-gold-500/30" aria-label="X (Twitter)">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/abdoulaye-patawala-84b138381/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-all dark:bg-dark-700 dark:border-dark-600 light:bg-gray-100 light:border-gray-300 light:text-gray-600 light:hover:text-gold-400 light:hover:border-gold-500/30" aria-label="LinkedIn">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/PATAWALA" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-all dark:bg-dark-700 dark:border-dark-600 light:bg-gray-100 light:border-gray-300 light:text-gray-600 light:hover:text-gold-400 light:hover:border-gold-500/30" aria-label="GitHub">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5 dark:text-white light:text-dark-900">Navigation</p>
            <Link href="/" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm dark:text-gray-400 light:text-gray-600 light:hover:text-gold-600">Accueil</Link>
            <Link href="/portfolio" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm dark:text-gray-400 light:text-gray-600 light:hover:text-gold-600">Réalisations</Link>
            <Link href="/blog" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm dark:text-gray-400 light:text-gray-600 light:hover:text-gold-600">Blog & Ressources</Link>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-gold-400 transition-colors text-sm dark:text-gray-400 light:text-gray-600 light:hover:text-gold-600">Me contacter</button>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <p className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5 dark:text-white light:text-dark-900">Services</p>
            <Link href="/#services" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm dark:text-gray-400 light:text-gray-600 light:hover:text-gold-600">Conseil stratégique</Link>
            <Link href="/#services" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm dark:text-gray-400 light:text-gray-600 light:hover:text-gold-600">Sites sur-mesure</Link>
            <Link href="/#services" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm dark:text-gray-400 light:text-gray-600 light:hover:text-gold-600">Tunnels de vente</Link>
            <Link href="/#services" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm dark:text-gray-400 light:text-gray-600 light:hover:text-gold-600">Automatisation</Link>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5 dark:text-white light:text-dark-900">Contact</p>
            <a href="mailto:patawalaabdoulaye2003@gmail.com" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm break-all dark:text-gray-400 light:text-gray-600 light:hover:text-gold-600">
              patawalaabdoulaye2003@gmail.com
            </a>
            <p className="text-gray-500 text-sm dark:text-gray-500 light:text-gray-600">Cotonou, Bénin</p>
            <button onClick={() => scrollToSection('contact')} className="mt-3 inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors group dark:hover:text-gold-300 light:hover:text-gold-600">
              <span>Discutons</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>

        {/* Bas */}
        <div className="mt-16 pt-8 border-t border-dark-700/30 flex flex-col sm:flex-row items-center justify-between gap-3 dark:border-dark-700/30 light:border-gray-200">
          <div className="flex items-center gap-4">
            <p className="text-gray-600 text-xs dark:text-gray-600 light:text-gray-500">
              © {new Date().getFullYear()} Abdoulaye Patawala. Tous droits réservés.
            </p>
            <Link href="/mentions-legales" className="text-gray-600 hover:text-gray-400 transition-colors text-xs dark:text-gray-600 dark:hover:text-gray-400 light:text-gray-500 light:hover:text-gray-700">
              Mentions légales
            </Link>
          </div>
          <p className="text-gray-700 text-xs dark:text-gray-700 light:text-gray-500">
            Construit avec passion — Propulsé par Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;