import siteData from '@/lib/siteData';

export default function SEOHead({ path = '' }: { path?: string }) {
  const fullUrl = `https://helensbook.paris${path}`;
  const title = siteData.seo.title;
  const description = siteData.seo.description;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: siteData.name,
    description: description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteData.address.street,
      addressLocality: siteData.address.city,
      postalCode: siteData.address.zip,
      addressCountry: siteData.address.country,
    },
    geo: siteData.address.coords ? {
      '@type': 'GeoCoordinates',
      latitude: siteData.address.coords.lat,
      longitude: siteData.address.coords.lng,
    } : undefined,
    url: fullUrl,
    telephone: siteData.phone || undefined,
    servesCuisine: ['Pâtisserie', 'Café', 'Vegan', 'Sans gluten'],
    priceRange: '€',
    openingHoursSpecification: Object.entries(siteData.openingHours)
      .filter(([_, hours]) => hours !== 'Fermé')
      .map(([day, hours]) => {
        const dayMap: Record<string, string> = {
          lundi: 'Monday',
          mardi: 'Tuesday',
          mercredi: 'Wednesday',
          jeudi: 'Thursday',
          vendredi: 'Friday',
          samedi: 'Saturday',
          dimanche: 'Sunday',
        };
        const [open, close] = hours.split(' - ').map(t => t.replace('h', ':'));
        return {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: dayMap[day],
          opens: open,
          closes: close,
        };
      }),
  };

  return (
    <>
      <link rel="canonical" href={fullUrl} />
      <meta name="description" content={description} />
      <meta name="keywords" content={siteData.seo.keywords.join(', ')} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={siteData.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
