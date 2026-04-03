"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products, textures, lengths, types } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

type TextureFilter = (typeof textures)[number] | "Toutes";
type LengthFilter = (typeof lengths)[number] | "Toutes";
type TypeFilter = (typeof types)[number] | "Tous";

const TEXTURE_OPTIONS: TextureFilter[] = ["Toutes", ...textures];
const LENGTH_OPTIONS: LengthFilter[] = ["Toutes", ...lengths];
const TYPE_OPTIONS: TypeFilter[] = ["Tous", ...types];

const BADGE_LABELS: Record<string, string> = {
  bestseller: "Best-seller",
  nouveau: "Nouveau",
  promo: "Promo",
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

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
      }`}
    >
      {children}
    </button>
  );
}

export default function BoutiquePage() {
  const [texture, setTexture] = useState<TextureFilter>("Toutes");
  const [length, setLength] = useState<LengthFilter>("Toutes");
  const [type, setType] = useState<TypeFilter>("Tous");

  const filtered = products.filter((p) => {
    if (texture !== "Toutes" && p.texture !== texture) return false;
    if (length !== "Toutes" && p.length !== length) return false;
    if (type !== "Tous" && p.type !== type) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="font-heading text-4xl text-gradient mb-2">
          La Collection
        </h1>
        <p className="text-muted-foreground text-lg mb-1">
          Trouve la perruque parfaite pour toi
        </p>
        <p className="text-sm text-muted-foreground">
          {filtered.length} perruque{filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-border mb-8 space-y-4">
        {/* Texture */}
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium shrink-0 w-16">
            Texture
          </span>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {TEXTURE_OPTIONS.map((opt) => (
              <FilterButton
                key={opt}
                active={texture === opt}
                onClick={() => setTexture(opt)}
              >
                {opt}
              </FilterButton>
            ))}
          </div>
        </div>

        {/* Length */}
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium shrink-0 w-16">
            Longueur
          </span>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {LENGTH_OPTIONS.map((opt) => (
              <FilterButton
                key={opt}
                active={length === opt}
                onClick={() => setLength(opt)}
              >
                {opt}
              </FilterButton>
            ))}
          </div>
        </div>

        {/* Type */}
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium shrink-0 w-16">
            Type
          </span>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {TYPE_OPTIONS.map((opt) => (
              <FilterButton
                key={opt}
                active={type === opt}
                onClick={() => setType(opt)}
              >
                {opt}
              </FilterButton>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <p className="font-heading text-2xl text-muted-foreground">
            Aucun produit trouvé
          </p>
          <p className="text-sm text-muted-foreground">
            Essaie d&apos;autres filtres pour explorer la collection.
          </p>
          <button
            type="button"
            onClick={() => {
              setTexture("Toutes");
              setLength("Toutes");
              setType("Tous");
            }}
            className="mt-2 text-sm font-medium text-primary underline underline-offset-4"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/produit/${product.slug}`}
              className="group block hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-xl"
            >
              {/* Image placeholder with gradient */}
              <div className="relative overflow-hidden rounded-t-xl">
                {product.image ? (
                  <div className="aspect-[3/4] w-full relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                ) : (
                  <div className="relative aspect-[3/4] rounded-t-xl overflow-hidden">
                    <div
                      className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                      style={{ background: product.gradient }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                )}
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <Badge
                      className={
                        product.badge === "bestseller"
                          ? "bg-primary text-primary-foreground"
                          : product.badge === "nouveau"
                            ? "bg-accent text-accent-foreground"
                            : "bg-destructive text-white"
                      }
                    >
                      {BADGE_LABELS[product.badge]}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="mt-3 px-1 space-y-1.5">
                <p className="font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                  {product.name}
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

                <p className="text-xs text-muted-foreground">
                  {product.texture} · {product.length}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
