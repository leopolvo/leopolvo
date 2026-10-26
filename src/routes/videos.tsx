import { createFileRoute } from "@tanstack/react-router";
import { Play, X } from "lucide-react";
import { useState } from "react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { videos } from "@/data/site";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vídeos chorras · leopolvo" },
      { name: "description", content: "Nuestra colección de vídeos divertidos de viajes y momentos absurdos." },
      { property: "og:title", content: "Vídeos chorras · leopolvo" },
      { property: "og:description", content: "Nuestra colección de vídeos divertidos." },
    ],
  }),
  component: Videos,
});

function Videos() {
  const [active, setActive] = useState<(typeof videos)[number] | null>(null);
  return (
    <SiteLayout>
      <PageHeader eyebrow="Para reírse un rato" title="Vídeos chorras" />
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 pb-24 sm:grid-cols-3 lg:grid-cols-4">
        {videos.map((v) => (
          <button key={v.id} onClick={() => setActive(v)} className="group overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:border-primary">
            <div className="relative aspect-video overflow-hidden">
              <img src={v.poster} alt={v.title} loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-full bg-primary p-3 text-primary-foreground shadow-glow transition-transform group-hover:scale-110"><Play className="h-5 w-5" /></span>
              </span>
            </div>
            <p className="p-3 font-display text-lg text-sand">{v.title}</p>
          </button>
        ))}
      </section>
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur" onClick={() => setActive(null)}>
          <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <video src={active.src} poster={active.poster} controls autoPlay playsInline className="max-h-[80vh] w-full rounded-lg bg-background" />
            <p className="mt-3 font-display text-xl text-sand">{active.title}</p>
          </div>
          <button aria-label="Cerrar" className="absolute right-5 top-5 rounded-full bg-secondary p-2 text-foreground" onClick={() => setActive(null)}><X className="h-5 w-5" /></button>
        </div>
      )}
    </SiteLayout>
  );
}
