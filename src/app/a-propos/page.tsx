import type { Metadata } from 'next';
import Image from 'next/image';
import { generatePageMetadata, siteConfig } from '@/lib/metadata';
import { JsonLd, generateBreadcrumbSchema } from '@/lib/structured-data';
import AboutContent from './AboutContent';

export const metadata: Metadata = generatePageMetadata(
  'À propos — Abdoulaye Patawala',
  'Architecte web & automatisation basé à Cotonou. Je conçois des plateformes sur-mesure et des systèmes automatisés pour les entreprises, cabinets et institutions.',
  '/a-propos'
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Accueil', url: siteConfig.url },
  { name: 'À propos', url: `${siteConfig.url}/a-propos` },
]);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <AboutContent />
    </>
  );
}
