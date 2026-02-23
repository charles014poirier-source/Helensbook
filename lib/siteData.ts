// Site configuration for Helen's Book - Coffee Shop & Pâtisserie
// All editable content in one place

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  tags?: ('vegan' | 'sans-gluten' | 'best-seller' | 'chaud' | 'froid')[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Review {
  text: string;
  author: string;
  rating?: number;
  source?: string;
}

export interface Highlight {
  icon: string;
  text: string;
}

export const siteData = {
  // Identity
  name: "Helen's Book",
  tagline: "Pâtisserie maison & coffee shop à Paris 5e",

  // Slogans options (choose one for Hero)
  slogans: [
    "Une parenthèse douce au cœur du quartier Latin",
    "Gourmandises raffinées, ambiance livresque",
    "Le café où l'on prend son temps",
  ],
  selectedSlogan: 0, // Index of selected slogan

  // Description
  description: `
    Helen's Book est un coffee shop et pâtisserie artisanale situé dans le 5e arrondissement de Paris.
    Dans un espace cosy et calme, nous proposons des pâtisseries faites maison avec amour,
    majoritairement vegan et avec des options sans gluten.
  `,

  shortDescription: "Pâtisserie maison, vegan friendly & options sans gluten dans un cadre cosy au cœur du Quartier Latin.",

  // Contact
  address: {
    street: "8b rue Claude Bernard",
    zip: "75005",
    city: "Paris",
    country: "France",
    // Coordonnées approximatives - à vérifier
    coords: {
      lat: 48.8421,
      lng: 2.3478,
    },
  },

  phone: "", // À compléter si disponible
  email: "contact@helensbook.paris", // Placeholder

  // Opening hours
  openingHours: {
    lundi: "Fermé",
    mardi: "9h00 - 18h00",
    mercredi: "9h00 - 18h00",
    jeudi: "9h00 - 18h00",
    vendredi: "9h00 - 18h00",
    samedi: "10h00 - 18h00",
    dimanche: "10h00 - 17h00",
  },

  // Social media
  socials: {
    instagram: "https://www.instagram.com/helensbook.paris/",
    tiktok: "", // À compléter si disponible
    googleMaps: "https://maps.google.com/?q=Helen's+Book+Paris+5e",
    googleReviews: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.9952197320767!2d2.3465872764633016!3d48.83922987132945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6710bc0e81047%3A0x6e10c3f14623a9!2sHelen&#39;s%20Book!5e0!3m2!1sfr!2sfr!4v1771375980959!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`, // Lien direct pour laisser un avis Google
  },

  // Highlights for homepage
  highlights: [
    { icon: "🌱", text: "Vegan friendly" },
    { icon: "🌾", text: "Options sans gluten" },
    { icon: "👩‍🍳", text: "Fait maison" },
    { icon: "☕", text: "Café & matcha" },
    { icon: "📚", text: "Ambiance book café" },
    { icon: "📍", text: "Paris 5e" },
  ] as Highlight[],

  // Menu
  menu: [
    {
      category: "Boissons chaudes",
      items: [
        {
          name: "Espresso",
          description: "Café espresso onctueux, origine sélectionnée",
          price: "2.50€",
          tags: ["chaud"],
        },
        {
          name: "Double Espresso",
          description: "Double dose d'espresso pour les amateurs de café intense",
          price: "3.20€",
          tags: ["chaud"],
        },
        {
          name: "Cappuccino",
          description: "Espresso avec lait mousseux crémeux",
          price: "3.80€",
          tags: ["chaud", "best-seller"],
        },
        {
          name: "Latte",
          description: "Espresso allongé au lait velouté",
          price: "4.20€",
          tags: ["chaud"],
        },
        {
          name: "Flat White",
          description: "Espresso avec micro-mousse de lait, texture soyeuse",
          price: "4.00€",
          tags: ["chaud", "best-seller"],
        },
        {
          name: "Cortado",
          description: "Espresso coupé avec une touche de lait chaud",
          price: "3.50€",
          tags: ["chaud"],
        },
        {
          name: "Matcha Latte",
          description: "Thé vert matcha japonais, lait végétal disponible",
          price: "4.50€",
          tags: ["chaud", "vegan", "best-seller"],
        },
        {
          name: "Chocolat chaud",
          description: "Chocolat chaud maison, onctueux et réconfortant",
          price: "4.00€",
          tags: ["chaud", "vegan"],
        },
        {
          name: "Chocolat Blanc Végétal",
          description: "Chocolat blanc au lait d'avoine, crémeux et gourmand",
          price: "4.50€",
          tags: ["chaud", "vegan"],
        },
        {
          name: "Lait Doré (Turmeric Latte)",
          description: "Lait végétal au curcuma, gingembre et cannelle",
          price: "4.80€",
          tags: ["chaud", "vegan"],
        },
        {
          name: "Chai Latte",
          description: "Thé chai épices, lait mousseux",
          price: "4.50€",
          tags: ["chaud", "vegan"],
        },
        {
          name: "Thé & Tisanes",
          description: "Sélection de thés et infusions bio",
          price: "3.50€",
          tags: ["chaud", "vegan"],
        },
        {
          name: "Matcha Pur",
          description: "Matcha traditionnel préparé selon l'art japonais",
          price: "4.00€",
          tags: ["chaud", "vegan"],
        },
      ] as MenuItem[],
    },
    {
      category: "Boissons froides",
      items: [
        {
          name: "Iced Latte",
          description: "Latte servi glacé, parfait pour l'été",
          price: "4.50€",
          tags: ["froid", "vegan"],
        },
        {
          name: "Iced Matcha Latte",
          description: "Matcha latte glacé, rafraîchissant et doux",
          price: "5.00€",
          tags: ["froid", "vegan", "best-seller"],
        },
        {
          name: "Iced Cappuccino",
          description: "Cappuccino glacé avec glace pilée",
          price: "4.80€",
          tags: ["froid", "best-seller"],
        },
        {
          name: "Cold Brew",
          description: "Café infusé à froid, doux et rafraîchissant",
          price: "4.50€",
          tags: ["froid", "vegan", "best-seller"],
        },
        {
          name: "Nitro Cold Brew",
          description: "Cold Brew à la texture onctueuse et mousseuse",
          price: "5.50€",
          tags: ["froid", "vegan"],
        },
        {
          name: "Iced Chai",
          description: "Chai latte glacé, parfumé et rafraîchissant",
          price: "4.80€",
          tags: ["froid", "vegan"],
        },
        {
          name: "Limonade Maison",
          description: "Limonade artisanale fraîche et fruitée",
          price: "4.00€",
          tags: ["froid", "vegan"],
        },
        {
          name: "Thé Glacé Maison",
          description: "Thé glacé infusé maison, fruits de saison",
          price: "3.80€",
          tags: ["froid", "vegan"],
        },
        {
          name: "Smoothie Bowl",
          description: "Smoothie fruits rouges, granola et fruits frais",
          price: "7.50€",
          tags: ["froid", "vegan"],
        },
      ] as MenuItem[],
    },
    {
      category: "Pâtisseries",
      items: [
        {
          name: "Cinnamon Roll Pistache",
          description: "Brioche à la cannelle, glaçage pistache maison",
          price: "5.50€",
          tags: ["vegan", "best-seller"],
        },
        {
          name: "Cookie Pistache",
          description: "Cookie moelleux à la pistache, cœur fondant",
          price: "4.00€",
          tags: ["vegan", "best-seller"],
        },
        {
          name: "Cookie Chocolat",
          description: "Cookie aux pépites de chocolat, moelleux à cœur",
          price: "3.80€",
          tags: ["vegan"],
        },
        {
          name: "Cookie Triple Chocolat",
          description: "Cookie avec chocolat noir, lait et blanc",
          price: "4.20€",
          tags: ["vegan"],
        },
        {
          name: "Cookie Amandes & Sel",
          description: "Cookie aux amandes et fleur de sel",
          price: "4.00€",
          tags: ["vegan", "sans-gluten"],
        },
        {
          name: "Banana Bread",
          description: "Pain banane moelleux, parfait avec un café",
          price: "4.50€",
          tags: ["vegan", "best-seller"],
        },
        {
          name: "Banana Bread Chocolat",
          description: "Banana bread avec pépites de chocolat",
          price: "4.80€",
          tags: ["vegan"],
        },
        {
          name: "Brownie",
          description: "Brownie chocolat intense, texture fondante",
          price: "4.50€",
          tags: ["vegan", "sans-gluten", "best-seller"],
        },
        {
          name: "Brownie Noisettes",
          description: "Brownie aux éclats de noisettes torréfiées",
          price: "4.80€",
          tags: ["vegan", "sans-gluten"],
        },
        {
          name: "Blondie",
          description: "Brownie au chocolat blond et caramel beurre salé",
          price: "4.80€",
          tags: ["vegan"],
        },
        {
          name: "Cheesecake",
          description: "Cheesecake onctueux, couche de fruits de saison",
          price: "6.00€",
          tags: ["sans-gluten"],
        },
        {
          name: "Cheesecake Fraise",
          description: "Cheesecake coulis de fraises fraîches",
          price: "6.50€",
          tags: ["sans-gluten", "best-seller"],
        },
        {
          name: "Tartelette Citron",
          description: "Tartelette au citron meringuée, fraîche et acidulée",
          price: "5.00€",
          tags: ["vegan", "best-seller"],
        },
        {
          name: "Tartelette Fruits Rouges",
          description: "Tartelette fruits rouges de saison",
          price: "5.50€",
          tags: ["vegan"],
        },
        {
          name: "Muffin Myrtille",
          description: "Muffin aux myrtilles sauvages, moelleux et parfumé",
          price: "4.20€",
          tags: ["vegan"],
        },
        {
          name: "Muffin Chocolat",
          description: "Muffin au chocolat intense, cœur fondant",
          price: "4.20€",
          tags: ["vegan"],
        },
        {
          name: "Muffin Citron Poppy",
          description: "Muffin citron et pavot, glaçage citronné",
          price: "4.40€",
          tags: ["vegan"],
        },
        {
          name: "Crêpe Maison",
          description: "Crêpe garnie au choix (sucre, citron, confiture)",
          price: "4.00€",
          tags: ["vegan"],
        },
        {
          name: "Crêpe Chocolat",
          description: "Crêpe au chocolat fondu maison",
          price: "4.50€",
          tags: ["vegan"],
        },
        {
          name: "Financiers",
          description: "Financiers aux amandes, croustillants et fondants",
          price: "3.50€",
          tags: ["sans-gluten"],
        },
        {
          name: "Madeleines",
          description: "Madeleines maison tièdes, parfumées au citron",
          price: "3.50€",
          tags: ["vegan"],
        },
        {
          name: "Scone Maison",
          description: "Scone anglais, servi avec crème et confiture",
          price: "4.00€",
          tags: ["vegan"],
        },
      ] as MenuItem[],
    },
    {
      category: "Snacks & Salés",
      items: [
        {
          name: "Bagel Toasté",
          description: "Bagel maison, garni au choix (avocat, hummus, fromage)",
          price: "6.50€",
          tags: ["vegan"],
        },
        {
          name: "Toast Avocat",
          description: "Pain grillé, avocat, graines et citron",
          price: "7.00€",
          tags: ["vegan", "best-seller"],
        },
        {
          name: "Quiche du Jour",
          description: "Quiche maison légumes de saison",
          price: "6.00€",
          tags: ["végétarien"],
        },
        {
          name: "Salade César Végétale",
          description: "Salade verte, croutons, parmesan et dressing césar végétal",
          price: "8.50€",
          tags: ["vegan"],
        },
        {
          name: "Sandwich Club",
          description: "Sandwich complet, légumes frais et sauce maison",
          price: "7.50€",
          tags: ["végétarien"],
        },
        {
          name: "Granola & Yaourt",
          description: "Granola maison, yaourt végétal et fruits frais",
          price: "6.00€",
          tags: ["vegan"],
        },
        {
          name: "Açaï Bowl",
          description: "Açaï, granola, fruits frais et coco",
          price: "8.50€",
          tags: ["vegan", "best-seller"],
        },
      ] as MenuItem[],
    },
    {
      category: "Viennoiseries",
      items: [
        {
          name: "Croissant au Beurre",
          description: "Croissant artisanal tout beurre, feuilletage parfait",
          price: "2.50€",
          tags: ["végétarien"],
        },
        {
          name: "Croissant Amandes",
          description: "Croissant aux amandes effilées et frangipane",
          price: "3.50€",
          tags: ["best-seller"],
        },
        {
          name: "Pain au Chocolat",
          description: "Pain au chocolat maison, chocolat intense",
          price: "2.80€",
          tags: ["végétarien", "best-seller"],
        },
        {
          name: "Pain aux Raisins",
          description: "Pain aux raisins crème pâtissière et raisins de Corinthe",
          price: "3.20€",
          tags: ["végétarien"],
        },
        {
          name: "Chausson aux Pommes",
          description: "Chausson pommes caramélisées, cannelle",
          price: "3.00€",
          tags: ["vegan", "best-seller"],
        },
        {
          name: "Brioche Sucre",
          description: "Brioche artisanale perlée de sucre",
          price: "2.80€",
          tags: ["vegan"],
        },
      ] as MenuItem[],
    },
  ],

  // Gallery - Unsplash images (libres de droit)
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      alt: "Café cosy avec intérieur chaleureux et plantes",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
      alt: "Cappuccino avec motif cœur sur table en bois",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
      alt: "Pâtisseries artisanales sur présentoir",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1507133750069-69d3cdad1637?w=800&q=80",
      alt: "Intérieur de café avec livres et ambiance cosy",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=800&q=80",
      alt: "Cookie moelleux aux pépites de chocolat",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&q=80",
      alt: "Matcha latte dans une tasse élégante",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1517661559360-18f6dbd0c6af?w=800&q=80",
      alt: "Buns et viennoiseries artisanales",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80",
      alt: "Latté art dans un café cosy",
      width: 800,
      height: 600,
    },
  ] as GalleryImage[],

  // Reviews (placeholder pour commencer)
  reviews: [
    {
      text: "Un petit coin de paradis au cœur du Quartier Latin. Les pâtisseries sont délicieuses et pas trop sucrées, exactement ce que je cherchais !",
      author: "Marie L.",
      rating: 5,
      source: "Google",
    },
    {
      text: "Ambiance cosy et calme, parfait pour travailler ou lire. Le matcha latte est incroyable et le personnel adorable.",
      author: "Thomas K.",
      rating: 5,
      source: "Google",
    },
    {
      text: "Enfin un endroit avec de vraies options vegan et sans gluten qui ont du goût ! Le cinnamon roll à la pistache est divin.",
      author: "Sophie M.",
      rating: 5,
      source: "Instagram",
    },
    {
      text: "C'est mon nouveau QG quartier. Le banana bread est top et le café toujours parfait. Merci pour votre accueil chaleureux !",
      author: "Camille D.",
      rating: 5,
      source: "Google",
    },
  ] as Review[],

  // Story content
  story: {
    title: "L'esprit Helen's Book",
    content: `
      Helen's Book est né du désir de créer un espace qui ressemble à une parenthèse douce,
      une pause dans le tourbillon parisien. Un coffee shop où le temps s'arrête un peu,
      entre les pages d'un livre et les arômes d'une pâtisserie faite maison.

      Notre philosophie ? La gourmandise sans compromis, mais avec légèreté.
      Des pâtisseries maison, majoritairement vegan, pensées pour ne pas être trop sucrées.
      Des ingrédients simples, de qualité, préparés avec amour.

      Ici, on trouve des options pour tous : vegan, sans gluten, gourmands ou curieux.
      Notre ambiance ? Cosy, calme, un peu bookish. Un lieu où l'on peut s'installer
      pour travailler, lire, ou simplement profiter de l'instant présent.

      Au cœur du 5e arrondissement, Helen's Book vous accueille du mardi au dimanche
      pour vous offrir un moment de douceur.
    `,
  },

  // Values
  values: [
    {
      title: "Fait maison",
      description: "Toutes nos pâtisseries sont préparées sur place, chaque matin, avec des ingrédients simples et naturels.",
      icon: "🥧",
    },
    {
      title: "Vegan friendly",
      description: "La majorité de nos créations sont vegan, sans jamais sacrifier le goût ni la texture.",
      icon: "🌱",
    },
    {
      title: "Options sans gluten",
      description: "Plusieurs de nos pâtisseries sont disponibles en version sans gluten. Demandez-nous !",
      icon: "🌾",
    },
    {
      title: "Gourmandise légère",
      description: "Nous aimons le sucre, mais en juste quantité. Nos créations sont raffinées, pas écœurantes.",
      icon: "✨",
    },
    {
      title: "Accueil chaleureux",
      description: "Un espace cosy où l'on se sent comme à la maison, avec un sourire et une écoute.",
      icon: "💛",
    },
  ],

  // FAQ
  faq: [
    {
      question: "Proposez-vous des options vegan ?",
      answer: "Oui ! La majorité de nos pâtisseries sont vegan, et nous avons également des options lactées. N'hésitez pas à nous demander.",
    },
    {
      question: "Avez-vous des options sans gluten ?",
      answer: "Nous proposons plusieurs pâtisseries sans gluten (brownie, cheesecake selon disponibilité). Prévenez-nous de vos allergies.",
    },
    {
      question: "Peut-on prendre à emporter ?",
      answer: "Absolument ! Toutes nos boissons et pâtisseries sont disponibles à emporter. Demandez nos packaging éco-responsables.",
    },
    {
      question: "Y a-t-il du wifi ?",
      answer: "Oui, le wifi est gratuit pour nos clients. C'est l'endroit idéal pour travailler ou étudier tranquillement.",
    },
    {
      question: "Acceptez-vous les cartes bancaires ?",
      answer: "Oui, nous acceptons les cartes bancaires et les paiements mobiles (Apple Pay, Google Pay).",
    },
    {
      question: "Est-il possible de réserver une table ?",
      answer: "Nous fonctionnons sans réservation pour les petites tables. Pour les groupes, contactez-nous à l'avance.",
    },
  ],

  // SEO
  seo: {
    title: "Helen's Book | Coffee Shop & Pâtisserie à Paris 5e",
    titleTemplate: "%s | Helen's Book",
    description: "Pâtisserie maison et coffee shop dans le 5e arrondissement de Paris. Options vegan et sans gluten, ambiance cosy et book café. Venez goûter nos cinnamon rolls, cookies et matchas !",
    keywords: [
      "coffee shop Paris 5e",
      "pâtisserie vegan Paris",
      "pâtisserie sans gluten Paris",
      "café Quartier Latin",
      "book café Paris",
      "matcha Paris",
      "cinnamon roll Paris",
      "brunch Paris 5e",
      "café cosy Paris",
      "pâtisserie maison Paris",
    ],
    ogImage: "/og-image.jpg", // À créer
    twitterHandle: "@helensbook.paris",
  },

  // H1 SEO options
  h1Options: [
    "Pâtisserie maison & coffee shop à Paris 5e",
    "Coffee shop artisanal & pâtisseries vegan à Paris",
    "Votre book café préféré dans le Quartier Latin",
  ],
  selectedH1: 0, // Index of selected H1

  // Legal
  legal: {
    companyName: "Helen's Book",
    siren: "", // À compléter
    address: "8b rue Claude Bernard, 75005 Paris, France",
    email: "contact@helensbook.paris",
    hostingProvider: "Vercel Inc.",
  },
} as const;

export default siteData;
