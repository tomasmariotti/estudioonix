import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-edit grid gap-16 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow text-muted-foreground">Estudio Onix</p>
          <h3 className="font-serif mt-6 text-4xl leading-[1.05] tracking-tight md:text-5xl">
            Diseñamos espacios para ser <em className="italic text-muted-foreground">vividos</em>.
          </h3>
          <a
            href="https://calendly.com/estudioonix"
            target="_blank"
            rel="noreferrer"
            className="eyebrow mt-10 inline-flex border border-foreground px-6 py-3 transition-colors hover:bg-foreground hover:text-background"
          >
            Reservá una llamada
          </a>
        </div>

        <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
          <div>
            <p className="eyebrow text-muted-foreground">Navegar</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><Link to="/" className="link-underline">Inicio</Link></li>
              <li><Link to="/servicios" className="link-underline">Servicios</Link></li>
              <li><Link to="/proyectos" className="link-underline">Proyectos</Link></li>
              <li><Link to="/contacto" className="link-underline">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Estudio</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>Lun–Vie 9:00–18:00</li>
              <li>Sáb 9:00–13:00</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Contacto</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><a className="link-underline" href="mailto:martin@estudionix.com">martin@estudionix.com</a></li>
              <li><a className="link-underline" href="tel:+5491169246040">+54 9 11 6924-6040</a></li>
              <li><a className="link-underline" href="https://instagram.com/estudioonix" target="_blank" rel="noreferrer">@estudioonix</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-edit flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Estudio Onix — Todos los derechos reservados.</p>
          <p className="eyebrow">Arquitectura · Interiorismo · Reformas integrales</p>
        </div>
      </div>
    </footer>
  );
}
