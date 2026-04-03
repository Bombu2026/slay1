"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",") + "€";
}

export default function PanierPage() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart();

  const SHIPPING_THRESHOLD = 150;
  const SHIPPING_COST = 5.9;
  const shippingFree = total >= SHIPPING_THRESHOLD;
  const shipping = shippingFree ? 0 : SHIPPING_COST;
  const grandTotal = total + shipping;

  if (items.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <h1 className="font-heading text-3xl text-neutral-900">Mon panier</h1>
          <p className="text-sm text-neutral-400 mt-1">0 article</p>
        </header>

        <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
          <div className="text-6xl select-none" aria-hidden="true">
            ∅
          </div>
          <p className="font-heading text-2xl text-neutral-700">
            Ton panier est vide
          </p>
          <p className="text-neutral-400 text-sm max-w-xs">
            Aucun article pour le moment. Explore la collection et trouve ta
            prochaine pièce signature.
          </p>
          <Button render={<Link href="/boutique" />} size="lg" className="mt-2">
            Découvrir la collection
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10">
        <h1 className="font-heading text-3xl text-neutral-900">Mon panier</h1>
        <p className="text-sm text-neutral-400 mt-1">
          {itemCount} {itemCount === 1 ? "article" : "articles"}
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left — Cart items */}
        <section className="lg:w-2/3 flex flex-col gap-0" aria-label="Articles du panier">
          {items.map((item, index) => {
            const { product, quantity } = item;
            const lineTotal = product.price * quantity;

            return (
              <div key={product.id}>
                <div className="flex items-start gap-5 py-6">
                  {/* Gradient thumbnail */}
                  <div
                    className="w-20 h-20 rounded-lg flex-shrink-0"
                    style={{ background: product.gradient }}
                    aria-hidden="true"
                  />

                  {/* Product info */}
                  <div className="flex flex-1 flex-col gap-2 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-heading text-base text-neutral-900 leading-snug">
                          {product.name}
                        </p>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {product.texture} · {product.lengthCm}
                        </p>
                      </div>
                      <p className="font-heading text-base text-neutral-900 whitespace-nowrap">
                        {formatPrice(lineTotal)}
                      </p>
                    </div>

                    {/* Controls row */}
                    <div className="flex items-center justify-between mt-1">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            quantity > 1
                              ? updateQuantity(product.id, quantity - 1)
                              : removeItem(product.id)
                          }
                          className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 transition-colors text-sm font-medium"
                          aria-label="Réduire la quantité"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm text-neutral-800 tabular-nums">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                          className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 transition-colors text-sm font-medium"
                          aria-label="Augmenter la quantité"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors underline underline-offset-2"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>

                {index < items.length - 1 && <Separator />}
              </div>
            );
          })}
        </section>

        {/* Right — Order summary */}
        <aside className="lg:w-1/3">
          <div className="border border-neutral-100 rounded-2xl p-6 bg-neutral-50 sticky top-6">
            <h2 className="font-heading text-xl text-neutral-900 mb-5">
              Résumé
            </h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between text-neutral-600">
                <span>Sous-total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <div className="flex justify-between text-neutral-600">
                <span>Livraison</span>
                <span
                  className={
                    shippingFree ? "text-emerald-600 font-medium" : ""
                  }
                >
                  {shippingFree ? "Gratuite" : formatPrice(SHIPPING_COST)}
                </span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between items-baseline mb-6">
              <span className="font-heading text-base text-neutral-900">
                Total
              </span>
              <span className="font-heading text-xl text-neutral-900">
                {formatPrice(grandTotal)}
              </span>
            </div>

            <Button render={<Link href="/checkout" />} size="lg" className="w-full">
              Commander
            </Button>

            {!shippingFree && (
              <p className="text-xs text-center text-neutral-400 mt-3">
                Plus que{" "}
                <span className="text-gradient font-medium">
                  {formatPrice(SHIPPING_THRESHOLD - total)}
                </span>{" "}
                pour la livraison gratuite
              </p>
            )}

            {shippingFree && (
              <p className="text-xs text-center text-emerald-600 mt-3">
                Livraison gratuite incluse
              </p>
            )}

            {!shippingFree && (
              <p className="text-xs text-center text-neutral-300 mt-1">
                Livraison gratuite dès 150€
              </p>
            )}
          </div>
        </aside>
      </div>

      {/* Continue shopping */}
      <div className="mt-12 text-center">
        <Link
          href="/boutique"
          className="text-sm text-neutral-400 hover:text-neutral-700 transition-colors underline underline-offset-4"
        >
          ← Continuer mes achats
        </Link>
      </div>
    </main>
  );
}
