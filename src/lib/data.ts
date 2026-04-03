export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  comingSoon?: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  gradient: string;
  image: string;
  categoryId: string;
  length: string;
  lengthCm: string;
  texture: string;
  type: string;
  density: string;
  rating: number;
  reviewCount: number;
  badge?: "bestseller" | "nouveau" | "promo" | "sans-colle" | "hd-lace";
  inStock: boolean;
  features: string[];
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  productId: string;
};

// ── Categories ──────────────────────────────────────────────────────

export const categories: Category[] = [
  {
    id: "sans-colle",
    slug: "sans-colle",
    name: "Perruques sans colle",
    description: "Installation en 2 minutes, zéro colle. Clippe et pars.",
    image: "/images/body-wave.jpg",
  },
  {
    id: "lisses",
    slug: "lisses",
    name: "Perruques lisses",
    description: "Finition soyeuse et sleek pour un look impeccable.",
    image: "/images/silk-straight.jpg",
  },
  {
    id: "ondulees",
    slug: "ondulees",
    name: "Perruques ondulées",
    description: "Ondulations naturelles, du body wave au water wave.",
    image: "/images/water-wave.jpg",
  },
  {
    id: "bouclees",
    slug: "bouclees",
    name: "Perruques bouclées",
    description: "Boucles définies, du deep curl au kinky curly.",
    image: "/images/deep-curl.jpg",
  },
  {
    id: "colorees",
    slug: "colorees",
    name: "Perruques colorées",
    description: "Auburn, cuivré, blond miel — ose la couleur.",
    comingSoon: true,
  },
  {
    id: "demi-perruques",
    slug: "demi-perruques",
    name: "Demi perruques",
    description: "Couverture partielle pour un look naturel express.",
    comingSoon: true,
  },
  {
    id: "accessoires",
    slug: "accessoires",
    name: "Accessoires",
    description: "Bonnets, bandeaux, colle, mousse, peignes et plus.",
    comingSoon: true,
  },
];

// ── Products ────────────────────────────────────────────────────────

