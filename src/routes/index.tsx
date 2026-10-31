import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Film, Globe2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { trips } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "leopolvo · Viajes, fotos y vídeos" },
      { name: "description", content: "Álbumes de fotos, vídeos de viajes y vistas 360 de leopolvo." },
      { property: "og:title", content: "leopolvo · Viajes, fotos y vídeos" },
      { property: "og:description", content: "Álbumes de viajes por Filipinas, Tailandia, Patagonia, Costa Rica y más." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="mx-auto w-full max-w-6xl px-5 pt-32 pb-8 text-center">
        <p className="eyebrow">Bienvenidos / as</p>
        <h1 className="mt-4 text-2xl leading-[1.05] text-sand sm:text-3xl">
          Solo viajes
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Fotos, vídeos y rincones del mundo que hemos ido recorriendo, poco a poco.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5">
        <div className="overflow-hidden rounded-xl border border-border/60">
          <img
            src="/media/hero.webp"
            alt="Atardecer en una playa de Tailandia"
            className="h-[58vh] min-h-[320px] w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 pt-6 pb-24 sm:grid-cols-3">
        {[
          { to: "/viajes", icon: Camera, title: "Viajes", text: `${trips.length} álbumes de fotos` },
          { to: "/videos", icon: Film, title: "Vídeos de viajes", text: "Recuerdos de nuestros viajes" },
          { to: "/vistas-360", icon: Globe2, title: "Vistas 360", text: "Explora los lugares" },
        ].map(({ to, icon: Icon, title, text }) => (
          <Link key={to} to={to} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary">
            <Icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-xl text-sand">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
