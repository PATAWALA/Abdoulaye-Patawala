import type { Metadata } from 'next';
import { createServerSupabase } from '@/lib/supabase/server';
import { generatePageMetadata, siteConfig } from '@/lib/metadata';
import { JsonLd, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/structured-data';
import { Breadcrumb } from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createServerSupabase();
  const { data: post } = await supabase.from('blog_posts').select('*').eq('slug', slug).single();

  if (!post) {
    return generatePageMetadata(
      'Article introuvable',
      'Cet article n\'existe pas ou a été déplacé.',
      `/blog/${slug}`
    );
  }

  return generatePageMetadata(
    `${post.title} | Blog`,
    post.excerpt || post.title,
    `/blog/${slug}`,
    post.image_url
  );
}

// Icônes par catégorie
const categoryIcons: Record<string, React.ReactNode> = {
  'Développement Web': (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  'Business Digital': (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  'Automatisation': (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  'Étude de cas': (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  'Tutoriel': (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createServerSupabase();
  const { data: post } = await supabase.from('blog_posts').select('*').eq('slug', slug).single();

  if (!post) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` }
  ]);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: post.image_url,
    datePublished: post.created_at,
    dateModified: post.created_at,
    author: post.author || 'Abdoulaye Patawala',
    slug: post.slug
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />

      <article className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">

        {/* Fil d'Ariane */}
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${post.slug}` }
          ]}
        />

        {/* En-tête */}
        <header className="mb-10 motion-safe:animate-fade-in">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {post.category && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full text-xs font-medium text-gold-400 uppercase tracking-wider">
                {categoryIcons[post.category] || categoryIcons['Étude de cas']}
                {post.category}
              </span>
            )}
            {post.read_time && (
              <span className="px-3 py-1 bg-dark-800 border border-dark-700 rounded-full text-xs text-gray-400">
                {post.read_time} de lecture
              </span>
            )}
            {post.featured && (
              <span className="px-3 py-1 bg-gold-500/20 border border-gold-500/30 rounded-full text-xs font-medium text-gold-400">
                À la une
              </span>
            )}
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display text-white leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold-500/20 flex-shrink-0">
                <Image src="/images/portrait.png" alt="Abdoulaye Patawala" fill className="object-cover" sizes="32px" />
              </div>
              <div>
                <p className="text-white font-medium text-xs">{post.author || 'Abdoulaye Patawala'}</p>
                <p className="text-gray-600 text-[10px]">Développeur Fullstack</p>
              </div>
            </div>
            <span className="text-gray-700">|</span>
            <time dateTime={post.created_at}>
              {new Date(post.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          </div>
        </header>

        {/* Image de couverture */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-dark-700 shadow-2xl mb-12 motion-safe:animate-fade-in">
          <div className="aspect-[16/9] relative">
            <Image src={post.image_url} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent" />
        </div>

        {/* Résumé */}
        {post.excerpt && (
          <div className="relative mb-12 motion-safe:animate-fade-in">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-400 to-gold-400/0 rounded-full" />
            <p className="pl-6 md:pl-8 text-base md:text-lg text-gray-300 leading-relaxed italic font-medium">
              {post.excerpt}
            </p>
          </div>
        )}

        {/* Contenu */}
        <div
          className="
            [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:font-display [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:pb-3 [&>h2]:border-b [&>h2]:border-dark-700
            [&>h2]:text-gold-400
            [&>h2.text-green-400]:text-green-400
            [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:font-display [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-3
            [&>p]:text-gray-300 [&>p]:leading-relaxed [&>p]:mb-5 [&>p]:text-base
            [&>p>a]:text-gold-400 [&>p>a]:border-b [&>p>a]:border-gold-400/30 [&>p>a]:no-underline hover:[&>p>a]:border-gold-400
            [&>p>strong]:text-white [&>p>strong]:font-semibold
            [&>ul]:space-y-2 [&>ul]:mb-6 [&>ul]:pl-5
            [&>ol]:space-y-2 [&>ol]:mb-6 [&>ol]:pl-5
            [&>ul>li]:text-gray-300 [&>ul>li]:text-base [&>ul>li]:leading-relaxed [&>ul>li]:pl-1
            [&>ol>li]:text-gray-300 [&>ol>li]:text-base [&>ol>li]:leading-relaxed [&>ol>li]:pl-1
            [&>ul>li::marker]:text-gold-400
            [&>ol>li::marker]:text-gold-400
            [&>blockquote]:border-l-2 [&>blockquote]:border-gold-400 [&>blockquote]:bg-dark-800 [&>blockquote]:border [&>blockquote]:border-dark-700 [&>blockquote]:rounded-r-2xl [&>blockquote]:py-6 [&>blockquote]:px-6 [&>blockquote]:my-8
            [&>blockquote>p]:text-gray-300 [&>blockquote>p]:text-base [&>blockquote>p]:leading-relaxed [&>blockquote>p]:italic
            [&>pre]:bg-dark-800 [&>pre]:border [&>pre]:border-dark-700 [&>pre]:rounded-2xl [&>pre]:my-6 [&>pre]:p-4
            [&>pre>code]:text-gold-400 [&>pre>code]:text-sm
            [&>p>code]:text-gold-400 [&>p>code]:bg-dark-800 [&>p>code]:px-1.5 [&>p>code]:py-0.5 [&>p>code]:rounded-lg [&>p>code]:text-xs [&>p>code]:border [&>p>code]:border-dark-700
            [&>img]:rounded-2xl [&>img]:my-8 [&>img]:border [&>img]:border-dark-700 [&>img]:w-full
            [&>hr]:border-dark-700 [&>hr]:my-10
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Séparateur */}
        <div className="flex items-center gap-3 my-12 motion-safe:animate-fade-in">
          <div className="flex-1 h-px bg-dark-700" />
          <span className="text-gray-700 text-xs uppercase tracking-widest">Fin de l&apos;article</span>
          <div className="flex-1 h-px bg-dark-700" />
        </div>

        {/* Auteur */}
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6 mb-10 motion-safe:animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-gold-500/20 flex-shrink-0">
              <Image src="/images/portrait.png" alt="Abdoulaye Patawala" fill className="object-cover" sizes="48px" />
            </div>
            <div>
              <p className="text-white font-semibold text-base mb-1">{post.author || 'Abdoulaye Patawala'}</p>
              <p className="text-gray-500 text-xs mb-2">Développeur Fullstack & Architecte Digital</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                J&apos;aide les entreprises à créer des expériences digitales premium qui convertissent.
                Besoin d&apos;un site, d&apos;une automatisation ou d&apos;un tunnel de vente ? Parlons-en.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-dark-800 border border-dark-700 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center motion-safe:animate-fade-in overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent" />
          <div className="relative z-10">
            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-3">Passer à l&apos;action</p>
            <h2 className="text-xl md:text-3xl font-display text-white mb-3">Prêt à donner vie à votre projet ?</h2>
            <p className="text-gray-400 text-sm md:text-base mb-8 max-w-sm mx-auto">Discutons de vos objectifs. Réponse sous 24h.</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 group shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 text-sm md:text-base"
            >
              <span>Démarrer un projet</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

      </article>
    </>
  );
}