export const products: Product[] = [
  // ─ Sans colle ─
  {
    id: "2",
    slug: "body-wave-glueless",
    name: "Body Wave Glueless",
    description:
      "Ondulations naturelles, zéro colle. Tu la clips, tu pars. Le best-seller absolu.",
    longDescription:
      "Le Body Wave Glueless, c'est le choix n°1 de nos clientes. Des ondulations naturelles qui bougent avec toi, une installation sans colle en 2 minutes chrono. Les clips intégrés tiennent tout en place. Parfaite pour les débutantes comme pour les expertes.",
    price: 129,
    gradient: "linear-gradient(135deg, #E8D5C4 0%, #B08968 50%, #967259 100%)",
    image: "/images/body-wave.jpg",
    categoryId: "sans-colle",
    length: "Moyen",
    lengthCm: '55cm (22")',
    texture: "Ondulé",
    type: "Glueless",
    density: "150%",
    rating: 4.9,
    reviewCount: 243,
    badge: "bestseller",
    inStock: true,
    features: [
      "Installation sans colle",
      "Clips ajustables intégrés",
      "Ondulations naturelles",
      "Prête à porter",
    ],
  },
  // ─ Lisses ─
  {
    id: "1",
    slug: "silk-straight-lace-front",
    name: "Silk Straight Lace Front",
    description:
      "Lace front ultra-naturelle, cheveux lisses et soyeux. Parfaite pour un look sleek au quotidien.",
    longDescription:
      "Notre Silk Straight est LA perruque incontournable. Cheveux 100% vierges, lace front invisible pour une ligne frontale ultra-naturelle. Le lissage soyeux tient même sous la pluie. Facile à coiffer, facile à vivre. Tu la mets, tu sors, tu slay.",
    price: 159,
    gradient: "linear-gradient(135deg, #F5E6D3 0%, #C8A27C 50%, #B08968 100%)",
    image: "/images/silk-straight.jpg",
    categoryId: "lisses",
    length: "Long",
    lengthCm: '60cm (24")',
    texture: "Lisse",
    type: "Lace Front",
    density: "180%",
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    features: [
      "Lace front invisible",
      "Cheveux 100% vierges",
      "Pre-plucked & bleached knots",
      "Ajustable (tour de tête)",
    ],
  },
  {
    id: "4",
    slug: "bob-court-lisse",
    name: "Bob Court Lisse",
    description:
      "Le bob chic et facile. Court, lisse, impactant. Parfait pour oser le changement.",
    longDescription:
      "Envie de changer radicalement ? Le Bob Court Lisse, c'est l'audace en toute simplicité. Coupe au carré impeccable, finition lisse miroir, installation glueless en 1 minute. Le style qui fait tourner les têtes au bureau comme en soirée.",
    price: 89,
    originalPrice: 119,
    gradient: "linear-gradient(135deg, #F0E0D0 0%, #D4A574 50%, #C8A27C 100%)",
    image: "/images/bob-court.jpg",
    categoryId: "lisses",
    length: "Court",
    lengthCm: '30cm (12")',
    texture: "Lisse",
    type: "Glueless",
    density: "150%",
    rating: 4.6,
    reviewCount: 156,
    badge: "promo",
    inStock: true,
    features: [
      "Coupe bob précise",
      "Installation 1 minute",
      "Glueless avec clips",
      "Légère et confortable",
    ],
  },
  {
    id: "8",
    slug: "yaki-straight-silk",
    name: "Yaki Straight Silk",
    description:
      "Texture yaki qui imite les cheveux défrisés. Naturel et sophistiqué.",
    longDescription:
      "La Yaki Straight Silk reproduit la texture des cheveux afro détendus — pas trop lisse, pas trop texturé, juste parfait. C'est la perruque la plus naturelle de notre collection. Impossible de la distinguer de vrais cheveux. Le secret le mieux gardé.",
    price: 119,
    gradient: "linear-gradient(135deg, #F0E8E0 0%, #B09070 50%, #967259 100%)",
    image: "/images/yaki-straight.jpg",
    categoryId: "lisses",
    length: "Moyen",
    lengthCm: '50cm (20")',
    texture: "Lisse",
    type: "Lace Front",
    density: "150%",
    rating: 4.7,
    reviewCount: 94,
    inStock: true,
    features: [
      "Texture yaki ultra-réaliste",
      "Aspect cheveux naturels détendus",
      "Lace front pre-plucked",
      "Polyvalente (pro & casual)",
    ],
  },
  // ─ Ondulées ─
  {
    id: "5",
    slug: "loose-wave-longue",
    name: "Loose Wave Longue",
    description:
      "28 pouces de vagues lâches et luxueuses. La perruque statement pour les grandes occasions.",
    longDescription:
      "Longueur maximale, élégance maximale. La Loose Wave Longue descend jusqu'à la taille avec des ondulations lâches et fluides qui crient le luxe. Densité 200% pour un volume spectaculaire. Pour les femmes qui n'ont pas peur d'en faire trop.",
    price: 199,
    gradient: "linear-gradient(135deg, #E0D0C0 0%, #A67B5B 50%, #8B6F47 100%)",
    image: "/images/loose-wave.jpg",
    categoryId: "ondulees",
    length: "Long",
    lengthCm: '70cm (28")',
    texture: "Ondulé",
    type: "Lace Front",
    density: "200%",
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    features: [
      "Longueur 70cm spectaculaire",
      "Densité 200% ultra-volume",
      "Ondulations lâches naturelles",
      "Lace front pre-plucked",
    ],
  },
  {
    id: "7",
    slug: "water-wave-premium",
    name: "Water Wave Premium",
    description:
      "L'effet mouillé naturel, ultra-tendance. La perruque virale de TikTok.",
    longDescription:
      'Tu l\'as vue partout sur TikTok, maintenant elle est à toi. La Water Wave Premium donne cet effet "sortie de plage" irrésistible. HD Lace invisible, mouvement naturel, et ce petit côté wild qui fait tout le charme. La plus demandée du moment.',
    price: 169,
    gradient: "linear-gradient(135deg, #DED0C0 0%, #C8A27C 50%, #A67B5B 100%)",
    image: "/images/water-wave.jpg",
    categoryId: "ondulees",
    length: "Long",
    lengthCm: '65cm (26")',
    texture: "Ondulé",
    type: "HD Lace",
    density: "180%",
    rating: 4.8,
    reviewCount: 198,
    badge: "bestseller",
    inStock: true,
    features: [
      "Effet water wave viral",
      "HD Lace invisible",
      "Mouvement ultra-naturel",
      "Tendance TikTok",
    ],
  },
  // ─ Bouclées ─
  {
    id: "3",
    slug: "deep-curl-hd-lace",
    name: "Deep Curl HD Lace",
    description:
      "Boucles profondes et volumineuses. HD Lace invisible même de près.",
    longDescription:
      "Pour celles qui veulent du volume et du drama. Les boucles deep curl sont définies, rebondissantes et restent en place toute la journée. La HD Lace fond littéralement dans ta peau — personne ne verra la différence. Un investissement beauté qui vaut chaque euro.",
    price: 179,
    gradient: "linear-gradient(135deg, #D4C4B0 0%, #8B6F47 50%, #6B5033 100%)",
    image: "/images/deep-curl.jpg",
    categoryId: "bouclees",
    length: "Moyen",
    lengthCm: '50cm (20")',
    texture: "Bouclé",
    type: "HD Lace",
    density: "180%",
    rating: 4.7,
    reviewCount: 89,
    badge: "nouveau",
    inStock: true,
    features: [
      "HD Lace ultra-invisible",
      "Boucles définies longue tenue",
      "Pre-plucked naturel",
      "Compatible tous teints",
    ],
  },
  {
    id: "6",
    slug: "kinky-curly-natural",
    name: "Kinky Curly Natural",
    description:
      "Texture afro naturelle, frisée et fière. Célèbre tes racines avec style.",
    longDescription:
      "La Kinky Curly Natural célèbre la beauté des textures afro. Boucles serrées et volumineuses qui imitent parfaitement les cheveux naturels 4B/4C. Glueless, confortable, et tellement belle que tout le monde pensera que c'est tes vrais cheveux.",
    price: 139,
    gradient: "linear-gradient(135deg, #F5E6D3 0%, #967259 50%, #7A5C40 100%)",
    image: "/images/kinky-curly.jpg",
    categoryId: "bouclees",
    length: "Moyen",
    lengthCm: '45cm (18")',
    texture: "Bouclé",
    type: "Glueless",
    density: "150%",
    rating: 4.8,
    reviewCount: 112,
    inStock: true,
    features: [
      "Texture 4B/4C réaliste",
      "Volume naturel impressionnant",
      "Glueless confortable",
      "Zéro entretien quotidien",
    ],
  },
];

