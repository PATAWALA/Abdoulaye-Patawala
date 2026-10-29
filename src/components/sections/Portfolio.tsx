// src/components/sections/Portfolio.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createClientComponent } from '@/lib/supabase/client';
import PortfolioSkeleton from './PortfolioSkeleton';

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

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponent();

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(2); // 🔒 VERROUILLÉ À 2 PROJETS MAXIMUM
      if (data) setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  if (loading) return <PortfolioSkeleton />;

  if (projects.length === 0) return null;

  return (
    <section id="portfolio" className="bg-dark-900 relative overflow-hidden">
      {/* Halo doré décoratif (uniquement desktop) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-16 lg:mb-24 motion-safe:animate-fade-in">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            Des réalisations pensées pour durer.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Chaque projet est une réponse technique et stratégique à un besoin concret. Découvrez comment j'ai accompagné ces organisations.
          </p>
        </div>

        {/* Liste des 2 projets (zig-zag) */}
        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center motion-safe:animate-fade-in"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Image */}
                <div className={isLeft ? '' : 'lg:order-2'}>
                  <Link
                    href={project.slug ? `/portfolio/${project.slug}` : '#'}
                    className="block relative group overflow-hidden rounded-xl border border-dark-600 shadow-2xl shadow-dark-900/50"
                  >
                    <div className="aspect-[4/3] relative bg-dark-800">
                      <Image
                        src={project.image_url}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/30 transition-colors duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-5 py-2.5 bg-gold-500 text-dark-900 text-sm font-semibold rounded-xl">
                          Voir l'étude de cas
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Contenu textuel */}
                <div className={isLeft ? '' : 'lg:order-1'}>
                  <div className="space-y-5">
                    <p className="text-gold-400 text-sm tracking-widest uppercase font-medium">
                      {project.category}
                    </p>
                    
                    <h3 className="text-2xl lg:text-3xl font-display text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    {project.description && (
                      <p className="text-gray-400 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    )}
                    
                    {project.result && (
                      <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-gold-500/10 to-gold-500/5 border border-gold-500/30 rounded-xl px-4 py-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <span className="text-gold-400 font-semibold text-sm">{project.result}</span>
                      </div>
                    )}
                    
                    {project.slug && (
                      <div className="pt-2">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors group/link"
                        >
                          <span>Voir l'étude de cas complète</span>
                          <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA permanent vers la page /portfolio */}
        <div className="text-center mt-20 lg:mt-24 motion-safe:animate-fade-in">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-gold-500/40 text-gold-400 rounded-xl font-semibold hover:bg-gold-500/10 hover:border-gold-500/60 transition-all duration-300 group"
          >
            <span>Voir tous mes projets</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;