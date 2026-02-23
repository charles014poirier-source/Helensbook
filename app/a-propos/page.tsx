'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InfoBar from '@/components/InfoBar';
import SEOHead from '@/components/SEOHead';
import siteData from '@/lib/siteData';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead path="/a-propos" />

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="section bg-vanilla">
          <div className="section-inner">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-hand text-2xl text-caramel mb-2">Notre histoire</p>
              <h1 className="heading-xl mb-6">À propos</h1>
              <p className="text-lead text-coffee/80">
                Une parenthèse douce au cœur du Quartier Latin, où l&apos;on prend le temps de savourer.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section">
          <div className="section-inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="heading-lg mb-6">{siteData.story.title}</h2>
                <div className="prose prose-lg text-coffee/70">
                  {siteData.story.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-body mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1507133750069-69d3cdad1637?w=800&q=80"
                    alt="Intérieur cosy d'Helen's Book avec livres"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-vanilla">
          <div className="section-inner">
            <div className="text-center mb-12">
              <p className="font-hand text-2xl text-caramel mb-2">Ce qui nous anime</p>
              <h2 className="heading-lg">Nos valeurs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {siteData.values.map((value, index) => (
                <div key={index} className="card p-8 text-center">
                  <span className="text-4xl mb-4 block">{value.icon}</span>
                  <h3 className="heading-sm mb-3">{value.title}</h3>
                  <p className="text-body text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="section">
          <div className="section-inner">
            <div className="text-center mb-12">
              <p className="font-hand text-2xl text-caramel mb-2">Suivez-nous</p>
              <h2 className="heading-lg">@helensbook.cafe</h2>
              <p className="text-body mt-4 max-w-2xl mx-auto">
                Retrouvez en images notre quotidien, nos créations et l&apos;ambiance du coffee shop sur Instagram.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {[
                'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
                'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600&q=80',
                'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600&q=80',
                'https://images.unsplash.com/photo-1517661559360-18f6dbd0c6af?w=600&q=80',
                'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
                'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80',
                'https://images.unsplash.com/photo-1507133750069-69d3cdad1637?w=600&q=80',
              ].map((src, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/helensbook.cafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-xl"
                >
                  <Image
                    src={src}
                    alt={`Photo Instagram ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://www.instagram.com/helensbook.cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Voir plus sur Instagram
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="section-inner">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="font-hand text-2xl text-caramel mb-2">Questions fréquentes</p>
                <h2 className="heading-lg">FAQ</h2>
              </div>

              <div className="space-y-4">
                {siteData.faq.map((item, index) => (
                  <div key={index} className="card overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-coffee/5 transition-colors"
                      aria-expanded={openFaq === index}
                    >
                      <span className="font-semibold text-coffee">{item.question}</span>
                      <svg
                        className={`w-5 h-5 text-coffee/60 transition-transform duration-200 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-body text-coffee/70">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section - Prêt pour une parenthèse gourmande ? */}
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

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <a
                      href={siteData.socials.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-coral text-white font-medium rounded-full hover:bg-caramel transition-all duration-300 hover:scale-105 text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Nous trouver
                      <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <Link
                      href="/menu"
                      className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm text-cream font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
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

                  {/* Compact Floating Badge */}
                  <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-coral text-white px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="flex -space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/20 border border-white"></div>
                        ))}
                      </div>
                      <div>
                        <p className="text-[9px] md:text-[10px] opacity-90">Note</p>
                        <p className="text-xs md:text-sm font-bold">4.9 ★</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
