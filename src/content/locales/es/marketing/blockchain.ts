/**
 * Contenido página Blockchain — español.
 */

import type { LocaleBlockchain } from "../../types";

export const blockchain: LocaleBlockchain = {
  header: {
    title: "Infinite Improbability Drive",
    subtitle:
      "La base blockchain que impulsa Project 42 — donde la confianza se encuentra con la Bistromática.",
  },
  intro: {
    quote: "Confía en las matemáticas, no en los hombres.",
    quoteAuthor: "Satoshi Nakamoto",
    paragraphs: [
      "Infinite Improbability Drive es el corazón de seguridad y economía de Project 42 — un protocolo soberano que impulsa la gobernanza y asegura todo el ecosistema.",
      "Llamada así por el motor revolucionario de Douglas Adams en La Guía del Autoestopista Galáctico, nuestra blockchain hace lo improbable posible — una nación digital verdaderamente soberana.",
    ],
  },
  coreComponents: {
    title: "Componentes principales",
    token42: {
      title: "IMPROBABILITY [42] — TOKEN DE GOBERNANZA Y UTILIDAD",
      summary:
        "El token de gobernanza y utilidad que mantiene viva la blockchain — usado para staking, votación y asegurar la red.",
      purpose: "Propósito",
      purposeValue: "Gobernanza, staking, seguridad de red y tasas del protocolo",
      totalSupply: "Suministro total",
      totalSupplyValue: "100 millones de tazas de Improbability [42]",
      releaseSchedule: "Calendario de liberación",
      releaseScheduleValue: "Bloqueado en genesis, liberado gradualmente durante 42 años",
      atLaunch: "Al lanzamiento",
      atLaunchValue: "Solo 100 tazas en circulación — ganadas por los primeros guardianes",
      keyUse:
        "Haz staking de Improbability [42] para participar en el consenso, votar propuestas y ganar recompensas del protocolo.",
    },
    fish: {
      title: "FISH — TOKEN DE CONTRIBUCIÓN A LA RED Y LIQUIDEZ",
      summary:
        "El token de recompensa ganado al contribuir a la red — una corriente viva de valor nacida de la actividad de la red.",
      howToEarn:
        "Cómo ganar Fish: Comparte almacenamiento, aporta potencia de cómputo, aloja servicios, ejecuta nodos BabelFish o contribuye ancho de banda a la red P2P.",
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
      summary:
        "Project 42 es un DAO desde el primer día — gobernado por código, administrado por contribuidores.",
      points: [
        "Sin fundadores. Sin inversores. Sin jefes.",
        "Deep Thought Labs → un santuario de investigación, financiado por el DAO, al servicio de la misión",
        "Horizonte de 42 años → construimos para generaciones, no para trimestres",
        "Decisiones on-chain → transparentes, inmutables y justas",
      ],
      quote: "No tenemos gobierno elegido — y no queremos uno.",
      quoteAuthor: "John Perry Barlow",
    },
  },
  masterPools: {
    title: "Master Pools: distribución de tokens",
    paragraphs: [
      "Los 100 millones de tazas de Improbability [42] están bloqueados en genesis y se liberan gradualmente durante 42 años, controlados por el DAO desde el bloque 1.",
      "Al lanzamiento, prácticamente 0% de tokens líquidos circulan en el mercado. Los nuevos tokens se generan exclusivamente mediante la inflación de la cadena, otorgados directamente por el protocolo a los validadores como recompensa por asegurar la red.",
      "Los validadores son los primeros en recibir tokens e introducirlos en el mercado. Además, estos pools se refinancian continuamente con la recaudación de tasas de transacción, garantizando una sostenibilidad perpetua.",
    ],
    noteTitle: "Nota sobre liquidez:",
    note: "Aunque casi todos los tokens permanecen bloqueados, el pool Fish Bootstrap se despliega estratégicamente para poblar los pools de liquidez en los mercados. Esta distribución se gestiona algorítmicamente mediante el protocolo Fish — un mecanismo inteligente que equilibra la liquidez del mercado con la sostenibilidad a largo plazo. Los detalles sobre el comportamiento algorítmico y la tokenómica de Fish se recogen en su documentación de protocolo.",
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
      "Igual que los Vogones construyeron desvíos del hiperespacio por la galaxia, Project 42 mantiene autopistas directas entre ecosistemas blockchain — vías sin fricción para tokens, datos y valor.",
      "Sin agujeros de gusano. Sin retrasos. Sin papeleo burocrático por triplicado. Solo transferencias instantáneas y sin confianza a través del criptoverso.",
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
    sectionIntro:
      "Infinite Improbability Drive no es solo una blockchain — es una pila de internet completa construida para la soberanía.",
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
