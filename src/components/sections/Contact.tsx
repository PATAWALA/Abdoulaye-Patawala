'use client';

import React from 'react';
import ContactForm from '@/components/molecules/ContactForm';

const Contact: React.FC = () => (
  <section id="contact" className="bg-dark-900 relative overflow-hidden">
    {/* Fond décoratif */}
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }}
    />

    <div className="relative py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        
        {/* Gauche : Infos */}
        <div className="motion-safe:animate-fade-in">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
            Parlons de<br />votre projet
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
            Une idée, un défi, une ambition ? Ou simplement un retour sur mon travail ? Écrivez‑moi.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Email</p>
                <a href="mailto:patawalaabdoulaye2003@gmail.com" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">
                  patawalaabdoulaye2003@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Localisation</p>
                <p className="text-gray-400 text-sm">Cotonou, Bénin — Disponible en remote</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Disponibilité</p>
                <p className="text-gray-400 text-sm">Ouvert aux projets — Réponse sous 24h</p>
              </div>
            </div>

            {/* Bouton WhatsApp */}
            <a
              href="https://wa.me/22962278090" /* Remplace par ton numéro */
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-500 transition-colors shadow-lg shadow-green-600/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Discuter sur WhatsApp
            </a>
          </div>
        </div>

        {/* Droite : Formulaire */}
        <div className="motion-safe:animate-fade-in">
          <ContactForm />
        </div>

      </div>
    </div>
  </section>
);

export default Contact;