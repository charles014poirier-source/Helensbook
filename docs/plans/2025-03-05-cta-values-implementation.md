# CTA Modernization and Values Slider - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Modernize 3 CTA buttons on homepage with new ModernCTA component and replace static Values grid on À propos page with horizontal auto-scrolling slider.

**Architecture:** Create two new reusable React components (ModernCTA for buttons with gradient/glow effects, ValuesSlider for horizontal slider with auto-scroll), then integrate them into existing pages with minimal changes to page structure.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Intersection Observer API, requestAnimationFrame

---

## Task 1: Create ModernCTA Component

**Files:**
- Create: `components/ModernCTA.tsx`

**Step 1: Create the ModernCTA component file**

Create `components/ModernCTA.tsx` with the following implementation:

```tsx
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

  return (
    <Link href={href} className={`${baseClasses} ${variant === 'gradient' ? gradientClasses : outlineClasses} ${className}`}>
      {variant === 'gradient' && <div className={glowClasses}></div>}
      <span className="relative">{text}</span>
      <span className="relative group-hover:translate-x-1 transition-transform duration-300">
        {iconToRender}
      </span>
    </Link>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `npm run build` or check IDE for TypeScript errors
Expected: No TypeScript errors

**Step 3: Commit**

```bash
git add components/ModernCTA.tsx
git commit -m "feat: create ModernCTA component with gradient and outline variants"
```

---

## Task 2: Create ValuesSlider Component

**Files:**
- Create: `components/ValuesSlider.tsx`

**Step 1: Create the ValuesSlider component file**

Create `components/ValuesSlider.tsx` with the following implementation:

```tsx
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
  }, [isPaused, isScrollVisible, values.length]);

  // Scroll to current index
  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.firstChild as HTMLElement;
      if (cardWidth) {
        const scrollPosition = currentIndex * cardWidth.offsetWidth;
        containerRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }
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

  return (
    <section ref={sectionRef} className="py-12">
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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
```

**Step 2: Add scrollbar-hide utility to globals.css**

Add this to `app/globals.css`:

```css
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

**Step 3: Verify TypeScript compiles**

Run: `npm run build` or check IDE for TypeScript errors
Expected: No TypeScript errors

**Step 4: Commit**

```bash
git add components/ValuesSlider.tsx app/globals.css
git commit -m "feat: create ValuesSlider component with auto-scroll"
```

---

## Task 3: Integrate ModernCTA in Homepage - "Notre histoire" section

**Files:**
- Modify: `app/page.tsx:366`

**Step 1: Add ModernCTA import**

In `app/page.tsx`, add this import after the other imports (around line 12):

```tsx
import ModernCTA from '@/components/ModernCTA';
```

**Step 2: Replace the first CTA in "Notre histoire" section**

Locate the CTA in the "Notre histoire" section (around line 366):

```tsx
// BEFORE
<Link href="/a-propos" className="btn-primary mt-8 w-auto">
  En savoir plus
</Link>

// AFTER
<div className="text-center lg:text-left">
  <ModernCTA
    href="/a-propos"
    text="En savoir plus"
    icon="arrow"
    variant="gradient"
  />
</div>
```

**Step 3: Verify the page builds**

Run: `npm run build`
Expected: No errors

**Step 4: Test in browser**

Run: `npm run dev`
Visit: http://localhost:3000
Verify: The CTA appears centered with gradient effect and hover animations

**Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: modernize CTA in Notre histoire section"
```

---

## Task 4: Integrate ModernCTA in Homepage - "En images" section

**Files:**
- Modify: `app/page.tsx:488`

**Step 1: Replace the CTA in "En images" section**

Locate the CTA in the "En images" section (around line 488):

```tsx
// BEFORE
<Link
  href="/a-propos#suivez-nous"
  className="btn-secondary inline-flex items-center gap-2 group"
>
  <span>Helen&apos;s book en images</span>
  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</Link>

// AFTER
<ModernCTA
  href="/a-propos#suivez-nous"
  text="Helen's book en images"
  icon="arrow"
  variant="outline"
  className="w-auto"
/>
```

**Step 2: Verify the page builds**

Run: `npm run build`
Expected: No errors

**Step 3: Test in browser**

Run: `npm run dev`
Visit: http://localhost:3000
Verify: The outline CTA appears with proper hover effects

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: modernize CTA in En images section"
```

---

## Task 5: Integrate ModernCTA in Homepage - "Laisser un avis" section

**Files:**
- Modify: `app/page.tsx:550`

**Step 1: Replace the CTA in "Laisser un avis" section**

Locate the CTA in the review section (around line 550):

```tsx
// BEFORE
<a
  href={siteData.socials.googleMaps}
  className="btn-primary bg-coral hover:bg-caramel w-auto"
>
  Laisser un avis sur Google
</a>

// AFTER
<ModernCTA
  href={siteData.socials.googleMaps}
  text="Laisser un avis sur Google"
  icon="star"
  variant="gradient"
  className="w-auto"
/>
```

**Step 2: Verify the page builds**

Run: `npm run build`
Expected: No errors

**Step 3: Test in browser**

Run: `npm run dev`
Visit: http://localhost:3000
Verify: The star CTA appears with gradient effect and glow

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: modernize CTA in review section"
```

---

## Task 6: Integrate ValuesSlider in À propos page

**Files:**
- Modify: `app/a-propos/page.tsx:83-101`

**Step 1: Add ValuesSlider import**

In `app/a-propos/page.tsx`, add this import after the other imports:

```tsx
import ValuesSlider from '@/components/ValuesSlider';
```

**Step 2: Replace the static Values grid with ValuesSlider**

Locate the Values section (around lines 83-101) and replace the entire grid:

```tsx
// BEFORE
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
  {siteData.values.map((value, index) => (
    <div key={index} className="card p-8 text-center">
      <span className="text-4xl mb-4 block">{value.icon}</span>
      <h3 className="heading-sm mb-3">{value.title}</h3>
      <p className="text-body text-sm">{value.description}</p>
    </div>
  ))}
</div>

// AFTER
<ValuesSlider values={siteData.values} />
```

**Step 3: Verify the page builds**

Run: `npm run build`
Expected: No errors

**Step 4: Test in browser**

Run: `npm run dev`
Visit: http://localhost:3000/a-propos
Verify:
- Values slider appears
- Auto-scroll works every 5 seconds
- Pause on hover works
- Navigation arrows work
- Progress dots work
- Touch swipe works on mobile

**Step 5: Commit**

```bash
git add app/a-propos/page.tsx
git commit -m "feat: replace static Values grid with horizontal slider"
```

---

## Task 7: Testing and Validation

**Files:**
- Test: Manual testing in browser

**Step 1: Test all ModernCTA variants**

Open http://localhost:3000 and test each CTA:
1. "En savoir plus" (gradient variant)
   - Verify shimmer animation
   - Verify hover scale effect
   - Verify glow effect
   - Verify icon translation
   - Click and verify navigation to /a-propos

2. "Helen's book en images" (outline variant)
   - Verify border appearance
   - Verify hover gradient fill
   - Verify hover scale effect
   - Click and verify navigation to /a-propos#suivez-nous

3. "Laisser un avis sur Google" (gradient variant with star icon)
   - Verify shimmer animation
   - Verify star icon displays
   - Verify glow effect
   - Click and verify external link opens

**Step 2: Test ValuesSlider functionality**

Open http://localhost:3000/a-propos and test:
1. Auto-scroll every 5 seconds
2. Pause on hover (pause indicator appears)
3. Resume on mouse leave
4. Left arrow navigation (disabled at start)
5. Right arrow navigation (disabled at end)
6. Progress dot navigation
7. Touch swipe on mobile (use DevTools device mode)
8. Scroll snap behavior
9. Staggered animations on page load

**Step 3: Test responsive behavior**

Test on multiple screen sizes:
- Mobile (375px): 1 card visible, touch swipe works
- Tablet (768px): 2 cards visible
- Desktop (1920px): 3 cards visible, arrow navigation

**Step 4: Test accessibility**

1. Tab navigation: Verify all CTAs are keyboard accessible
2. Focus indicators: Verify visible focus rings
3. Screen reader: Verify ARIA labels on slider buttons
4. Touch targets: Verify minimum 44x44px on mobile

**Step 5: Performance check**

Open DevTools (F12):
1. Record performance while scrolling
2. Verify 60fps animations
3. Check for layout shifts (CLS should be 0)
4. Verify no memory leaks (auto-scroll interval cleanup)

**Step 6: Cross-browser testing**

Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on Mac)

**Step 7: Commit final fixes if needed**

If any issues were found and fixed:

```bash
git add .
git commit -m "fix: final adjustments for CTA and ValuesSlider"
```

---

## Testing Checklist

Avant de considérer la tâche comme terminée, vérifiez :

- [ ] ModernCTA component created with gradient and outline variants
- [ ] ModernCTA supports different icons (arrow, star, google, heart)
- [ ] ModernCTA has shimmer animation on gradient variant
- [ ] ModernCTA has glow effect that intensifies on hover
- [ ] ModernCTA icon translates on hover
- [ ] CTA "En savoir plus" modernized and centered in Notre histoire section
- [ ] CTA "Helen's book en images" modernized with outline variant
- [ ] CTA "Laisser un avis sur Google" modernized with star icon
- [ ] ValuesSlider component created with auto-scroll
- [ ] ValuesSlider auto-scrolls every 5 seconds
- [ ] ValuesSlider pauses on hover
- [ ] ValuesSlider has navigation arrows
- [ ] ValuesSlider has progress indicators
- [ ] ValuesSlider supports touch swipe on mobile
- [ ] ValuesSlider shows staggered animations on load
- [ ] Section Valeurs replaced with ValuesSlider
- [ ] All animations run at 60fps
- [ ] No console errors
- [ ] No layout shifts (CLS)
- [ ] Accessibility verified (keyboard, ARIA, screen readers)
- [ ] Responsive tested on mobile/tablet/desktop
- [ ] Cross-browser tested

---

## Documentation additionnelle

**Références utiles :**
- React hooks : [React Hooks Reference](https://react.dev/reference/react)
- Intersection Observer : [MDN - Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- CSS Scroll Snap : [MDN - CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- requestAnimationFrame : [MDN - requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

**Notes importantes :**
- Le ModernCTA est entièrement réutilisable dans tout le projet
- Le ValuesSlider peut être adapté pour d'autres contenus (témoignages, images, etc.)
- Les animations utilisent des transformations CSS (GPU-accelerated)
- L'auto-scroll utilise requestAnimationFrame pour garantir 60fps
- Le composant ValuesSlider est client-side ('use client') pour gérer l'état local
