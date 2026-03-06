# Design - Section "En images" (Mosaïque)

**Date** : 2025-03-05
**Auteur** : Claude (Brainstorming avec utilisateur)
**Statut** : ✅ Approuvé

## Overview

Remplacement de la section "Gallery" actuelle de la page d'accueil par une section mosaïque "En images" avec 5-6 images, animation au scroll et CTA vers la page À propos.

## Fonctionnalités

1. **Mosaïque asymétrique** : 5-6 images en layout asymétrique avec images de tailles variées
2. **Animation au scroll** : Apparition simultanée de toutes les images (fade-in + slide-up)
3. **CTA naviguant** : Bouton "Helen's book en images" → `/a-propos#suivez-nous`
4. **Responsive** : Layout adapté mobile (2 colonnes) et desktop (3-4 colonnes)

## Structure

### Emplacement
- **Page** : Page d'accueil (`app/page.tsx`)
- **Remplacement** : Section "Gallery" actuelle (lignes 383-451)
- **Position** : Entre "L'esprit Helen's Book" et "Social Proof - Google Reviews"

### Contenu
- **Header** : Titre "En images" + sous-titre "La galerie"
- **Mosaïque** : 5-6 images de `siteData.gallery`
- **CTA** : Bouton centré "Helen's book en images"

## Design visuel

### Layout mosaïque

**Mobile (grid-cols-2)** :
- Image 1 : grande (2x2) - col-span-2 row-span-2
- Image 2 : normale (1x1)
- Image 3 : normale (1x1)
- Image 4 : large (2x1) - col-span-2
- Image 5 : normale (1x1)
- Image 6 : normale (1x1)

**Desktop (grid-cols-3 à 4)** :
- Image 1 : grande (2x2 ou plus)
- Images 2-6 : variées pour effet asymétrique
- Utilisation de `col-span` et `row-span` CSS Grid

### Styles

**Images** :
- Bordures arrondies (`rounded-xl`)
- Ombre légère (`shadow-sm`)
- Hover : zoom 105% (`scale-105`) avec transition 500ms
- Overflow caché pour effet clean

**Bouton CTA** :
- Style : `btn-secondary` (outline) pour cohérence avec le design
- Texte : "Helen's book en images"
- Icône optionnelle : flèche ou icône image

### Animation

**Type** : Apparition simultanée de toutes les images

**Effet** :
- Initial : `opacity-0 translate-y-8`
- Final : `opacity-100 translate-y-0`
- Durée : 700ms
- Easing : `ease-out`
- Déclencheur : Intersection Observer (20% visible)

**Implémentation** :
- Réutiliser classes existantes : `animate-on-scroll` et `is-visible`
- Observer le conteneur de la mosaïque
- Appliquer la classe à toutes les images simultanément

## Navigation

### Lien CTA
- **Destination** : `/a-propos#suivez-nous`
- **Comportement** : Scroll smooth vers la section
- **Hash** : Ancre vers section "Suivez-nous" / "Instagram Feed"

### Modification required
Ajouter `id="suivez-nous"` à la section "Instagram Feed" de `app/a-propos/page.tsx` (ligne 104)

## Données

**Source** : `siteData.gallery` dans `lib/siteData.ts`

**Images sélectionnées** :
- Utiliser les 5-6 premières images du tableau `gallery`
- Images Unsplash existantes (café, pâtisseries, ambiance)

## Responsive

**Mobile (< 768px)** :
- Grid : 2 colonnes
- Gaps : 0.5rem (gap-2)
- Images optimisées pour mobile

**Tablette (768px - 1024px)** :
- Grid : 3 colonnes
- Gaps : 1rem (gap-4)

**Desktop (> 1024px)** :
- Grid : 4 colonnes
- Gaps : 1.5rem (gap-6)

## Accessibilité

- Textes alternatifs pour toutes les images (`alt` tags)
- Navigation au clavier fonctionnelle
- Contraste WCAG AA respecté
- Focus visible sur le CTA

## Performance

- Utilisation de Next.js Image avec optimization
- Chargement lazy (Next.js Image par défaut)
- Animation CSS (performant, pas de JS lourd)
- Intersection Observer avec `{ passive: true }`

## Implémentation technique

### Composants
- **Pas de nouveau composant** : Intégration directe dans `app/page.tsx`
- **Réutilisation** : Styles existants et classes utilitaires Tailwind

### CSS
- **Nouveau** : Éventuellement classes spécifiques pour la mosaïque si nécessaire
- **Existant** : Réutilisation de `animate-on-scroll` (globals.css)

### JavaScript
- **Intersection Observer** : Pour déclencher l'animation
- **Scroll smooth** : CSS natif (`scroll-behavior: smooth` déjà actif)

## Alternatives considérées

### Approche 2 (Masonry) - Non retenue
Layout style Pinterest avec empilement vertical dynamique.
**Non retenue** : Trop complexe, moins stable.

### Approche 3 (Hybride avec overlays) - Non retenue
Grid avec éléments décoratifs et superpositions.
**Non retenue** : Surcharge visuelle, plus lourd.

## Livrables

1. Section "En images" fonctionnelle dans `app/page.tsx`
2. Animation au scroll implémentée
3. CTA vers `/a-propos#suivez-nous` fonctionnel
4. ID `suivez-nous` ajouté à la section Instagram Feed
5. Responsive mobile/desktop/tablette
6. Test et validation

## Critères de succès

- ✅ Design visuel cohérent avec le reste du site
- ✅ Animation fluide et non intrusive
- ✅ Navigation fonctionnelle vers la section "Suivez-nous"
- ✅ Responsive optimal sur tous les appareils
- ✅ Performance chargement < 2s
- ✅ Accessibilité respectée
