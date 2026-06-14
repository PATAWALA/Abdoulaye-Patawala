import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  category?: string;
  readTime?: string;
  featured?: boolean;
}

const FALLBACK_IMAGE = '/images/placeholder-blog.jpg'; // Crée une image par défaut dans public/images/

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  excerpt,
  imageUrl,
  date,
  author,
  category,
  readTime,
  featured,
}) => {
  const [imgError, setImgError] = useState(false);
  const safeImageUrl = imgError || !imageUrl ? FALLBACK_IMAGE : imageUrl;

  return (
    <article className="group relative bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden hover:border-gold-500/20 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500 h-full flex flex-col">
      <Link href={`/blog/${slug}`} className="block aspect-video relative overflow-hidden bg-dark-700">
        <Image
          src={safeImageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
        {category && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-dark-900/80 backdrop-blur-sm border border-dark-600 rounded-full text-xs text-gold-400">
            {category}
          </span>
        )}
        {featured && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full text-xs font-medium text-gold-400">
            À la une
          </span>
        )}
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          {readTime && (
            <>
              <span>·</span>
              <span>{readTime}</span>
            </>
          )}
        </div>

        <Link href={`/blog/${slug}`} className="block mb-2">
          <h3 className="text-lg font-display text-white group-hover:text-gold-400 transition-colors leading-tight">
            {title}
          </h3>
        </Link>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
          {excerpt}
        </p>

        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold-400 transition-colors group/link mt-4 pt-4 border-t border-dark-700"
        >
          <span>Lire l&apos;article</span>
          <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;