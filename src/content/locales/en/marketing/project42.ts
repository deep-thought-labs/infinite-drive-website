/**
 * Contenido página Project 42 — inglés.
 */

import type { LocaleProject42 } from "../../types";

export const project42: LocaleProject42 = {
  header: {
    title: "Project 42",
    subtitle: [
      { type: "bold", content: "The answer to digital sovereignty" },
      { type: "text", content: " — a cyberspace where freedom is code, privacy is default, and the network belongs to everyone." },
    ],
  },
  heroQuote: {
    text: "Governments of the Industrial World, you weary giants of flesh and steel, I come from Cyberspace, the new home of Mind. On behalf of the future, I ask you of the past to leave us alone. You are not welcome among us. You have no sovereignty where we gather.",
    author: "John Perry Barlow",
    source: "A Declaration of the Independence of Cyberspace (1996)",
  },
  newWorld: {
    title: "We Are Building a New World",
    imageKey: "newWorld",
    paragraphs: [
      "We are not launching a product.",
      "We are founding a nation.",
      "A cyberspace nation — open to all, owned by none, ruled by code.",
      "Where your data is yours.",
      "Where your voice cannot be silenced.",
      "Where your world is built by you — not rented from a corporation.",
      "This is Project 42 — the answer to life, the universe, and digital freedom.",
    ],
  },
  philosophy: {
    title: "Our Philosophy: Cypherpunk Nation",
    intro: "We stand on five pillars of truth:",
    tableHeaderVoice: "Voice",
    tableHeaderTruth: "Truth",
    imageKey: "cypherpunk",
    tableRows: [
      { voice: "Timothy C. May", truth: "Privacy is necessary for an open society." },
      { voice: "Eric Hughes", truth: "Cypherpunks write code." },
      { voice: "John Perry Barlow", truth: "We have no elected government — and we don't want one." },
      { voice: "Satoshi Nakamoto", truth: "Trust math, not men." },
      { voice: "Douglas Adams", truth: "Don't Panic." },
    ],
  },
  ecosystem: {
    title: "The Ecosystem",
    intro:
      "Project 42 is not a single product — it's a complete digital nation with four interconnected pillars:",
    closing:
      "These four pillars work together as one unified system — each strengthens the others, creating a network that becomes more powerful with every user, every node, every contribution.",
    pillars: [
      {
        number: "01",
        title: "THE INFINITE IMPROBABILITY DRIVE",
        description: "The blockchain foundation — a complete sovereign layer for trust, governance, and economic coordination.",
        bullets: [
          "Proof of Contribution consensus — rewards those who build and maintain",
          "DAO governance from block one — decisions made on-chain by the community",
          "Improbability [42] — governance token for staking, voting, and network utility",
          "Algorithmic Liquidity — Fish rewards and balances ecosystem value flows",
          "42-year economic model — built for generations, not quarters",
        ],
      },
      {
        number: "02",
        title: "BABELFISH NETWORK",
        description:
          "A global P2P mesh — millions of devices forming a planetary network that routes around censorship and failure.",
        bullets: [
          "Self-organizing mesh topology",
          "Device-to-blockchain communication",
          "Encrypted by default, unstoppable by design",
        ],
      },
      {
        number: "03",
        title: "SOVEREIGN INTERNET SERVICES",
        description: "DNS, hosting, email, storage, compute — enterprise-grade infrastructure, fully decentralized.",
        bullets: [".id42 domains — yours forever", "End-to-end encrypted communication", "Global CDN and edge computing"],
      },
      {
        number: "04",
        title: "USER-CREATED UNIVERSES",
        description: "Build websites, apps, metaverses, games — your creations, your rules, your ownership.",
        bullets: ["Deploy globally in seconds", "True ownership of digital assets", "Interoperable across the ecosystem"],
      },
    ],
  },
  library: {
    title: "The Library of Alexandria — Rebuilt for Cyberspace",
    quote:
      "The story so far: In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    quoteAuthor: "Douglas Adams, The Restaurant at the End of the Universe",
    paragraphs: [
      "Once, humanity built the Library of Alexandria — a temple of knowledge that held the world's wisdom.",
      "It burned. Knowledge was lost. Empires fell.",
      "Project 42 is the Library of Alexandria rebuilt in code — but this time, it cannot burn.",
    ],
    notInventingTitle: "WE ARE NOT INVENTING THE WHEEL",
    notInventingParagraphs: [
      "We stand on the shoulders of giants — building an open, interconnected ecosystem where protocols, services, and communities collaborate toward a common good.",
      "We don't commercialize the work of others. We integrate, honor, and extend proven open-source technologies into a unified, resilient network.",
      "Every line of code is open source. Every protocol is public. Every innovation belongs to humanity.",
    ],
    protocolsTitle: "BUILT ON OPEN PROTOCOLS & ALIGNED TECHNOLOGIES",
    protocolsIntro:
      "We integrate battle-tested open-source protocols and technologies that share our vision of digital sovereignty:",
    protocols: [
      { name: "Bitcoin", description: "The first decentralized money — proof that code can be law" },
      { name: "Nostr", description: "Censorship-resistant social communication protocol" },
      { name: "EVM", description: "Smart contracts and programmable trust" },
      { name: "Cosmos SDK", description: "Interoperable blockchain architecture" },
      { name: "IPFS", description: "Distributed file systems and content addressing" },
      { name: "Tor", description: "Anonymous routing and privacy infrastructure" },
      { name: "Pears (Holepunch)", description: "P2P framework for unstoppable applications" },
      { name: "QVAC SDK (Tether)", description: "Open tools for digital assets, stablecoins, and AI integration" },
      { name: "xAI", description: "AI models aligned with human flourishing" },
    ],
    survivalParagraphs: [
      "We're building a decentralized, collaborative, indestructible network — not for profit, but for survival.",
      "The economic models we design are not for personal enrichment. They are necessary mechanisms for network operability, chain security, and fair distribution of incentives to all participants. Like the Hitchhiker's Guide itself — \"A wholly remarkable book. Perhaps the most remarkable, certainly the most successful book ever to come out of the great publishing corporations of Ursa Minor.\"",
    ],
  },
  thursdayNote: {
    quote: "This must be Thursday. I never could get the hang of Thursdays.",
    quoteAuthor: "Arthur Dent, The Hitchhiker's Guide to the Galaxy",
    paragraphs: [
      "Thursdays have always been strange days in the galaxy. But perhaps that's because they're days when impossible things become probable. When hyperspace bypasses get built. When digital nations get founded. When 42 finally makes sense.",
      "If you're reading this on a Thursday, you might just be in the right place at the right time.",
    ],
  },
  taglines: ["Project 42", "A Cypherpunk Nation", "Powered by Infinite Drive", "For everyone. Forever."],
};
