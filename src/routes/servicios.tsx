import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/project-6.jpg";

export const Route = createFileRoute("/servicios")({
  component: Servicios,
  head: () => ({
    meta: [
      { title: "Servicios · Arquitectura, interiorismo y reformas | Estudio Onix" },
      {
        name: "description",
        content:
          "Arquitectura, interiorismo, reformas integrales, dirección de obra y planificación espacial con enfoque contemporáneo.",
      },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
});

const services = [
  {
    t: "Arquitectura e interiorismo",
    d: "Proyectos integrales donde la arquitectura y el interiorismo se piensan como una sola decisión.",
    b: ["Definición de programa", "Layout y volumetría", "Paleta de materiales", "Iluminación y mobiliario"],
  },
  {
    t: "Reformas integrales",
    d: "Transformamos viviendas y espacios de trabajo con un enfoque contemporáneo y funcional.",
    b: ["Demolición y obra nueva", "Instalaciones renovadas", "Terminaciones premium", "Entrega llave en mano"],
  },
  {
    t: "Optimización de espacios",
    d: "Hacemos que cada metro cuadrado trabaje a favor de tu vida cotidiana.",
    b: ["Análisis de circulaciones", "Mobiliario a medida", "Soluciones de guardado", "Flexibilidad de usos"],
  },
  {
    t: "Dirección de obra",
    d: "Acompañamos la ejecución con criterio estético, control de calidad y comunicación clara.",
    b: ["Cronograma y compras", "Coordinación de gremios", "Control de obra", "Cierre y entrega"],
  },
  {
    t: "Planos y documentación técnica",
    d: "Documentación completa para que la obra avance sin sorpresas.",
    b: ["Planos generales y de detalle", "Memoria descriptiva", "Pliegos de terminaciones", "Render conceptual"],
  },
  {
    t: "Asesoramiento funcional y estético",
    d: "Una mirada profesional para tomar decisiones con seguridad antes de invertir.",
    b: ["Visita técnica", "Diagnóstico del espacio", "Recomendaciones de diseño", "Estimación de inversión"],
  },
];

function Servicios() {
  return (
    <>
      <section className="relative h-[70svh] min-h-[480px] w-full overflow-hidden bg-ink">
        <img
          src={heroImg}
          alt="Vivienda contemporánea minimalista al atardecer"
          className="kenburns h-full w-full object-cover opacity-90"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/55" />
        <div className="container-edit absolute inset-x-0 bottom-0 z-10 pb-20 md:pb-28">
          <Reveal>
            <p className="eyebrow text-white/85">Servicios</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif mt-6 max-w-[20ch] text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-tight text-white">
              Una práctica que une <em className="italic font-light">diseño y ejecución</em>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-edit py-24 md:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-clay">— Qué hacemos</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-serif mt-8 text-2xl leading-snug tracking-tight md:text-4xl">
              Pensamos cada proyecto como una <em className="italic text-muted-foreground">conversación</em> entre vos,
              el espacio y nuestra mirada.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-px bg-border md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <article className="group h-full bg-background p-8 transition-colors duration-700 hover:bg-sand md:p-12">
                <p className="eyebrow text-muted-foreground">0{i + 1}</p>
                <h2 className="font-serif mt-6 text-3xl tracking-tight md:text-4xl">{s.t}</h2>
                <p className="mt-5 max-w-md text-muted-foreground">{s.d}</p>
                <ul className="mt-8 space-y-2 text-sm">
                  {s.b.map((b) => (
                    <li key={b} className="flex items-start gap-3 border-t border-border pt-2">
                      <span className="text-clay">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 flex flex-col items-center gap-6 border-t border-border pt-16 text-center">
            <p className="font-serif max-w-2xl text-3xl leading-snug tracking-tight md:text-4xl">
              ¿Tenés un proyecto en mente?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendly.com/estudioonix"
                target="_blank"
                rel="noreferrer"
                className="eyebrow inline-flex items-center gap-3 bg-foreground px-8 py-4 text-background transition-colors hover:bg-clay"
              >
                Agendar asesoría
              </a>
              <Link to="/proyectos" className="eyebrow link-underline">
                Ver proyectos →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
