import type { Metadata } from 'next';
import Image from 'next/image';
import { generatePageMetadata, siteConfig } from '@/lib/metadata';
import { JsonLd, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = generatePageMetadata(
  'À propos | Abdoulaye Patawala',
  'Découvrez le parcours et la vision d\'Abdoulaye Patawala, architecte web & automatisation basé à Cotonou. Passion, qualité et engagement sur chaque projet.',
  '/a-propos'
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Accueil', url: siteConfig.url },
  { name: 'À propos', url: `${siteConfig.url}/a-propos` },
]);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="relative pt-28 pb-24 px-4 md:px-8 overflow-hidden">
        {/* Halo doré décoratif */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-10 motion-safe:animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs md:text-sm font-medium tracking-wide uppercase backdrop-blur-sm">
              À propos
            </span>
          </div>

          {/* Titre en deux parties */}
          <div className="text-center mb-16 motion-safe:animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-white leading-tight">
              Je suis tombé dans le code par curiosité.
              <br />
              <span className="text-gold-400">J&apos;y suis resté par passion.</span>
            </h1>
          </div>

          {/* Grille : portrait + récit */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Portrait */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start motion-safe:animate-slide-up">
              <div className="relative w-full max-w-xs aspect-[3/4] rounded-3xl overflow-hidden border border-dark-600 shadow-2xl shadow-gold-500/5">
                <Image
                  src="/images/portrait.png"
                  alt="Abdoulaye Patawala — Architecte Web & Automatisation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 320px, 280px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 bg-dark-800/90 backdrop-blur-sm border border-dark-600 rounded-xl px-5 py-3">
                  <p className="text-gold-400 text-2xl font-bold">4+</p>
                  <p className="text-gray-400 text-xs">ans d&apos;expertise</p>
                </div>
              </div>
            </div>

            {/* Récit */}
            <div className="lg:col-span-3 space-y-6 motion-safe:animate-fade-in">
              <p className="text-lg text-gray-300 leading-relaxed">
                Tout a commencé à 19 ans, devant un écran, avec une simple curiosité : comprendre comment ça marche. Pas de vocation précoce, pas de parcours classique. Juste le plaisir de manipuler, de créer, de voir un projet prendre forme à partir de rien.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Cette curiosité est devenue une passion. J&apos;ai travaillé sur chaque projet avec le même enthousiasme, même quand les budgets étaient maigres ou inexistants. Parce que construire quelque chose qui fonctionne, qui résout un vrai problème, c&apos;est ce qui m&apos;anime.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Aujourd&apos;hui, je conçois des plateformes sur-mesure et des systèmes automatisés pour des entreprises, des cabinets et des institutions. Chaque projet est traité avec le même soin. Pas de livraison bâclée, pas de &quot;one-shot&quot;. Un travail soigné, un accompagnement réel, une relation qui dure.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ce que je propose, c&apos;est simple : un partenaire technique qui travaille avec passion, qui reste disponible après la livraison, et qui s&apos;engage sur la qualité. Parce que votre projet mérite mieux qu&apos;un prestataire qui disparaît.
              </p>
            </div>
          </div>

          {/* Citation */}
          <div className="mt-20 motion-safe:animate-fade-in">
            <blockquote className="relative max-w-3xl mx-auto text-center">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-gold-400/20 text-8xl font-display leading-none select-none" aria-hidden="true">
                &ldquo;
              </div>
              <p className="relative text-xl md:text-2xl lg:text-3xl font-display text-white leading-snug pt-8">
                Mon objectif est simple : travailler avec passion sur chaque projet, parce que j&apos;aime simplement le faire.
              </p>
              <footer className="mt-6">
                <p className="text-gold-400 text-sm font-medium tracking-wide">— Abdoulaye Patawala</p>
              </footer>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center motion-safe:animate-fade-in">
            <div className="max-w-xl mx-auto p-8 md:p-10 rounded-3xl bg-dark-800 border border-dark-600 hover:border-gold-500/30 transition-all duration-300">
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Si vous cherchez quelqu&apos;un qui travaille avec passion, on devrait s&apos;entendre.
              </p>
              <a
                href="https://wa.me/22962278090?text=Bonjour%20Abdoulaye%2C%20je%20souhaite%20discuter%20de%20mon%20projet."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 group shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Discutons de votre projet sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
