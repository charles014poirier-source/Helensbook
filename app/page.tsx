import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InfoBar from '@/components/InfoBar';
import SEOHead from '@/components/SEOHead';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import Carousel from '@/components/ui/Carousel';
import siteData from '@/lib/siteData';

export default function HomePage() {
  const slogan = siteData.slogans[siteData.selectedSlogan];
  const h1 = siteData.h1Options[siteData.selectedH1];

  // Calculer si le coffee shop est ouvert actuellement
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long' as const });
  const currentHour = new Date().getHours();
  const todayHours = siteData.openingHours[today as keyof typeof siteData.openingHours] || '';

  // Vérifier si ouvert (parse l'horaire et compare avec l'heure actuelle)
  const isOpen = todayHours !== 'Fermé' && (() => {
    const [start, end] = todayHours.split(' - ').map(h => {
      const [hours, minutes] = h.trim().split('h').map(Number);
      return hours + (minutes || 0) / 60;
    });
    return currentHour >= start && currentHour < end;
  })();

  // Générer le message d'ouverture/fermeture avec l'heure
  const getOpeningMessage = () => {
    if (isOpen) {
      return 'Ouvert actuellement';
    }

    // Si c'est fermé toute la journée, trouver le prochain jour d'ouverture
    if (todayHours === 'Fermé') {
      const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
      const todayIndex = days.indexOf(today);

      // Chercher le prochain jour ouvert
      for (let i = 1; i <= 7; i++) {
        const nextDayIndex = (todayIndex + i) % 7;
        const nextDay = days[nextDayIndex];
        const nextDayHours = siteData.openingHours[nextDay as keyof typeof siteData.openingHours];

        if (nextDayHours !== 'Fermé') {
          const [openTime] = nextDayHours.split(' - ');
          return `Fermé, ouvre ${nextDay} à ${openTime}`;
        }
      }
    }

    // Si c'est fermé mais ouvre plus tard aujourd'hui
    const [openTime] = todayHours.split(' - ');
    return `Fermé actuellement, ouvre à ${openTime}`;
  };

  const openingMessage = getOpeningMessage();

  return (
    <>
      <SEOHead />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[75vh] md:h-[90vh] min-h-[550px] md:min-h-[650px] flex items-center justify-center">
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

          {/* Gradient Overlay - subtil et moderne */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>

          {/* Content - Centré */}
          <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto text-center">
            {/* Badge dynamique d'ouverture */}
            <div className="animate-fade-in mb-6 mt-8 md:mt-0 flex justify-center">
              <span className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full text-sm font-medium shadow-lg ${
                isOpen
                  ? 'bg-sage/90 text-white'
                  : 'bg-coffee/70 text-white/70'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-white animate-pulse' : 'bg-white/50'}`}></span>
                {openingMessage}
              </span>
            </div>

            {/* Titre avec style moderne */}
            <h1 className="heading-xl mb-6 animate-slide-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl" style={{ animationDelay: '0.1s' }}>
              {h1}
            </h1>

            {/* Séparateur décoratif */}
            <div className="animate-slide-up w-24 h-1.5 bg-gradient-to-r from-coral to-caramel rounded-full mb-8 shadow-lg mx-auto" style={{ animationDelay: '0.2s' }}></div>

            {/* Slogan */}
            <p className="animate-slide-up text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg" style={{ animationDelay: '0.3s' }}>
              {slogan}
            </p>

            {/* Highlights - Style moderne avec fond blanc semi-transparent */}
            <div className="animate-slide-up flex flex-wrap justify-center gap-3 mb-10" style={{ animationDelay: '0.4s' }}>
              {siteData.highlights.slice(0, 3).map((highlight, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-sm rounded-2xl text-sm md:text-base font-medium text-espresso shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <span className="text-lg">{highlight.icon}</span>
                  {highlight.text}
                </span>
              ))}
            </div>

            {/* CTA - Design moderne */}
            <div className="animate-slide-up flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.5s' }}>
              <Link href="/menu" className="group inline-flex items-center gap-3 px-8 py-4 bg-coral text-white font-semibold rounded-2xl shadow-xl hover:bg-caramel hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg">
                Voir la carte
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Incontournables - Redesigned Section */}
        <section className="section bg-gradient-to-b from-cream to-vanilla">
          <div className="section-inner">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-coral/15 rounded-full text-coral font-medium text-sm mb-4">
                ★ Nos favoris
              </span>
              <h2 className="heading-lg mb-4">Les Incontournables</h2>
              <p className="text-body max-w-2xl mx-auto">
                Découvrez nos créations les plus appréciées, un équilibre parfait entre gourmandise et légèreté.
              </p>
            </div>

            {/* Featured Item - Large Card */}
            <div className="mb-8 md:mb-12">
              <Link href="/menu" className="group block">
                <div className="relative bg-vanilla rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-[4/3] lg:aspect-square relative overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80"
                        alt="Cinnamon Roll Pistache"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-2 left-2 md:top-4 md:left-4">
                        <span className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-4 md:py-2 bg-coral text-white font-semibold rounded-full shadow-lg text-xs md:text-sm">
                          ★ Best-seller
                        </span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 lg:p-12 flex flex-col justify-center">
                      <div className="flex gap-2 mb-2 md:mb-4">
                        <span className="badge-vegan text-xs">🌱 Vegan</span>
                      </div>
                      <h3 className="heading-sm md:heading-lg lg:heading-xl mb-2 md:mb-4 group-hover:text-coral transition-colors">
                        Cinnamon Roll Pistache
                      </h3>
                      <p className="text-body text-xs md:text-sm mb-3 md:mb-6 line-clamp-2 md:line-clamp-none">
                        Brioche à la cannelle, glaçage pistache maison. Notre signature, un mariage parfait entre l&apos;onctuosité de la brioche et la subtilité de la pistache.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg md:text-xl lg:text-2xl font-bold text-coral">5.50€</span>
                        <span className="inline-flex items-center gap-2 text-caramel font-medium group-hover:translate-x-2 transition-transform text-sm md:text-base">
                          Découvrir
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Grid for other items */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-12">
              {siteData.menu.flatMap(cat => cat.items)
                .filter(item => item.tags?.includes('best-seller') && !item.name.includes('Cinnamon'))
                .slice(0, 8)
                .map((item, index) => (
                  <Link
                    key={index}
                    href="/menu"
                    className="group"
                  >
                    <div className="card overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <div className="aspect-square overflow-hidden relative">
                        <Image
                          src={
                            item.name.includes('Cookie') && item.name.includes('Pistache') ? 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600&q=80' :
                            item.name.includes('Cookie') && item.name.includes('Chocolat') ? 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80' :
                            item.name.includes('Matcha') ? 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600&q=80' :
                            item.name.includes('Banana') ? 'https://images.unsplash.com/photo-1608181602419-8a4b6cc52c04?w=600&q=80' :
                            item.name.includes('Brownie') ? 'https://images.unsplash.com/photo-1606313564200-e75d5e30476d?w=600&q=80' :
                            item.name.includes('Tartelette') ? 'https://images.unsplash.com/photo-1519915057360-33bc7ac68492?w=600&q=80' :
                            item.name.includes('Cappuccino') ? 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80' :
                            item.name.includes('Iced') ? 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&q=80' :
                            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80'
                          }
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {item.tags?.includes('best-seller') && (
                          <div className="absolute top-2 right-2 md:top-3 md:right-3">
                            <span className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-coral text-white rounded-full shadow-md text-[10px] md:text-xs">
                              ★
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-2.5 md:p-4 lg:p-5">
                        <div className="flex gap-1.5 md:gap-2 mb-1.5 md:mb-2 lg:mb-3">
                          {item.tags?.filter(tag => tag !== 'best-seller').map(tag => (
                            <span key={tag} className={
                              tag === 'vegan' ? 'badge-vegan text-[10px] px-1.5 py-0.5 md:text-xs md:px-2 md:py-0.5' :
                              tag === 'sans-gluten' ? 'badge-sg text-[10px] px-1.5 py-0.5 md:text-xs md:px-2 md:py-0.5' :
                              ''
                            }>
                              {tag === 'vegan' ? '🌱' : tag === 'sans-gluten' ? '🌾' : ''}
                            </span>
                          ))}
                        </div>
                        <h3 className="heading-sm mb-1 md:mb-2 group-hover:text-coral transition-colors line-clamp-1 text-sm md:text-base lg:text-lg">
                          {item.name}
                        </h3>
                        <p className="text-body text-xs md:text-sm mb-1.5 md:mb-2 lg:mb-3 line-clamp-1 md:line-clamp-2">{item.description}</p>
                        {item.price && (
                          <p className="text-coral font-semibold text-sm md:text-base">{item.price}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="/menu"
                className="btn-primary bg-coral hover:bg-caramel w-auto"
              >
                Voir tout le menu
              </Link>
            </div>
          </div>
        </section>

        {/* L'esprit Helen's Book */}
        <section className="section bg-vanilla">
          <div className="section-inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <p className="font-hand text-2xl text-coral mb-2">Notre histoire</p>
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

                <Link href="/a-propos" className="btn-primary mt-8 w-auto">
                  En savoir plus
                </Link>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/en%20savoir%20plus.jpeg"
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
              <p className="font-hand text-2xl text-coral mb-2">En images</p>
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

        {/* Social Proof - Google Reviews - Moved to Bottom */}
        <section className="section bg-vanilla">
          <div className="section-inner">
            <div className="text-center mb-12">
              <p className="font-hand text-2xl text-coral mb-2">Ce qu&apos;ils disent de nous</p>
              <h2 className="heading-md">Avis Google</h2>

              {/* Google Rating Badge - Large */}
              <div className="flex justify-center mb-8">
                <a
                  href={siteData.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Google Logo */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>

                  {/* Rating - 5 étoiles pleines */}
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-espresso">4.8</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-6 h-6" fill="#FBBC05" viewBox="0 0 24 24">
                            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-coffee mt-1">250+ avis Google</p>
                  </div>

                  {/* Arrow */}
                  <svg className="w-5 h-5 text-coral group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

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
                className="btn-primary bg-coral hover:bg-caramel w-auto"
              >
                Laisser un avis sur Google
              </a>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section - Redesigned and Moved Before Footer */}
        <section className="relative overflow-hidden bg-gradient-to-br from-espresso via-coffee to-coffee">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-coral/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-caramel/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sage/5 rounded-full blur-3xl"></div>
          </div>

          <div className="section-inner relative z-10 py-8 md:py-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-coral/20 rounded-full text-coral text-xs font-medium mb-4">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Prêt pour une pause gourmande ?
                  </div>

                  <h2 className="heading-lg mb-3 md:mb-4 text-cream text-xl md:text-2xl lg:text-3xl">
                    Une parenthèse douce au cœur du Quartier Latin
                  </h2>

                  <p className="text-sm md:text-base text-cream/80 mb-4 md:mb-6 leading-relaxed">
                    Venez découvrir nos pâtisseries faites maison, nos boissons artisanales et notre ambiance cosy.
                  </p>

                  {/* Quick Info Pills */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-cream/10 rounded-full text-cream/90 text-xs">
                      <svg className="w-3 h-3 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Paris 5e
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-cream/10 rounded-full text-cream/90 text-xs">
                      <svg className="w-3 h-3 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Mar - Dim
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-cream/10 rounded-full text-cream/90 text-xs">
                      <svg className="w-3 h-3 text-caramel" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Vegan friendly
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center lg:justify-start">
                    <Link
                      href="/menu"
                      className="btn-primary bg-coral hover:bg-caramel w-auto"
                    >
                      Voir la carte
                    </Link>
                  </div>
                </div>

                {/* Right Visual - Featured Items Mini Grid */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                      <Image
                        src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&q=80"
                        alt="Cinnamon Roll Pistache"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-cream font-medium text-xs">Cinnamon Roll</p>
                        <p className="text-cream text-xs">5.50€</p>
                      </div>
                    </div>

                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                      <Image
                        src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&q=80"
                        alt="Cappuccino"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-cream font-medium text-xs">Cappuccino</p>
                        <p className="text-cream text-xs">3.80€</p>
                      </div>
                    </div>

                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                      <Image
                        src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=300&q=80"
                        alt="Cookie Pistache"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-cream font-medium text-xs">Cookie</p>
                        <p className="text-cream text-xs">4.00€</p>
                      </div>
                    </div>

                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                      <Image
                        src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=300&q=80"
                        alt="Matcha Latte"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-cream font-medium text-xs">Matcha Latte</p>
                        <p className="text-cream text-xs">4.50€</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <InfoBar />
    </>
  );
}
