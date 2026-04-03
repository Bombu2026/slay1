import Image from "next/image";
import Link from "next/link";
import { products, reviews } from "@/lib/data";
import { Button } from "@/components/ui/button";

const bestSellers = products
  .filter((p) => p.badge === "bestseller")
  .concat(products.filter((p) => p.badge !== "bestseller").sort((a, b) => b.rating - a.rating))
  .slice(0, 4);

const featuredReviews = reviews.slice(0, 3);

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-accent text-sm" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (i < Math.round(rating) ? "★" : "☆")).join("")}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero — image plein écran avec overlay et texte en bas */}
      <section className="relative min-h-[85vh] flex items-end animate-fade-in">
        <Image
          src="/images/hero.png"
          alt="Slay by Elnacia — groupe de femmes"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5E6D3] via-[#F5E6D3]/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <p className="animate-slide-up animate-delay-100 text-sm uppercase tracking-[0.25em] text-primary/70 font-medium mb-6">
            Slay by Elnacia
          </p>
          <h1 className="animate-slide-up animate-delay-200 font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6">
            Change autant
            <br />
            que tu veux
          </h1>
          <p className="animate-slide-up animate-delay-300 text-lg sm:text-xl text-primary/80 max-w-xl mb-10 leading-relaxed">
            Perruques premium. Style instantané. Confiance absolue.
          </p>
          <div className="animate-slide-up animate-delay-400">
            <Button
              render={<Link href="/boutique" />}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-base font-medium tracking-wide shadow-lg"
            >
              Découvrir la collection
            </Button>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-5 mt-6">
              <span className="text-xs text-primary/60 flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="1" y="3" width="15" height="13" rx="2" />
                  <path d="M16 8h4l3 5v3h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                Livraison 2-5 jours
              </span>
              <span className="text-xs text-primary/60 flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Paiement sécurisé
              </span>
              <span className="text-xs text-primary/60 flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.51 15a9 9 0 1 0 .49-3.51" />
                </svg>
                Retours 14 jours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers — layout éditorial */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3">
              Collection
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              Les plus demandées
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {bestSellers.map((product, index) => (
              <div
                key={product.id}
                className={`animate-slide-up flex flex-col md:flex-row items-stretch gap-0 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Photo */}
                <div className="md:w-1/2">
                  {product.image ? (
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div
                      className="aspect-[3/4] rounded-2xl"
                      style={{ background: product.gradient }}
                    />
                  )}
                </div>

                {/* Info card */}
                <div
                  className={`md:w-1/2 relative z-10 flex items-center ${
                    index % 2 === 1 ? "md:-mr-8" : "md:-ml-8"
                  }`}
                >
                  <div
                    className="w-full rounded-2xl p-8 sm:p-10 shadow-2xl"
                    style={{ background: product.gradient }}
                  >
                    {product.badge && (
                      <span
                        className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
                          product.badge === "bestseller"
                            ? "bg-primary text-primary-foreground"
                            : product.badge === "nouveau"
                              ? "bg-accent text-accent-foreground"
                              : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}

                    <h3 className="font-heading text-2xl font-bold text-primary mb-3 leading-snug">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <StarRating rating={product.rating} />
                      <span className="text-sm text-primary/60">({product.reviewCount} avis)</span>
                    </div>

                    <div className="flex items-baseline gap-3 mb-5">
                      <span className="text-2xl font-bold text-primary">{product.price} €</span>
                      {product.originalPrice && (
                        <span className="text-base text-primary/50 line-through">
                          {product.originalPrice} €
                        </span>
                      )}
                    </div>

                    <p className="text-primary/70 leading-relaxed mb-8">{product.description}</p>

                    <Button
                      render={<Link href={`/produit/${product.slug}`} />}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 text-sm font-medium tracking-wide"
                    >
                      Voir le produit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              render={<Link href="/boutique" />}
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
            >
              Voir toute la collection
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              Pourquoi Slay by Elnacia ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "✦",
                title: "Qualité Premium",
                text: "Cheveux 100% vierges, lace invisible, finitions parfaites.",
              },
              {
                icon: "◎",
                title: "Facilité",
                text: "Glueless, prête à porter. Installation en 2 minutes.",
              },
              {
                icon: "◈",
                title: "Livraison Express",
                text: "Chez toi en 2 à 5 jours. Packaging soigné.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 text-center border border-border"
              >
                <div className="text-3xl text-accent mb-4">{value.icon}</div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3">
              Avis clients
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              Elles ont <span className="text-gradient">slayé</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-card rounded-2xl p-8 border border-border flex flex-col gap-4"
              >
                <div className="font-heading text-6xl leading-none text-accent/30 select-none">
                  &ldquo;
                </div>
                <StarRating rating={review.rating} />
                <p className="text-foreground leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center text-primary font-semibold text-sm">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(review.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — bookend visuel avec hero image */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5E6D3]/95 to-[#C8A27C]/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">
            Prête à slay ?
          </h2>
          <p className="text-primary/70 text-lg mb-10 max-w-md mx-auto">
            Rejoins des milliers de femmes qui changent de look au quotidien.
          </p>
          <Button
            render={<Link href="/boutique" />}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-12 py-6 text-base font-medium tracking-wide shadow-lg"
          >
            Shop maintenant
          </Button>
        </div>
      </section>
    </>
  );
}
