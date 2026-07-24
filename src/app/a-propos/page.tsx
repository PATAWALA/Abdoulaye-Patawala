import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À propos | Abdoulaye Patawala',
  description:
    'Découvrez la vision et l’approche d’Abdoulaye Patawala, partenaire technique des coachs, infopreneurs et cabinets.',
};

export default function AboutPage() {
  return (
    <section className="pt-28 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
      {/* Titre */}
      <div className="mb-12 motion-safe:animate-fade-in">
        <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">
          À propos
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
          Je ne code pas pour coder.<br />
          <span className="text-gold-400">Je construis des systèmes qui font vendre.</span>
        </h1>
      </div>

      {/* Contenu */}
      <div className="space-y-8 text-gray-300 leading-relaxed motion-safe:animate-fade-in">
        <p>
          La plupart des plateformes numériques finissent par être oubliées faute de suivi. Une fois le site livré, les professionnels se retrouvent souvent seuls face à la technique.
        </p>
        <p>
          Je sais exactement ce que c&apos;est que la galère d&apos;investir ses économies, son temps et son énergie dans une solution numérique pour au final se retrouver bloqué. C&apos;est frustrant pour un entrepreneur.
        </p>
        <p>
          J&apos;ai vu des infopreneurs perdre des milliers d&apos;euros de budget publicitaire parce que leur page de capture a planté en plein milieu d&apos;un lancement, sans personne pour réparer le bug en urgence.
        </p>
        <p>
          J&apos;ai vu des directeurs de cabinets complètement bloqués, incapables de modifier un texte ou d&apos;ajouter une offre sur leur propre site, devenus dépendants d&apos;un prestataire qui ne répond plus.
        </p>
        <p>
          J&apos;ai vu des structures galérer avec une solution lente, simplement parce qu&apos;on leur a vendu du code sans jamais leur apprendre à piloter l&apos;outil.
        </p>

        <blockquote className="border-l-2 border-gold-400 bg-dark-800 border border-dark-700 rounded-r-2xl py-6 px-8 my-10 text-lg text-gray-300 italic">
          Cette souffrance est réelle. C&apos;est le résultat du &quot;One-Shot&quot; : on encaisse, on livre, et on disparaît. Je refuse de travailler comme ça.
        </blockquote>

        <h2 className="text-2xl md:text-3xl font-display text-white mt-12 mb-6">
          Mon approche
        </h2>
        <p>
          Je ne cherche pas des clients d&apos;un jour, je cherche des partenaires pour soutenir votre croissance sur le long terme. J&apos;accompagne les cabinets professionnels, les coachs et les infopreneurs à structurer leur écosystème numérique.
        </p>
        <p>
          Mon cœur de métier est la conception de sites sur-mesure, la création de pages de capture optimisées et le déploiement de tunnels de vente. Qu&apos;il s&apos;agisse de digitaliser vos services, de fluidifier le parcours client ou de maximiser la conversion de vos campagnes pour rentabiliser votre investissement, je m&apos;adapte à vos objectifs.
        </p>

        <h2 className="text-2xl md:text-3xl font-display text-white mt-12 mb-6">
          🌱 L&apos;engagement post‑livraison
        </h2>
        <p>
          J&apos;intègre d&apos;office un accompagnement technique complet de 3 mois. Pendant ces 90 jours, je reste votre bras droit technique pour assurer la stabilité du site et optimiser les performances. Vous ne serez plus jamais seul face à un écran noir.
        </p>
        <p>
          Pour maintenir cette qualité, je choisis mes partenaires avec soin et ne travaille que sur un nombre limité de projets en simultané.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center motion-safe:animate-fade-in">
        <p className="text-gray-400 text-lg mb-6">
          Prêt à structurer votre écosystème numérique ?
        </p>
        <a
          href="https://patawalaabdoulaye2003.systeme.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 group shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20"
        >
          <span>Prendre un diagnostic offert</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
        <p className="text-gray-600 text-sm mt-4">
          Sans engagement • Réponse sous 24h
        </p>
      </div>
    </section>
  );
}