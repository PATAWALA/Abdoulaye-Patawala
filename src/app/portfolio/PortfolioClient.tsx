// src/app/portfolio/PortfolioClient.tsx

'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  slug: string | null;
  title: string;
  category: string;
  image_url: string;
  description: string | null;
  result: string | null;
  link: string | null;
}

const PortfolioClient: React.FC<{ projects: Project[] }> = ({ projects }) => {
  // Extraire les catégories uniques (premier mot de la catégorie)
  const categories = useMemo(() => {
    const uniqueCats = new Set<string>();
    projects.forEach((p) => {
      const mainCat = p.category.split('·')[0].trim();
      uniqueCats.add(mainCat);
    });
    return ['Tous', ...Array.from(uniqueCats)];
  }, [projects]);

  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Tous') return projects;
    return projects.filter((p) => {
      const mainCat = p.category.split('·')[0].trim();
      return mainCat === activeFilter;
    });
  }, [projects, activeFilter]);

  const whatsappUrl = "https://wa.me/22962278090?text=Bonjour%20Abdoulaye%2C%20je%20souhaite%20discuter%20d%27un%20projet.";

  return (
    <section className="relative pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Halo doré en arrière-plan (desktop uniquement) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative">
        {/* En-tête */}
        <div className="text-center mb-12 lg:mb-16 motion-safe:animate-fade-in">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 text-gold-400 text-sm hover:text-gold-300 transition-colors mb-6 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Retour à l'accueil
          </Link>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            Des réalisations pensées pour durer.
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Chaque projet est une réponse technique et stratégique à un besoin concret. Découvrez comment j'ai accompagné ces organisations.
          </p>
          <p className="text-gold-400/80 text-sm mt-4 font-medium">
            {projects.length} projet{projects.length > 1 ? 's' : ''} récent{projects.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Filtres */}
        <div className="relative mb-12">
          {/* Fade sur le bord droit (mobile) */}
          <div className="sm:hidden absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-dark-900 to-transparent pointer-events-none z-10" />
          
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-3 px-4 pb-2 snap-x snap-mandatory sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shrink-0 snap-center ${
                  activeFilter === cat
                    ? 'bg-gold-500 text-dark-900 shadow-lg shadow-gold-500/20'
                    : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700 border border-dark-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-600 py-12">Aucun projet dans cette catégorie.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className="group relative bg-dark-800 border border-dark-600 rounded-xl overflow-hidden motion-safe:animate-fade-in hover:border-gold-500/40 hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-500"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <Link 
                  href={project.slug ? `/portfolio/${project.slug}` : '#'} 
                  className="block aspect-video relative overflow-hidden bg-dark-700"
                >
                  <Image
                    src={project.image_url}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i < 3}
                    loading={i < 3 ? undefined : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/30 transition-colors duration-500" />
                  {/* Badge "Voir" au survol */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-gold-500 text-dark-900 text-xs font-semibold rounded-lg">
                      Voir l'étude de cas
                    </span>
                  </div>
                </Link>

                {/* Contenu */}
                <div className="p-6 space-y-4">
                  <span className="text-xs text-gold-400 uppercase tracking-widest font-medium">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-display text-white group-hover:text-gold-400 transition-colors leading-tight">
                    <Link href={project.slug ? `/portfolio/${project.slug}` : '#'}>
                      {project.title}
                    </Link>
                  </h3>

                  {project.description && (
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  )}

                  {project.result && (
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500/10 to-gold-500/5 border border-gold-500/30 rounded-lg px-3 py-1.5">
                      <svg className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-gold-400 text-xs font-semibold">{project.result}</span>
                    </div>
                  )}

                  {project.slug && (
                    <div className="pt-2">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors group/link"
                      >
                        <span>Voir l'étude de cas</span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA final WhatsApp */}
        <div className="text-center mt-20 lg:mt-24 motion-safe:animate-fade-in">
          <p className="text-gray-400 text-lg mb-6">
            Votre projet mérite le même niveau d'exigence.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 group shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Discutons sur WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioClient;