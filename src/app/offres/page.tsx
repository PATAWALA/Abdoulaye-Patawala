import type { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@/lib/metadata';
import { JsonLd, generateBreadcrumbSchema } from '@/lib/structured-data';
import OffresContent from './OffresContent';

export const metadata: Metadata = generatePageMetadata(
  'Mes Offres — Abdoulaye Patawala',
  'Pack Démarrage dès 12 €/an ou Pack Signature sur-mesure à partir de 230 €. Site professionnel, automatisation IA et accompagnement technique à Cotonou, Bénin.',
  '/offres'
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Accueil', url: siteConfig.url },
  { name: 'Offres', url: `${siteConfig.url}/offres` },
]);

const offersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Pack Démarrage',
        description: 'Votre présence en ligne, simplement et rapidement. Maquette prête à l\'emploi, nom de domaine .com, bouton WhatsApp et hébergement inclus.',
        provider: {
          '@type': 'Person',
          name: siteConfig.author,
          url: siteConfig.url,
        },
        areaServed: { '@type': 'Country', name: 'BJ' },
        offers: {
          '@type': 'Offer',
          price: '12',
          priceCurrency: 'EUR',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Pack Signature',
        description: 'Plateforme complète, automatisée et sécurisée. Design personnalisé, formulaire intelligent, espace privé, automatisation IA et accompagnement de 3 mois.',
        provider: {
          '@type': 'Person',
          name: siteConfig.author,
          url: siteConfig.url,
        },
        areaServed: { '@type': 'Country', name: 'BJ' },
        offers: {
          '@type': 'Offer',
          price: '230',
          priceCurrency: 'EUR',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
        },
      },
    },
  ],
};

export default function OffresPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={offersSchema} />
      <OffresContent />
    </>
  );
}
