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

        {/* CTA */}
        <section className="section bg-coffee text-cream">
          <div className="section-inner text-center py-16">
            <h2 className="heading-lg mb-4 text-cream">Curieux de découvrir le lieu ?</h2>
            <p className="text-lead text-cream/80 mb-8 max-w-xl mx-auto">
              On vous accueille avec le sourire, du mardi au dimanche.
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
              Nous trouver
            </a>
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
