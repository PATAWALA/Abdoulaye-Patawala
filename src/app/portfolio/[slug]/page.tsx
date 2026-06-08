import type { Metadata } from 'next';
import { createServerSupabase } from '@/lib/supabase/server';
import { generatePageMetadata, siteConfig } from '@/lib/metadata';
import { JsonLd, generateBreadcrumbSchema, generateProjectSchema } from '@/lib/structured-data';
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
  const { data: project } = await supabase.from('projects').select('*').eq('slug', slug).single();

  if (!project) {
    return generatePageMetadata(
      'Projet introuvable',
      'Ce projet n\'existe pas ou a été déplacé.',
      `/portfolio/${slug}`
    );
  }

  return generatePageMetadata(
    `${project.title} | Étude de cas`,
    project.description || project.title,
    `/portfolio/${slug}`,
    project.image_url
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createServerSupabase();
  const { data: project } = await supabase.from('projects').select('*').eq('slug', slug).single();

  if (!project) notFound();

  const contentSections = project.content
    ? project.content.split('<h2>').filter(Boolean)
    : [];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: siteConfig.url },
    { name: 'Portfolio', url: `${siteConfig.url}/portfolio` },
    { name: project.title, url: `${siteConfig.url}/portfolio/${project.slug}` }
  ]);

  const projectSchema = generateProjectSchema({
    title: project.title,
    description: project.description || '',
    image: project.image_url,
    url: `${siteConfig.url}/portfolio/${project.slug}`,
    dateCreated: project.created_at
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={projectSchema} />

      <article className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">

        {/* Fil d'Ariane */}
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: project.title, href: `/portfolio/${project.slug}` }
          ]}
        />

        {/* Badge catégorie */}
        <div className="mb-6 motion-safe:animate-fade-in">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        {/* Titre */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-display text-white mb-8 motion-safe:animate-fade-in leading-tight">
          {project.title}
        </h1>

        {/* Image hero */}
        <div className="aspect-video relative rounded-2xl md:rounded-3xl overflow-hidden border border-dark-700 shadow-2xl mb-12 motion-safe:animate-fade-in">
          <Image
            src={project.image_url}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 via-transparent to-transparent" />
        </div>

        {/* Résultat — badge vert */}
        {project.result && (
          <div className="mb-12 motion-safe:animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-green-500/5 border border-green-500/20 rounded-xl px-5 py-3">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-green-400 text-base font-semibold">{project.result}</p>
            </div>
          </div>
        )}

        {/* Description */}
        {project.description && (
          <div className="relative mb-12 motion-safe:animate-fade-in">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-400 to-gold-400/0 rounded-full" />
            <p className="pl-6 text-base md:text-lg text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        )}

        {/* Étude de cas */}
        {contentSections.length > 0 ? (
          <div className="space-y-8 motion-safe:animate-fade-in">
            {contentSections.map((section: string, i: number) => {
              if (!section.includes('</h2>')) {
                return (
                  <div
                    key={i}
                    className="text-gray-300 leading-relaxed space-y-3"
                    dangerouslySetInnerHTML={{ __html: section }}
                  />
                );
              }

              const [title, ...rest] = section.split('</h2>');
              const body = rest.join('</h2>');
              const cleanTitle = title.trim();

              const sectionConfig: Record<string, { color: string; bar: string; icon: React.ReactNode }> = {
                'Le contexte': {
                  color: 'text-blue-400',
                  bar: 'bg-blue-500/40',
                  icon: (
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                },
                'Le défi': {
                  color: 'text-orange-400',
                  bar: 'bg-orange-500/40',
                  icon: (
                    <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                'Ma solution': {
                  color: 'text-gold-400',
                  bar: 'bg-gold-500/40',
                  icon: (
                    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
                'Le résultat': {
                  color: 'text-green-400',
                  bar: 'bg-green-500/40',
                  icon: (
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
              };

              const config = sectionConfig[cleanTitle] || {
                color: 'text-white',
                bar: 'bg-gold-500/40',
                icon: (
                  <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              };

              return (
                <div key={i} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-lg ${config.bar.replace('/40', '/10')} flex items-center justify-center flex-shrink-0`}>
                      {config.icon}
                    </div>
                    <div className={`w-6 h-px ${config.bar} flex-shrink-0`} />
                    <h2 className={`text-xl md:text-2xl font-display ${config.color}`}>
                      {cleanTitle}
                    </h2>
                  </div>
                  <div className="pl-12 space-y-3">
                    <div
                      className="text-gray-300 leading-relaxed
                        [&>p]:mb-4 [&>p]:leading-relaxed
                        [&>strong]:text-white [&>strong]:font-semibold
                        [&>ul]:space-y-2 [&>ul]:mb-4 [&>ul]:pl-4
                        [&>ol]:space-y-2 [&>ol]:mb-4 [&>ol]:pl-4
                        [&>li]:mb-1 [&>li]:leading-relaxed [&>li]:pl-1
                        [&>blockquote]:border-l-2 [&>blockquote]:border-gold-400 [&>blockquote]:bg-dark-800 [&>blockquote]:border [&>blockquote]:border-dark-700 [&>blockquote]:rounded-r-xl [&>blockquote]:py-5 [&>blockquote]:px-5 [&>blockquote]:my-4 [&>blockquote]:text-gray-300 [&>blockquote]:italic"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-600 italic text-sm">Étude de cas détaillée à venir.</p>
        )}

        {/* Séparateur */}
        <div className="flex items-center gap-4 my-14 motion-safe:animate-fade-in">
          <div className="flex-1 h-px bg-dark-700" />
          <span className="text-gray-700 text-xs uppercase tracking-widest">Fin de l&apos;étude</span>
          <div className="flex-1 h-px bg-dark-700" />
        </div>

        {/* Lien vers le site */}
        {project.link && (
          <div className="mb-14 motion-safe:animate-fade-in">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 group shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 text-sm"
            >
              <span>Voir le site en ligne</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}

        {/* CTA contact */}
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8 md:p-12 text-center motion-safe:animate-fade-in">
          <h2 className="text-xl md:text-2xl font-display text-white mb-3">
            Un projet similaire en tête ?
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md mx-auto">
            Chaque projet commence par une conversation. Parlons du vôtre.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors group text-base font-medium"
          >
            <span>Discutons de votre projet</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </article>
    </>
  );
}