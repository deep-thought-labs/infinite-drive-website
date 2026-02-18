/**
 * Tipo que agrupa todo el contenido traducible para un locale.
 * Cada locale (en, es, ...) exporta un objeto que cumple esta forma.
 */

import type { LegalSection } from "../types";

export interface LocaleSite {
  brand: string;
  tagline: string;
  descriptionShort: string;
  /** Párrafo bajo la cita. Use segments para bold (ej. "living infrastructure"). */
  descriptionLong: string | FormattedSegment[];
  year: string;
  links: {
    telegram: string;
    deepThoughtLabs: string;
    docs: string;
    babelfishWhitepaper: string;
    fishInfo: string;
  };
}

export interface LocaleRoutes {
  ROUTES: { home: string; project42: string; services: string; blockchain: string; privacy: string };
  routeDefs: { path: string; label: string; inNav?: boolean }[];
  navRoutes: { path: string; label: string; inNav?: boolean }[];
}

/** Inline formatting for copy (bold, accent, italic) to match production. */
export type FormattedSegment =
  | { type: "text"; content: string }
  | { type: "bold"; content: string }
  | { type: "accent"; content: string }
  | { type: "boldAccent"; content: string }
  | { type: "italic"; content: string };

export interface LocaleHome {
  hero: { title: string; subtitle: string; imageKey: string };
  quote: { text: string; author: string; source?: string };
  /** Párrafo bajo el hero. Use segments for bold/accent (e.g. "complete digital ecosystem" bold). */
  ecosystemIntro: string | FormattedSegment[];
  features: { title: string; description: string }[];
  ctas: { label: string; href: string; internal?: boolean }[];
  joinSection: { title: string; description: string; ctaLabel: string };
  /** e.g. "100% Open Source." accent+bold, rest mixed. */
  openSourceNote: string | FormattedSegment[];
  /** Bloque final antes de CTAs: "This is infrastructure for everyone." / "From individuals to enterprises..." */
  closingBlock: { title: string; subtitle: string };
}

export interface LocalePrivacy {
  title: string;
  /** Etiqueta para la fecha, ej. "Last updated:" / "Última actualización:" */
  lastUpdatedLabel: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  footerNote: string;
}

/** Fila de tabla voz/verdad (Project42 filosofía). truth puede ser segmentos para cursiva (ej. Don't Panic.). */
export interface VoiceTruthRow {
  voice: string;
  truth: string | FormattedSegment[];
}

/** Pilar del ecosistema (Project42). bullets puede ser segmentos para negrita (ej. "Proof of Contribution"). */
export interface EcosystemPillar {
  number: string;
  title: string;
  description: string;
  bullets: (string | FormattedSegment[])[];
}

/** Protocolo/tecnología (Project42 library) */
export interface ProtocolItem {
  name: string;
  description: string;
}

export interface LocaleProject42 {
  header: { title: string; subtitle: string | FormattedSegment[] };
  heroQuote: { text: string; author: string; source?: string };
  newWorld: {
    title: string;
    /** Each item can be plain string or rich segments (bold/accent). Use tightParagraphIndices for the 4 "nation" lines. */
    paragraphs: (string | FormattedSegment[])[];
    tightParagraphIndices?: number[];
    imageKey: string;
  };
  philosophy: { title: string; intro: string; tableHeaderVoice: string; tableHeaderTruth: string; tableRows: VoiceTruthRow[]; imageKey: string };
  ecosystem: {
    title: string;
    /** Use segments for bold (e.g. "complete digital nation"). */
    intro: string | FormattedSegment[];
    pillars: EcosystemPillar[];
    /** Use segments for bold (e.g. "one unified system"). */
    closing: string | FormattedSegment[];
  };
  library: {
    title: string;
    quote: string;
    quoteAuthor: string;
    /** Use segments for bold (e.g. "Library of Alexandria"). */
    paragraphs: (string | FormattedSegment[])[];
    notInventingTitle: string;
    /** Use segments for bold (open, interconnected ecosystem; integrate honor extend; open source; public; humanity). */
    notInventingParagraphs: (string | FormattedSegment[])[];
    protocolsTitle: string;
    protocolsIntro: string;
    protocols: ProtocolItem[];
    /** Use segments for bold (We're building...; survival; necessary mechanisms). */
    survivalParagraphs: (string | FormattedSegment[])[];
  };
  thursdayNote: { quote: string; quoteAuthor: string; /** Use segments for bold (e.g. "42"). */ paragraphs: (string | FormattedSegment[])[] };
  taglines: string[];
}

