/**
 * Contenido página Blockchain — español.
 */

import type { LocaleBlockchain } from "../../types";

export const blockchain: LocaleBlockchain = {
  header: {
    title: "Infinite Improbability Drive",
    subtitle: [
      { type: "text", content: "La base blockchain que impulsa Project 42 — donde " },
      { type: "bold", content: "la confianza se encuentra con la Bistromática" },
      { type: "text", content: "." },
    ],
  },
  intro: {
    quote: "Confía en las matemáticas, no en los hombres.",
    quoteAuthor: "Satoshi Nakamoto",
    paragraphs: [
      [
        { type: "text", content: "El " },
        { type: "bold", content: "Infinite Improbability Drive" },
        { type: "text", content: " es el corazón de seguridad y economía de Project 42 — un protocolo soberano que impulsa la gobernanza y asegura todo el ecosistema." },
      ],
      "Llamada así por el motor revolucionario de Douglas Adams en La Guía del Autoestopista Galáctico, nuestra blockchain hace lo improbable posible — una nación digital verdaderamente soberana.",
    ],
  },
  coreComponents: {
    title: "Componentes principales",
    token42: {
      title: "IMPROBABILITY [42] — TOKEN DE GOBERNANZA Y UTILIDAD",
      summary: [
        { type: "text", content: "El " },
        { type: "bold", content: "token de gobernanza y utilidad" },
        { type: "text", content: " que mantiene viva la blockchain — usado para staking, votación y asegurar la red." },
      ],
      purpose: "Propósito",
      purposeValue: "Gobernanza, staking, seguridad de red y tasas del protocolo",
      totalSupply: "Suministro total",
      totalSupplyValue: "100 millones de tazas de Improbability [42]",
      releaseSchedule: "Calendario de liberación",
      releaseScheduleValue: [
        { type: "text", content: "Bloqueado en genesis, liberado gradualmente durante " },
        { type: "bold", content: "42 años" },
      ],
      atLaunch: "Al lanzamiento",
      atLaunchValue: [
        { type: "text", content: "Solo " },
        { type: "bold", content: "100 tazas" },
        { type: "text", content: " en circulación — ganadas por los primeros guardianes" },
      ],
      keyUse: [
        { type: "bold", content: "Uso clave: " },
        { type: "text", content: "Haz staking de Improbability [42] para participar en el consenso, votar propuestas y ganar recompensas del protocolo." },
      ],
    },
    fish: {
      title: "FISH — TOKEN DE CONTRIBUCIÓN A LA RED Y LIQUIDEZ",
      summary: [
        { type: "text", content: "El " },
        { type: "bold", content: "token de recompensa" },
        { type: "text", content: " ganado al contribuir a la red — una corriente viva de valor nacida de la actividad de la red." },
      ],
      howToEarn: [
        { type: "bold", content: "Cómo ganar Fish: " },
        { type: "text", content: "Comparte almacenamiento, aporta potencia de cómputo, aloja servicios, ejecuta nodos BabelFish o contribuye ancho de banda a la red P2P." },
      ],
      bullets: [
        "Se gana mediante contribuciones a la red (almacenamiento, cómputo, ancho de banda)",
        "Proporciona liquidez entre [42], Bitcoin y stablecoins",
        "Estabiliza la economía del ecosistema",
        "Creado algorítmicamente según el uso de la red",
        "Se puede intercambiar por [42] u otros activos",
      ],
      seeHow: "Descubre cómo funciona Fish → infinitedrive.xyz/fish",
    },
    governance: {
      title: "GOBERNANZA — EL PODER PARA LA GENTE",
      summary: [
        { type: "text", content: "Project 42 es un " },
        { type: "bold", content: "DAO desde el primer día" },
        { type: "text", content: " — gobernado por código, administrado por contribuidores." },
      ],
      points: [
        [{ type: "bold", content: "Sin fundadores. Sin inversores. Sin jefes." }],
        [
          { type: "bold", content: "Deep Thought Labs" },
          { type: "text", content: " → un santuario de investigación, financiado por el DAO, al servicio de la misión" },
        ],
        [
          { type: "bold", content: "Horizonte de 42 años" },
          { type: "text", content: " → construimos para generaciones, no para trimestres" },
        ],
        [
          { type: "bold", content: "Decisiones on-chain" },
          { type: "text", content: " → transparentes, inmutables y justas" },
        ],
      ],
      quote: "No tenemos gobierno elegido — y no queremos uno.",
      quoteAuthor: "John Perry Barlow",
    },
  },
  masterPools: {
    title: "Master Pools: distribución de tokens",
    paragraphs: [
      [
        { type: "text", content: "Los 100 millones de " },
        { type: "bold", content: "tazas de Improbability [42]" },
        { type: "text", content: " están " },
        { type: "bold", content: "bloqueados en genesis" },
        { type: "text", content: " y se liberan gradualmente durante " },
        { type: "bold", content: "42 años" },
        { type: "text", content: ", controlados por el DAO desde el bloque 1." },
      ],
      [
        { type: "text", content: "Al lanzamiento, " },
        { type: "bold", content: "prácticamente 0% de tokens líquidos" },
        { type: "text", content: " circulan en el mercado. Los nuevos tokens se generan exclusivamente mediante la " },
        { type: "bold", content: "inflación de la cadena" },
        { type: "text", content: ", otorgados directamente por el protocolo a los " },
        { type: "bold", content: "validadores" },
        { type: "text", content: " como recompensa por asegurar la red." },
      ],
      [
        { type: "text", content: "Los validadores son los primeros en " },
        { type: "bold", content: "recibir tokens" },
        { type: "text", content: " e introducirlos en el mercado. Además, estos pools se refinancian continuamente con la " },
        { type: "bold", content: "recaudación de tasas de transacción" },
        { type: "text", content: ", garantizando una sostenibilidad perpetua." },
      ],
    ],
    noteTitle: "Nota sobre liquidez:",
    note: [
      { type: "text", content: "Aunque casi todos los tokens permanecen bloqueados, el " },
      { type: "accent", content: "pool Fish Bootstrap" },
      { type: "text", content: " se despliega estratégicamente para poblar los pools de liquidez en los mercados. Esta distribución se gestiona algorítmicamente mediante el " },
      { type: "accent", content: "protocolo Fish" },
      { type: "text", content: " — un mecanismo inteligente que equilibra la liquidez del mercado con la sostenibilidad a largo plazo. Los detalles sobre el comportamiento algorítmico y la tokenómica de Fish se recogen en su documentación de protocolo." },
    ],
    tableColumns: { pool: "Pool", percent: "%", purpose: "Propósito", annualUnlock: "Desbloqueo anual" },
    rows: [
      { pool: "A. Delegación estratégica", percent: "40%", purpose: "Nunca gastado — solo delegado", annualUnlock: "1,33M" },
      { pool: "B. Recompensas de seguridad", percent: "25%", purpose: "Recompensas a validadores y stakers", annualUnlock: "0,83M" },
      { pool: "C. I+D perpetuo (Lab)", percent: "15%", purpose: "Financiación institucional", annualUnlock: "0,50M" },
      { pool: "D. Fish Bootstrap", percent: "10%", purpose: "Pools de liquidez semilla", annualUnlock: "0,33M" },
      { pool: "E. Privacidad y resistencia", percent: "7%", purpose: "I+D ZK y anti-censura", annualUnlock: "0,23M" },
      { pool: "F. Crecimiento comunitario", percent: "3%", purpose: "Becas, educación, integraciones", annualUnlock: "0,10M" },
    ],
    closingTitle: "Todos los tokens bloqueados. Liberados gradualmente. Controlados por el DAO.",
    closingNote:
      "Esta distribución garantiza alineación a largo plazo, evita ventas masivas y crea un modelo económico autosostenible donde las tasas de transacción refinancian continuamente los pools para una operación perpetua.",
  },
  hyperspace: {
    title: "Desvíos del hiperespacio: autopistas entre cadenas",
    quote:
      "Los planes para la demolición de la Tierra estuvieron expuestos en el departamento de urbanismo local de Alfa Centauri durante cincuenta de vuestros años terrestres... Si no te molestas en interesarte por los asuntos locales, es tu problema.",
    quoteAuthor: "Douglas Adams, La Guía del Autoestopista Galáctico",
    paragraphs: [
      [
        { type: "text", content: "Igual que los Vogones construyeron " },
        { type: "bold", content: "desvíos del hiperespacio" },
        { type: "text", content: " por la galaxia, Project 42 mantiene " },
        { type: "bold", content: "autopistas directas" },
        { type: "text", content: " entre ecosistemas blockchain — vías sin fricción para tokens, datos y valor." },
      ],
      [
        { type: "text", content: "Sin agujeros de gusano. Sin retrasos. Sin papeleo burocrático por triplicado. Solo " },
        { type: "bold", content: "transferencias instantáneas y sin confianza" },
        { type: "text", content: " a través del criptoverso." },
      ],
    ],
    nativeTitle: "INTEROPERABILIDAD NATIVA",
    nativeSubtitle: "Protocolo IBC (Comunicación entre blockchains)",
    nativeItems: [
      "Conexión nativa con todo el ecosistema Cosmos",
      "Transferencias de tokens sin confianza y sin permiso",
      "Contratos inteligentes composables entre cadenas",
      "Comparte estado y datos entre cadenas soberanas",
    ],
    bridgesTitle: "PUENTES A CADENAS LEGACY",
    bridgesEthereum: "Ethereum y cadenas EVM",
    bridgesEthereumItems: [
      "Puentes bidireccionales para ETH, ERC-20 y NFTs",
      "Compatibilidad total con contratos inteligentes",
    ],
    bridgesBitcoin: "Red Bitcoin",
    bridgesBitcoinItems: ["BTC envuelto con prueba de reservas", "Integración Lightning Network (próximamente)"],
    ecosystemsTitle: "ECOSISTEMAS CONECTADOS",
    ecosystems: [
      { name: "Ethereum", tag: "Puente EVM" },
      { name: "Bitcoin", tag: "Wrapper BTC" },
      { name: "Cosmos Hub", tag: "IBC nativo" },
      { name: "Osmosis", tag: "IBC nativo" },
      { name: "Polygon", tag: "Puente EVM" },
      { name: "Arbitrum", tag: "Puente EVM" },
      { name: "Akash", tag: "IBC nativo" },
      { name: "Celestia", tag: "IBC nativo" },
    ],
    ecosystemsNote: "Y muchos más a través del universo IBC en expansión y protocolos de puente...",
    whyItMatters: [
      { type: "bold", content: "Por qué importa: " },
      {
        type: "text",
        content:
          "Tus tokens [42], recompensas Fish y activos no están atrapados en un jardín vallado. Muévelos libremente entre ecosistemas. Opera en cualquier DEX. Úsalos en cualquier protocolo. El multiverso está abierto.",
      },
    ],
    whyItMattersNote:
      "A diferencia de la demolición de la Tierra, estos desvíos del hiperespacio están bien documentados y son accesibles para todos.",
  },
  technicalArch: {
    title: "Arquitectura técnica",
    sectionTitle: "Capa de internet soberana de pila completa",
    sectionIntro: [
      { type: "text", content: "Infinite Improbability Drive no es solo una blockchain — es una " },
      { type: "bold", content: "pila de internet completa" },
      { type: "text", content: " construida para la soberanía." },
    ],
    tableColumns: { layer: "Capa", function: "Función" },
    tableRows: [
      { layer: "Consenso", function: "CometBFT — sin punto único de fallo" },
      { layer: "Ejecución", function: "EVM (Solidity) + Cosmos SDK" },
      { layer: "Interoperabilidad", function: "IBC-Go, puentes Bitcoin/Ethereum" },
      { layer: "Mercado de tasas", function: "EIP-1559 (quema + propina)" },
      { layer: "Infraestructura P2P", function: "Nodos BabelFish (almacenamiento, cómputo, DNS)" },
      { layer: "Privacidad", function: "Módulos ZK, enrutamiento anónimo" },
    ],
    noteTitle: "Compatible con Ethereum. Ejecuta todo contrato válido. Añade funciones que Ethereum aún no tiene.",
    noteParagraphs: [
      "Despliega tu dApp de Ethereum hoy — funcionará sin modificaciones. Pero tendrás bloques más rápidos, tasas más bajas, puentes IBC nativos e infraestructura P2P integrada.",
    ],
    specsTitle: "Especificaciones",
    specs: [
      { label: "Mecanismo de consenso", value: "Proof of Contribution + tolerancia a fallos bizantinos" },
      { label: "Tiempo de bloque", value: "~5 segundos (optimizado para la experiencia de usuario)" },
      { label: "Contratos inteligentes", value: "VM Turing-completa con verificación formal" },
      { label: "Interoperabilidad", value: "Puentes nativos a Bitcoin, Ethereum y cadenas principales" },
      { label: "Estándares de token", value: "[42] para gobernanza, Fish para contribuciones y liquidez" },
      { label: "Seguridad de red", value: "Multicapa con pruebas criptográficas y validación por stake" },
    ],
    docsNote: "Para documentación técnica detallada → docs.infinitedrive.xyz",
  },
  howToParticipate: {
    title: "Cómo participar",
    cards: [
      {
        title: "HACER STAKE DE [42]",
        description:
          "Asegura la blockchain y gana recompensas. Tu stake valida transacciones y protege la red.",
      },
      {
        title: "CONSTRUIR Y CONTRIBUIR",
        description:
          "Desarrolla aplicaciones, mejora la infraestructura, crea valor. Gana Fish por contribuir a la red.",
      },
      {
        title: "GOBERNAR",
        description:
          "Vota propuestas, da forma al futuro. Cada poseedor de tokens [42] tiene voz en el DAO.",
      },
    ],
  },
  finalQuote: {
    quote:
      "El Infinite Improbability Drive es un método maravilloso y nuevo para cruzar vastas distancias interestelares.",
    author: "Douglas Adams, La Guía del Autoestopista Galáctico",
  },
};
