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
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-primary mb-5">
            Notre Histoire
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Derrière chaque perruque, il y a une vision.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Founder photo */}
            <div className="w-full lg:w-2/5 flex-shrink-0">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/fondatrice.png"
                  alt="Elnacia, fondatrice de Slay by Elnacia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Storytelling */}
            <div className="lg:w-3/5 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium mb-1">
                Elnacia
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Fondatrice de Slay by Elnacia
              </p>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
                <p>Avant Slay, j&apos;étais comme toi.</p>
                <p>
                  À chercher la bonne perruque. La bonne qualité. Le bon prix.
                </p>
                <p>
                  J&apos;ai testé des dizaines de marques, collaboré avec
                  plusieurs d&apos;entre elles... Mais il manquait toujours
                  quelque chose&nbsp;: soit la qualité, soit le rendu, soit
                  l&apos;accessibilité.
                </p>
                <p>Alors j&apos;ai décidé de créer ce que je ne trouvais pas.</p>
                <p>
                  Slay, c&apos;est des perruques pensées pour les femmes qui
                  veulent se sentir belles sans effort. Des modèles faciles à
                  porter, avec un rendu naturel, sans compromis entre qualité et
                  prix.
                </p>
                <p>
                  Parce qu&apos;au fond, ce qu&apos;on cherche vraiment, ce
                  n&apos;est pas juste une perruque. C&apos;est ce moment où tu
                  te regardes... et tu te reconnais.
                </p>
              </div>

              <blockquote className="mt-10 border-l-4 border-accent pl-6">
                <p className="font-heading text-xl italic text-primary">
                  &ldquo;Mon objectif&nbsp;? Que tu te regardes dans le miroir
                  et que tu te dises&nbsp;: je slay.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 max-w-2xl mx-auto leading-snug">
            Notre mission
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Démocratiser l&apos;accès aux perruques de qualité et permettre à
            chaque femme d&apos;exprimer sa beauté sans limites.
          </p>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-10 py-6 text-base font-medium tracking-wide"
            render={<Link href="/boutique" />}
          >
            Découvrir la collection
          </Button>
        </div>
      </section>
    </>
  );
}
