"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";

export function Header() {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo — large et net */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Slay by Elnacia"
              width={1200}
              height={1200}
              className="h-16 sm:h-[70px] w-auto"
              priority
              quality={95}
            />
          </Link>

          {/* Desktop Nav — centré */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/boutique"
              className="text-[13px] font-medium uppercase tracking-[0.1em] text-foreground/70 hover:text-foreground transition-colors"
            >
              Boutique
            </Link>
            <Link
              href="/a-propos"
              className="text-[13px] font-medium uppercase tracking-[0.1em] text-foreground/70 hover:text-foreground transition-colors"
            >
              Notre histoire
            </Link>
            <Link
              href="/guide"
              className="text-[13px] font-medium uppercase tracking-[0.1em] text-foreground/70 hover:text-foreground transition-colors"
            >
              Guide
            </Link>
          </nav>

          {/* Cart + Mobile toggle */}
          <div className="flex items-center gap-5">
            <Link
              href="/panier"
              className="relative flex items-center text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Panier"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
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
                <span className="absolute -top-2 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A27C] text-[10px] font-bold text-white">
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
          <nav className="md:hidden border-t border-border py-6 flex flex-col gap-1">
            <Link
              href="/boutique"
              className="text-sm font-medium uppercase tracking-wider py-3 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Boutique
            </Link>
            <Link
              href="/a-propos"
              className="text-sm font-medium uppercase tracking-wider py-3 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Notre histoire
            </Link>
            <Link
              href="/guide"
              className="text-sm font-medium uppercase tracking-wider py-3 text-foreground/80 hover:text-foreground transition-colors"
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
