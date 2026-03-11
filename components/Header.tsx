'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
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
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
          : 'bg-cream/90 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute left-0 p-2 text-coffee hover:text-caramel transition-colors"
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
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
              className="h-32 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Centrée */}
          <ul className="hidden md:flex items-center gap-10 lg:gap-12 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative group text-coffee font-medium text-base lg:text-lg"
                >
                  <span className="relative z-10 block py-2 transition-all duration-300 group-hover:text-caramel group-hover:-translate-y-0.5">
                    {item.label}
                  </span>
                  {/* Underline animation */}
                  <span className="absolute bottom-1 left-0 w-0 h-1 bg-caramel transition-all duration-300 group-hover:w-full origin-left"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button (Desktop) - Positionné à droite */}
          <div className="hidden md:block absolute right-0">
            <a
              href={siteData.socials.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InteractiveHoverButton text="Nous trouver" className="border-caramel text-coffee hover:text-white pl-6" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-coffee/10 animate-slide-down">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-coffee hover:text-caramel transition-all duration-200 font-medium py-3 px-4 rounded-lg hover:bg-coffee/5 hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-coffee/10 flex justify-center">
                <a
                  href={siteData.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-auto text-center inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-caramel to-caramel/90 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  {/* Texture subtile */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3x9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30" />
                  {/* Icône de localisation */}
                  <svg className="relative w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="relative">Nous trouver</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
