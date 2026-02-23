import Link from 'next/link';
import Image from 'next/image';
import siteData from '@/lib/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream/80">
      <div className="section">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <div className="relative w-16 h-16 rounded-full border-2 border-cream/20 p-2">
                  <Image
                    src="/helens_book_white_bg.png"
                    alt={siteData.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <h3 className="font-serif text-2xl font-semibold text-cream mb-4">
                {siteData.name}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-4">
                {siteData.shortDescription}
              </p>
              <div className="flex gap-4">
                {siteData.socials.instagram && (
                  <a
                    href={siteData.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/60 hover:text-caramel transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-cream/60 hover:text-caramel transition-colors text-sm">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-cream/60 hover:text-caramel transition-colors text-sm">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/a-propos" className="text-cream/60 hover:text-caramel transition-colors text-sm">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-cream/60 hover:text-caramel transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Horaires */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream mb-4">
                Horaires
              </h4>
              <ul className="space-y-1 text-sm">
                {Object.entries(siteData.openingHours).map(([day, hours]) => (
                  <li key={day} className="text-cream/60">
                    <span className="capitalize">{day}</span>
                    <span className="mx-2">•</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Adresse */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream mb-4">
                Adresse
              </h4>
              <address className="not-italic text-cream/60 text-sm space-y-2">
                <p>{siteData.address.street}</p>
                <p>{siteData.address.zip} {siteData.address.city}</p>
                <a
                  href={siteData.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-caramel hover:text-caramel/80 transition-colors mt-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Itinéraire
                </a>
              </address>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-sm">
              © {currentYear} {siteData.name}. Tous droits réservés.
            </p>
            <ul className="flex gap-6 text-sm">
              <li>
                <Link href="/mentions-legales" className="text-cream/40 hover:text-caramel transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-cream/40 hover:text-caramel transition-colors">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
