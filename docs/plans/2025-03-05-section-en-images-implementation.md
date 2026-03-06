# Section "En images" - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remplacer la section "Gallery" actuelle par une mosaïque asymétrique de 5-6 images avec animation au scroll et CTA vers la page À propos.

**Architecture:** Section React dans app/page.tsx utilisant CSS Grid pour layout mosaïque asymétrique, avec Intersection Observer pour animation au scroll synchronisée sur toutes les images.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS, TypeScript, Intersection Observer API

---

## Task 1: Ajouter l'ID "suivez-nous" à la section Instagram Feed

**Files:**
- Modify: `app/a-propos/page.tsx:104`

**Step 1: Ajouter l'ID à la section Instagram Feed**

Localisez la ligne 104 dans `app/a-propos/page.tsx` :
```tsx
        {/* Instagram Feed */}
        <section className="section">
```

Remplacez par :
```tsx
        {/* Instagram Feed */}
        <section id="suivez-nous" className="section">
```

**Step 2: Vérifier la modification**

Le code compilé doit afficher l'ID sur l'élément section. Vérifiez que le HTML généré contient `id="suivez-nous"`.

**Step 3: Commit**

```bash
git add app/a-propos/page.tsx
git commit -m "feat: add anchor id to instagram feed section"
```

---

## Task 2: Créer le hook useScrollAnimation pour l'Intersection Observer

**Files:**
- Create: `hooks/useScrollAnimation.ts`

**Step 1: Créer le fichier du hook**

Créez `hooks/useScrollAnimation.ts` avec le contenu suivant :

```tsx
import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(options?: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Une fois visible, on arrête d'observer
          observer.disconnect();
        }
      },
      {
        threshold: 0.2, // Déclenche quand 20% de l'élément est visible
        rootMargin: '0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [elementRef, isVisible] as const;
}
```

**Step 2: Vérifier que TypeScript compile**

Run: `npm run build` ou vérifiez qu'il n'y a pas d'erreurs TypeScript dans l'IDE.

**Step 3: Commit**

```bash
git add hooks/useScrollAnimation.ts
git commit -m "feat: add useScrollAnimation hook for intersection observer"
```

---

## Task 3: Remplacer la section "Gallery" dans app/page.tsx

**Files:**
- Modify: `app/page.tsx:383-451`

**Step 1: Importer le hook useScrollAnimation**

En haut du fichier `app/page.tsx`, ajoutez l'import après les autres imports (ligne 12 environ) :

```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
```

**Step 2: Localiser la section "Gallery"**

Trouvez la section Gallery (lignes 383-451) qui commence par :
```tsx
        {/* Gallery */}
        <section className="section">
```

**Step 3: Remplacer toute la section "Gallery"**

Supprimez complètement la section "Gallery" (lignes 383-451) et remplacez-la par :

```tsx
        {/* En images - Mosaïque */}
        <section className="section bg-vanilla">
          <div className="section-inner">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="font-hand text-2xl text-caramel mb-2">En images</p>
              <h2 className="heading-md mb-4">Helen&apos;s book en images</h2>
              <p className="text-body max-w-2xl mx-auto">
                Découvrez notre univers en images, entre pâtisseries gourmandes et ambiance cosy.
              </p>
            </div>

            {/* Mosaïque avec animation */}
            <div ref={mosaicRef} className="relative">
              {/* Mobile - Grid 2 colonnes */}
              <div className="grid grid-cols-2 gap-2 md:hidden">
                {siteData.gallery.slice(0, 6).map((image, index) => {
                  // Pattern pour mosaïque mobile: 0=2x2, 1=1x1, 2=1x1, 3=2x1, 4=1x1, 5=1x1
                  const isLarge = index === 0;
                  const isWide = index === 3;

                  return (
                    <div
                      key={index}
                      className={`
                        ${isLarge ? 'col-span-2 row-span-2' : ''}
                        ${isWide ? 'col-span-2' : ''}
                      `}
                    >
                      <div
                        className={`
                          relative overflow-hidden rounded-xl group
                          ${isScrollVisible ? 'is-visible' : 'animate-on-scroll'}
                        `}
                      >
                        <div className={`relative ${isLarge ? 'aspect-square' : isWide ? 'aspect-[2/1]' : 'aspect-square'}`}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width || 600}
                            height={image.height || 400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop - Grid 3-4 colonnes avec mosaïque asymétrique */}
              <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {siteData.gallery.slice(0, 6).map((image, index) => {
                  // Pattern pour mosaïque desktop:
                  // index 0: 2x2 (grande)
                  // index 1: 1x1
                  // index 2: 1x1
                  // index 3: 2x1 (large)
                  // index 4: 1x1
                  // index 5: 1x1
                  const isLarge = index === 0;
                  const isWide = index === 3;

                  return (
                    <div
                      key={index}
                      className={`
                        ${isLarge ? 'md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2' : ''}
                        ${isWide ? 'md:col-span-2 lg:col-span-2' : ''}
                      `}
                    >
                      <div
                        className={`
                          relative overflow-hidden rounded-xl group
                          ${isScrollVisible ? 'is-visible' : 'animate-on-scroll'}
                        `}
                      >
                        <div className={`relative ${isLarge ? 'aspect-square' : isWide ? 'aspect-[2/1]' : 'aspect-square'}`}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width || 600}
                            height={image.height || 400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link
                href="/a-propos#suivez-nous"
                className="btn-secondary inline-flex items-center gap-2 group"
              >
                <span>Helen&apos;s book en images</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
```

