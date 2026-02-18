/**
 * Contenido página Project 42 — español.
 */

import type { LocaleProject42 } from "../../types";

export const project42: LocaleProject42 = {
  header: {
    title: "Project 42",
    subtitle: [
      { type: "bold", content: "La respuesta a la soberanía digital" },
      { type: "text", content: " — un ciberespacio donde la libertad es código, la privacidad es por defecto y la red pertenece a todos." },
    ],
  },
  heroQuote: {
    text: "Gobiernos del Mundo Industrial, gigantes cansados de carne y acero, vengo del Ciberespacio, el nuevo hogar de la Mente. En nombre del futuro, os pido del pasado que nos dejéis en paz. No sois bienvenidos entre nosotros. No tenéis soberanía donde nos reunimos.",
    author: "John Perry Barlow",
    source: "Una Declaración de Independencia del Ciberespacio (1996)",
  },
  newWorld: {
    title: "Estamos construyendo un mundo nuevo",
    imageKey: "newWorld",
    tightParagraphIndices: [2, 3, 4, 5],
    paragraphs: [
      "No lanzamos un producto.",
      "Fundamos una nación.",
      [
        { type: "bold", content: "Una nación del ciberespacio" },
        { type: "text", content: " — abierta a todos, propiedad de nadie, gobernada por código." },
      ],
      [
        { type: "bold", content: "Donde tus datos son tuyos." },
      ],
      [
        { type: "bold", content: "Donde tu voz no puede ser silenciada." },
      ],
      [
        { type: "bold", content: "Donde tu mundo lo construyes tú" },
        { type: "text", content: " — no alquilado a una corporación." },
      ],
      "Esto es Project 42 — la respuesta a la vida, el universo y la libertad digital.",
    ],
  },
  philosophy: {
    title: "Nuestra filosofía: nación cypherpunk",
    intro: "Nos apoyamos en cinco pilares de verdad:",
    tableHeaderVoice: "Voz",
    tableHeaderTruth: "Verdad",
    imageKey: "cypherpunk",
    tableRows: [
      { voice: "Timothy C. May", truth: "La privacidad es necesaria para una sociedad abierta." },
      { voice: "Eric Hughes", truth: "Los cypherpunks escriben código." },
      { voice: "John Perry Barlow", truth: "No tenemos gobierno elegido — y no queremos uno." },
      { voice: "Satoshi Nakamoto", truth: "Confía en las matemáticas, no en los hombres." },
      { voice: "Douglas Adams", truth: "No entres en pánico." },
    ],
  },
  ecosystem: {
    title: "El ecosistema",
    intro:
      "Project 42 no es un solo producto — es una nación digital completa con cuatro pilares interconectados:",
    closing:
      "Estos cuatro pilares funcionan juntos como un sistema unificado — cada uno fortalece a los demás, creando una red que se vuelve más poderosa con cada usuario, cada nodo, cada contribución.",
    pillars: [
      {
        number: "01",
        title: "THE INFINITE IMPROBABILITY DRIVE",
        description: "La base blockchain — una capa soberana completa para confianza, gobernanza y coordinación económica.",
        bullets: [
          "Consenso Proof of Contribution — recompensa a quienes construyen y mantienen",
          "Gobernanza DAO desde el bloque uno — decisiones on-chain por la comunidad",
          "Improbability [42] — token de gobernanza para staking, votación y utilidad de red",
          "Liquidez algorítmica — Fish recompensa y equilibra los flujos de valor del ecosistema",
          "Modelo económico de 42 años — pensado para generaciones, no trimestres",
        ],
      },
      {
        number: "02",
        title: "BABELFISH NETWORK",
        description:
          "Una malla P2P global — millones de dispositivos formando una red planetaria que evita censura y fallos.",
        bullets: [
          "Topología de malla auto-organizada",
          "Comunicación dispositivo-a-blockchain",
          "Cifrado por defecto, imparable por diseño",
        ],
      },
      {
        number: "03",
        title: "SERVICIOS DE INTERNET SOBERANOS",
        description: "DNS, hosting, email, almacenamiento, computación — infraestructura de nivel empresarial, totalmente descentralizada.",
        bullets: ["Dominios .id42 — tuyos para siempre", "Comunicación cifrada de extremo a extremo", "CDN global y edge computing"],
      },
      {
        number: "04",
        title: "UNIVERSOS CREADOS POR USUARIOS",
        description: "Construye sitios web, apps, metaversos, juegos — tus creaciones, tus reglas, tu propiedad.",
        bullets: ["Despliega globalmente en segundos", "Propiedad real de activos digitales", "Interoperable en todo el ecosistema"],
      },
    ],
  },
  library: {
    title: "La Biblioteca de Alejandría — reconstruida para el ciberespacio",
    quote:
      "La historia hasta ahora: Al principio se creó el Universo. Esto ha enfadado a mucha gente y ha sido considerado ampliamente como una mala jugada.",
    quoteAuthor: "Douglas Adams, El Restaurante del Fin del Mundo",
    paragraphs: [
      "Una vez, la humanidad construyó la Biblioteca de Alejandría — un templo del conocimiento que guardaba la sabiduría del mundo.",
      "Ardió. El conocimiento se perdió. Los imperios cayeron.",
      "Project 42 es la Biblioteca de Alejandría reconstruida en código — pero esta vez no puede arder.",
    ],
    notInventingTitle: "NO ESTAMOS INVENTANDO LA RUEDA",
    notInventingParagraphs: [
      "Nos apoyamos en hombros de gigantes — construyendo un ecosistema abierto e interconectado donde protocolos, servicios y comunidades colaboran hacia un bien común.",
      "No comercializamos el trabajo ajeno. Integramos, honramos y extendemos tecnologías open-source probadas en una red unificada y resiliente.",
      "Cada línea de código es open source. Cada protocolo es público. Cada innovación pertenece a la humanidad.",
    ],
    protocolsTitle: "CONSTRUIDO SOBRE PROTOCOLOS ABIERTOS Y TECNOLOGÍAS ALINEADAS",
    protocolsIntro:
      "Integramos protocolos y tecnologías open-source probados que comparten nuestra visión de soberanía digital:",
    protocols: [
      { name: "Bitcoin", description: "El primer dinero descentralizado — prueba de que el código puede ser ley" },
      { name: "Nostr", description: "Protocolo de comunicación social resistente a la censura" },
      { name: "EVM", description: "Contratos inteligentes y confianza programable" },
      { name: "Cosmos SDK", description: "Arquitectura blockchain interoperable" },
      { name: "IPFS", description: "Sistemas de archivos distribuidos y direccionamiento de contenido" },
      { name: "Tor", description: "Enrutamiento anónimo e infraestructura de privacidad" },
      { name: "Pears (Holepunch)", description: "Framework P2P para aplicaciones imparables" },
      { name: "QVAC SDK (Tether)", description: "Herramientas abiertas para activos digitales, stablecoins e integración con IA" },
      { name: "xAI", description: "Modelos de IA alineados con el florecimiento humano" },
    ],
    survivalParagraphs: [
      "Construimos una red descentralizada, colaborativa e indestructible — no por lucro, sino por supervivencia.",
      "Los modelos económicos que diseñamos no son para enriquecimiento personal. Son mecanismos necesarios para la operabilidad de la red, la seguridad de la cadena y la distribución justa de incentivos a todos los participantes. Como la propia Guía del Autoestopista — \"Un libro totalmente extraordinario. Quizá el más extraordinario, ciertamente el libro de más éxito que haya salido de las grandes corporaciones editoriales de Ursa Minor.\"",
    ],
  },
  thursdayNote: {
    quote: "Debe de ser jueves. Nunca pude pillarle el truco a los jueves.",
    quoteAuthor: "Arthur Dent, La Guía del Autoestopista Galáctico",
    paragraphs: [
      "Los jueves siempre han sido días extraños en la galaxia. Pero quizá sea porque son días en que lo imposible se vuelve probable. Cuando se construyen desvíos del hiperespacio. Cuando se fundan naciones digitales. Cuando 42 por fin tiene sentido.",
      "Si estás leyendo esto un jueves, puede que estés en el lugar y el momento adecuados.",
    ],
  },
  taglines: ["Project 42", "Una nación cypherpunk", "Impulsado por Infinite Drive", "Para todos. Para siempre."],
};
