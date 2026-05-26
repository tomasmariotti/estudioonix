import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/contacto", label: "Contacto" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-edit flex h-20 items-center justify-between md:h-24">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logo}
            alt="Estudio Onix"
            width={200}
            height={80}
            className={`h-14 w-auto transition-all duration-700 md:h-16 ${
              scrolled ? "" : "invert brightness-200 contrast-100"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: scrolled ? "text-foreground" : "text-white" }}
              inactiveProps={{ className: scrolled ? "text-muted-foreground" : "text-white/80" }}
              className="eyebrow link-underline transition-colors duration-500"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://calendly.com/estudioonix"
          target="_blank"
          rel="noreferrer"
          className={`eyebrow hidden border px-5 py-2.5 transition-all duration-500 md:inline-flex ${
            scrolled
              ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
              : "border-white/80 text-white hover:bg-white hover:text-ink"
          }`}
        >
          Agendar
        </a>

        <button
          aria-label="Menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          <div className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
            <span className={`block h-px w-6 ${scrolled ? "bg-foreground" : "bg-white"} transition-transform duration-500 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 ${scrolled ? "bg-foreground" : "bg-white"} transition-transform duration-500 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-border bg-background transition-[max-height] duration-700 ease-out ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="container-edit flex flex-col gap-1 py-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-serif border-b border-border py-5 text-3xl tracking-tight"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/estudioonix"
            target="_blank"
            rel="noreferrer"
            className="eyebrow mt-8 inline-flex items-center justify-center border border-foreground px-6 py-4"
          >
            Agendar asesoría
          </a>
        </div>
      </div>
    </header>
  );
}
