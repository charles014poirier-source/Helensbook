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
    window.addEventListener('scroll', handleScroll);
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
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl font-semibold text-espresso hover:text-caramel transition-colors"
          >
            {siteData.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-coffee hover:text-caramel transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href={siteData.socials.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InteractiveHoverButton text="Nous trouver" className="border-caramel text-coffee hover:text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-coffee hover:text-caramel transition-colors"
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
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-coffee/10 animate-slide-down">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-coffee hover:text-caramel transition-colors font-medium py-2"
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
