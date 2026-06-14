'use client';

import React from 'react';
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

const PortfolioClient: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <section className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
    {/* En-tête */}
    <div className="text-center mb-16 lg:mb-20 motion-safe:animate-fade-in">
      <Link href="/#portfolio" className="text-gold-400 text-sm hover:underline mb-4 inline-block">
        ← Retour à l'accueil
      </Link>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-white dark:text-white light:text-dark-900 mb-6 mt-4">
        Ils m'ont fait confiance
      </h1>
      <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed dark:text-gray-400 light:text-gray-600">
        Des résultats concrets, pas des promesses. Chaque projet est une collaboration unique.
      </p>
    </div>

    {/* Grille */}
    {projects.length === 0 ? (
      <p className="text-center text-gray-600 dark:text-gray-600 light:text-gray-500">Aucun projet pour le moment.</p>
    ) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="group relative bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden motion-safe:animate-fade-in hover:border-gold-500/20 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500 dark:bg-dark-800 dark:border-dark-700 light:bg-white light:border-gray-200 light:hover:border-gold-500/30 light:hover:shadow-md"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Image */}
            <Link href={project.slug ? `/portfolio/${project.slug}` : '#'} className="block aspect-video relative overflow-hidden bg-dark-700 dark:bg-dark-700 light:bg-gray-100">
              <Image
                src={project.image_url}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={i < 3}
                loading={i < 3 ? undefined : 'lazy'}
              />
              <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/20 transition-colors duration-500" />
            </Link>

            {/* Contenu */}
            <div className="p-6 space-y-4">
              <span className="text-xs text-gold-400 uppercase tracking-widest">
                {project.category}
              </span>

              <h3 className="text-xl font-display text-white group-hover:text-gold-400 transition-colors dark:text-white light:text-dark-900 light:group-hover:text-gold-600">
                <Link href={project.slug ? `/portfolio/${project.slug}` : '#'}>
                  {project.title}
                </Link>
              </h3>

              {project.description && (
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 dark:text-gray-400 light:text-gray-600">
                  {project.description}
                </p>
              )}

              {project.result && (
                <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-lg px-3 py-1.5">
                  <svg className="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-gold-400 text-xs font-semibold">{project.result}</span>
                </div>
              )}

              {project.slug && (
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gold-400 transition-colors group/link pt-2 dark:text-gray-400 dark:hover:text-gold-400 light:text-gray-600 light:hover:text-gold-600"
                >
                  <span>Voir l'étude de cas</span>
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    )}

    {/* CTA */}
    <div className="text-center mt-20 motion-safe:animate-fade-in">
      <p className="text-gray-400 text-lg mb-6 dark:text-gray-400 light:text-gray-600">
        Vous avez un projet en tête ?
      </p>
      <Link
        href="/#contact"
        className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors group dark:hover:text-gold-300 light:hover:text-gold-600"
      >
        <span className="text-lg font-medium">Discutons-en</span>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  </section>
);

export default PortfolioClient;