import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { panoramas } from "@/data/site";

export const Route = createFileRoute("/vistas-360")({
  head: () => ({
    meta: [
      { title: "Vistas 360 · leopolvo" },
      { name: "description", content: "Recorre en 360 grados algunos de los lugares donde hemos estado." },
      { property: "og:title", content: "Vistas 360 · leopolvo" },
      { property: "og:description", content: "Recorre en 360 grados algunos de los lugares donde hemos estado." },
    ],
  }),
  component: Panoramas,
});

function Panoramas() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Arrastra para mirar alrededor" title="Vistas 360" intro="Poco a poco irán aumentando." />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-24 lg:grid-cols-2">
        {panoramas.map((p) => (
          <article key={p.panoid} className="overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              title={p.title}
              loading="lazy"
              className="aspect-[4/3] w-full"
              src={`https://www.google.com/maps/embed?pb=!4v0!6m8!1m7!1s${p.panoid}!2m2!1d0!2d0!3f0!4f0!5f0.8`}
              allowFullScreen
            />
            <div className="p-5">
              <h2 className="text-2xl text-sand">{p.title}</h2>
              <p className="text-sm text-muted-foreground">{p.place}</p>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
