"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";

export function Header() {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo typographique */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-heading text-[26px] sm:text-[30px] font-bold tracking-tight" style={{ color: "#C8A27C" }}>
              SLAY
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-foreground/50 font-medium -mt-0.5">
              by Elnacia
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/boutique"
              className="text-[13px] font-medium uppercase tracking-[0.1em] text-foreground/60 hover:text-foreground transition-colors"
            >
              Boutique
            </Link>
            <Link
              href="/a-propos"
              className="text-[13px] font-medium uppercase tracking-[0.1em] text-foreground/60 hover:text-foreground transition-colors"
            >
              Notre histoire
            </Link>
            <Link
              href="/guide"
              className="text-[13px] font-medium uppercase tracking-[0.1em] text-foreground/60 hover:text-foreground transition-colors"
            >
              Guide
            </Link>
          </nav>

          {/* Cart + Mobile toggle */}
          <div className="flex items-center gap-5">
            <Link
              href="/panier"
              className="relative flex items-center text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Panier"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
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
                <span className="absolute -top-2 -right-2.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#C8A27C] text-[9px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu */}
            <button
              type="button"
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span className={`block h-[1.5px] w-5 bg-foreground/80 transition-all duration-300 ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-foreground/80 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-foreground/80 transition-all duration-300 ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-border/40 py-5 flex flex-col gap-1">
            <Link href="/boutique" className="text-sm font-medium uppercase tracking-wider py-3" onClick={() => setMobileOpen(false)}>
              Boutique
            </Link>
            <Link href="/a-propos" className="text-sm font-medium uppercase tracking-wider py-3" onClick={() => setMobileOpen(false)}>
              Notre histoire
            </Link>
            <Link href="/guide" className="text-sm font-medium uppercase tracking-wider py-3" onClick={() => setMobileOpen(false)}>
              Guide
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
