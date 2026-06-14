import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg motion-safe:animate-fade-in">
        {/* Code erreur */}
        <p className="text-8xl lg:text-9xl font-display text-gold-400/20 select-none">404</p>

        {/* Message */}
        <h1 className="text-2xl md:text-4xl font-display text-white dark:text-white light:text-dark-900 mt-6 mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 dark:text-gray-400 light:text-gray-600">
          La page que vous cherchez n'existe pas ou a été déplacée. 
          Pas d'inquiétude, le meilleur reste à découvrir.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-3 border border-gold-500 text-gold-500 rounded-xl font-semibold hover:bg-gold-500 hover:text-dark-900 transition-all dark:border-gold-500 dark:text-gold-500 light:border-gold-600 light:text-gold-600"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}