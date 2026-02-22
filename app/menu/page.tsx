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

  return (
    <>
      <SEOHead path="/menu" />

      <Header />

      <main className="pt-20">
        {/* Hero Menu avec image */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-coffee to-espresso">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
              alt="Background café"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 section-inner">
            <div className="max-w-4xl mx-auto text-center text-cream">
              <p className="font-hand text-2xl text-caramel mb-2">Nos créations</p>
              <h1 className="heading-xl mb-6 text-cream">Le Menu</h1>
              <p className="text-lead text-cream/90 mb-8">
                Des pâtisseries faites maison avec amour, des boissons chaudes réconfortantes.
                Tout est préparé sur place avec des ingrédients simples et naturels.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-cream/80">
                  <svg className="w-6 h-6 text-caramel" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fait maison</span>
                </div>
                <div className="flex items-center gap-2 text-cream/80">
                  <svg className="w-6 h-6 text-caramel" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ingrédients naturels</span>
                </div>
                <div className="flex items-center gap-2 text-cream/80">
                  <svg className="w-6 h-6 text-caramel" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Préparé sur place</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-cream/10 backdrop-blur-sm text-cream text-sm font-medium rounded-full border border-cream/20">🌱 Vegan</span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-cream/10 backdrop-blur-sm text-cream text-sm font-medium rounded-full border border-cream/20">🌾 Sans gluten</span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-cream/10 backdrop-blur-sm text-cream text-sm font-medium rounded-full border border-cream/20">⭐ Best-seller</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-sm border-b border-coffee/10">
          <div className="section-inner">
            <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all duration-200 ${
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
        <section className="section">
          <div className="section-inner">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-md mb-8 text-center">{categories[activeCategory].category}</h2>

              <div className="grid gap-6">
                {currentItems.map((item, index) => (
                  <div
                    key={index}
                    className="card p-6 flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="sm:w-48 sm:h-48 aspect-square sm:aspect-auto relative shrink-0 rounded-xl overflow-hidden bg-coffee/5">
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
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="heading-sm">{item.name}</h3>
                          {item.price && (
                            <span className="text-lg font-semibold text-caramel shrink-0">
                              {item.price}
                            </span>
                          )}
                        </div>

                        {/* Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-caramel/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="heading-sm mb-3">Horaires d'ouverture</h3>
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
            <p className="text-lead text-coffee/80 mb-8 max-w-xl mx-auto">
              Venez nous rendre visite pour découvrir toutes nos créations du jour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteData.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Nous trouver
              </a>
              <a
                href={siteData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Voir les nouveautés sur Instagram
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
