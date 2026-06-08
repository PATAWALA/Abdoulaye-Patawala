import { Inter, Playfair_Display } from 'next/font/google';
import { generateWebSiteSchema, generatePersonSchema, JsonLd } from '@/lib/structured-data';
import { generateBaseMetadata } from '@/lib/metadata';
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
        <JsonLd data={generateWebSiteSchema()} />
        <JsonLd data={generatePersonSchema()} />
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