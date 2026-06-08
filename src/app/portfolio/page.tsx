import type { Metadata } from 'next';
import { createServerSupabase } from '@/lib/supabase/server';
import { generatePageMetadata, siteConfig } from '@/lib/metadata';
import { JsonLd, generateBreadcrumbSchema } from '@/lib/structured-data';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = generatePageMetadata(
  'Portfolio | Projets et Réalisations',
  'Découvrez mes réalisations : sites web, tunnels de vente, automatisations et applications cloud.',
  '/portfolio'
);

export const revalidate = 3600; // Revalider toutes les heures

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Accueil', url: siteConfig.url },
  { name: 'Portfolio', url: `${siteConfig.url}/portfolio` }
]);

export default async function PortfolioPage() {
  const supabase = await createServerSupabase();
  const { data: projects } = await supabase
    .from('projects')
    .select('id, slug, title, category, image_url, description, result, link')
    .order('created_at', { ascending: false });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PortfolioClient projects={projects || []} />
    </>
  );
}