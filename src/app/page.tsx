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
      {/* Hero */}
      <section
        className="relative flex items-center justify-center min-h-[90vh]"
        style={{ background: "linear-gradient(135deg, #F5E6D3 0%, #C8A27C 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-primary/70 font-medium mb-6">
            Slay by Elnacia
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6">
            Change autant
            <br />
            que tu veux
          </h1>
          <p className="text-lg sm:text-xl text-primary/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Perruques premium. Style instantané. Confiance absolue.
          </p>
          <Button
            render={<Link href="/boutique" />}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-base font-medium tracking-wide shadow-lg"
          >
            Découvrir la collection
          </Button>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3">
              Collection
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              Les plus demandées
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <Link
                key={product.id}
                href={`/produit/${product.slug}`}
                className="group block transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-2xl overflow-hidden bg-card border border-border"
              >
                {/* Gradient swatch */}
                <div
                  className="h-[200px] w-full"
                  style={{ background: product.gradient }}
                />
                <div className="p-4">
                  {product.badge && (
                    <span
                      className={`inline-block text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 ${
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
                  <h3 className="font-heading font-semibold text-base text-foreground mb-1 leading-snug">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <StarRating rating={product.rating} />
                    <span className="text-xs text-muted-foreground">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-primary">
                        {product.price} €
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice} €
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-accent-foreground bg-secondary px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      Voir
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
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
                className="bg-card rounded-2xl p-6 border border-border flex flex-col gap-4"
              >
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

      {/* Final CTA */}
      <section
        className="py-16 sm:py-24"
        style={{ background: "linear-gradient(135deg, #F5E6D3 0%, #E8C9A0 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
