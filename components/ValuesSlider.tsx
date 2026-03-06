'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface ValuesSliderProps {
  values: Readonly<Value[]> | readonly Value[];
}

export default function ValuesSlider({ values }: ValuesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionRef, isScrollVisible] = useScrollAnimation();

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!values || values.length === 0 || !isScrollVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= values.length ? 0 : nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isScrollVisible, values]);

  // Scroll to current index
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get the specific card at the current index
    const cards = container.children;
    if (!cards || cards.length === 0) return;

    const currentCard = cards[currentIndex] as HTMLElement;
    if (!currentCard) return;

    // Scroll to the current card
    currentCard.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  }, [currentIndex]);

  if (!values || values.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className="py-12">
      <div className="relative">
        {/* Slider container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 pb-4 scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full md:w-[calc(70%-18px)] lg:w-[calc(60%-24px)] snap-start
                ${isScrollVisible ? 'is-visible' : 'animate-on-scroll'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card p-8 text-center h-full group hover:scale-105 transition-transform duration-300">
                <span className="text-4xl mb-4 block animate-pulse">{value.icon}</span>
                <h3 className="heading-sm mb-3">{value.title}</h3>
                <p className="text-body text-sm">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
