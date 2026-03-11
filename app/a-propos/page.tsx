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

        {/* Story - Biographie */}
        <section className="section">
          <div className="section-inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Texte biographique */}
              <div className="order-2 lg:order-1">
                <p className="font-hand text-2xl text-caramel mb-3">Notre histoire</p>
                <h2 className="heading-lg mb-6">Helen&apos;s Book</h2>
                <div className="space-y-4 text-coffee/80 leading-relaxed">
                  <p className="text-body">
                    Au cœur du Quartier Latin, Helen&apos;s Book est né d&apos;une envie simple : créer un espace
                    où le temps s&apos;arrête un peu. Une parenthèse douce entre deux pages, entre deux gorgées de café.
                  </p>
                  <p className="text-body">
                    Ici, tout est fait maison — nos pâtisr
                    iers arrivent avant l&apos;aube pour préparer
                    cinnamon rolls, cookies et autres gourmandises. Majoritairement vegan, jamais trop sucré,
                    toujours avec amour.
                  </p>
                  <p className="text-body">
                    Un coffee shop cosy où l&apos;on travaille, lit, ou papute. Où les plantes filtrent la lumière,
                    où les livres s&apos;empilent, et où chaque visiteur devient un peu un habitué.
                  </p>
                  <p className="font-hand text-xl text-caramel mt-6">
                    Bienvenue chez vous. ☕
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/en%20savoir%20plus.jpeg"
                      alt="Intérieur cosy d'Helen's Book avec livres"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Élément décoratif */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral/20 rounded-full blur-2xl"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-sage/20 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Ce qui nous anime */}
        <section className="section bg-gradient-to-b from-cream to-vanilla relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="section-inner relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <p className="font-hand text-2xl text-coral mb-2">Notre philosophie</p>
              <h2 className="heading-lg mb-4">Ce qui nous anime</h2>
              <p className="text-body max-w-2xl mx-auto">
                Au cœur d&apos;Helen&#39;s Book, des valeurs simples qui guident chaque journée, chaque création, chaque rencontre.
              </p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto items-stretch">
              {siteData.values.map((value, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 w-full max-w-sm mx-auto flex flex-col"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-coral to-caramel flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <span className="text-3xl md:text-4xl">{value.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center flex-grow flex flex-col justify-center">
                    <h3 className="heading-sm md:heading-lg mb-3 md:mb-4 group-hover:text-coral transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-body text-coffee/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-coral/10 to-transparent transform rotate-45 translate-x-10 -translate-y-10"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12 md:mt-16">
              <Link
                href="/menu"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-coral text-white rounded-full font-semibold transition-all duration-300 hover:bg-caramel hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
              >
                <span>Découvrir nos créations</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section id="suivez-nous" className="section">
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
                  href={siteData.socials.instagram}
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
                href={siteData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-coral text-white rounded-full font-semibold transition-all duration-300 hover:bg-caramel hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
              >
                <span>Voir plus sur Instagram</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
        <section className="relative overflow-hidden bg-vanilla">
          {/* Subtle background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-coral/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-caramel/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/5 rounded-full blur-3xl"></div>
          </div>

          {/* Glassmorphism card container */}
          <div className="section-inner relative z-10 px-4 md:px-6 py-12 md:py-20">
            <div className="max-w-6xl mx-auto">
              {/* Main glass card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl border border-white/40">
                {/* Internal gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50"></div>

                {/* Content grid */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12">

                  {/* Left Content */}
                  <div className="text-center lg:text-left space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-coral to-caramel rounded-full shadow-md">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                        <svg className="relative w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white">Prêt pour une pause gourmande ?</span>
                    </div>

                    {/* Title with gradient text effect */}
                    <h2 className="heading-lg text-2xl md:text-3xl lg:text-4xl text-coffee leading-tight">
                      Une parenthèse douce au cœur du <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-caramel">Quartier Latin</span>
                    </h2>

                    {/* Description */}
                    <p className="text-base md:text-lg text-coffee/80 leading-relaxed max-w-xl">
                      Venez découvrir nos pâtisseries faites maison, nos boissons artisanales et notre ambiance cosy. Un moment de détente garanti.
                    </p>

                    {/* Enhanced info pills */}
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      <div className="group flex items-center gap-2 px-4 py-2 bg-coffee/5 backdrop-blur-sm rounded-full border border-coffee/10 hover:bg-coffee/10 transition-all duration-300">
                        <svg className="w-4 h-4 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-medium text-coffee">Paris 5e</span>
                      </div>
                      <div className="group flex items-center gap-2 px-4 py-2 bg-coffee/5 backdrop-blur-sm rounded-full border border-coffee/10 hover:bg-coffee/10 transition-all duration-300">
                        <svg className="w-4 h-4 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-coffee">Mar - Dim</span>
                      </div>
                      <div className="group flex items-center gap-2 px-4 py-2 bg-coffee/5 backdrop-blur-sm rounded-full border border-coffee/10 hover:bg-coffee/10 transition-all duration-300">
                        <svg className="w-4 h-4 text-coral" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium text-coffee">Vegan</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center lg:justify-start pt-4">
                      <Link
                        href="/menu"
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-full text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
                      >
                        {/* Background with animated gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-coral via-caramel to-coral bg-[length:200%_100%] animate-shimmer group-hover:bg-[length:100%_100%] transition-all duration-700"></div>
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine"></div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full blur-2xl bg-coral/40 group-hover:bg-coral/60 transition-all duration-300 -z-10"></div>
                        {/* Content */}
                        <span className="relative text-white drop-shadow-lg">Voir la carte</span>
                        <svg className="relative w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Right Visual - Enhanced product grid */}
                  <div className="relative">
                    {/* Decorative background shapes */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-coral/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-caramel/20 rounded-full blur-2xl"></div>

                    {/* Product grid with hover effects */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                      {[
                        { img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', name: 'Cinnamon Roll', price: '5.50€', tag: 'Best-seller' },
                        { img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80', name: 'Cappuccino', price: '3.80€', tag: null },
                        { img: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=400&q=80', name: 'Cookie', price: '4.00€', tag: '🌱' },
                        { img: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400&q=80', name: 'Matcha Latte', price: '4.50€', tag: null },
                      ].map((item, index) => (
                        <div key={index} className="group relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                          <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent"></div>
                          {/* Tag */}
                          {item.tag && (
                            <div className="absolute top-2 left-2 px-2 py-1 bg-coral/90 backdrop-blur-sm rounded-full">
                              <span className="text-xs font-bold text-white">{item.tag}</span>
                            </div>
                          )}
                          {/* Content */}
                          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-cream font-bold text-sm md:text-base mb-0.5">{item.name}</p>
                            <p className="text-caramel font-semibold text-xs md:text-sm">{item.price}</p>
                          </div>
                          {/* Shine effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </div>
                      ))}
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
