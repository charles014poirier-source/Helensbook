'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InfoBar from '@/components/InfoBar';
import SEOHead from '@/components/SEOHead';
import siteData from '@/lib/siteData';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = siteData.menu;
  const currentItems = categories[activeCategory]?.items || [];

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    // Scroll vers le début de la section menu
    const menuSection = document.getElementById('menu-items-section');
    if (menuSection) {
      const offsetTop = menuSection.offsetTop - 100; // Ajuste pour compenser la navbar et les filtres
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <SEOHead path="/menu" />

      <Header />

      <main className="pt-20">
        {/* Hero Menu avec image */}
        <section className="relative py-24 md:py-40 lg:py-48 bg-gradient-to-b from-coffee to-espresso">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
              alt="Background café"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 section-inner px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center text-cream">
              <p className="font-hand text-2xl text-cream mb-2">Nos créations</p>
              <h1 className="heading-xl mb-6 text-cream">Le Menu</h1>
              <p className="text-lead text-cream/90 mb-12">
                Des pâtisseries faites maison avec amour, des boissons chaudes réconfortantes.
                Tout est préparé sur place avec des ingrédients simples et naturels.
              </p>

              {/* Highlights - mis en valeur */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
                <div className="group flex items-center gap-2.5 px-4 py-2.5 bg-white/5 backdrop-blur-[2px] rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-caramel group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm md:text-base font-medium">Fait maison</span>
                </div>
                <div className="group flex items-center gap-2.5 px-4 py-2.5 bg-white/5 backdrop-blur-[2px] rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-caramel group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm md:text-base font-medium">Ingrédients naturels</span>
                </div>
                <div className="group flex items-center gap-2.5 px-4 py-2.5 bg-white/5 backdrop-blur-[2px] rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-caramel group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm md:text-base font-medium">Préparé sur place</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-sm border-b border-coffee/10">
          <div className="section-inner px-4 md:px-6">
            <div className="flex overflow-x-auto gap-2 py-3 md:py-4 scrollbar-hide">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(index)}
                  className={`whitespace-nowrap px-3 py-1.5 md:px-6 md:py-3 rounded-full font-medium transition-all duration-200 text-sm md:text-base ${
                    activeCategory === index
                      ? 'bg-coffee text-white'
                      : 'bg-vanilla text-coffee hover:bg-coffee/10'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section id="menu-items-section" className="section">
          <div className="section-inner">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-md mb-6 md:mb-8 text-center text-xl md:text-2xl">{categories[activeCategory].category}</h2>

              <div className="grid gap-4 md:gap-6">
                {currentItems.map((item, index) => (
                  <div
                    key={index}
                    className="card p-4 md:p-6 flex flex-col sm:flex-row gap-4 md:gap-6 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="sm:w-40 sm:h-40 md:w-48 md:h-48 aspect-square sm:aspect-auto relative shrink-0 rounded-xl overflow-hidden bg-coffee/5">
                      <Image
                        src={
                          item.name.toLowerCase().includes('matcha') ? 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400&q=80' :
                          item.name.toLowerCase().includes('cappuccino') || item.name.toLowerCase().includes('latte') ? 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80' :
                          item.name.toLowerCase().includes('chocolat') ? 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&q=80' :
                          item.name.toLowerCase().includes('cookie') ? 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=400&q=80' :
                          item.name.toLowerCase().includes('cinnamon') ? 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80' :
                          item.name.toLowerCase().includes('banana') ? 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80' :
                          item.name.toLowerCase().includes('brownie') ? 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&q=80' :
                          item.name.toLowerCase().includes('cheesecake') ? 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80' :
                          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80'
                        }
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2 md:gap-4 mb-2">
                          <h3 className="heading-sm text-base md:text-lg">{item.name}</h3>
                          {item.price && (
                            <span className="text-base md:text-lg font-semibold text-caramel shrink-0">
                              {item.price}
                            </span>
                          )}
                        </div>

                        {/* Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
                            {item.tags.map(tag => (
                              <span key={tag} className={
                                tag === 'vegan' ? 'badge-vegan' :
                                tag === 'sans-gluten' ? 'badge-sg' :
                                tag === 'best-seller' ? 'badge-best-seller' :
                                'inline-flex items-center gap-1 px-2.5 py-1 bg-coffee/5 text-coffee/60 text-sm rounded-full'
                              }>
                                {tag === 'vegan' ? '🌱 Vegan' :
                                 tag === 'sans-gluten' ? '🌾 Sans gluten' :
                                 tag === 'best-seller' ? '⭐ Best-seller' :
                                 tag === 'chaud' ? '☕' :
                                 tag === 'froid' ? '❄️' :
                                 tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <p className="text-body text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="section bg-vanilla">
          <div className="section-inner">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-body">
                ☕ Les produits affichés sont donnés à titre indicatif et peuvent varier selon les saisons et les disponibilités.
                N&apos;hésitez pas à nous demander nos options sans gluten.
              </p>
            </div>
          </div>
        </section>

        {/* Section ambiance - Pour embellir la page */}
        <section className="section bg-cream">
          <div className="section-inner">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-4 md:p-6">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-caramel/10 flex items-center justify-center">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-3">Horaires d&apos;ouverture</h3>
                <p className="text-body">
                  Lundi - Vendredi : 7h30 - 19h00<br />
                  Samedi - Dimanche : 9h00 - 20h00
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-caramel/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-3">Sur place ou à emporter</h3>
                <p className="text-body">
                  Profitez de notre espace cosy ou emportez vos favoris.<br />
                  Tous nos articles sont disponibles à emporter !
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-caramel/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-3">Fait avec amour</h3>
                <p className="text-body">
                  Chaque jour, notre équipe prépare avec soin<br />
                  des pâtisseries fraîches et des boissons authentiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="section-inner text-center">
            <h2 className="heading-lg mb-4">Envie de goûter ?</h2>
            <p className="text-lead text-coffee/80 mb-6 md:mb-8 max-w-xl mx-auto">
              Venez nous rendre visite pour découvrir toutes nos créations du jour.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href={siteData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-gradient"
                style={{
                  background: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%)',
                  backgroundSize: '200% 200%'
                }}
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Voir les nouveautés sur Instagram</span>
              </a>
            </div>
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