/** Servicio soberano (Services): una card con título, resumen y bloques opcionales */
export interface SovereignServiceCard {
  title: string;
  summary: string;
  featuresLabel?: string;
  features?: string[];
  howItWorksLabel?: string;
  howItWorks?: string[];
  example?: string;
  boxes?: { title: string; description: string }[];
  bullets?: string[];
  emailList?: string[];
  messagingList?: string[];
  quote?: string;
  emailLabel?: string;
  messagingLabel?: string;
  storageHow?: string[];
  storageUseCases?: string[];
  storageHowLabel?: string;
  storageUseCasesLabel?: string;
  storageEconomicsTitle?: string;
  storageEconomicsDesc?: string;
  storageEconomicsNote?: string;
  computeBoxes?: { title: string; description: string }[];
  /** Use segments for bold (Pay per execution, Auto-scaling, etc.). */
  computeBullets?: (string | FormattedSegment[])[];
}

/** Capa del stack (Services: How it connects) */
export interface StackLayer {
  layer: string;
  title: string;
  description: string;
}

export interface LocaleServices {
  header: { title: string; /** Use segments for bold (e.g. "decentralized, user-owned, and unstoppable"). */ subtitle: string | FormattedSegment[] };
  babelfish: {
    title: string;
    /** Use segments for bold (global P2P backbone, living infrastructure). */
    paragraphs: (string | FormattedSegment[])[];
    imageKey: string;
    protocol: {
      title: string;
      /** Use segments for bold + accent (direct device-to-blockchain; 100% open source). */
      intro: string | FormattedSegment[];
      whatItDoesLabel: string;
      whatItDoes: string[];
      howItWorksLabel: string;
      howItWorks: string[];
      whitepaperLabel: string;
      whitepaperUrl: string;
    };
    architectureCards: { title: string; description: string }[];
  };
  sovereign: {
    title: string;
    /** Use segments for bold (e.g. "enterprise-grade infrastructure"). */
    intro: string | FormattedSegment[];
    services: SovereignServiceCard[];
  };
  howItConnects: {
    title: string;
    /** Use segments for bold (BabelFish Network, Infinite Improbability Drive, etc.). */
    paragraphs: (string | FormattedSegment[])[];
    imageKey: string;
    stackTitle: string;
    layers: StackLayer[];
  };
  blockchainCta: {
    title: string;
    /** Use segments for bold (Infinite Improbability Drive; [42], Fish). */
    paragraphs: (string | FormattedSegment[])[];
    /** Use segments for bold ([42], Fish, DAO governance, etc.). */
    bullets: (string | FormattedSegment[])[];
    ctaButtonText: string;
  };
  getStarted: {
    title: string;
    asUser: { title: string; steps: string[]; ctaText: string; ctaUrl: string };
    asBuilder: { title: string; steps: string[]; ctaText: string; ctaUrl: string };
    footer: { line1: string; line2: string };
  };
}

/** Fila tabla Master Pools (Blockchain) */
export interface MasterPoolRow {
  pool: string;
  percent: string;
  purpose: string;
  annualUnlock: string;
}

/** Card ecosistema conectado (Blockchain: hyperspace) */
export interface EcosystemCard {
  name: string;
  tag: string;
}

/** Fila tabla arquitectura (Blockchain) */
export interface TechArchRow {
  layer: string;
  function: string;
}

