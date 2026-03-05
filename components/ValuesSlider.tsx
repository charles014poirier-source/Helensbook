'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface ValuesSliderProps {
  values: Value[];
}

export default function ValuesSlider({ values }: ValuesSliderProps) {
  if (!values?.length) {
    return <div className="text-center py-12">Aucune valeur à afficher</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionRef, isScrollVisible] = useScrollAnimation();

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused || !isScrollVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= values.length ? 0 : nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, isScrollVisible, values]);

  // Scroll to current index
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const firstChild = container.firstElementChild as HTMLElement | null;
    if (!firstChild) return;
    
    const scrollPosition = currentIndex * firstChild.offsetWidth;
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  }, [currentIndex]);

  const scroll = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left'
      ? Math.max(0, currentIndex - 1)
      : Math.min(values.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') scroll('left');
    if (e.key === 'ArrowRight') scroll('right');
  };

  return (
    <section ref={sectionRef} className="py-12">
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Navigation arrows */}
        <div className="flex justify-between items-center mb-6 px-4">
          <button
            onClick={() => scroll('left')}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Valeur précédente"
          >
            <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <h2 className="heading-md text-center px-4">Ce qui nous anime</h2>

          <button
            onClick={() => scroll('right')}
            disabled={currentIndex === values.length - 1}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Valeur suivante"
          >
            <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slider container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 pb-4 scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start
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

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {values.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-coral w-8' : 'bg-coral/30 hover:bg-coral/50'
              }`}
              aria-label={`Aller à la valeur ${index + 1}`}
            />
          ))}
        </div>

        {/* Pause indicator */}
        {isPaused && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            Pause
          </div>
        )}
      </div>
    </section>
  );
}
