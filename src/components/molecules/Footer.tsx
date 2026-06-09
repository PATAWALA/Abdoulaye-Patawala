'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        
        {/* Grille principale */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Marque */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="text-gold-400 font-display text-2xl tracking-tight">
              Abdoulaye<span className="text-white">Patawala</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Développeur fullstack & architecte digital. Je crée des expériences web premium qui transforment votre vision en résultats concrets.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://web.facebook.com/Patawala" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-all" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/abdoulaye-patawala-84b138381/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-all" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/PATAWALA" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-all" aria-label="GitHub">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5">Navigation</p>
            <Link href="/" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">Accueil</Link>
            <Link href="/portfolio" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">Réalisations</Link>
            <Link href="/blog" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">Blog & Ressources</Link>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">Me contacter</button>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <p className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5">Services</p>
            <Link href="/#services" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">Conseil stratégique</Link>
            <Link href="/#services" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">Sites sur-mesure</Link>
            <Link href="/#services" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">Tunnels de vente</Link>
            <Link href="/#services" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">Automatisation</Link>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5">Contact</p>
            <a href="mailto:patawalaabdoulaye2003@gmail.com" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm break-all">
              patawalaabdoulaye2003@gmail.com
            </a>
            <p className="text-gray-500 text-sm">Cotonou, Bénin</p>
            <button onClick={() => scrollToSection('contact')} className="mt-3 inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors group">
              <span>Discutons</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>

        {/* Bas */}
        <div className="mt-16 pt-8 border-t border-dark-700/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Abdoulaye Patawala. Tous droits réservés.
            </p>
            <Link href="/mentions-legales" className="text-gray-600 hover:text-gray-400 transition-colors text-xs">
              Mentions légales
            </Link>
          </div>
          <p className="text-gray-700 text-xs">
            Construit avec passion — Propulsé par Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;