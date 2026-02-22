import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InfoBar from '@/components/InfoBar';
import SEOHead from '@/components/SEOHead';
import siteData from '@/lib/siteData';

export default function ContactPage() {
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long' as const });
  const todayHours = siteData.openingHours[today as keyof typeof siteData.openingHours] || '';
  const isOpen = todayHours !== 'Fermé';

  // Create Google Maps embed URL
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(siteData.address.street + ', ' + siteData.address.city)}&output=embed`;

  return (
    <>
      <SEOHead path="/contact" />

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="section bg-vanilla">
          <div className="section-inner">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-hand text-2xl text-caramel mb-2">Infos pratiques</p>
              <h1 className="heading-xl mb-6">Contact & Accès</h1>
              <p className="text-lead text-coffee/80">
                On vous accueille du mardi au dimanche dans le 5e arrondissement de Paris.
              </p>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="section">
          <div className="section-inner">
            <div className="aspect-video lg:aspect-[2/1] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={mapsEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Helen's Book"
              />
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="section bg-vanilla">
          <div className="section-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Address */}
              <div className="card p-8 text-center">
                <div className="w-12 h-12 bg-caramel/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-4">Adresse</h3>
                <address className="not-italic text-body space-y-1">
                  <p>{siteData.address.street}</p>
                  <p>{siteData.address.zip} {siteData.address.city}</p>
                </address>
                <a
                  href={siteData.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-text mt-4 justify-center"
                >
                  Itinéraire
                </a>
              </div>

              {/* Hours */}
              <div className="card p-8 text-center">
                <div className="w-12 h-12 bg-caramel/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-4">Horaires</h3>
                <ul className="text-body space-y-1 text-sm">
                  {Object.entries(siteData.openingHours).map(([day, hours]) => (
                    <li key={day} className={`flex justify-between gap-4 ${day === today ? 'font-semibold text-caramel' : ''}`}>
                      <span className="capitalize">{day}</span>
                      <span>{hours}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-coffee/10">
                  <p className={`text-sm font-medium ${isOpen ? 'text-sage' : 'text-coffee/60'}`}>
                    {isOpen ? '🟢 Ouvert actuellement' : '⚫ Fermé actuellement'}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="card p-8 text-center">
                <div className="w-12 h-12 bg-caramel/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-4">Contact</h3>
                <div className="text-body space-y-2">
                  {siteData.email && (
                    <a href={`mailto:${siteData.email}`} className="block hover:text-caramel transition-colors">
                      {siteData.email}
                    </a>
                  )}
                  {siteData.socials.instagram && (
                    <a
                      href={siteData.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-coffee hover:text-caramel transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      @helensbook.paris
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events / Private hire */}
        <section className="section">
          <div className="section-inner">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-4">Privatisation & Événements</h2>
              <p className="text-lead text-coffee/80 mb-8">
                Vous souhaitez organiser un événement (anniversaire, entreprise, atelier...) ?
                Contactez-nous pour en discuter.
              </p>
              <a
                href={`mailto:${siteData.email}?subject=Privatisation - Helen's Book`}
                className="btn-primary"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </section>

        {/* Nice message */}
        <section className="section bg-vanilla">
          <div className="section-inner text-center">
            <p className="font-hand text-3xl text-caramel mb-4">À bientôt !</p>
            <p className="text-lead text-coffee/80 max-w-xl mx-auto">
              Passez quand vous voulez, on vous accueille avec le sourire.
            </p>
          </div>
        </section>

        {/* Back to home */}
        <section className="pb-16">
          <div className="section-inner text-center">
            <Link href="/" className="btn-text">
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <InfoBar />
    </>
  );
}
