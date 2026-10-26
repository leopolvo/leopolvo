import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Film, Globe2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { thumbUrl, trips } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "leopolvo · Viajes, fotos y vídeos" },
      { name: "description", content: "La web de una pareja enamorada de los viajes: álbumes de fotos, vídeos y vistas 360." },
      { property: "og:title", content: "leopolvo · Viajes, fotos y vídeos" },
      { property: "og:description", content: "Álbumes de viajes por Filipinas, Tailandia, Patagonia, Costa Rica y más." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = trips.slice(0, 3);
  return (
    <SiteLayout>
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src="/media/hero.webp" alt="Atardecer en una playa de Tailandia" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20">
          <p className="eyebrow">Bienvenidos / as</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] text-sand sm:text-7xl">
            Una pareja enamorada <em className="text-primary">de los viajes</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Fotos, vídeos y rincones del mundo que hemos ido recorriendo, poco a poco.
          </p>
          <Link to="/viajes" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
            Ver los viajes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Últimos álbumes</p>
            <h2 className="mt-2 text-3xl text-sand sm:text-4xl">Destinos</h2>
          </div>
          <Link to="/viajes" className="text-sm text-primary hover:underline">Todos los viajes →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {featured.map((t) => (
            <Link key={t.slug} to="/viajes/$slug" params={{ slug: t.slug }} className="group relative aspect-[4/5] overflow-hidden rounded-xl">
              <img src={thumbUrl(t.slug, 2)} alt={t.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-card-fade" />
              <div className="absolute bottom-0 p-5">
                <p className="text-xs text-primary">{t.date}</p>
                <h3 className="text-2xl text-sand">{t.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-24 sm:grid-cols-3">
        {[
          { to: "/viajes", icon: Camera, title: "Viajes", text: `${trips.length} álbumes de fotos` },
          { to: "/videos", icon: Film, title: "Vídeos chorras", text: "Momentos para reírse" },
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
