import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales — Abdoulaye Patawala',
  description: 'Mentions légales du site Abdoulaye Patawala.',
  robots: 'noindex, nofollow',
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-28 pb-20 px-4 md:px-8 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-display text-white mb-8">Mentions légales</h1>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        
        <div>
          <h2 className="text-xl font-display text-gold-400 mb-3">Éditeur du site</h2>
          <p>Abdoulaye Patawala</p>
          <p>Développeur Fullstack & Architecte Digital</p>
          <p>Cotonou, Bénin</p>
          <p>Email : patawalaabdoulaye2003@gmail.com</p>
          <p>Tél. : +229 62 27 80 90</p>
        </div>

        <div>
          <h2 className="text-xl font-display text-gold-400 mb-3">Hébergement</h2>
          <p>Vercel Inc.</p>
          <p>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
          <p>Site web : https://vercel.com</p>
        </div>

        <div>
          <h2 className="text-xl font-display text-gold-400 mb-3">Propriété intellectuelle</h2>
          <p>L&apos;ensemble du contenu de ce site (textes, images, code source, logo) est la propriété exclusive d&apos;Abdoulaye Patawala, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
        </div>

        <div>
          <h2 className="text-xl font-display text-gold-400 mb-3">Données personnelles</h2>
          <p>Les informations recueillies via le formulaire de contact sont exclusivement destinées à la mise en relation avec Abdoulaye Patawala. Elles ne sont ni vendues, ni cédées à des tiers. Conformément à la législation en vigueur, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour l&apos;exercer, contactez : patawalaabdoulaye2003@gmail.com.</p>
        </div>

        <div>
          <h2 className="text-xl font-display text-gold-400 mb-3">Cookies</h2>
          <p>Ce site utilise des cookies techniques nécessaires à son fonctionnement (authentification administrateur). Aucun cookie publicitaire ou de tracking n&apos;est déposé sans votre consentement.</p>
        </div>

        <div>
          <h2 className="text-xl font-display text-gold-400 mb-3">Responsabilité</h2>
          <p>Abdoulaye Patawala s&apos;efforce de maintenir les informations de ce site à jour. Toutefois, il ne peut garantir l&apos;exactitude ou l&apos;exhaustivité des contenus. Les liens externes sont fournis à titre indicatif et n&apos;engagent pas la responsabilité de l&apos;éditeur.</p>
        </div>

      </div>
    </section>
  );
}