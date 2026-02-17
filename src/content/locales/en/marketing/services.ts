/**
 * Contenido página Services — inglés.
 */

import type { LocaleServices } from "../../types";

export const services: LocaleServices = {
  header: {
    title: "The Network & Services",
    subtitle:
      "A complete sovereign internet infrastructure — decentralized, user-owned, and unstoppable.",
  },
  babelfish: {
    title: "BabelFish Network",
    imageKey: "networkMesh",
    paragraphs: [
      "The global P2P backbone that powers everything — a network of networks connecting blockchains, services, and devices into a resilient supermesh.",
      "BabelFish is not just a protocol — it's a living infrastructure that grows stronger with every node, every connection, every user.",
    ],
    protocol: {
      title: "THE BABELFISH PROTOCOL",
      intro:
        "A revolutionary protocol that enables direct device-to-blockchain communication without intermediaries. 100% open source — built on proven protocols like Bitcoin, Nostr, IPFS, Pears, and QVAC SDK.",
      whatItDoesLabel: "WHAT IT DOES",
      whatItDoes: [
        "Resolves domains to blockchain addresses",
        "Routes traffic through the most efficient paths",
        "Shares storage and compute across devices",
        "Enables cross-chain interoperability",
        "Self-heals and adapts to network conditions",
      ],
      howItWorksLabel: "HOW IT WORKS",
      howItWorks: [
        "Your device runs a lightweight node",
        "Connects to nearby peers automatically",
        "Forms a mesh that spans the globe",
        "No central servers, no single point of failure",
        "Encrypted end-to-end by default",
      ],
      whitepaperLabel: "Read the full whitepaper →",
      whitepaperUrl: "https://deep-thought.computer/projects/babelfish",
    },
    architectureCards: [
      { title: "MULTI-LAYER", description: "Multiple overlay networks working in harmony" },
      { title: "SELF-ORGANIZING", description: "Nodes find and connect to each other automatically" },
      { title: "FAULT-TOLERANT", description: "Routes around failures and censorship attempts" },
    ],
  },
  sovereign: {
    title: "Sovereign Internet Services",
    intro:
      "Real tools for real freedom — enterprise-grade infrastructure, decentralized and user-controlled. No gatekeepers. No censorship. No compromise.",
    services: [
      {
        title: "DECENTRALIZED DNS — OWN YOUR NAME FOREVER",
        summary:
          "Register domains on the blockchain — no renewals, no expiration, no seizure.",
        featuresLabel: "Features",
        features: [
          "True ownership — your domain is yours forever",
          "No registrars, no middlemen, no annual fees",
          "Censorship-resistant — no one can take it down",
          "Instant propagation across the network",
          "Support for subdomains and wildcard records",
        ],
        howItWorksLabel: "How it works",
        howItWorks: [
          "Register a .id42 domain on-chain",
          "Point it to your blockchain address",
          "Users resolve it through BabelFish nodes",
          "Updates propagate in seconds",
          "Works with any service in the ecosystem",
        ],
        example:
          "Example: myproject.id42 → resolves to your blockchain address, hosting, email, everything.",
      },
      {
        title: "WEB & APP HOSTING — DEPLOY ANYWHERE, REACH EVERYWHERE",
        summary:
          "Host websites, APIs, and applications on the global P2P infrastructure — with automatic CDN, load balancing, and DDoS protection built-in.",
        boxes: [
          {
            title: "Static Sites",
            description:
              "HTML, CSS, JS — deployed to the Pears distributed hash table (DHT) and served globally",
          },
          {
            title: "Dynamic Apps",
            description: "Run backend logic on distributed compute nodes",
          },
          {
            title: "Databases",
            description: "OrbitDB, Gun, or custom solutions on-chain",
          },
        ],
        bullets: [
          "Global CDN — content cached at edge nodes worldwide",
          "Auto-scaling — network expands based on demand",
          "Zero downtime — redundancy across thousands of nodes",
          "No server management — just deploy and forget",
        ],
      },
      {
        title: "ENCRYPTED EMAIL & MESSAGING — PRIVATE BY DEFAULT",
        summary:
          "End-to-end encrypted communication that no one can intercept, read, or censor.",
        emailLabel: "Email",
        messagingLabel: "Messaging",
        emailList: [
          "your-name@your-domain.id42",
          "PGP encryption built-in",
          "No scanning, no tracking, no ads",
          "Stored encrypted on the network",
          "Compatible with standard email clients",
        ],
        messagingList: [
          "Direct P2P messaging",
          "Group chats with perfect forward secrecy",
          "File sharing up to any size",
          "Video & voice calls (coming soon)",
          "Anonymous messaging option",
        ],
        quote:
          '"Privacy is necessary for an open society in the electronic age." — Eric Hughes',
      },
      {
        title: "DISTRIBUTED FILE STORAGE — YOUR DATA, EVERYWHERE AND NOWHERE",
        summary:
          "Store files across the network with redundancy, encryption, and permanence.",
        storageHowLabel: "How it works",
        storageUseCasesLabel: "Use cases",
        storageHow: [
          "Files split into encrypted chunks",
          "Distributed across multiple nodes",
          "Redundancy ensures availability",
          "Only you have the decryption key",
          "Content-addressed (like IPFS)",
        ],
        storageUseCases: [
          "Personal backup and sync",
          "Media hosting (images, videos)",
          "Document sharing",
          "Archival storage",
          "NFT asset storage",
        ],
        storageEconomicsTitle: "Storage Economics",
        storageEconomicsDesc: "Pay once, store forever. Or contribute your storage and earn Fish tokens.",
        storageEconomicsNote:
          "The network self-balances supply and demand through algorithmic pricing.",
      },
      {
        title: "DISTRIBUTED CLOUD COMPUTING — SERVERLESS, LITERALLY",
        summary:
          "Run computations on the network — from simple functions to complex AI workloads.",
        computeBoxes: [
          {
            title: "Functions",
            description: "Deploy serverless functions that run on-demand",
          },
          {
            title: "Containers",
            description: "Run Docker containers across the mesh",
          },
          {
            title: "GPUs",
            description: "Access distributed GPU power for AI/ML",
          },
        ],
        computeBullets: [
          "Pay per execution — only pay for what you use",
          "Auto-scaling — from 1 to 1,000,000 requests",
          "Global edge computing — runs close to your users",
          "Earn by sharing — contribute compute and earn tokens",
        ],
      },
    ],
  },
  howItConnects: {
    title: "How It All Connects",
    imageKey: "connectedSystems",
    paragraphs: [
      "Every service runs on BabelFish Network. Every transaction settles on the Infinite Improbability Drive blockchain. Everything is powered by Improbability [42] and Fish.",
      "This is not a collection of separate products — it's a unified ecosystem where every part strengthens the whole.",
    ],
    stackTitle: "THE STACK",
    layers: [
      {
        layer: "Layer 5",
        title: "User-Created Universes",
        description: "Websites, apps, games, metaverses — built by users",
      },
      {
        layer: "Layer 4",
        title: "Sovereign Services",
        description: "DNS, hosting, email, storage, compute",
      },
      {
        layer: "Layer 3",
        title: "BabelFish Network",
        description: "Global P2P mesh, routing, and connectivity",
      },
      {
        layer: "Layer 2",
        title: "Economic Layer",
        description: "Fish token — earned through network contributions",
      },
      {
        layer: "Layer 1",
        title: "Infinite Improbability Drive",
        description: "Blockchain core, [42] token, governance and security",
      },
    ],
  },
  blockchainCta: {
    title: "The Blockchain",
    paragraphs: [
      "At the heart of everything sits the Infinite Improbability Drive — our blockchain that makes the impossible, improbable.",
      "Named after Douglas Adams' revolutionary engine, it powers governance with [42] tokens and rewards network contributors with Fish tokens.",
    ],
    bullets: [
      "[42] — Governance and utility token for staking and voting",
      "Fish — Earned by contributing storage, compute, and bandwidth",
      "DAO governance — decisions made on-chain by the community",
      "Proof of Contribution — rewards those who build and maintain",
      "Hyperspace bypasses — native bridges to Bitcoin, Ethereum, Cosmos, and beyond",
    ],
    ctaButtonText: "Explore the Blockchain →",
  },
  getStarted: {
    title: "Start Using The Network",
    asUser: {
      title: "AS A USER",
      steps: [
        "Join our Telegram community",
        "Follow development updates",
        "Be among the first to test",
        "Get early access to the network",
        "Connect with other builders",
      ],
      ctaText: "Join Telegram Community →",
      ctaUrl: "https://t.me/+nt8ysid_-8VlMDVh",
    },
    asBuilder: {
      title: "AS A BUILDER",
      steps: [
        "Access the developer resources",
        "Contribute to open source",
        "Shape the future of the network",
        "Earn Fish for contributions",
        "Deploy your projects early",
      ],
      ctaText: "Get Involved →",
      ctaUrl: "https://t.me/+nt8ysid_-8VlMDVh",
    },
    footer: {
      line1: "This is infrastructure for everyone.",
      line2: "From individuals to enterprises — democratizing tools once controlled by the kraken.",
    },
  },
};
