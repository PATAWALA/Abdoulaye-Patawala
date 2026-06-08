import { Metadata } from 'next';

const siteConfig = {
  name: 'Abdoulaye Patawala',
  title: 'Abdoulaye Patawala | Développeur Fullstack & Architecte Digital',
  description:
    'Sites web premium, tunnels de vente et automatisation sur-mesure. Je transforme votre vision en résultats concrets. Basé à Cotonou, Bénin.',
  url: 'https://www.patawala.com',
  ogImage: 'https://www.patawala.com/images/og-default.png',
  locale: 'fr_FR',
  twitterHandle: '@abdoulaye_dev',
  author: 'Abdoulaye Patawala',
  keywords: [
    'développeur fullstack',
    'architecte digital',
    'Cotonou',
    'Bénin',
    'Next.js',
    'TypeScript',
    'React',
    'WordPress',
    'Systeme.io',
    'automatisation',
    'tunnel de vente',
    'site vitrine',
    'applications web',
    'développeur freelance',
    'consultant numérique',
    'site sur-mesure',
    'performance web',
    'SEO technique',
  ],
  services: [
    'Conseil stratégique',
    'Sites & plateformes sur-mesure',
    'Tunnels de vente & automatisation',
  ],
  location: 'Cotonou, Bénin',
  email: 'patawalaabdoulaye2003@gmail.com',
};

export function generateBaseMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: siteConfig.url,
      languages: {
        'fr-FR': siteConfig.url,
      },
    },
    ...overrides,
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  image?: string
): Metadata {
  const url = `${siteConfig.url}${path}`;

  return generateBaseMetadata({
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : undefined,
    },
    twitter: {
      title,
      description,
      images: image ? [image] : undefined,
    },
    alternates: {
      canonical: url,
    },
  });
}

export { siteConfig };