import type { Metadata } from 'next';
import { createServerSupabase } from '@/lib/supabase/server';
import { generatePageMetadata, siteConfig } from '@/lib/metadata';
import { JsonLd, generateBreadcrumbSchema } from '@/lib/structured-data';
import BlogList from './BlogList';

export const metadata: Metadata = generatePageMetadata(
  'Retours d’Expérience & Stratégies | Abdoulaye Patawala',
  'Coulisses de l’automatisation, stratégies de croissance et retours d’expérience concrets du terrain pour optimiser l’infrastructure de votre business.',
  '/blog'
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Accueil', url: siteConfig.url },
  { name: 'Blog', url: `${siteConfig.url}/blog` }
]);

export default async function BlogPage() {
  const supabase = await createServerSupabase();

  // Articles À la une (max 2)
  const { data: featured } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(2);

  // Tous les articles (non featured)
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      
      <section className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20 motion-safe:animate-fade-in">
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">Blog & Ressources</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-white dark:text-white light:text-dark-900 mb-6">
            Conseils & expertise
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed dark:text-gray-400 light:text-gray-600">
            Retours d&apos;expérience, tutoriels et bonnes pratiques pour faire grandir votre business digital.
          </p>
        </div>

        <BlogList featured={featured || []} posts={posts || []} />
      </section>
    </>
  );
}