**Step 4: Ajouter l'état pour l'animation**

Dans le composant `HomePage` (après les autres useState, ligne 16-17), ajoutez :

```tsx
  const [mosaicRef, isScrollVisible] = useScrollAnimation();
```

**Step 5: Vérifier que tout compile**

Run: `npm run build` ou vérifiez qu'il n'y a pas d'erreurs TypeScript.

**Step 6: Tester visuellement**

Lancez le dev server: `npm run dev`

Vérifiez:
1. La section s'affiche correctement sur desktop
2. La section s'affiche correctement sur mobile
3. Les images ont l'effet de zoom au hover
4. Le CTA redirige vers `/a-propos#suivez-nous`

**Step 7: Commit**

```bash
git add app/page.tsx
git commit -m "feat: replace gallery section with mosaic layout"
```

---

## Task 4: Tester l'animation au scroll

**Files:**
- Test: Manual testing in browser

**Step 1: Ouvrir la page d'accueil**

Navigateur: http://localhost:3000

**Step 2: Scroller vers la section "En images"**

Scroller lentement jusqu'à la section. Les images doivent apparaître avec une animation (fade-in + slide-up).

**Step 3: Vérifier que l'animation ne se joue qu'une fois**

Remonter en haut de la page et rescroller vers la section. L'animation ne doit PAS se reproduire (elle ne joue qu'une fois grâce au `observer.disconnect()`).

**Step 4: Tester sur mobile**

Utilisez les DevTools en mode mobile (F12 → Toggle device toolbar) ou testez sur un vrai mobile. Vérifiez que la mosaïque s'affiche correctement en 2 colonnes.

**Step 5: Commit si ajustements nécessaires**

Si des ajustements ont été nécessaires :

```bash
git add app/page.tsx hooks/useScrollAnimation.ts
git commit -m "fix: adjust scroll animation behavior"
```

---

## Task 5: Optimisation et vérification finale

**Files:**
- Modify: `app/page.tsx` (si nécessaire)

**Step 1: Vérifier les performances**

Ouvrez les DevTools (F12) et :
1. Allez dans l'onglet "Performance"
2. Enregistrez un scroll vers la section "En images"
3. Vérifiez qu'il n'y a pas de layout shift ou de lag

**Step 2: Vérifier l'accessibilité**

Testez la navigation au clavier :
1. Tab jusqu'au CTA "Helen's book en images"
2. Vérifiez que le focus visible est clair
3. Appuyez sur Enter pour vérifier que le lien fonctionne

**Step 3: Vérifier les alt tags des images**

Clic droit sur une image → "Inspecter" → Vérifiez que chaque image a un attribut `alt` significatif.

**Step 4: Vérifier le responsive**

Testez sur plusieurs tailles d'écran :
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1920px (Full HD)

**Step 5: Vérifier la navigation vers la page À propos**

Cliquez sur le CTA "Helen's book en images" et vérifiez :
1. La page `/a-propos` s'ouvre
2. Le scroll smooth fonctionne
3. La page s'arrête directement sur la section "Suivez-nous"

**Step 6: Commit final**

```bash
git add .
git commit -m "chore: final optimizations for mosaic section"
```

---

## Testing Checklist

Avant de considérer la tâche comme terminée, vérifiez :

- [ ] La section "En images" remplace bien l'ancienne section "Gallery"
- [ ] La mosaïque est asymétrique sur desktop (grande image + images variées)
- [ ] La mosaïque s'affiche en 2 colonnes sur mobile
- [ ] L'animation au scroll fonctionne (toutes les images apparaissent en même temps)
- [ ] L'animation ne se joue qu'une seule fois
- [ ] Le CTA "Helen's book en images" redirige vers `/a-propos#suivez-nous`
- [ ] Le scroll smooth fonctionne
- [ ] Le hover sur les images fonctionne (zoom 105%)
- [ ] Pas d'erreurs dans la console
- [ ] Pas de layout shift (CLS)
- [ ] Accessibilité vérifiée (alt tags, navigation clavier)
- [ ] Responsive testé sur mobile/tablette/desktop

---

## Documentation additionnelle

**Références utiles :**
- CSS Grid : [MDN - CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- Intersection Observer : [MDN - Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- Tailwind CSS Grid : [Tailwind - Grid Layout](https://tailwindcss.com/docs/grid)

**Notes importantes :**
- Le hook `useScrollAnimation` est réutilisable pour d'autres sections
- L'animation utilise les classes existantes `animate-on-scroll` et `is-visible` définies dans `globals.css`
- Le layout mosaïque utilise `col-span` et `row-span` pour créer l'effet asymétrique
