import React from 'react';
import Link from 'next/link';

interface ModernCTAProps {
  href: string;
  text: string;
  icon?: 'arrow' | 'star' | 'google' | 'heart';
  customIcon?: React.ReactNode;
  variant?: 'gradient' | 'outline';
  className?: string;
}

const icons = {
  arrow: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  star: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  google: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8c2.05 0 3.91.76 5.33 2.01l-2.08 1.97c-.56-.54-1.38-.87-2.25-.87-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.85 0 3.35-1.28 3.47-3h-3.47v-2.5h6c.06.39.09.79.09 1.2 0 4.42-3.58 8-8 8z"/>
    </svg>
  ),
  heart: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  ),
};

const isExternalUrl = (url: string) => {
  try {
    const urlObj = new URL(url);
    // Check if it's an absolute URL (starts with http:// or https://)
    if (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') {
      // For client-side, check if it's a different origin
      if (typeof window !== 'undefined') {
        return urlObj.origin !== window.location.origin;
      }
      // For server-side, assume absolute URLs are external
      return true;
    }
    return false;
  } catch {
    return false;
  }
};

export default function ModernCTA({
  href,
  text,
  icon = 'arrow',
  customIcon,
  variant = 'gradient',
  className = '',
}: ModernCTAProps) {
  const iconToRender = customIcon || icons[icon];

  const baseClasses = 'relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 group';

  const gradientClasses = 'bg-gradient-to-r from-coral to-caramel bg-[length:200%_100%] animate-shimmer text-white hover:scale-105 hover:-translate-y-1';

  const outlineClasses = 'border-2 border-coral text-coral hover:bg-gradient-to-r hover:from-coral hover:to-caramel hover:text-white hover:border-transparent hover:scale-105 hover:-translate-y-1';

  const glowClasses = variant === 'gradient' ? 'absolute -inset-1 bg-gradient-to-r from-coral to-caramel rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10' : '';

  const isExternal = isExternalUrl(href);

  const linkClasses = `${baseClasses} ${variant === 'gradient' ? gradientClasses : outlineClasses} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {variant === 'gradient' && <div className={glowClasses}></div>}
        <span className="relative">{text}</span>
        <span className="relative group-hover:translate-x-1 transition-transform duration-300">
          {iconToRender}
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses}>
      {variant === 'gradient' && <div className={glowClasses}></div>}
      <span className="relative">{text}</span>
      <span className="relative group-hover:translate-x-1 transition-transform duration-300">
        {iconToRender}
      </span>
    </Link>
  );
}
