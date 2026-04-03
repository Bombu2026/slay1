"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/lib/data";

const BADGE_LABELS: Record<string, string> = {
  bestseller: "Best-seller",
  nouveau: "Nouveau",
  promo: "Promo",
  "sans-colle": "Sans colle",
  "hd-lace": "HD Lace",
};

const BADGE_CLASSES: Record<string, string> = {
  bestseller: "bg-primary text-primary-foreground",
  nouveau: "bg-accent text-accent-foreground",
  promo: "bg-red-600 text-white",
  "sans-colle": "bg-emerald-600 text-white",
  "hd-lace": "bg-violet-600 text-white",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`size-3.5 ${i < Math.round(rating) ? "text-accent" : "text-muted"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-muted-foreground ml-0.5">{rating}</span>
    </div>
  );
}

const activeCategories = categories.filter((c) => !c.comingSoon);
const comingSoonCategories = categories.filter((c) => c.comingSoon);

export default function BoutiquePage() {
  return (
    <Suspense>
      <BoutiqueContent />
    </Suspense>
  );
}

function BoutiqueContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("tout");

  useEffect(() => {
    const cat = searchParams.get("categorie");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered =
    activeCategory === "tout"
      ? products
      : products.filter((p) => p.categoryId === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="font-heading text-4xl text-gradient mb-2">
          La Boutique
        </h1>
        <p className="text-muted-foreground text-lg">
          Trouve la perruque parfaite pour toi
        </p>
      </div>

      {/* Category Navigation Bar */}
      <div className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-sm py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-border mb-8">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button
            type="button"
            onClick={() => setActiveCategory("tout")}
            className={`rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              activeCategory === "tout"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
            }`}
          >
            Tout
          </button>
          {activeCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product count */}
      <p className="text-sm text-muted-foreground mb-6">
        {filtered.length} perruque{filtered.length > 1 ? "s" : ""}
      </p>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <p className="font-heading text-2xl text-muted-foreground">
            Aucun produit dans cette catégorie
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("tout")}
            className="mt-2 text-sm font-medium text-primary underline underline-offset-4"
          >
            Voir toute la collection
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/produit/${product.slug}`}
              className="group block hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-xl"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${BADGE_CLASSES[product.badge]}`}
                    >
                      {BADGE_LABELS[product.badge]}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="mt-3 px-1 space-y-1.5">
                <p className="font-medium text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                  {product.name}
                </p>

                <p className="text-xs text-muted-foreground">
                  {product.texture} · {product.type}
                </p>

                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-foreground">
                    {product.price}€
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}€
                    </span>
                  )}
                </div>

                <StarRating rating={product.rating} />
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Coming Soon Section */}
      {comingSoonCategories.length > 0 && (
        <div className="mt-20">
          <h2 className="font-heading text-2xl mb-6 text-center">
            Bientôt disponible
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {comingSoonCategories.map((cat) => (
              <div
                key={cat.id}
                className="relative rounded-xl overflow-hidden opacity-70 cursor-not-allowed"
              >
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-secondary to-secondary/40 flex flex-col items-center justify-center gap-3 p-6">
                  <p className="font-heading text-xl text-center text-foreground">
                    {cat.name}
                  </p>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-primary/20 text-primary">
                    Coming soon
                  </span>
                  <p className="text-xs text-muted-foreground text-center">
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
