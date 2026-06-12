import { Metadata } from 'next'
import { generatePageMetadata, siteConfig } from '@/lib/metadata'
import { JsonLd, generateWebSiteSchema, generatePersonSchema, generateBreadcrumbSchema } from '@/lib/structured-data'
import Hero from '@/components/sections/Hero'
import Services, { ServicesSkeleton } from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import PortfolioSkeleton from '@/components/sections/PortfolioSkeleton'
import Testimonials from '@/components/sections/Testimonials'
import TestimonialsSkeleton from '@/components/sections/TestimonialsSkeleton'
import BlogPreview from '@/components/sections/BlogPreview'
import Stack, { StackSkeleton } from '@/components/sections/Stack'
import BlogPreviewSkeleton from '@/components/sections/BlogPreviewSkeleton'
import Contact from '@/components/sections/Contact'
import { Suspense } from 'react'

export const metadata: Metadata = generatePageMetadata(
  'Abdoulaye Patawala | Partenaire Technique, Automatisation IA & Web',
  'Expert technique basé à Cotonou. Je propulse la croissance des startups, PME et infopreneurs grâce aux tunnels de vente, à l’automatisation IA (Make, n8n) et à des architectures sur-mesure (Next.js, Odoo).',
  '/'
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Accueil', url: siteConfig.url }
])

export default function Home() {
  return (
    <>
      <JsonLd data={generateWebSiteSchema()} />
      <JsonLd data={generatePersonSchema()} />
      <JsonLd data={breadcrumbSchema} />
      
      <Hero />

      {/* Bannière accompagnement — version épurée */}
<div className="bg-dark-800">
  <div className="max-w-7xl mx-auto px-4 py-5 text-center">
    <p className="text-sm text-gray-400">
      <span className="text-green-400 font-medium">✓</span> 3 mois d&apos;accompagnement inclus sur chaque projet
    </p>
  </div>
</div>

      <Suspense fallback={<ServicesSkeleton />}>
        <Services />
      </Suspense>
      <Suspense fallback={<StackSkeleton />}>
        <Stack />
      </Suspense>
      <Suspense fallback={<PortfolioSkeleton />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<TestimonialsSkeleton />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<BlogPreviewSkeleton />}>
        <BlogPreview />
      </Suspense>
      <Contact />
    </>
  )
}