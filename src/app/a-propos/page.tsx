import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const values = [
  {
    title: "Accessibilité",
    text: "Le premium ne devrait pas être réservé aux plus riches. Nos perruques offrent une qualité salon à un prix juste.",
  },
  {
    title: "Qualité",
    text: "Cheveux 100% vierges, lace invisible, finitions main. Chaque perruque passe un contrôle qualité strict.",
  },
  {
    title: "Confiance",
    text: "Plus de 500 femmes nous font confiance. Avis vérifiés, livraison rapide, SAV réactif.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-medium mb-5">
            Slay by Elnacia
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-primary mb-5">
            Notre Histoire
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Derrière chaque perruque, il y a une vision.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Founder photo */}
            <div className="w-full lg:w-2/5 flex-shrink-0">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/confidence.jpg"
                  alt="Elnacia, fondatrice de Slay"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-3/5">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
                Elnacia, fondatrice
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-6 leading-snug">
                Une passion,{" "}
                <span className="text-gradient">une mission</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6">
                Passionnée de beauté et de coiffure depuis toujours, j&apos;ai
                créé Slay pour donner à chaque femme la liberté de changer de
                style aussi souvent qu&apos;elle le souhaite. Pas de compromis
                sur la qualité, pas de prix inaccessibles. Juste de belles
                perruques, faciles à porter, qui te font te sentir incroyable.
              </p>
              <p className="text-primary font-medium text-base sm:text-lg italic leading-relaxed">
                &ldquo;Mon objectif&nbsp;? Que tu te regardes dans le miroir et
                que tu te dises&nbsp;: &lsquo;Je slay.&rsquo;&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3">
              Nos engagements
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              Ce en quoi nous croyons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 border border-border transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="font-heading text-4xl text-accent/30 block mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/60 font-medium mb-4">
            Notre mission
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 max-w-2xl mx-auto leading-snug">
            Démocratiser l&apos;accès aux perruques de qualité et permettre à
            chaque femme d&apos;exprimer sa beauté sans limites.
          </h2>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-10 py-6 text-base font-medium tracking-wide mt-2"
            render={<Link href="/boutique" />}
          >
            Découvrir la collection
          </Button>
        </div>
      </section>
    </>
  );
}