/** Spec técnica (Blockchain) */
export interface TechSpec {
  label: string;
  value: string;
}

export interface LocaleBlockchain {
  header: { title: string; /** Use segments for bold (e.g. "trust meets Bistromathics"). */ subtitle: string | FormattedSegment[] };
  intro: {
    quote: string;
    quoteAuthor: string;
    /** First paragraph may use segments for bold (e.g. "Infinite Improbability Drive"). */
    paragraphs: (string | FormattedSegment[])[];
  };
  coreComponents: {
    title: string;
    token42: {
      title: string;
      /** Use segments for bold (e.g. "governance and utility token"). */
      summary: string | FormattedSegment[];
      purpose: string;
      purposeValue: string;
      totalSupply: string;
      totalSupplyValue: string;
      releaseSchedule: string;
      /** Use segments for bold (e.g. "42 years"). */
      releaseScheduleValue: string | FormattedSegment[];
      atLaunch: string;
      /** Use segments for bold (e.g. "100 cups"). */
      atLaunchValue: string | FormattedSegment[];
      /** Use segments so only "Key Use:" is bold. */
      keyUse: string | FormattedSegment[];
    };
    fish: {
      title: string;
      /** Use segments for bold (e.g. "reward token"). */
      summary: string | FormattedSegment[];
      /** Use segments so only "How to Earn Fish:" is bold. */
      howToEarn: string | FormattedSegment[];
      bullets: string[];
      seeHow: string;
    };
    governance: {
      title: string;
      /** Use segments for bold (e.g. "DAO from day one"). */
      summary: string | FormattedSegment[];
      /** Use segments for bold on key phrases in each point. */
      points: (string | FormattedSegment[])[];
      quote: string;
      quoteAuthor: string;
    };
  };
  masterPools: {
    title: string;
    /** Use segments for bold (cups of Improbability [42], locked at genesis, 42 years, etc.). */
    paragraphs: (string | FormattedSegment[])[];
    /** Bold label (e.g. "Note on liquidity:") — kept for backwards compat; use note segments for full control. */
    noteTitle: string;
    /** Use segments for accent on "Fish Bootstrap pool" / "Fish protocol" etc. */
    note: string | FormattedSegment[];
    tableColumns: { pool: string; percent: string; purpose: string; annualUnlock: string };
    rows: MasterPoolRow[];
    closingTitle: string;
    closingNote: string;
  };
  hyperspace: {
    title: string;
    quote: string;
    quoteAuthor: string;
    /** Use segments for bold (hyperspace bypasses, direct highways, instant trustless transfers). */
    paragraphs: (string | FormattedSegment[])[];
    nativeTitle: string;
    nativeSubtitle: string;
    nativeItems: string[];
    bridgesTitle: string;
    bridgesEthereum: string;
    bridgesEthereumItems: string[];
    bridgesBitcoin: string;
    bridgesBitcoinItems: string[];
    ecosystemsTitle: string;
    ecosystems: EcosystemCard[];
    ecosystemsNote: string;
    /** In production only the title phrase is bold (e.g. "Why it matters: "). */
    whyItMatters: string | FormattedSegment[];
    whyItMattersNote: string;
  };
  technicalArch: {
    title: string;
    sectionTitle: string;
    /** Use segments for bold (e.g. "complete internet stack"). */
    sectionIntro: string | FormattedSegment[];
    tableColumns: { layer: string; function: string };
    tableRows: TechArchRow[];
    noteTitle: string;
    noteParagraphs: string[];
    specsTitle: string;
    specs: TechSpec[];
    docsNote: string;
  };
  howToParticipate: {
    title: string;
    cards: { title: string; description: string }[];
  };
  finalQuote: { quote: string; author: string };
}

export interface LocaleContent {
  site: LocaleSite;
  routes: LocaleRoutes;
  home: LocaleHome;
  privacy: LocalePrivacy;
  project42: LocaleProject42;
  services: LocaleServices;
  blockchain: LocaleBlockchain;
}
