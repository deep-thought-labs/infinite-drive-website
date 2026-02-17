/**
 * Contenido página Home — español.
 */

import type { LocaleHome } from "../../types";

export const home: LocaleHome = {
  hero: {
    title: "INFINITE DRIVE",
    subtitle: "El motor de la libertad digital",
    imageKey: "dontpanic",
  },
  quote: {
    text: "El espacio es grande. Muy grande. No te vas a creer lo inmensa, descomunal y alucinantemente grande que es.",
    author: "Douglas Adams",
  },
  ecosystemIntro:
    "Un ecosistema digital completo — una nueva clase de internet construida desde cero.",
  features: [
    {
      title: "FUNDAMENTO SEGURO",
      description: "Una blockchain que recompensa a quienes construyen y protege la red",
    },
    {
      title: "RED P2P GLOBAL",
      description: "BabelFish Network — millones de dispositivos formando una malla planetaria",
    },
    {
      title: "SERVICIOS SOBERANOS",
      description: "DNS, hosting, email, almacenamiento — todo descentralizado y controlado por el usuario",
    },
    {
      title: "TU UNIVERSO",
      description: "Construye sitios web, metaversos, juegos — todo es tuyo",
    },
  ],
  ctas: [
    { label: "Explorar Project 42 →", href: "/project42", internal: true },
    { label: "Explorar la red BabelFish", href: "/services", internal: true },
    { label: "Descubrir la Fundación", href: "/blockchain", internal: true },
  ],
  joinSection: {
    title: "Únete al movimiento",
    description:
      "Sigue nuestro desarrollo, conecta con la comunidad y forma parte de la construcción de un futuro digital soberano.",
    ctaLabel: "Unirse a la comunidad en Telegram →",
  },
  openSourceNote:
    "100% código abierto. Cada protocolo. Cada servicio. Cada línea de código — construido en abierto, propiedad de la humanidad.",
  closingBlock: {
    title: "Esta es infraestructura para todos.",
    subtitle:
      "De individuos a empresas — democratizando herramientas que antes controlaba el kraken.",
  },
};
