import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Youtube } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { social } from "@/data/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · leopolvo" },
      { name: "description", content: "Mándanos tu opinión o síguenos en YouTube e Instagram." },
      { property: "og:title", content: "Contacto · leopolvo" },
      { property: "og:description", content: "Mándanos tu opinión o síguenos en YouTube e Instagram." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Contacto" title="Mándanos tu opinión" intro="¡Gracias por pasarte! Puedes seguirnos y escribirnos en nuestras redes." />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-24 sm:grid-cols-2">
        <a href={social.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary">
          <Youtube className="h-8 w-8 text-primary" />
          <div><h2 className="text-xl text-sand">YouTube</h2><p className="text-sm text-muted-foreground">Nuestro canal de vídeos</p></div>
        </a>
        <a href={social.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary">
          <Instagram className="h-8 w-8 text-primary" />
          <div><h2 className="text-xl text-sand">Instagram</h2><p className="text-sm text-muted-foreground">@leopolvo2</p></div>
        </a>
      </section>
    </SiteLayout>
  );
}
