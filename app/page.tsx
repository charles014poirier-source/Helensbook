import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InfoBar from '@/components/InfoBar';
import SEOHead from '@/components/SEOHead';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import { ShinyButton } from '@/components/ui/shiny-button';
import Carousel from '@/components/ui/Carousel';
import siteData from '@/lib/siteData';

export default function HomePage() {
  const slogan = siteData.slogans[siteData.selectedSlogan];
  const h1 = siteData.h1Options[siteData.selectedH1];

  return (
    <>
      <SEOHead />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
          {/* Carousel Background */}
          <Carousel
            interval={2000}
            images={[
              {
                src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80',
                alt: 'Coffee shop ambiance intérieure cosy'
              },
              {
                src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1920&q=80',
                alt: 'Intérieur cosy d\'Helen\'s Book avec livres et café'
              }
            ]}
          />

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6 animate-fade-in">
              {h1}
            </h1>
            <p className="text-lead text-cream mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {slogan}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {siteData.highlights.slice(0, 3).map((highlight, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-coffee shadow-sm"
                >
                  <span>{highlight.icon}</span>
                  {highlight.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Link href="/menu">
                <ShinyButton variant="caramel" className="px-8 py-3 text-base">
                  Voir la carte
                </ShinyButton>
              </Link>
              <a
                href={siteData.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShinyButton variant="sage" className="px-8 py-3 text-base">
                  Nous trouver
                </ShinyButton>
              </a>
            </div>
          </div>
        </section>

        {/* Incontournables */}
        <section className="section">
          <div className="section-inner">
            <div className="text-center mb-12">
              <p className="font-hand text-2xl text-caramel mb-2">À ne pas manquer</p>
              <h2 className="heading-md">Les Incontournables</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured items from menu */}
              {siteData.menu.flatMap(cat => cat.items)
                .filter(item => item.tags?.includes('best-seller'))
                .slice(0, 6)
                .map((item, index) => (
                  <Link
                    key={index}
                    href="/menu"
                    className="group"
                  >
                    <div className="card overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="aspect-square overflow-hidden relative">
                        <Image
                          src={
                            item.name.includes('Cinnamon') ? 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80' :
                            item.name.includes('Cookie') ? 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600&q=80' :
                            item.name.includes('Matcha') ? 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600&q=80' :
                            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80'
                          }
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex gap-2 mb-3">
                          {item.tags?.map(tag => (
                            <span key={tag} className={
                              tag === 'vegan' ? 'badge-vegan' :
                              tag === 'sans-gluten' ? 'badge-sg' :
                              tag === 'best-seller' ? 'badge-best-seller' :
                              ''
                            }>
                              {tag === 'vegan' ? '🌱' : tag === 'sans-gluten' ? '🌾' : tag === 'best-seller' ? '⭐' : ''}
                            </span>
                          ))}
                        </div>
                        <h3 className="heading-sm mb-2 group-hover:text-caramel transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-body text-sm mb-3 line-clamp-2">{item.description}</p>
                        {item.price && (
                          <p className="text-coffee font-semibold">{item.price}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/menu"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-caramel text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-caramel/30"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Voir tout le menu
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-caramel via-coffee to-caramel opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-caramel animate-pulse"></div>
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof - Google Reviews */}
        <section className="section bg-vanilla">
          <div className="section-inner">
            <div className="text-center mb-12">
              <p className="font-hand text-2xl text-caramel mb-2">Ce qu&apos;ils disent de nous</p>
              <h2 className="heading-md">Avis Google</h2>
              <p className="text-body mt-4 max-w-2xl mx-auto">
                Découvrez les avis de nos clients sur Google. Votre avis nous tient à cœur !
              </p>
            </div>

            <ReviewsDisplay />

            <div className="text-center mt-8">
              <a
                href={siteData.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Laisser un avis sur Google
              </a>
            </div>
          </div>
        </section>

        {/* L'esprit Helen's Book */}
        <section className="section bg-vanilla">
          <div className="section-inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <p className="font-hand text-2xl text-caramel mb-2">Notre histoire</p>
                <h2 className="heading-lg mb-6">{siteData.story.title}</h2>
                <div className="prose prose-lg text-coffee/70">
                  {siteData.story.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-body mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  {siteData.values.slice(0, 3).map((value, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-2xl">{value.icon}</span>
                      <span className="font-medium text-coffee">{value.title}</span>
                    </div>
                  ))}
                </div>

                <Link href="/a-propos" className="btn-primary mt-8">
                  En savoir plus
                </Link>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1507133750069-69d3cdad1637?w=800&q=80"
                    alt="Intérieur cosy d'Helen's Book avec livres et café"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section">
          <div className="section-inner">
            <div className="text-center mb-12">
              <p className="font-hand text-2xl text-caramel mb-2">En images</p>
              <h2 className="heading-md">La galerie</h2>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
              {siteData.gallery.map((image, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="relative overflow-hidden rounded-xl group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width || 600}
                      height={image.height || 400}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={siteData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-text"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Suivez-nous sur Instagram
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-coffee text-cream">
          <div className="section-inner text-center py-20">
            <h2 className="heading-lg mb-6 text-cream">Prêt pour une pause gourmande ?</h2>
            <p className="text-lead text-cream/80 mb-8 max-w-2xl mx-auto">
              Venez nous rendre visite au cœur du Quartier Latin pour découvrir nos pâtisseries maison et nos boissons artisanales.
            </p>
            <a
              href={siteData.socials.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-caramel text-white font-semibold rounded-lg hover:bg-white hover:text-coffee transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Obtenir l&apos;itinéraire
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <InfoBar />
    </>
  );
}
