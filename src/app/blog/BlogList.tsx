'use client';

import React, { useState } from 'react';
import BlogCard from '@/components/molecules/BlogCard';

interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image_url: string;
  created_at: string;
  author: string;
  category?: string;
  read_time?: string;
  featured?: boolean;
}

const allPossibleCategories = [
  'Développement Web',
  'Business Digital',
  'Automatisation',
  'Étude de cas',
  'Tutoriel',
];

const BlogList: React.FC<{ featured: Post[]; posts: Post[] }> = ({ featured = [], posts = [] }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? posts.filter(p => p.category === activeCategory && !p.featured)
    : posts.filter(p => !p.featured);

  // Compter les articles par catégorie
  const categoryCount: Record<string, number> = {};
  allPossibleCategories.forEach(cat => {
    categoryCount[cat] = posts.filter(p => p.category === cat && !p.featured).length;
  });

  if (posts.length === 0 && featured.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 text-lg dark:text-gray-600 light:text-gray-500">Aucun article pour le moment.</p>
        <p className="text-gray-700 text-sm mt-2 dark:text-gray-700 light:text-gray-500">Revenez bientôt.</p>
      </div>
    );
  }

  return (
    <div>
      {/* À la une */}
      {featured.length > 0 && (
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
            <h2 className="text-xl font-display text-white dark:text-white light:text-dark-900">À la une</h2>
            <span className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-600 bg-dark-800 dark:bg-dark-800 light:bg-gray-100 border border-dark-700 dark:border-dark-700 light:border-gray-200 rounded-full px-3 py-0.5">
              {featured.length} article{featured.length > 1 ? 's' : ''}
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {featured.map((post, i) => (
              <div key={post.id} className="motion-safe:animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <BlogCard
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  imageUrl={post.image_url}
                  date={post.created_at}
                  author={post.author}
                  category={post.category}
                  readTime={post.read_time}
                  featured
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filtres avec toutes les catégories */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-lg font-display text-white dark:text-white light:text-dark-900">Tous les articles</h2>
          <span className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-600">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === null
                ? 'bg-gold-500/15 text-gold-400 border border-gold-500/20 shadow-sm dark:bg-gold-500/15 dark:text-gold-400 dark:border-gold-500/20 light:bg-gold-500/20 light:text-gold-600 light:border-gold-500/30'
                : 'text-gray-400 hover:text-white border border-transparent hover:bg-dark-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-dark-800 light:text-gray-600 light:hover:text-dark-900 light:hover:bg-gray-200'
            }`}
          >
            Tous
          </button>
          {allPossibleCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              disabled={categoryCount[cat] === 0}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-500/15 text-gold-400 border border-gold-500/20 shadow-sm dark:bg-gold-500/15 dark:text-gold-400 dark:border-gold-500/20 light:bg-gold-500/20 light:text-gold-600 light:border-gold-500/30'
                  : categoryCount[cat] === 0
                  ? 'text-gray-700 dark:text-gray-700 light:text-gray-400 cursor-not-allowed'
                  : 'text-gray-400 hover:text-white border border-transparent hover:bg-dark-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-dark-800 light:text-gray-600 light:hover:text-dark-900 light:hover:bg-gray-200'
              }`}
            >
              {cat}
              {categoryCount[cat] > 0 && (
                <span className="ml-1.5 text-xs text-gray-500 dark:text-gray-500 light:text-gray-500">({categoryCount[cat]})</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grille articles */}
      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post, i) => (
            <div key={post.id} className="motion-safe:animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <BlogCard
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.image_url}
                date={post.created_at}
                author={post.author}
                category={post.category}
                readTime={post.read_time}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 py-10 dark:text-gray-600 light:text-gray-500">Aucun article dans cette catégorie.</p>
      )}
    </div>
  );
};

export default BlogList;