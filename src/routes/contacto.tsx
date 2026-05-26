import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contacto")({
  component: Contacto,
  head: () => ({
    meta: [
      { title: "Contacto · Estudio Onix" },
      {
        name: "description",
        content:
          "Escribinos o agendá una llamada con Estudio Onix. Lunes a viernes 9:00–18:00.",
      },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
});

function Contacto() {
  return (
    <section className="pt-32 md:pt-40">
      <div className="container-edit pb-24 md:pb-40">
        <Reveal>
          <p className="eyebrow text-clay">— Contacto</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-serif mt-6 max-w-[18ch] text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-tight">
            Empecemos a <em className="italic">conversar</em>.
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 border-t border-border pt-16 md:grid-cols-12">
          <div className="md:col-span-5 space-y-12">
            <Reveal>
              <div>
                <p className="eyebrow text-muted-foreground">Agenda</p>
                <p className="font-serif mt-4 text-2xl leading-snug">
                  Reservá una llamada estratégica directamente en nuestra agenda.
                </p>
                <a
                  href="https://calendly.com/estudioonix"
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow mt-6 inline-flex items-center gap-3 bg-foreground px-7 py-4 text-background transition-colors hover:bg-clay"
                >
                  Abrir calendario →
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="eyebrow text-muted-foreground">Modalidad</p>
                <ul className="mt-4 space-y-2 text-base">
                  <li>Atención presencial y remota</li>
                  <li>Coordinamos visitas a obra</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div>
                <p className="eyebrow text-muted-foreground">Contacto directo</p>
                <ul className="mt-4 space-y-2 text-base">
                  <li>
                    <a href="mailto:martin@estudionix.com" className="link-underline">
                      martin@estudionix.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+5491169246040" className="link-underline">
                      +54 9 11 6924-6040
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/estudioonix"
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline"
                    >
                      @estudioonix
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div>
                <p className="eyebrow text-muted-foreground">Horario</p>
                <ul className="mt-4 space-y-2 text-base">
                  <li>Lunes a viernes — 9:00 a 18:00</li>
                  <li>Sábados — 9:00 a 13:00</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal>
              <div className="border border-border bg-sand/40 p-8 md:p-14">
                <p className="font-serif text-3xl leading-snug tracking-tight md:text-4xl">
                  Para conocernos mejor, completá el{" "}
                  <a href="/#formulario" className="italic link-underline">
                    formulario inicial
                  </a>{" "}
                  y reservá una llamada con nuestro equipo.
                </p>
                <p className="mt-8 text-sm text-muted-foreground">
                  Respondemos cada consulta dentro de las 24h hábiles. Recibirás una propuesta de fecha y un breve
                  resumen previo a la conversación.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
