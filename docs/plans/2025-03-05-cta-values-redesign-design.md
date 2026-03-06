# Design - Modernisation des CTA et Section Valeurs

**Date** : 2025-03-05
**Auteur** : Claude (Brainstorming avec utilisateur)
**Statut** : ✅ Approuvé

## Overview

Modernisation des CTA et refonte de la section "Ce qui nous anime" (Nos valeurs) avec slider horizontal animé et auto-scroll.

## Fonctionnalités

1. **Composant ModernCTA** : Bouton moderne réutilisable avec icône, dégradé animé et effet glow
2. **Composant ValuesSlider** : Slider horizontal pour les valeurs avec auto-scroll toutes les 5 secondes
3. **CTA modernisés** : Remplacement de 3 CTA sur la page d'accueil
4. **Section Valeurs** : Refonte avec slider horizontal et animations dynamiques

## Architecture

### Composant ModernCTA

**Emplacement** : `components/ModernCTA.tsx` (nouveau)

**Props :**
```tsx
interface ModernCTAProps {
  href: string;
  text: string;
  icon?: 'arrow' | 'star' | 'google' | 'heart';
  customIcon?: React.ReactNode;
  variant?: 'gradient' | 'outline';
  className?: string;
}
```

**Fonctionnalités :**
- Background avec dégradé animé (shimmer)
- Effet de brillance au hover (shine)
- Glow effect qui s'intensifie au hover
- Icône SVG avec animation de translation
- Scale + translation au hover
- Supporte variant gradient ou outline

**Styles :**
- Dégradé : coral → caramelle → coral (similaire au CTA hero)
- Outline : bordure 2px avec fond transparent
- Animations CSS existantes : `animate-shimmer`, `animate-shine`
- Glow : blur-xl avec bg-coral/30 → bg-coral/50

### Composant ValuesSlider

**Emplacement** : `components/ValuesSlider.tsx` (nouveau)

**Fonctionnalités :**
- Affichage horizontal avec scroll snap
- Auto-scroll automatique toutes les 5 secondes
- Pause au hover sur la section
- Flèches de navigation (gauche/droite)
- Indicateurs de progression (dots)
- Swipe tactile natif
- Animations d'apparition en cascade

**Layout responsive :**
- Mobile : 1 carte visible
- Tablette : 2 cartes visibles
- Desktop : 3 cartes visibles

**Animations :**
- Apparition des cartes avec délai en cascade (staggered)
- Icônes avec animation pulse subtile
- Transition fluide entre slides (smooth scroll)
- Effet de scale sur les cartes au hover

**État :**
- currentIndex : index de la carte visible
- isPaused : pause l'auto-scroll au hover
- containerRef : référence au conteneur pour le scroll

## Intégration

### 1. Page d'accueil (app/page.tsx)

**Modifications CTA "Notre histoire" (ligne ~366)**
```tsx
// AVANT
<Link href="/a-propos" className="btn-primary mt-8 w-auto">
  En savoir plus
</Link>

// APRÈS
<div className="text-center lg:text-left">
  <ModernCTA
    href="/a-propos"
    text="En savoir plus"
    icon="arrow"
    variant="gradient"
  />
</div>
```

**Modifications CTA "Helen's book en images" (ligne ~480)**
```tsx
// AVANT
<Link
  href="/a-propos#suivez-nous"
  className="btn-secondary inline-flex items-center gap-2 group"
>
  <span>Helen&apos;s book en images</span>
  <svg>...</svg>
</Link>

// APRÈS
<ModernCTA
  href="/a-propos#suivez-nous"
  text="Helen's book en images"
  icon="arrow"
  variant="outline"
  className="w-auto"
/>
```

**Modifications CTA "Laisser un avis sur Google" (ligne ~550)**
```tsx
// AVANT
<a
  href={siteData.socials.googleMaps}
  className="btn-primary bg-coral hover:bg-caramel w-auto"
>
  Laisser un avis sur Google
</a>

// APRÈS
<ModernCTCTA
  href={siteData.socials.googleMaps}
  text="Laisser un avis sur Google"
  icon="star"
  variant="gradient"
  className="w-auto"
/>
```

**Imports à ajouter :**
```tsx
import ModernCTA from '@/components/ModernCTA';
```

### 2. Page À propos (app/a-propos/page.tsx)

**Remplacement section "Values" (lignes 83-101)**
```tsx
// AVANT
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
  {siteData.values.map((value, index) => (
    <div key={index} className="card p-8 text-center">
      <span className="text-4xl mb-4 block">{value.icon}</span>
      <h3 className="heading-sm mb-3">{value.title}</h3>
      <p className="text-body text-sm">{value.description}</p>
    </div>
  ))}
</div>

// APRÈS
import ValuesSlider from '@/components/ValuesSlider';

<ValuesSlider values={siteData.values} />
```

## Design visuel

### ModernCTA - Variante Gradient
```
┌─────────────────────────────────────────────┐
│  🎀  Texte du bouton                        │
│     ─────── Glow effect (blur-xl)           │
│     Background: dégradé animé shimmer        │
│     Brillance au hover (shine)                │
│  → Icone avec animation                     │
└─────────────────────────────────────────────┘
```

