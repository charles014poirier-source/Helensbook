import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import siteData from '@/lib/siteData';

export default function LegalPage() {
  return (
    <>
      <SEOHead path="/mentions-legales" />

      <Header />

      <main className="pt-20 min-h-screen">
        <section className="section">
          <div className="section-inner">
            <div className="max-w-3xl mx-auto">
              <Link href="/" className="btn-text mb-8">
                ← Retour à l&apos;accueil
              </Link>

              <h1 className="heading-xl mb-8">Mentions légales</h1>

              <div className="prose prose-lg max-w-none text-coffee/70">
                <section className="mb-8">
                  <h2 className="heading-md mb-4 text-espresso">Éditeur du site</h2>
                  <p className="text-body">
                    Le présent site est édité par :<br />
                    <strong>{siteData.legal.companyName}</strong><br />
                    {siteData.legal.address}<br />
                    {siteData.legal.email && (
                      <>
                        Email : <a href={`mailto:${siteData.legal.email}`} className="link">{siteData.legal.email}</a>
                      </>
                    )}
                  </p>
                  {siteData.legal.siren && (
                    <p className="text-body mt-2">
                      SIRET : {siteData.legal.siren}
                    </p>
                  )}
                </section>

                <section className="mb-8">
                  <h2 className="heading-md mb-4 text-espresso">Hébergement</h2>
                  <p className="text-body">
                    Ce site est hébergé par :<br />
                    <strong>{siteData.legal.hostingProvider}</strong>
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="heading-md mb-4 text-espresso">Propriété intellectuelle</h2>
                  <p className="text-body">
                    L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d&apos;auteur.
                    Toute reproduction, même partielle, est interdite sans autorisation préalable.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="heading-md mb-4 text-espresso">Données personnelles</h2>
                  <p className="text-body">
                    Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes.
                    Elles ne sont pas transmises à des tiers. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
                    de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous via :
                    {siteData.legal.email && (
                      <a href={`mailto:${siteData.legal.email}`} className="link ml-1">{siteData.legal.email}</a>
                    )}.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="heading-md mb-4 text-espresso">Cookies</h2>
                  <p className="text-body">
                    Ce site utilise des cookies à des fins statistiques (Google Analytics). Vous pouvez refuser les cookies
                    en modifiant les paramètres de votre navigateur.
                  </p>
                </section>

                <section>
                  <h2 className="heading-md mb-4 text-espresso">Contact</h2>
                  <p className="text-body">
                    Pour toute question relative à ce site, vous pouvez nous contacter par email :
                    {siteData.legal.email && (
                      <a href={`mailto:${siteData.legal.email}`} className="link ml-1">{siteData.legal.email}</a>
                    )}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
