import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { panoramas } from "@/data/site";

export const Route = createFileRoute("/vistas-360")({
  head: () => ({
    meta: [
      { title: "Vistas 360 · leopolvo" },
      { name: "description", content: "Recorre en 360 grados algunos de los lugares donde hemos estado." },
      { property: "og:title", content: "Vistas 360 · leopolvo" },
      { property: "og:description", content: "Recorre en 360 grados algunos de los lugares donde hemos estado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Panoramas,
});

function Panoramas() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Panorámicas" title="Vistas 360" intro="Poco a poco irán aumentando." />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-24 lg:grid-cols-2">
        {panoramas.map((p) => (
          <a key={p.panoid} href={`https://www.google.com/maps/@?api=1&map_action=pano&pano=${encodeURIComponent(p.panoid)}`} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${p.title} en 360 en una ventana nueva`} className="flex items-center gap-5 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary">
            <Globe2 className="h-8 w-8 shrink-0 text-primary" />
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl text-sand">{p.title}</h2>
              <p className="text-sm text-muted-foreground">{p.place}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">Ver vista 360 <ArrowUpRight className="h-4 w-4" /></span>
            </div>
          </a>
        ))}
      </section>
    </SiteLayout>
  );
}
