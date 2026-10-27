import { Link } from "@tanstack/react-router";
import { Instagram, Youtube } from "lucide-react";
import type { ReactNode } from "react";
import { social } from "@/data/site";

const nav = [
  { to: "/viajes", label: "Viajes" },
  { to: "/videos", label: "Vídeos" },
  { to: "/vistas-360", label: "Vistas 360" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteLayout({
  children,
  showNav = true,
}: {
  children: ReactNode;
  showNav?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="font-display text-2xl italic text-sand">
            leopolvo
          </Link>
          {showNav && (
            <nav className="flex flex-wrap justify-end gap-x-5 gap-y-1 text-sm">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border/50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row">
          <p>© leopolvo · Una pareja enamorada de los viajes</p>
          <div className="flex gap-4">
            <a href={social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-primary"><Youtube className="h-5 w-5" /></a>
            <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-32">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 text-4xl text-sand sm:text-6xl">{title}</h1>
      {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
    </section>
  );
}
