"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

type PaymentMethod = "cb" | "paypal" | "applepay" | null;

export default function CheckoutPage() {
  const { items, total, itemCount, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [confirmed, setConfirmed] = useState(false);

  const shipping = total >= 150 ? 0 : 5.9;
  const orderTotal = total + shipping;

  if (confirmed) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-heading text-3xl font-bold text-primary mb-4">
            Commande confirmée !
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Merci pour ta commande. Tu recevras un email de confirmation très
            bientôt.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10"
            render={<Link href="/boutique" onClick={clearCart} />}
          >
            Retour à la boutique
          </Button>
        </div>
      </div>
    );
  }

  if (itemCount === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <h1 className="font-heading text-3xl font-bold text-primary mb-4">
            Ton panier est vide
          </h1>
          <p className="text-muted-foreground mb-8">
            Ajoute des produits avant de passer commande.
          </p>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
            render={<Link href="/boutique" />}
          >
            Découvrir la collection
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-primary mb-10">
        Paiement
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT — Form */}
        <div className="lg:w-3/5 space-y-8">
          {/* Contact */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Contact
            </h2>
            <Input
              type="email"
              placeholder="Email"
              className="bg-background border-border"
            />
          </section>

          {/* Livraison */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Livraison
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="Prénom" className="bg-background border-border" />
                <Input placeholder="Nom" className="bg-background border-border" />
              </div>
              <Input placeholder="Adresse" className="bg-background border-border" />
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="Ville" className="bg-background border-border" />
                <Input placeholder="Code postal" className="bg-background border-border" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="Pays" className="bg-background border-border" />
              </div>
            </div>
          </section>

          {/* Paiement */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Paiement
            </h2>
            <div className="flex gap-3 mb-4">
              {(
                [
                  { id: "cb", label: "Carte bancaire" },
                  { id: "paypal", label: "PayPal" },
                  { id: "applepay", label: "Apple Pay" },
                ] as { id: PaymentMethod; label: string }[]
              ).map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setPaymentMethod(id)}
                  className={`flex-1 py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                    paymentMethod === id
                      ? "border-primary bg-secondary text-primary"
                      : "border-border bg-background text-muted-foreground hover:border-accent"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {paymentMethod === "cb" && (
              <div className="space-y-3">
                <Input
                  placeholder="Numéro de carte"
                  className="bg-background border-border"
                />
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    placeholder="Date d'expiration (MM/AA)"
                    className="bg-background border-border"
                  />
                  <Input
                    placeholder="CVV"
                    className="bg-background border-border"
                  />
                </div>
              </div>
            )}
          </section>

          <Button
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 text-base font-medium tracking-wide"
            onClick={() => setConfirmed(true)}
          >
            Confirmer la commande
          </Button>
        </div>

        {/* RIGHT — Order review */}
        <div className="lg:w-2/5">
          <div className="sticky top-24 bg-secondary rounded-2xl p-6 border border-border">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">
              Récapitulatif
            </h2>

            <div className="space-y-4 mb-5">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-lg flex-shrink-0"
                    style={{ background: item.product.gradient }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground leading-snug truncate">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Qté {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-primary flex-shrink-0">
                    {(item.product.price * item.quantity).toFixed(2)} €
                  </p>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Sous-total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Livraison</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-primary font-medium">Offerte</span>
                  ) : (
                    `${shipping.toFixed(2)} €`
                  )}
                </span>
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between font-semibold text-base text-primary">
                <span>Total</span>
                <span>{orderTotal.toFixed(2)} €</span>
              </div>
            </div>

            <p className="mt-5 text-xs text-muted-foreground text-center leading-relaxed">
              Paiement sécurisé — Vos données sont protégées par un
              chiffrement SSL 256 bits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
