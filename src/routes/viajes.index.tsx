import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { coverUrl, trips } from "@/data/site";

export const Route = createFileRoute("/viajes/")({
  head: () => ({
    meta: [
      { title: "Viajes · leopolvo" },
      { name: "description", content: "Álbumes de fotos de nuestros viajes por Asia, América y Europa." },
      { property: "og:title", content: "Viajes · leopolvo" },
      { property: "og:description", content: "Álbumes de fotos de nuestros viajes por Asia, América y Europa." },
    ],
  }),
  component: Trips,
});

function Trips() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Álbumes" title="Nuestros viajes" intro="Poco a poco iremos poniendo las fotos de los viajes que hemos hecho. Pulsa en un destino para ver el álbum." />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {trips.map((t) => (
          <Link key={t.slug} to="/viajes/$slug" params={{ slug: t.slug }} className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={coverUrl(t)} alt={t.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <p className="text-xs text-primary">{t.date}</p>
              <h2 className="mt-1 text-2xl text-sand">{t.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t.places}</p>
              <p className="mt-3 text-xs text-muted-foreground">{t.photos} fotos</p>
            </div>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
