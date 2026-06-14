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
        .limit(3);
      if (data) setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  if (loading) return <PortfolioSkeleton />;

  if (projects.length === 0) return null;

  return (
    <section id="portfolio" className="bg-dark-900 dark:bg-dark-900 light:bg-gray-50">
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20 motion-safe:animate-fade-in">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white dark:text-white light:text-dark-900 mb-6">
            Ils m'ont fait confiance
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed dark:text-gray-400 light:text-gray-600">
            Des résultats concrets, pas des promesses.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center motion-safe:animate-fade-in"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {/* Image */}
                <div className={isLeft ? '' : 'lg:order-2'}>
                  <Link
                    href={project.slug ? `/portfolio/${project.slug}` : '#'}
                    className="block relative group overflow-hidden rounded-2xl border border-dark-700 shadow-2xl dark:border-dark-700 light:border-gray-200 light:shadow-lg"
                  >
                    <div className="aspect-[4/3] relative bg-dark-800 dark:bg-dark-800 light:bg-gray-200">
                      <Image
                        src={project.image_url}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/20 transition-colors duration-500" />
                    </div>
                  </Link>
                </div>

                {/* Contenu */}
                <div className={isLeft ? '' : 'lg:order-1'}>
                  <div className="space-y-5">
                    <p className="text-gold-400 text-sm tracking-widest uppercase">{project.category}</p>
                    <h3 className="text-2xl lg:text-3xl font-display text-white dark:text-white light:text-dark-900">{project.title}</h3>
                    {project.description && (
                      <p className="text-gray-400 leading-relaxed dark:text-gray-400 light:text-gray-600">{project.description}</p>
                    )}
                    {project.result && (
                      <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-xl px-4 py-2">
                        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-gold-400 font-semibold">{project.result}</span>
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
              </div>
            );
          })}
        </div>

        {projects.length >= 3 && (
          <div className="text-center mt-20 motion-safe:animate-fade-in">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors group dark:hover:text-gold-300 light:hover:text-gold-600"
            >
              <span className="text-lg font-medium">Voir tous les projets</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;