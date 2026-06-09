'use client';

import React, { useEffect, useState } from 'react';
import BlogCard from '@/components/molecules/BlogCard';
import { createClientComponent } from '@/lib/supabase/client';
import BlogPreviewSkeleton from './BlogPreviewSkeleton';
import Link from 'next/link';

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

const BlogPreview: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponent();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data: featuredPosts } = await (supabase as any)
          .from('blog_posts')
          .select('*')
          .eq('featured', true)
          .order('created_at', { ascending: false })
          .limit(3);

        let combined: Post[] = (featuredPosts as Post[]) || [];

        if (combined.length < 3) {
          const existingIds = combined.map(p => p.id);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const { data: recentPosts } = await (supabase as any)
            .from('blog_posts')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(3 - combined.length);

          if (recentPosts) {
            const filtered = (recentPosts as Post[]).filter(p => !existingIds.includes(p.id));
            combined = [...combined, ...filtered].slice(0, 3);
          }
        }

        setPosts(combined);
      } catch (error) {
        console.error('Erreur chargement articles', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <BlogPreviewSkeleton />;

  if (posts.length === 0) return null;

  return (
    <section className="bg-dark-800">
      <div className="py-20 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-16 lg:mb-20 motion-safe:animate-fade-in">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">Blog & Ressources</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            Conseils & expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Retours d&apos;expérience, tutoriels et bonnes pratiques pour accélérer votre transformation digitale.
          </p>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className="motion-safe:animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <BlogCard
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.image_url}
                date={post.created_at}
                author={post.author}
                category={post.category}
                readTime={post.read_time}
                featured={post.featured}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center motion-safe:animate-fade-in">
          <p className="text-gray-500 text-sm mb-6">
            Des articles réguliers pour vous aider à mieux comprendre le digital.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors group"
          >
            <span className="text-lg font-medium">Voir tous les articles</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;