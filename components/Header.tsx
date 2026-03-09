'use client';

import Link from 'next/link';
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
        <div className="flex items-center justify-center h-16 md:h-20 relative">
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

          {/* Logo - Mobile Only */}
          <Link
            href="/"
            className="md:hidden heading-xl text-coffee hover:text-caramel transition-colors"
          >
            Helen&apos;s Book
          </Link>

          {/* Desktop Navigation - Centrée */}
          <ul className="hidden md:flex items-center gap-10 lg:gap-12">
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-caramel transition-all duration-300 group-hover:w-full"></span>
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
              <li className="pt-2 border-t border-coffee/10">
                <a
                  href={siteData.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nous trouver
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
