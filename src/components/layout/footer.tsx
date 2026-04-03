import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-heading text-3xl font-bold tracking-tight">
              SLAY
            </span>
            <p className="mt-1 text-sm text-primary-foreground/60 tracking-widest uppercase">
              by Elnacia
            </p>
            <p className="mt-4 text-sm text-primary-foreground/80 max-w-sm leading-relaxed">
              Change autant que tu veux. Perruques premium, accessibles, livrées
              chez toi en 2 à 5 jours.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="TikTok"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.27 8.27 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.13z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Boutique
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link href="/boutique" className="hover:text-primary-foreground transition-colors">
                  Toutes les perruques
                </Link>
              </li>
              <li>
                <Link href="/boutique?type=Glueless" className="hover:text-primary-foreground transition-colors">
                  Glueless
                </Link>
              </li>
              <li>
                <Link href="/boutique?type=Lace+Front" className="hover:text-primary-foreground transition-colors">
                  Lace Front
                </Link>
              </li>
              <li>
                <Link href="/boutique?type=HD+Lace" className="hover:text-primary-foreground transition-colors">
                  HD Lace
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Infos
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link href="/a-propos" className="hover:text-primary-foreground transition-colors">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-primary-foreground transition-colors">
                  Guide & Tutos
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Livraison & Retours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Slay by Elnacia. Tous droits
            réservés.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">
              CGV
            </a>
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
