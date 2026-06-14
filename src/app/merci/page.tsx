import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Merci — Abdoulaye Patawala',
  description: 'Votre message a bien été envoyé.',
  robots: 'noindex, nofollow',
};

export default function MerciPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-lg motion-safe:animate-fade-in">
        
        {/* Icône succès */}
        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Titre */}
        <h1 className="text-3xl md:text-5xl font-display text-white mb-4">
          Merci pour votre message
        </h1>

        {/* Message */}
        <p className="text-gray-400 text-lg leading-relaxed mb-3">
          J&apos;ai bien reçu votre demande et je vous réponds personnellement sous 24h.
        </p>
        <p className="text-gray-600 text-sm mb-10">
          En attendant, n&apos;hésitez pas à explorer mes réalisations ou mon blog.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors"
          >
            Voir mes réalisations
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-gold-500 text-gold-500 rounded-xl font-semibold hover:bg-gold-500 hover:text-dark-900 transition-all"
          >
            Lire le blog
          </Link>
          <Link
            href="/"
            className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>

      </div>
    </section>
  );
}