'use client';

import { useState, useEffect } from 'react';
import siteData from '@/lib/siteData';

export default function InfoBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  // Get today's opening hours
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long' as const });
  const todayHours = siteData.openingHours[today as keyof typeof siteData.openingHours] || '';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-slide-up">
      <div className="bg-cream/95 backdrop-blur-sm border-t border-coffee/10 px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Hours */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <svg className="w-5 h-5 text-coffee/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="min-w-0">
              <p className="text-xs text-coffee/60 capitalize">{today}</p>
              <p className="text-sm font-medium text-coffee truncate">{todayHours}</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <svg className="w-5 h-5 text-coffee/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm text-coffee truncate">{siteData.address.zip} {siteData.address.city}</p>
          </div>

          {/* CTA */}
          <a
            href={siteData.socials.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4 whitespace-nowrap"
          >
            Itinéraire
          </a>
        </div>
      </div>
    </div>
  );
}
