import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import siteData from '@/lib/siteData';

export default function PrivacyPage() {
  return (
    <>
      <SEOHead path="/confidentialite" />

      <Header />

      <main className="pt-20 min-h-screen">
        <section className="section">
          <div className="section-inner">
            <div className="max-w-3xl mx-auto">
              <Link href="/" className="btn-text mb-8">
                ← Retour à l&apos;accueil
              </Link>

              <h1 className="heading-xl mb-8">Politique de confidentialité</h1>

              <div className="prose prose-lg max-w-none text-coffee/70">
                <section className="mb-8">
                  <h2 className="heading-md mb-4 text-espresso">Introduction</h2>
                  <p className="text-body">
                    {siteData.legal.companyName} s&apos;engage à respecter votre vie privée et à protéger vos données personnelles.
                    Cette politique explique comment nous collectons et utilisons vos données.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="heading-md mb-4 text-espresso">Données collectées</h2>
                  <p className="text-body mb-3">Nous collectons uniquement les données que vous nous transmettez volontairement :</p>
                  <ul className="text-body list-disc pl-6 space-y-2">
                    <li>Via le formulaire de contact : email, message</li>
                    <li>Via les réseaux sociaux : informations publiques que vous partagez</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="heading-md mb-4 text-espresso">Utilisation des données</h2>
                  <p className="text-body mb-3">Vos données sont utilisées uniquement pour :</p>
                  <ul className="text-body list-disc pl-6 space-y-2">
                    <li>Répondre à vos demandes de contact</li>
                    <li>Vous envoyer des informations si vous l&apos;avez demandé</li>
                    <li>Améliorer nos services</li>
                  </ul>
                  <p className="text-body mt-3">
                    Nous ne vendons pas vos données à des tiers.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="heading-md mb-4 text-espresso">Conservation des données</h2>
                  <p className="text-body">
                    Vos données sont conservées uniquement le temps nécessaire pour répondre à votre demande
                    et conformément aux obligations légales.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="heading-md mb-4 text-espresso">Vos droits (RGPD)</h2>
                  <p className="text-body mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="text-body list-disc pl-6 space-y-2">
                    <li><strong>Droit d&apos;accès</strong> : savoir quelles données nous détenons sur vous</li>
                    <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
                    <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
                    <li><strong>Droit à la portabilité</strong> : récupérer vos données</li>
                    <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
                  </ul>
                  <p className="text-body mt-3">
                    Pour exercer ces droits, contactez-nous :
                    {siteData.legal.email && (
                      <a href={`mailto:${siteData.legal.email}`} className="link ml-1">{siteData.legal.email}</a>
                    )}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="heading-md mb-4 text-espresso">Cookies</h2>
                  <p className="text-body">
                    Ce site utilise des cookies à des fins d&apos;analyse d&apos;audience (Google Analytics).
                    Ces cookies nous permettent de comprendre comment les visiteurs utilisent le site
                    pour l&apos;améliorer. Vous pouvez refuser les cookies dans les paramètres de votre navigateur.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="heading-md mb-4 text-espresso">Modifications</h2>
                  <p className="text-body">
                    Cette politique peut être modifiée à tout moment. Les modifications seront publiées sur cette page.
                  </p>
                </section>

                <section>
                  <h2 className="heading-md mb-4 text-espresso">Contact</h2>
                  <p className="text-body">
                    Pour toute question sur cette politique ou vos données, contactez-nous :
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
