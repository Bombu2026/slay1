import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const installSteps = [
  {
    number: 1,
    title: "Prépare tes cheveux",
    description:
      "Fais des tresses plates ou utilise un bonnet en filet pour aplatir tes cheveux.",
  },
  {
    number: 2,
    title: "Ajuste la perruque",
    description:
      "Règle les sangles intérieures pour qu'elle soit bien ajustée à ton tour de tête.",
  },
  {
    number: 3,
    title: "Pose la perruque",
    description:
      "Pour les glueless : clippe les peignes. Pour les lace front : applique la colle le long de la ligne frontale.",
  },
  {
    number: 4,
    title: "Coupe la lace",
    description:
      "Coupe délicatement la lace excédentaire le long de ta ligne de cheveux.",
  },
  {
    number: 5,
    title: "Style final",
    description:
      "Arrange les baby hair avec un gel et une brosse à dents. Fais ta raie. Tu slay !",
  },
];

const maintenanceTips = [
  {
    title: "Lavage",
    description:
      "Lave ta perruque toutes les 2 semaines avec un shampoing sans sulfate. Eau tiède uniquement.",
  },
  {
    title: "Séchage",
    description:
      "Laisse sécher à l'air libre sur un porte-perruque. Évite le sèche-cheveux à haute température.",
  },
  {
    title: "Stockage",
    description:
      "Range ta perruque sur un support ou dans un sac en satin. Ne la plie jamais.",
  },
  {
    title: "Coiffage",
    description:
      "Utilise un peigne à dents larges. Commence par les pointes et remonte doucement.",
  },
];

const faqs = [
  {
    question: "Combien de temps dure une perruque ?",
    answer:
      "Avec un bon entretien, nos perruques durent 6 mois à 1 an pour un usage quotidien.",
  },
  {
    question: "Puis-je teindre ma perruque ?",
    answer:
      "Oui ! Nos perruques en cheveux vierges peuvent être teintes, bouclées et lissées comme tes propres cheveux.",
  },
  {
    question: "Comment choisir ma taille ?",
    answer:
      "Mesure ton tour de tête avec un mètre souple. Nos perruques sont ajustables de 52 à 58 cm.",
  },
  {
    question: "Livraison en combien de temps ?",
    answer:
      "2 à 5 jours ouvrés en France métropolitaine. Expédition sous 24h.",
  },
  {
    question: "Puis-je retourner ma perruque ?",
    answer:
      "Oui, sous 14 jours si elle n'a pas été portée ni modifiée. Voir nos CGV.",
  },
];

export default function GuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-16">

        {/* Page Header */}
        <header className="text-center space-y-4">
          <h1 className="font-heading text-4xl text-gradient">Guide & Tutos</h1>
          <p className="text-muted-foreground text-lg">
            Tout ce que tu dois savoir pour poser, entretenir et slay tes perruques.
          </p>
        </header>

        {/* How to Install */}
        <section className="space-y-8">
          <h2 className="font-heading text-2xl">Comment poser ta perruque</h2>
          <div className="space-y-4">
            {installSteps.map((step) => (
              <div
                key={step.number}
                className="bg-card rounded-xl p-6 border border-border flex gap-5 items-start transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shrink-0">
                  {step.number}
                </span>
                <div className="space-y-1">
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual break */}
        <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden my-8">
          <Image
            src="/images/straight-dark.jpg"
            alt="Coiffage en salon"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* How to Maintain */}
        <section className="space-y-8">
          <h2 className="font-heading text-2xl">Entretien de ta perruque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {maintenanceTips.map((tip) => (
              <div
                key={tip.title}
                className="bg-card rounded-xl p-6 border border-border space-y-2"
              >
                <p className="font-semibold">{tip.title}</p>
                <p className="text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visual break */}
        <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden my-8">
          <Image
            src="/images/kinky-natural.jpg"
            alt="Produits d'entretien capillaire"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* FAQ */}
        <section className="space-y-8">
          <h2 className="font-heading text-2xl">Questions fréquentes</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-card rounded-xl p-6 border border-border space-y-2 border-l-2 border-l-accent/30 pl-6"
              >
                <p className="font-semibold">{faq.question}</p>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6">
          <p className="font-heading text-2xl">Prête à te lancer ?</p>
          <Button render={<Link href="/boutique" />}>
            Découvrir la collection
          </Button>
        </section>

      </div>
    </main>
  );
}
