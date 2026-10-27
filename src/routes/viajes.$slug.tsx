import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { tripPhotos, trips } from "@/data/site";

export const Route = createFileRoute("/viajes/$slug")({
  loader: ({ params }) => {
    const trip = trips.find((t) => t.slug === params.slug);
    if (!trip) throw notFound();
    return trip;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} · leopolvo` },
          { name: "description", content: `Fotos de nuestro viaje: ${loaderData.places} (${loaderData.date}).` },
          { property: "og:title", content: `${loaderData.title} · leopolvo` },
          { property: "og:description", content: `Fotos de nuestro viaje: ${loaderData.places}.` },
        ]
      : [{ title: "Viaje no encontrado · leopolvo" }, { name: "robots", content: "noindex" }],
  }),
  component: TripPage,
});

function TripPage() {
  const trip = Route.useLoaderData();
  const [open, setOpen] = useState<number | null>(null);
  const photos = tripPhotos(trip);
  const n = photos.length;
  const go = useCallback((d: number) => setOpen((o) => (o === null ? o : ((o - 1 + d + n) % n) + 1)), [n]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  return (
    <SiteLayout>
      <PageHeader eyebrow={trip.date} title={trip.title} intro={trip.places} />
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: n }, (_, i) => i + 1).map((i) => (
            <button key={i} onClick={() => setOpen(i)} className="group aspect-square overflow-hidden rounded-lg">
              <img src={photos[i - 1].thumb} alt={`${trip.title}, foto ${i}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </button>
          ))}
        </div>
        <Link to="/viajes" className="mt-10 inline-block text-sm text-primary hover:underline">← Volver a todos los viajes</Link>
      </section>

      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur" onClick={() => setOpen(null)}>
          <img src={photos[open - 1].full} alt={`${trip.title}, foto ${open}`} className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          <button aria-label="Cerrar" className="absolute right-5 top-5 rounded-full bg-secondary p-2 text-foreground" onClick={() => setOpen(null)}><X className="h-5 w-5" /></button>
          <button aria-label="Anterior" className="absolute left-3 rounded-full bg-secondary p-3 text-foreground" onClick={(e) => { e.stopPropagation(); go(-1); }}><ChevronLeft className="h-5 w-5" /></button>
          <button aria-label="Siguiente" className="absolute right-3 rounded-full bg-secondary p-3 text-foreground" onClick={(e) => { e.stopPropagation(); go(1); }}><ChevronRight className="h-5 w-5" /></button>
          <p className="absolute bottom-5 text-sm text-muted-foreground">{open} / {n}</p>
        </div>
      )}
    </SiteLayout>
  );
}
