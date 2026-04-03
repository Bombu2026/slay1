"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";

export function Header() {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold tracking-tight text-gradient">
              SLAY
            </span>
            <span className="hidden sm:inline text-xs text-muted-foreground font-light tracking-widest uppercase">
              by Elnacia
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/boutique"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Boutique
            </Link>
            <Link
              href="/a-propos"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Notre histoire
            </Link>
            <Link
              href="/guide"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Guide
            </Link>
          </nav>

          {/* Cart + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/panier"
              className="relative flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" x2="21" y1="6" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span
                className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-border py-4 flex flex-col gap-4">
            <Link
              href="/boutique"
              className="text-sm font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              Boutique
            </Link>
            <Link
              href="/a-propos"
              className="text-sm font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              Notre histoire
            </Link>
            <Link
              href="/guide"
              className="text-sm font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              Guide
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
