import Image from "next/image";
import Link from "next/link";
import { products, reviews, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";

const bestSellers = products
  .filter((p) => p.badge === "bestseller")
  .concat(products.filter((p) => p.badge !== "bestseller").sort((a, b) => b.rating - a.rating))
  .slice(0, 4);

const featuredReviews = reviews.slice(0, 3);

const activeCategories = categories.filter((c) => !c.comingSoon && c.image);
const comingSoonCategories = categories.filter((c) => c.comingSoon);

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
      {/* Hero — image nette avec overlay sombre en bas + marque prominente */}
      <section className="relative min-h-[100vh] flex items-end animate-fade-in">
        <Image
          src="/images/hero.png"
          alt="Slay by Elnacia — groupe de femmes"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay — sombre en bas uniquement, image nette en haut */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e08]/90 via-[#1a0e08]/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
          {/* Brand name — large et visible */}
          <div className="animate-slide-up animate-delay-100 mb-4">
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#FAF9F6] leading-[0.9] tracking-tight">
              SLAY
            </h1>
            <p className="text-sm sm:text-base uppercase tracking-[0.35em] text-[#C8A27C] font-medium mt-2">
              by Elnacia
            </p>
          </div>

          {/* Slogan */}
          <p className="animate-slide-up animate-delay-200 font-heading text-2xl sm:text-3xl lg:text-4xl text-[#FAF9F6]/90 font-light italic mb-3 leading-snug">
            Change autant que tu veux
          </p>
          <p className="animate-slide-up animate-delay-300 text-sm sm:text-base text-[#FAF9F6]/60 max-w-md mb-8 leading-relaxed">
            Perruques premium. Style instantane. Confiance absolue.
          </p>

          <div className="animate-slide-up animate-delay-400">
            <Button
              render={<Link href="/boutique" />}
              size="lg"
              className="bg-[#C8A27C] text-[#1a0e08] hover:bg-[#d4b08e] rounded-full px-10 py-6 text-base font-semibold tracking-wide shadow-lg"
            >
              Decouvrir la collection
            </Button>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-5 mt-6">
              <span className="text-xs text-[#FAF9F6]/40 flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="1" y="3" width="15" height="13" rx="2" />
                  <path d="M16 8h4l3 5v3h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                Livraison 2-5 jours
              </span>
              <span className="text-xs text-[#FAF9F6]/40 flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Paiement securise
              </span>
              <span className="text-xs text-[#FAF9F6]/40 flex items-center gap-1.5">
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

      {/* Shop par catégorie */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3">
              Collections
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              Shop par catégorie
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Active categories — linkable */}
            {activeCategories.map((category) => (
              <Link
                key={category.id}
                href={`/boutique?categorie=${category.slug}`}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden block"
              >
                <Image
                  src={category.image as string}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-heading text-white font-semibold text-sm sm:text-base leading-tight">
                    {category.name}
                  </p>
                </div>
              </Link>
            ))}

            {/* Coming soon categories — visuellement riches */}
            {comingSoonCategories.map((category) => {
              const styles: Record<string, { gradient: string; icon: string }> = {
                colorees: {
                  gradient: "linear-gradient(135deg, #D4A574 0%, #B8736A 40%, #8B5E56 100%)",
                  icon: "✦",
                },
                "demi-perruques": {
                  gradient: "linear-gradient(135deg, #C8A27C 0%, #967259 40%, #7A5C40 100%)",
                  icon: "◐",
                },
                accessoires: {
                  gradient: "linear-gradient(135deg, #E8D5C4 0%, #C8A27C 40%, #A67B5B 100%)",
                  icon: "♢",
                },
              };
              const s = styles[category.id] ?? styles.accessoires;
              return (
                <div
                  key={category.id}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-default"
                  style={{ background: s.gradient }}
                >
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                  {/* Large decorative icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[80px] sm:text-[100px] text-white/15 select-none">{s.icon}</span>
                  </div>
                  {/* Dark gradient bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Coming soon badge */}
                  <div className="absolute top-3 left-3 right-3 flex justify-center">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] bg-white/20 text-white backdrop-blur-md border border-white/30 px-3 py-1.5 rounded-full">
                      Bientot disponible
                    </span>
                  </div>
                  {/* Category name */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-heading text-white font-semibold text-sm sm:text-base leading-tight">
                      {category.name}
                    </p>
                    <p className="text-white/50 text-xs mt-1">{category.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Sellers — layout éditorial */}
      <section className="py-16 sm:py-24 bg-secondary">
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
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
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
      <section className="py-16 sm:py-24 bg-background">
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
      <section className="py-16 sm:py-24 bg-secondary">
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
