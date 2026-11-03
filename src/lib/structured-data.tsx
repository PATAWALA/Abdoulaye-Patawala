import { siteConfig } from './metadata'

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author,
    url: siteConfig.url,
    jobTitle: 'Architecte Web & Automatisation',
    description: 'Conception de plateformes sur-mesure et de systèmes automatisés pour entreprises, cabinets et institutions.',
    knowsAbout: ['Next.js', 'TypeScript', 'React', 'n8n', 'Supabase', 'Automatisation IA', 'Web Development'],
    worksFor: {
      '@type': 'Organization',
      name: 'Indépendant'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cotonou',
      addressRegion: 'Littoral',
      addressCountry: 'BJ'
    },
    sameAs: [
      'https://web.facebook.com/Patawala',
      'https://www.instagram.com/patawalaabdoulaye1900/',
      'https://x.com/AbdoulayeP79682',
      'https://www.linkedin.com/in/abdoulaye-patawala-84b138381/',
      'https://github.com/PATAWALA'
    ]
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
      url: siteConfig.url
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.author,
      url: siteConfig.url
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${article.slug}`
    }
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.author
    }
  }
}

export function generateProjectSchema(project: {
  title: string
  description: string
  image: string
  url: string
  dateCreated: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.image,
    url: project.url,
    dateCreated: project.dateCreated,
    creator: {
      '@type': 'Person',
      name: siteConfig.author
    }
  }
}

export function JsonLd({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}