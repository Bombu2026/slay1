"use client";

import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/data";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <Button
      onClick={handleClick}
      disabled={!product.inStock}
      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-base font-medium tracking-wide shadow-md transition-all duration-200"
      size="lg"
    >
      {!product.inStock ? "Rupture de stock" : added ? "Ajouté !" : "Ajouter au panier"}
    </Button>
  );
}
