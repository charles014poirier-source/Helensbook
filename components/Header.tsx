'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import siteData from '@/lib/siteData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/menu', label: 'Menu' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-coffee/5'
          : 'bg-cream/90 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 relative">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute left-0 p-2 text-coffee hover:text-caramel transition-all duration-200 hover:scale-110"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo - Mobile */}
          <Link href="/" className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center py-2">
            <span className="heading-xl text-coffee hover:text-caramel transition-colors">
              Helen&apos;s Book
            </span>
          </Link>

          {/* Logo - Desktop */}
          <Link href="/" className="hidden md:flex items-center py-2 pt-10">
            <Image
              src="/image transparente logo.png"
              alt="Helen's Book"
              width={280}
              height={120}
              className="h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation - Centrée */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative group px-4 py-2 rounded-lg text-coffee font-medium text-sm lg:text-base transition-all duration-300 hover:bg-coffee/5"
                >
                  {item.label}
                  {/* Underline */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-caramel group-hover:w-full transition-all duration-300"></div>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block absolute right-0">
            <a
              href={siteData.socials.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-coral to-caramel text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Nous trouver</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu - Design moderne */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 animate-slide-down">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-coffee/10 overflow-hidden">
              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <li key={item.href} className="border-b border-coffee/5 last:border-0">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-coffee hover:text-caramel transition-all duration-200 font-medium py-4 px-6 hover:bg-coffee/5 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="w-2 h-2 rounded-full bg-coral/50 group-hover:bg-coral transition-colors"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA Mobile */}
              <div className="p-4 pt-2">
                <a
                  href={siteData.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-coral to-caramel text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Nous trouver</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
