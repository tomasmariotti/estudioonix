import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/hero.png";
import studioImg from "@/assets/studio.png";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/site/Reveal";
import { BentoCard } from "@/components/site/BentoCard";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Estudio Onix · Arquitectura, interiorismo y reformas integrales" },
      {
        name: "description",
        content:
          "Estudio boutique de arquitectura e interiorismo. Diseñamos y ejecutamos reformas integrales con criterio, calidez y atención al detalle.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const CALENDLY = "https://calendly.com/estudioonix";

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Value />
      <Services />
      <FeaturedProjects />
      <Process />
      <About />
      <Testimonials />
      <LeadMagnet />
      <ContactForm />
    </>
  );
}

/* ---------- HERO ---------- */
const EASE = [0.22, 0.61, 0.36, 1] as const;
const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: EASE },
  },
};

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src={heroImg}
          alt="Arquitectura contemporánea con fachada acanalada y luz natural"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/60" />
        <div className="hero-glow absolute inset-0" />
      </motion.div>

      <motion.div className="relative z-10 flex h-full flex-col" style={{ opacity }}>
        <motion.div
          className="container-edit flex-1 flex flex-col justify-end pb-20 md:pb-28"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={heroItem} className="eyebrow text-white/85">
            Estudio Onix — Arquitectura & Interiorismo
          </motion.p>
          <motion.h1
            variants={heroItem}
            className="font-serif mt-6 max-w-[18ch] text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.025em] text-white"
          >
            Creamos espacios <em className="italic font-light">funcionales</em>, modernos y llenos de identidad.
          </motion.h1>
          <motion.p variants={heroItem} className="mt-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Acompañamos cada proyecto desde la planificación inicial hasta la ejecución final, combinando diseño,
            funcionalidad y atención al detalle para crear espacios pensados para las personas.
          </motion.p>
          <motion.div variants={heroItem} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="eyebrow group inline-flex items-center gap-3 bg-white px-7 py-4 text-ink transition-all duration-500 hover:bg-clay hover:text-white"
            >
              Agendá una asesoría inicial
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <Link
              to="/proyectos"
              className="eyebrow inline-flex items-center gap-3 border border-white/70 px-7 py-4 text-white transition-colors duration-500 hover:bg-white hover:text-ink"
            >
              Ver proyectos
            </Link>
          </motion.div>
        </motion.div>

        <div className="container-edit pb-8">
          <div className="flex items-end justify-between text-white/80">
            <p className="eyebrow hidden md:block">Scroll</p>
            <div className="relative h-12 w-px overflow-hidden bg-white/30">
              <span className="scroll-indicator absolute inset-x-0 top-0 h-1/2 w-full bg-white" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = [
    "Arquitectura",
    "Interiorismo",
    "Reformas integrales",
    "Dirección de obra",
    "Diseño contemporáneo",
    "Planificación espacial",
  ];
  const loop = [...items, ...items];
  return (
    <section className="overflow-hidden border-y border-border bg-sand py-6">
      <div className="marquee-track flex w-max gap-16 whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="font-serif text-2xl italic text-muted-foreground md:text-3xl">
            {t} <span className="not-italic text-clay">✺</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- VALUE (BENTO) ---------- */
function Value() {
  const items = [
    { n: "01", t: "Diseño con criterio", d: "Cada proyecto nace de una idea clara y se traduce en decisiones precisas." },
    { n: "02", t: "Planificación rigurosa", d: "Tiempos, materiales y dirección integral bajo una misma visión." },
    { n: "03", t: "Ejecución profesional", d: "Acompañamos la obra de principio a fin con criterio estético y técnico." },
    { n: "04", t: "Atención cercana", d: "Una experiencia tranquila, ordenada y orientada al detalle." },
  ];
  return (
    <section className="container-edit py-24 md:py-40">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow text-clay">— Propuesta de valor</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-serif mt-8 text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Diseño minimalista, <em className="italic text-muted-foreground">ejecución profesional</em>.
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-md text-muted-foreground">
              Transformamos espacios con diseño, funcionalidad y confianza. Cada proyecto se piensa con criterio y se
              entrega con atención al detalle.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal key={it.n} delay={i * 100}>
                <BentoCard className="h-full p-8 md:p-10">
                  <p className="eyebrow text-clay">{it.n}</p>
                  <h3 className="font-serif mt-6 text-2xl md:text-3xl">{it.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                </BentoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const list = [
    "Arquitectura e interiorismo",
    "Reformas integrales",
    "Optimización de espacios",
    "Dirección de obra",
    "Diseño contemporáneo",
    "Planos y documentación técnica",
  ];
  return (
    <section className="border-t border-border bg-sand/40">
      <div className="container-edit py-24 md:py-40">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow text-clay">— Servicios</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif mt-6 max-w-[14ch] text-4xl leading-[1.02] tracking-tight md:text-7xl">
                Una práctica integral.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link to="/servicios" className="eyebrow link-underline">
              Conocer todos los servicios →
            </Link>
          </Reveal>
        </div>

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {list.map((s, i) => (
            <Reveal key={s} delay={i * 60}>
              <li className="group grid grid-cols-12 items-center gap-4 py-7 transition-colors hover:bg-background/60 md:py-9">
                <span className="eyebrow col-span-2 text-muted-foreground md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif col-span-10 text-2xl tracking-tight md:col-span-9 md:text-4xl">
                  {s}
                </span>
                <span className="col-span-12 hidden text-right text-muted-foreground transition-transform duration-500 group-hover:-translate-x-1 group-hover:text-foreground md:col-span-2 md:block">
                  →
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- FEATURED PROJECTS ---------- */
function FeaturedProjects() {
  const featured = projects.slice(0, 5);
  return (
    <section className="container-edit py-24 md:py-40">
      <div className="grid items-end gap-6 md:grid-cols-12">
        <div className="md:col-span-8">
          <Reveal>
            <p className="eyebrow text-clay">— Proyectos destacados</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-serif mt-6 text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Un portfolio pensado <em className="italic text-muted-foreground">como un editorial</em>.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Reveal delay={200}>
            <Link to="/proyectos" className="eyebrow link-underline">
              Ver todos los proyectos →
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-12 md:gap-x-6 md:gap-y-16">
        {featured.map((p, i) => {
          const positions = [
            "md:col-span-7",
            "md:col-span-5 md:mt-32",
            "md:col-span-5",
            "md:col-span-7 md:-mt-16",
            "md:col-span-12",
          ];
          return (
            <Reveal key={p.slug} className={positions[i] ?? "md:col-span-6"} delay={i * 80}>
              <article className="group">
                <div className="relative overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.category}`}
                    loading="lazy"
                    className={`w-full ${
                      i === 4 ? "aspect-[21/9]" : p.ratio === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]"
                    } object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]`}
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-2xl tracking-tight md:text-3xl">{p.title}</h3>
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

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    { t: "Primer contacto", d: "Conversamos sobre tu espacio, tus rutinas y lo que querés transformar." },
    { t: "Relevamiento", d: "Medimos, fotografiamos y analizamos el potencial real del lugar." },
    { t: "Propuesta de diseño", d: "Presentamos una visión clara: layout, materiales y atmósfera." },
    { t: "Planificación", d: "Documentación técnica, cronograma y selección final de terminaciones." },
    { t: "Ejecución", d: "Dirección de obra integral con seguimiento constante y criterio estético." },
    { t: "Entrega final", d: "Una entrega impecable, lista para ser habitada." },
  ];
  return (
    <section className="border-t border-border bg-ink text-background">
      <div className="container-edit py-24 md:py-40">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow text-background/60">— Proceso</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif mt-8 text-4xl leading-[1.02] tracking-tight md:text-6xl">
                Un método claro, <em className="italic text-background/70">de principio a fin</em>.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-background/70">
                Cada etapa está pensada para que el proyecto avance con orden, transparencia y tranquilidad.
              </p>
            </Reveal>
          </div>

          <ol className="md:col-span-8">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <li className="group grid grid-cols-12 items-start gap-6 border-t border-background/15 py-8 md:py-10">
                  <span className="font-serif col-span-2 text-2xl text-background/50 md:text-3xl">
                    0{i + 1}
                  </span>
                  <div className="col-span-10">
                    <h3 className="font-serif text-2xl tracking-tight md:text-4xl">{s.t}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-background/70">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section className="container-edit py-24 md:py-40">
      <div className="grid items-center gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <div className="overflow-hidden">
            <img
              src={studioImg}
              alt="Equipo de Estudio Onix revisando muestras de materiales y planos sobre una mesa de roble"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow text-clay">— Nosotros</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-serif mt-6 text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Un estudio que piensa el espacio <em className="italic text-muted-foreground">como una experiencia</em>.
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 text-muted-foreground">
              Estudio Onix es un estudio especializado en arquitectura, diseño y reformas integrales orientado a crear
              espacios modernos, funcionales y visualmente equilibrados.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-10">
              <Stat n="+80" l="Proyectos" />
              <Stat n="12" l="Años" />
              <Stat n="100%" l="Atención personal" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-serif text-4xl tracking-tight md:text-5xl">{n}</p>
      <p className="eyebrow mt-2 text-muted-foreground">{l}</p>
    </div>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const quotes = [
    {
      q: "Sentí que el proyecto estaba en manos de profesionales desde el primer día. Claridad, orden y un resultado mejor de lo que imaginaba.",
      a: "Lucía M.",
      r: "Reforma integral",
    },
    {
      q: "Lo que más valoro es la capacidad de escuchar y traducir lo que necesitábamos en un diseño con identidad propia.",
      a: "Tomás R.",
      r: "Vivienda",
    },
    {
      q: "La obra fluyó. El acompañamiento del equipo hizo que un proceso tan complejo se sintiera tranquilo.",
      a: "Inés P.",
      r: "Cocina y baño",
    },
  ];
  return (
    <section className="border-t border-border bg-sand/40">
      <div className="container-edit py-24 md:py-40">
        <Reveal>
          <p className="eyebrow text-clay">— Testimonios</p>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {quotes.map((t, i) => (
            <Reveal key={t.a} delay={i * 120}>
              <figure className="flex h-full flex-col justify-between border-t border-border pt-8">
                <blockquote className="font-serif text-2xl leading-snug tracking-tight md:text-3xl">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-10">
                  <p className="text-sm">{t.a}</p>
                  <p className="eyebrow mt-1 text-muted-foreground">{t.r}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INSTAGRAM ---------- */
function Instagram() {
  const imgs = projects.slice(0, 6).map((p) => p.image);
  return (
    <section className="container-edit py-24 md:py-40">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="eyebrow text-clay">— Instagram</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif mt-6 text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Detalles, materiales y procesos.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <a
            href="https://instagram.com/estudioonix"
            target="_blank"
            rel="noreferrer"
            className="eyebrow link-underline"
          >
            Ver más en @estudioonix →
          </a>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-3">
        {imgs.map((src, i) => (
          <Reveal key={i} delay={i * 60}>
            <a
              href="https://instagram.com/estudioonix"
              target="_blank"
              rel="noreferrer"
              className="block aspect-square overflow-hidden bg-secondary"
            >
              <img
                src={src}
                alt="Detalle de proyecto Estudio Onix"
                loading="lazy"
                className="h-full w-full object-cover grayscale-[15%] transition-all duration-[1200ms] hover:scale-105 hover:grayscale-0"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- LEAD MAGNET ---------- */
function LeadMagnet() {
  return (
    <section className="border-y border-border bg-ink text-background">
      <div className="container-edit grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow text-background/60">— Asesoría inicial</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-serif mt-6 text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Descubrí el potencial real de tu espacio <em className="italic text-background/75">antes</em> de comenzar una reforma.
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-col justify-end md:col-span-5">
          <Reveal delay={200}>
            <p className="max-w-md text-background/75">
              Agendá una asesoría inicial y obtené una orientación profesional para transformar tu espacio de manera
              moderna, funcional y visualmente equilibrada.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="eyebrow mt-10 inline-flex w-fit items-center gap-3 bg-background px-8 py-4 text-ink transition-all hover:bg-clay hover:text-white"
            >
              Reservá una llamada
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT FORM ---------- */
function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate capture + redirect to Calendly
    setTimeout(() => {
      window.open(CALENDLY, "_blank", "noopener,noreferrer");
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="formulario" className="container-edit py-24 md:py-40">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow text-clay">— Conversemos</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-serif mt-6 text-4xl leading-[1.02] tracking-tight md:text-5xl">
              Contanos sobre tu proyecto.
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Este formulario nos permite entender el alcance y reservar una llamada estratégica con vos. Respondemos
              dentro de las 24h hábiles.
            </p>
          </Reveal>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-8" noValidate>
          <div className="grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2">
            <Field label="Nombre y apellido" name="nombre" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Teléfono" name="telefono" type="tel" />
            <Field
              label="Tipo de proyecto"
              name="tipo"
              as="select"
              options={[
                "Vivienda",
                "Cocina o baño",
                "Oficina",
                "Local comercial",
                "Reforma integral",
                "Otro",
              ]}
            />
            <Field label="Ubicación" name="ubicacion" />
            <Field label="Metros aproximados" name="metros" />
            <Field
              label="Objetivo principal"
              name="objetivo"
              as="select"
              options={[
                "Optimizar el espacio",
                "Renovar terminaciones",
                "Reforma integral",
                "Construcción / ampliación",
                "Asesoramiento de diseño",
              ]}
            />
            <Field
              label="Presupuesto estimado"
              name="presupuesto"
              as="select"
              options={[
                "Hasta USD 15.000",
                "USD 15.000 – 40.000",
                "USD 40.000 – 90.000",
                "USD 90.000 +",
                "Prefiero conversarlo",
              ]}
            />
            <Field label="Fecha aproximada de inicio" name="inicio" type="month" />
            <Field label="Referencias o inspiración" name="referencias" />
          </div>

          <div className="mt-6">
            <label className="block">
              <span className="eyebrow text-muted-foreground">Comentarios</span>
              <textarea
                name="comentarios"
                rows={3}
                className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
              />
            </label>
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-muted-foreground">
              Al enviar, serás redirigido a nuestra agenda para reservar tu llamada estratégica.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="eyebrow inline-flex items-center gap-3 bg-foreground px-8 py-4 text-background transition-all hover:bg-clay disabled:opacity-60"
            >
              {submitting ? "Enviando..." : "Enviar y reservar llamada"}
              <span aria-hidden>→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  as,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "select";
  options?: string[];
}) {
  return (
    <label className="block py-4">
      <span className="eyebrow text-muted-foreground">
        {label} {required && <span className="text-clay">*</span>}
      </span>
      {as === "select" ? (
        <select
          name={name}
          required={required}
          defaultValue=""
          className="mt-3 w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
        >
          <option value="" disabled>
            Seleccionar
          </option>
          {options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          maxLength={200}
          className="mt-3 w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
        />
      )}
    </label>
  );
}
