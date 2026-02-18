/**
 * Contenido página Services — español.
 */

import type { LocaleServices } from "../../types";

export const services: LocaleServices = {
  header: {
    title: "La red y los servicios",
    subtitle: [
      { type: "text", content: "Una infraestructura de internet soberana completa — " },
      { type: "bold", content: "descentralizada, propiedad de los usuarios e imparable" },
      { type: "text", content: "." },
    ],
  },
  babelfish: {
    title: "BabelFish Network",
    imageKey: "networkMesh",
    paragraphs: [
      [
        { type: "text", content: "La " },
        { type: "bold", content: "columna vertebral P2P global" },
        { type: "text", content: " que impulsa todo — una red de redes que conecta blockchains, servicios y dispositivos en una supermalla resiliente." },
      ],
      [
        { type: "text", content: "BabelFish no es solo un protocolo — es una " },
        { type: "bold", content: "infraestructura viva" },
        { type: "text", content: " que se fortalece con cada nodo, cada conexión, cada usuario." },
      ],
    ],
    protocol: {
      title: "EL PROTOCOLO BABELFISH",
      intro: [
        { type: "text", content: "Un protocolo revolucionario que permite la " },
        { type: "bold", content: "comunicación directa dispositivo-a-blockchain" },
        { type: "text", content: " sin intermediarios. " },
        { type: "boldAccent", content: "100% open source" },
        { type: "text", content: " — construido sobre protocolos probados como Bitcoin, Nostr, IPFS, Pears y QVAC SDK." },
      ],
      whatItDoesLabel: "QUÉ HACE",
      whatItDoes: [
        "Resuelve dominios a direcciones blockchain",
        "Enruta el tráfico por los caminos más eficientes",
        "Comparte almacenamiento y computación entre dispositivos",
        "Habilita interoperabilidad entre cadenas",
        "Se autorrepara y se adapta a las condiciones de la red",
      ],
      howItWorksLabel: "CÓMO FUNCIONA",
      howItWorks: [
        "Tu dispositivo ejecuta un nodo ligero",
        "Se conecta a nodos cercanos automáticamente",
        "Forma una malla que abarca el globo",
        "Sin servidores centrales, sin punto único de fallo",
        "Cifrado de extremo a extremo por defecto",
      ],
      whitepaperLabel: "Lee el whitepaper completo →",
      whitepaperUrl: "https://deep-thought.computer/projects/babelfish",
    },
    architectureCards: [
      { title: "MULTICAPA", description: "Múltiples redes superpuestas trabajando en armonía" },
      { title: "AUTOORGANIZADO", description: "Los nodos se encuentran y conectan entre sí automáticamente" },
      { title: "TOLERANTE A FALLOS", description: "Evita fallos e intentos de censura" },
    ],
  },
  sovereign: {
    title: "Servicios de internet soberanos",
    intro: [
      { type: "text", content: "Herramientas reales para libertad real — " },
      { type: "bold", content: "infraestructura de nivel empresarial" },
      { type: "text", content: ", descentralizada y controlada por el usuario. Sin guardianes. Sin censura. Sin compromisos." },
    ],
    services: [
      {
        title: "DNS DESCENTRALIZADO — TU NOMBRE PARA SIEMPRE",
        summary:
          "Registra dominios en la blockchain — sin renovaciones, sin caducidad, sin incautación.",
        featuresLabel: "Características",
        features: [
          "Propiedad real — tu dominio es tuyo para siempre",
          "Sin registradores, sin intermediarios, sin cuotas anuales",
          "Resistente a la censura — nadie puede tumbarlo",
          "Propagación instantánea en la red",
          "Soporte para subdominios y registros wildcard",
        ],
        howItWorksLabel: "Cómo funciona",
        howItWorks: [
          "Registra un dominio .id42 on-chain",
          "Apúntalo a tu dirección blockchain",
          "Los usuarios lo resuelven mediante nodos BabelFish",
          "Las actualizaciones se propagan en segundos",
          "Funciona con cualquier servicio del ecosistema",
        ],
        example:
          "Ejemplo: miproyecto.id42 → resuelve a tu dirección blockchain, hosting, email, todo.",
      },
      {
        title: "HOSTING WEB Y APPS — DESPLIEGA EN CUALQUIER SITIO, LLEGA A TODOS",
        summary:
          "Aloja sitios web, APIs y aplicaciones en la infraestructura P2P global — con CDN automático, balanceo de carga y protección DDoS integrados.",
        boxes: [
          {
            title: "Sitios estáticos",
            description:
              "HTML, CSS, JS — desplegados en la DHT distribuida de Pears y servidos globalmente",
          },
          {
            title: "Apps dinámicas",
            description: "Ejecuta lógica backend en nodos de computación distribuidos",
          },
          {
            title: "Bases de datos",
            description: "OrbitDB, Gun o soluciones personalizadas on-chain",
          },
        ],
        bullets: [
          "CDN global — contenido en caché en nodos edge en todo el mundo",
          "Autoescalado — la red crece según la demanda",
          "Cero tiempo de inactividad — redundancia en miles de nodos",
          "Sin gestión de servidores — despliega y olvida",
        ],
      },
      {
        title: "EMAIL Y MENSAJERÍA CIFRADOS — PRIVACIDAD POR DEFECTO",
        summary:
          "Comunicación cifrada de extremo a extremo que nadie puede interceptar, leer o censurar.",
        emailLabel: "Email",
        messagingLabel: "Mensajería",
        emailList: [
          "tu-nombre@tu-dominio.id42",
          "Cifrado PGP integrado",
          "Sin escaneo, sin rastreo, sin anuncios",
          "Almacenado cifrado en la red",
          "Compatible con clientes de email estándar",
        ],
        messagingList: [
          "Mensajería P2P directa",
          "Chats grupales con secreto hacia adelante perfecto",
          "Compartir archivos de cualquier tamaño",
          "Videollamadas y voz (próximamente)",
          "Opción de mensajería anónima",
        ],
        quote:
          '"La privacidad es necesaria para una sociedad abierta en la era electrónica." — Eric Hughes',
      },
      {
        title: "ALMACENAMIENTO DE ARCHIVOS DISTRIBUIDO — TUS DATOS, EN TODAS PARTES Y EN NINGUNA",
        summary:
          "Almacena archivos en la red con redundancia, cifrado y permanencia.",
        storageHowLabel: "Cómo funciona",
        storageUseCasesLabel: "Casos de uso",
        storageHow: [
          "Archivos divididos en fragmentos cifrados",
          "Distribuidos en múltiples nodos",
          "La redundancia garantiza disponibilidad",
          "Solo tú tienes la clave de descifrado",
          "Direccionamiento por contenido (como IPFS)",
        ],
        storageUseCases: [
          "Copia de seguridad y sincronización personal",
          "Alojamiento de medios (imágenes, vídeos)",
          "Compartir documentos",
          "Almacenamiento de archivo",
          "Almacenamiento de activos NFT",
        ],
        storageEconomicsTitle: "Economía del almacenamiento",
        storageEconomicsDesc: "Paga una vez, almacena para siempre. O contribuye con tu almacenamiento y gana tokens Fish.",
        storageEconomicsNote:
          "La red equilibra oferta y demanda mediante precios algorítmicos.",
      },
      {
        title: "COMPUTACIÓN EN LA NUBE DISTRIBUIDA — SERVERLESS, LITERALMENTE",
        summary:
          "Ejecuta computaciones en la red — desde funciones simples hasta cargas de trabajo de IA complejas.",
        computeBoxes: [
          {
            title: "Funciones",
            description: "Despliega funciones serverless que se ejecutan bajo demanda",
          },
          {
            title: "Contenedores",
            description: "Ejecuta contenedores Docker en la malla",
          },
          {
            title: "GPUs",
            description: "Accede a potencia GPU distribuida para IA/ML",
          },
        ],
        computeBullets: [
          "Pago por ejecución — solo pagas lo que usas",
          "Autoescalado — de 1 a 1.000.000 de peticiones",
          "Edge computing global — corre cerca de tus usuarios",
          "Gana compartiendo — contribuye con computación y gana tokens",
        ],
      },
    ],
  },
  howItConnects: {
    title: "Cómo se conecta todo",
    imageKey: "connectedSystems",
    paragraphs: [
      [
        { type: "text", content: "Cada servicio corre sobre " },
        { type: "bold", content: "BabelFish Network" },
        { type: "text", content: ". Cada transacción se liquida en la blockchain " },
        { type: "bold", content: "Infinite Improbability Drive" },
        { type: "text", content: ". Todo está impulsado por " },
        { type: "bold", content: "Improbability [42]" },
        { type: "text", content: " y " },
        { type: "bold", content: "Fish" },
        { type: "text", content: "." },
      ],
      [
        { type: "text", content: "No es una colección de productos separados — es un " },
        { type: "bold", content: "ecosistema unificado" },
        { type: "text", content: " donde cada parte fortalece al conjunto." },
      ],
    ],
    stackTitle: "LA PILA",
    layers: [
      {
        layer: "Capa 5",
        title: "Universos creados por usuarios",
        description: "Sitios web, apps, juegos, metaversos — construidos por usuarios",
      },
      {
        layer: "Capa 4",
        title: "Servicios soberanos",
        description: "DNS, hosting, email, almacenamiento, computación",
      },
      {
        layer: "Capa 3",
        title: "BabelFish Network",
        description: "Malla P2P global, enrutamiento y conectividad",
      },
      {
        layer: "Capa 2",
        title: "Capa económica",
        description: "Token Fish — ganado mediante contribuciones a la red",
      },
      {
        layer: "Capa 1",
        title: "Infinite Improbability Drive",
        description: "Núcleo blockchain, token [42], gobernanza y seguridad",
      },
    ],
  },
  blockchainCta: {
    title: "La blockchain",
    paragraphs: [
      "En el corazón de todo está Infinite Improbability Drive — nuestra blockchain que hace lo imposible, improbable.",
      "Llamada así por el motor revolucionario de Douglas Adams, impulsa la gobernanza con tokens [42] y recompensa a los contribuidores de la red con tokens Fish.",
    ],
    bullets: [
      "[42] — Token de gobernanza y utilidad para staking y votación",
      "Fish — Se gana contribuyendo almacenamiento, cómputo y ancho de banda",
      "Gobernanza DAO — decisiones on-chain por la comunidad",
      "Proof of Contribution — recompensa a quienes construyen y mantienen",
      "Desvíos del hiperespacio — puentes nativos a Bitcoin, Ethereum, Cosmos y más",
    ],
    ctaButtonText: "Explorar la blockchain →",
  },
  getStarted: {
    title: "Empieza a usar la red",
    asUser: {
      title: "COMO USUARIO",
      steps: [
        "Únete a nuestra comunidad de Telegram",
        "Sigue las actualizaciones de desarrollo",
        "Sé de los primeros en probar",
        "Obtén acceso anticipado a la red",
        "Conecta con otros constructores",
      ],
      ctaText: "Unirse a la comunidad de Telegram →",
      ctaUrl: "https://t.me/+nt8ysid_-8VlMDVh",
    },
    asBuilder: {
      title: "COMO CONSTRUCTOR",
      steps: [
        "Accede a los recursos para desarrolladores",
        "Contribuye al código abierto",
        "Dale forma al futuro de la red",
        "Gana Fish por tus contribuciones",
        "Despliega tus proyectos pronto",
      ],
      ctaText: "Participar →",
      ctaUrl: "https://t.me/+nt8ysid_-8VlMDVh",
    },
    footer: {
      line1: "Esta es infraestructura para todos.",
      line2: "De individuos a empresas — democratizando herramientas que antes controlaba el kraken.",
    },
  },
};
