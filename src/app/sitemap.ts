import { MetadataRoute } from 'next'
import { createServerSupabase } from '@/lib/supabase/server'
import { siteConfig } from '@/lib/metadata'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createServerSupabase()
  
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const { data: projects } = await supabase
    .from('projects')
    .select('slug, created_at')
    .order('created_at', { ascending: false })

  const projectPages: MetadataRoute.Sitemap = (projects || []).map((project) => ({
    url: `${siteConfig.url}/portfolio/${project.slug}`,
    lastModified: new Date(project.created_at),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const { data: articles } = await supabase
    .from('blog_posts')
    .select('slug, created_at')
    .order('created_at', { ascending: false })

  const articlePages: MetadataRoute.Sitemap = (articles || []).map((article) => ({
    url: `${siteConfig.url}/blog/${article.slug}`,
    lastModified: new Date(article.created_at),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...projectPages, ...articlePages]
}