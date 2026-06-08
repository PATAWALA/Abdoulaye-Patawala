import { Inter, Playfair_Display } from 'next/font/google';
import { generateWebSiteSchema, generatePersonSchema, JsonLd } from '@/lib/structured-data';
import { generateBaseMetadata, siteConfig } from '@/lib/metadata';
import ClientLayout from './ClientLayout';
import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = generateBaseMetadata({
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <head>
        {/* VÉRIFICATION GOOGLE */}
        <meta name="google-site-verification" content="JsLn-cAbRgE_Dmw18OjOWigWtZU1X7cONrLGZrk2D64" />
        
        {/* OPEN GRAPH - Injecté manuellement pour garantir l'affichage */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={`${siteConfig.url}/images/og-default.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={`${siteConfig.url}/images/og-default.png`} />
        <meta name="twitter:creator" content="@abdoulaye_dev" />
        
        {/* JSON-LD */}
        <JsonLd data={generateWebSiteSchema()} />
        <JsonLd data={generatePersonSchema()} />
        
        {/* PERF */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-dark-900 text-white antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}