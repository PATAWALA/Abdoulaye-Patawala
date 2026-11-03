import type { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@/lib/metadata';
import { JsonLd, generateBreadcrumbSchema } from '@/lib/structured-data';
import { offersContent } from '@/content/offers';

export const metadata: Metadata = generatePageMetadata(
  'Mes Offres | Abdoulaye Patawala',
  'Découvrez les offres d\'Abdoulaye Patawala : Pack Démarrage pour lancer votre présence en ligne, ou Pack Signature pour une plateforme complète et automatisée.',
  '/offres'
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Accueil', url: siteConfig.url },
  { name: 'Offres', url: `${siteConfig.url}/offres` },
]);

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-gold-400 shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function OffresPage() {
  const { section, starter, custom } = offersContent;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="relative pt-28 pb-24 px-4 md:px-8 overflow-hidden">
        {/* Halo doré décoratif */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16 space-y-5 motion-safe:animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs md:text-sm font-medium tracking-wide uppercase backdrop-blur-sm">
              {section.badge}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-white leading-tight">
              {section.title}
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              {section.subtitle}
            </p>
          </div>

          {/* Grille des offres */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch motion-safe:animate-slide-up">

            {/* PACK DÉMARRAGE */}
            <div className="group relative flex flex-col p-7 md:p-9 rounded-3xl bg-dark-800 border border-dark-600 hover:border-gold-500/40 hover:shadow-[0_0_40px_-12px_rgba(212,175,55,0.15)] transition-all duration-500">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-dark-700/80 backdrop-blur-sm text-gray-300 text-xs font-medium mb-4 border border-dark-600">
                  {starter.badge}
                </span>
                <h2 className="text-xl md:text-2xl font-display text-white mb-2">
                  {starter.title}
                </h2>
                <p className="text-gray-400 text-sm">{starter.subtitle}</p>
              </div>

              {/* Prix */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                    {starter.price}
                  </span>
                  <span className="text-lg md:text-xl text-gray-400 font-medium">
                    {starter.priceUnit}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2 font-medium">{starter.priceFcfa}</p>
                <p className="text-xs text-gray-600 mt-2">{starter.priceNote}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {starter.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Avertissement */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 italic bg-dark-900/50 p-3 rounded-lg border border-dark-700">
                  {starter.disclaimer}
                </p>
              </div>

              {/* CTA */}
              <a
                href={starter.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full text-center px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 border border-gold-500 text-gold-500 hover:text-gold-300 hover:border-gold-300 hover:bg-gold-500/10 focus:outline-none focus:ring-2 focus:ring-gold-400"
              >
                {starter.ctaLabel}
              </a>
            </div>

            {/* PACK SIGNATURE (mise en avant) */}
            <div className="relative flex flex-col p-7 md:p-9 rounded-3xl bg-gradient-to-b from-dark-800 to-dark-900 border-2 border-gold-500 shadow-[0_0_50px_-15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_-10px_rgba(212,175,55,0.6)] transition-all duration-500 lg:-translate-y-4">

              {/* Badge Recommandé */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max z-10">
                <span className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-dark-900 text-xs font-bold uppercase tracking-wider shadow-lg ring-2 ring-dark-900">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {custom.recommendedBadge}
                </span>
              </div>

              <div className="mb-6 mt-4">
                <span className="inline-block px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-medium mb-4 border border-gold-500/20 backdrop-blur-sm">
                  {custom.badge}
                </span>
                <h2 className="text-xl md:text-2xl font-display text-white mb-2">
                  {custom.title}
                </h2>
                <p className="text-gray-400 text-sm">{custom.subtitle}</p>
              </div>

              {/* Prix */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-sm text-gray-400 font-medium">{custom.pricePrefix}</span>
                  <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent tracking-tight">
                    {custom.price}
                  </span>
                  <span className="text-lg md:text-xl text-gold-400 font-medium">
                    {custom.priceUnit}
                  </span>
                </div>
                <p className="text-sm text-gold-500/80 mt-2 font-medium">{custom.priceFcfa}</p>
                <p className="text-xs text-gray-600 mt-2">{custom.priceNote}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {custom.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200 text-sm">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={custom.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full text-center px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 bg-gold-500 text-dark-900 hover:bg-gold-400 shadow-lg shadow-gold-500/20 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold-400"
              >
                {custom.ctaLabel}
              </a>
            </div>
          </div>

          {/* CTA final */}
          <div className="mt-20 text-center motion-safe:animate-fade-in">
            <div className="max-w-xl mx-auto p-8 md:p-10 rounded-3xl bg-dark-800 border border-dark-600 hover:border-gold-500/30 transition-all duration-300">
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Vous hésitez entre les deux formules ? Discutons-en ensemble.
              </p>
              <a
                href="https://wa.me/22962278090?text=Bonjour%20Abdoulaye%2C%20je%20souhaite%20discuter%20de%20vos%20offres."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 group shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Discuter sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
