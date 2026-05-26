import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/proyectos")({
  component: Proyectos,
  head: () => ({
    meta: [
      { title: "Proyectos · Portfolio de arquitectura e interiorismo | Estudio Onix" },
      {
        name: "description",
        content:
          "Portfolio de proyectos de arquitectura, interiorismo y reformas integrales realizados por Estudio Onix.",
      },
    ],
    links: [{ rel: "canonical", href: "/proyectos" }],
  }),
});

const categories = [
  "Todos",
  "Viviendas",
  "Cocinas y baños",
  "Oficinas",
  "Locales comerciales",
  "Reformas integrales",
] as const;

function Proyectos() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todos");

  const filtered = useMemo<Project[]>(
    () => (filter === "Todos" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section className="pt-32 md:pt-40">
      <div className="container-edit">
        <Reveal>
          <p className="eyebrow text-clay">— Proyectos</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-serif mt-6 max-w-[16ch] text-[clamp(2.75rem,7vw,6rem)] leading-[1] tracking-tight">
            Un archivo de <em className="italic">espacios</em>.
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 max-w-xl text-muted-foreground">
            Una selección de viviendas, locales y reformas integrales donde el diseño contemporáneo se cruza con la
            vida cotidiana.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-x-2 gap-y-2 border-y border-border py-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`eyebrow rounded-full border px-4 py-2 transition-colors ${
                filter === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="container-edit grid gap-x-6 gap-y-16 py-20 md:grid-cols-12 md:gap-y-28 md:py-28">
        {filtered.map((p, i) => {
          const span = i % 3 === 0 ? "md:col-span-7" : i % 3 === 1 ? "md:col-span-5 md:mt-24" : "md:col-span-6";
          return (
            <Reveal key={p.slug} className={span} delay={(i % 3) * 80}>
              <article className="group">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.category}`}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] ${
                      p.ratio === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]"
                    }`}
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-6">
                  <div>
                    <h2 className="font-serif text-2xl tracking-tight md:text-3xl">{p.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.category}
                    </p>
                  </div>
                  <p className="eyebrow text-muted-foreground">{p.year}</p>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
