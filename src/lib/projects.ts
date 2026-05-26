import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.png";
import p4 from "@/assets/project-4.png";
import p5 from "@/assets/project-5.png";
import p6 from "@/assets/project-6.png";

export type Project = {
  slug: string;
  title: string;
  category: "Viviendas" | "Cocinas y baños" | "Oficinas" | "Locales comerciales" | "Reformas integrales";
  location: string;
  year: number;
  description: string;
  image: string;
  ratio: "portrait" | "landscape" | "square";
};

export const projects: Project[] = [
  {
    slug: "atrio-luz",
    title: "Atrio de Luz",
    category: "Viviendas",
    location: "",
    year: 2024,
    description:
      "Una espiral de hormigón visto y skylights cenitales. La luz natural recorre la doble altura como un material más.",
    image: p1,
    ratio: "square",
  },
  {
    slug: "reforma-clasica",
    title: "Reforma Clásica",
    category: "Reformas integrales",
    location: "",
    year: 2024,
    description:
      "Puesta en valor de una fachada histórica con intervenciones contemporáneas precisas y andamiaje técnico controlado.",
    image: p2,
    ratio: "portrait",
  },
  {
    slug: "local-vegetal",
    title: "Local Vegetal",
    category: "Locales comerciales",
    location: "",
    year: 2023,
    description:
      "Fachada minimalista con cerramiento de vidrio esmerilado y muro vegetal natural. Una pausa visual en la ciudad.",
    image: p3,
    ratio: "portrait",
  },
  {
    slug: "marmol-arabescato",
    title: "Mármol Arabescato",
    category: "Reformas integrales",
    location: "",
    year: 2024,
    description:
      "Reforma en proceso: panel monolítico de mármol arabescato, divisiones de hierro y planificación rigurosa de obra.",
    image: p4,
    ratio: "portrait",
  },
  {
    slug: "bano-nicho",
    title: "Baño Nicho",
    category: "Cocinas y baños",
    location: "",
    year: 2024,
    description:
      "Microcemento cálido, nichos retroiluminados y grifería en bronce mate. Un ritual diario elevado al detalle.",
    image: p5,
    ratio: "portrait",
  },
  {
    slug: "ducha-canelada",
    title: "Ducha Canelada",
    category: "Cocinas y baños",
    location: "",
    year: 2024,
    description:
      "Pared canelada retroiluminada, mampara estriada y grifería negra. Textura, sombra y serenidad en un mismo gesto.",
    image: p6,
    ratio: "portrait",
  },
];