// ── Reviews ─────────────────────────────────────────────────────────

export const reviews: Review[] = [
  { id: "r1", author: "Amina K.", rating: 5, date: "2024-03-15", text: "Incroyable ! La lace est vraiment invisible, même ma meilleure amie n'a pas remarqué. Je recommande à 1000%.", productId: "1" },
  { id: "r2", author: "Fatou D.", rating: 5, date: "2024-03-10", text: "Mon best-seller préféré. Installation en 2 min, je la porte tous les jours depuis 3 mois. Toujours aussi belle.", productId: "2" },
  { id: "r3", author: "Sarah M.", rating: 4, date: "2024-03-08", text: "Les boucles sont magnifiques et tiennent super bien. Juste un peu de shedding au début, puis plus rien.", productId: "3" },
  { id: "r4", author: "Chloé B.", rating: 5, date: "2024-02-28", text: "Le bob parfait ! Tout le monde me fait des compliments. Et pour le prix, c'est un steal.", productId: "4" },
  { id: "r5", author: "Nadia L.", rating: 5, date: "2024-03-12", text: "Cette longueur... je me sens comme une déesse. La qualité est incroyable pour ce prix. Merci Elnacia !", productId: "5" },
  { id: "r6", author: "Aya T.", rating: 5, date: "2024-03-01", text: "Enfin une perruque qui ressemble vraiment à mes cheveux naturels ! Texture parfaite, confort top.", productId: "6" },
  { id: "r7", author: "Léa R.", rating: 5, date: "2024-03-18", text: "Vue sur TikTok, commandée, reçue en 3 jours. L'effet water wave est encore plus beau en vrai.", productId: "7" },
  { id: "r8", author: "Mariam S.", rating: 4, date: "2024-02-20", text: "Texture yaki ultra-réaliste. Ma coiffeuse m'a demandé quel produit j'utilisais sur mes cheveux. La meilleure pub !", productId: "8" },
  { id: "r9", author: "Inès A.", rating: 5, date: "2024-03-20", text: "Je suis convertie. J'en ai déjà 3 dans ma collection Slay. La qualité est constante, jamais déçue.", productId: "2" },
  { id: "r10", author: "Khadija N.", rating: 5, date: "2024-03-05", text: "Livraison rapide, packaging soigné, et la perruque est juste parfaite. C'est ma 2ème commande !", productId: "7" },
];

// ── Helpers ──────────────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getReviewsByProductId(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
