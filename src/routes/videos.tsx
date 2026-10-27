import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Youtube } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { videos } from "@/data/site";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vídeos de viajes · leopolvo" },
      { name: "description", content: "Vídeos de nuestros viajes en YouTube: Ho Chi Minh, Vietnam, diciembre de 2019." },
      { property: "og:title", content: "Vídeos de viajes · leopolvo" },
      { property: "og:description", content: "Nuestros viajes en vídeo, desde Ho Chi Minh en Vietnam." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Videos,
});

function Videos() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Recuerdos en movimiento" title="Vídeos de viajes" />
      <section aria-label="Vídeos de viajes" className="mx-auto grid max-w-6xl gap-6 px-5 pb-24 md:grid-cols-2">
        {videos.map((v) => (
          <article key={v.id} className="overflow-hidden rounded-lg border border-border bg-card">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${v.id}`}
              title={`${v.title} · ${v.date}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="aspect-video w-full border-0"
            />
            <div className="p-5">
              <h2 className="font-display text-2xl text-sand">{v.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{v.date}</p>
              <a href={v.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                <Youtube className="h-5 w-5" /> Ver en YouTube <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