### ModernCTA - Variante Outline
```
┌─────────────────────────────────────────────┐
│  →  Texte du bouton (bordure 2px)           │
│     Hover: background avec dégradé            │
│     Hover: scale(1.05) + translateY(-1px)      │
└─────────────────────────────────────────────┘
```

### ValuesSlider - Layout
```
┌────────────────────────────────────────────────────────────────────┐
│                    ◀ Précédent   Suivant ▶                    │
│                                                                │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  │
│  │      │  │      │  │      │  │      │  │      │  │
│  │  🥧  │  │      │  │      │  │      │  │      │  │
│  │      │  │      │  │      │  │      │  │      │  │
│  │Fait  │  │      │  │      │  │      │  │      │  │
│  │maison│  │      │  │      │  │      │  │      │  │
│  │      │  │      │  │      │  │      │  │      │  │
│  └──────┘  └──────┘  └──────┘  └──────└  └──────└  └──────┘  │
│                                                                │
│  ● ● ● ● ● ● (indicateurs de progression)                 │
└────────────────────────────────────────────────────────────────────┘
```

## Animations

### ModernCTA
- **Shimmer** : Dégradé qui se déplace de droite à gauche (bg-[length:200%_100%])
- **Shine** : Brillance qui traverse le bouton de gauche à droite au hover
- **Scale** : `hover:scale-105` (légère augmentation)
- **Translation** : `hover:-translate-y-1` (lévitation)
- **Glow** : `blur-xl` qui s'intensifie
- **Icone** : `translate-x-1` (se déplace vers la droite)

### ValuesSlider
- **Auto-scroll** : Toutes les 5 secondes, scroll fluide vers la gauche
- **Pause** : Au hover sur la section, l'auto-scroll s'arrête
- **Apparition** : Les cartes apparaissent avec `fade-in + slide-up`
- **Cascade** : Délai de 100ms entre chaque carte
- **Pulse** : Les icônes ont une animation pulse subtile

## Responsive

### ModernCTA
- Mobile : padding réduit (px-4 py-2), texte plus petit (text-sm)
- Desktop : padding standard (px-6 py-3), texte standard (text-base)
- Hover : Disponible sur tous les appareils

### ValuesSlider
- Mobile : 1 carte visible, drag tactile
- Tablette : 2 cartes visibles
- Desktop : 3 cartes visibles, navigation avec flèches
- Scroll snap natif CSS pour expérience fluide

## Accessibilité

- **Navigation clavier** : Focus visible sur tous les CTA
- **ARIA labels** : Labels appropriés pour le slider
- **Touch targets** : Minimum 44x44px sur mobile
- **Contraste** : Ratio de contraste WCAG AA respecté
- **Screen readers** : Textes alternatifs descriptifs

## Performance

- **CSS animations** : Utilisation de transform et opacity (GPU-accelerated)
- **requestAnimationFrame** : Pour animations fluides 60fps
- **Intersection Observer** : Pour déclencher les animations au scroll
- **React.memo** : Optimisation des re-renders inutiles
- **Lazy loading** : Si nécessaire pour les images

## Fichiers à créer/modifier

1. **Nouveau** : `components/ModernCTA.tsx`
2. **Nouveau** : `components/ValuesSlider.tsx`
3. **Modifier** : `app/page.tsx` (3 CTA à moderniser + import)
4. **Modifier** : `app/a-propos/page.tsx` (remplacer grille Values par slider)

## Testing Checklist

Avant de considérer la tâche comme terminée, vérifiez :

- [ ] Composant ModernCTA créé et fonctionnel
- [ ] Variante gradient et outline testées
- [ ] Composant ValuesSlider créé et fonctionnel
- [ ] Auto-scroll toutes les 5 secondes
- [ ] Pause au hover fonctionne
- [ ] Flèches de navigation fonctionnelles
- [ ] Swipe tactile fonctionne
- [ ] CTA "En savoir plus" modernisé et centré
- [ ] CTA "Helen's book en images" modernisé
- [ ] CTA "Laisser un avis sur Google" modernisé
- [ ] Section Valeurs remplacée par le slider
-  [ ] Animations fluides sur tous les appareils
- [ ] Pas d'erreurs dans la console
- [ ] Performance satisfaisante (60fps)
- [ ] Accessibilité vérifiée

## Alternatives considérées

### Utiliser Swiper.js (Non retenue)
Librairie populaire pour les sliders, mais nécessite une dépendance externe et ajoute du poids au bundle.

### CSS pur (Non retenue)
Plus léger mais moins flexible pour les animations complexes et l'auto-scroll controlé.

### Conserver la grille statique (Non retenue)
Pas assez dynamique et moderne pour l'effet recherché.

## Livrables

1. Composant ModernCTA réutilisable
2. Composant ValuesSlider avec auto-scroll
3. 3 CTA modernisés sur la page d'accueil
4. Section Valeurs refondue avec slider
5. Animations fluides et performantes
