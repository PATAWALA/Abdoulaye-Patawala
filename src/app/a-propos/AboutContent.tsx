'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/atoms/ScrollReveal';

const stats = [
  { value: '4+', label: 'Années d\'expérience' },
  { value: '30+', label: 'Projets livrés' },
  { value: '3', label: 'Mois d\'accompagnement inclus' },
];

export default function AboutContent() {
  return (
    <section className="relative pt-28 pb-24 px-4 md:px-8 overflow-hidden">
      {/* Halos décoratifs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Badge */}
        <ScrollReveal className="flex justify-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs md:text-sm font-medium tracking-wide uppercase backdrop-blur-sm">
            À propos
          </span>
        </ScrollReveal>

        {/* Titre */}
        <ScrollReveal className="text-center mb-6" delay={100}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-white leading-tight">
            La curiosité m&apos;a mené au code.
            <br />
            <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
              L&apos;exigence m&apos;y a ancré.
            </span>
          </h1>
        </ScrollReveal>

        {/* Sous-titre */}
        <ScrollReveal className="text-center mb-20" delay={200}>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Architecte Web & Automatisation — Cotonou, Bénin
          </p>
        </ScrollReveal>

        {/* Grille : portrait + récit */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <ScrollReveal className="lg:col-span-2 flex flex-col items-center lg:items-start gap-8">
            <div className="relative w-full max-w-xs aspect-[3/4] rounded-3xl overflow-hidden border border-dark-600 shadow-2xl shadow-gold-500/5 group">
              <Image
                src="/images/portrait.png"
                alt="Abdoulaye Patawala — Architecte Web & Automatisation"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 1024px) 320px, 280px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-dark-900/10 to-transparent" />
            </div>

            {/* Stats sous la photo */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-xl bg-dark-800 border border-dark-700">
                  <p className="text-gold-400 text-xl font-bold">{stat.value}</p>
                  <p className="text-gray-500 text-[10px] leading-tight mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Récit */}
          <div className="lg:col-span-3 space-y-8">
            <ScrollReveal delay={100}>
              <h2 className="text-xs text-gold-400 tracking-[0.3em] uppercase mb-4 font-medium">L&apos;origine</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                À 19 ans, je découvre l&apos;informatique sans formation, sans roadmap — juste une fascination brute pour la logique derrière l&apos;écran. Là où d&apos;autres voyaient un outil, je voyais un terrain de construction infini. Chaque ligne de code écrite ouvrait une porte. Je n&apos;ai jamais cessé d&apos;avancer.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-xs text-gold-400 tracking-[0.3em] uppercase mb-4 font-medium">La conviction</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                J&apos;ai construit mes premiers projets gratuitement — non pas par manque de valeur, mais parce que la passion précédait tout le reste. Chaque projet, même modeste, recevait la même intensité. C&apos;est cette discipline qui a forgé mon approche : ne jamais livrer un travail dont je ne serais pas fier.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2 className="text-xs text-gold-400 tracking-[0.3em] uppercase mb-4 font-medium">La méthode</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Aujourd&apos;hui, je conçois des plateformes sur-mesure et des systèmes automatisés pour des entreprises, des cabinets et des institutions qui refusent le &quot;juste suffisant&quot;. Chaque projet est architecturé avec précision — pas de template recyclé, pas de livraison bâclée, pas de disparition après la mise en ligne. Un accompagnement de 3 mois est inclus d&apos;office.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h2 className="text-xs text-gold-400 tracking-[0.3em] uppercase mb-4 font-medium">La promesse</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Un partenaire technique qui s&apos;engage. Qui reste disponible. Qui traite votre projet avec la même rigueur que s&apos;il était le sien. Pas un prestataire qui encaisse et disparaît — un architecte qui construit et accompagne.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Citation */}
        <ScrollReveal className="mt-24">
          <blockquote className="relative max-w-3xl mx-auto text-center py-12 px-8 rounded-3xl bg-dark-800/50 border border-dark-700">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-display text-white leading-snug">
              Mon objectif est simple : travailler avec exigence sur chaque projet, parce que votre réussite est aussi la mienne.
            </p>
            <footer className="mt-8 flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-dark-600">
                <Image src="/images/portrait.png" alt="" width={32} height={32} className="object-cover" />
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-medium">Abdoulaye Patawala</p>
                <p className="text-gray-500 text-xs">Architecte Web & Automatisation</p>
              </div>
            </footer>
          </blockquote>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="mt-20">
          <div className="max-w-2xl mx-auto text-center p-10 md:p-14 rounded-3xl bg-gradient-to-b from-dark-800 to-dark-900 border border-dark-600 hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative">
              <p className="text-xl md:text-2xl font-display text-white mb-3">
                Si vous cherchez un partenaire qui s&apos;investit vraiment,
              </p>
              <p className="text-gold-400 text-lg font-display mb-10">
                on devrait s&apos;entendre.
              </p>
              <a
                href="https://wa.me/22962278090?text=Bonjour%20Abdoulaye%2C%20je%20souhaite%20discuter%20de%20mon%20projet."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 group shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Discutons de votre projet</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
