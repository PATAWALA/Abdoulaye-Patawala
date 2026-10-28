import { Metadata } from 'next'
import { generatePageMetadata, siteConfig } from '@/lib/metadata'
import { JsonLd, generateWebSiteSchema, generatePersonSchema, generateBreadcrumbSchema } from '@/lib/structured-data'
import Hero from '@/components/sections/Hero'
import Offers from '@/components/sections/Offers' // <-- Nouvel import
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
  'Abdoulaye Patawala | Architecte Web & Automatisation',
  'Expert technique basé à Cotonou. Je conçois des sites sur-mesure et des systèmes automatisés pour les entreprises, cabinets et professions libérales.',
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
      
      {/* NOUVELLE SECTION OFFRES */}
      <Offers />
      
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