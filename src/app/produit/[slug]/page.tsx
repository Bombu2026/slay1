import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getReviewsByProductId,
  products,
} from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { AddToCartButton } from "@/components/add-to-cart-button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span
      className="text-accent text-lg"
      aria-label={`${rating} étoiles sur 5`}
    >
      {Array.from({ length: 5 }, (_, i) =>
        i < Math.round(rating) ? "★" : "☆",
      ).join("")}
    </span>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const reviews = getReviewsByProductId(product.id);

  const relatedProducts = products
    .filter((p) => p.texture === product.texture && p.id !== product.id)
    .slice(0, 3);

  const badgeStyles: Record<string, string> = {
    bestseller: "bg-primary text-primary-foreground",
    nouveau: "bg-accent text-accent-foreground",
    promo: "bg-destructive/10 text-destructive",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
        <Link href="/" className="hover:text-primary transition-colors">
          Accueil
        </Link>
        <span>/</span>
        <Link href="/boutique" className="hover:text-primary transition-colors">
          Boutique
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        {/* LEFT — product image */}
        <div className="lg:w-1/2">
          <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {product.badge && (
              <span
                className={`absolute top-5 left-5 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${badgeStyles[product.badge]}`}
              >
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* RIGHT — product details */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Name */}
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <StarRating rating={product.rating} />
            <span className="text-sm text-muted-foreground">
              {product.rating} · {product.reviewCount} avis
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-primary">
              {product.price} €
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">
                  {product.originalPrice} €
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-destructive/10 text-destructive">
                  Promo
                </span>
              </>
            )}
          </div>

          <Separator />

          {/* Long description */}
          <p className="text-foreground/80 leading-relaxed text-base">
            {product.longDescription}
          </p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Longueur", value: product.lengthCm },
              { label: "Texture", value: product.texture },
              { label: "Type", value: product.type },
              { label: "Densité", value: product.density },
            ].map(({ label, value }) => (
              <div key={label} className="bg-secondary/50 rounded-lg p-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium mb-0.5">
                  {label}
                </p>
                <p className="text-sm font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>

          {/* Features list */}
          <ul className="flex flex-col gap-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="text-accent font-bold text-base leading-none">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Add to cart */}
          <AddToCartButton product={product} />

          {/* Trust signals */}
          <div className="flex items-center justify-between py-4 mt-4 border-t border-border text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              Paiement sécurisé
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/><circle cx="12" cy="12" r="10"/></svg>
              Livraison 2-5 jours
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
              Retours 14 jours
            </span>
          </div>

          {/* Free shipping note */}
          <p className="text-center text-xs text-muted-foreground">
            Livraison gratuite dès 150 €
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      {reviews.length > 0 && (
        <section className="mb-20">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary">
              Avis clients
            </h2>
            <div className="flex items-center gap-2">
              <StarRating rating={product.rating} />
              <span className="text-sm text-muted-foreground">
                {product.rating} / 5
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3"
              >
                <StarRating rating={review.rating} />
                <p className="text-foreground leading-relaxed flex-1 text-sm">
                  <span className="font-heading text-4xl text-accent/20 leading-none align-bottom mr-1">&ldquo;</span>{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center text-primary font-semibold text-sm shrink-0">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {review.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(review.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl font-bold text-primary mb-8">
            Tu vas aussi aimer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                href={`/produit/${related.slug}`}
                className="group block rounded-2xl overflow-hidden bg-card border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-[180px] w-full">
                  <Image
                    src={related.image}
                    alt={related.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-base text-foreground mb-2 leading-snug">
                    {related.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-primary">
                      {related.price} €
                    </span>
                    {related.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {related.originalPrice} €
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
