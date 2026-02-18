/**
 * Tipo que agrupa todo el contenido traducible para un locale.
 * Cada locale (en, es, ...) exporta un objeto que cumple esta forma.
 */

import type { LegalSection } from "../types";

export interface LocaleSite {
  brand: string;
  tagline: string;
  descriptionShort: string;
  descriptionLong: string;
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

/** Inline formatting for copy (bold, accent) to match production. */
export type FormattedSegment =
  | { type: "text"; content: string }
  | { type: "bold"; content: string }
  | { type: "accent"; content: string }
  | { type: "boldAccent"; content: string };

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

/** Fila de tabla voz/verdad (Project42 filosofía) */
export interface VoiceTruthRow {
  voice: string;
  truth: string;
}

/** Pilar del ecosistema (Project42) */
export interface EcosystemPillar {
  number: string;
  title: string;
  description: string;
  bullets: string[];
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
  ecosystem: { title: string; intro: string; pillars: EcosystemPillar[]; closing: string };
  library: {
    title: string;
    quote: string;
    quoteAuthor: string;
    paragraphs: string[];
    notInventingTitle: string;
    notInventingParagraphs: string[];
    protocolsTitle: string;
    protocolsIntro: string;
    protocols: ProtocolItem[];
    survivalParagraphs: string[];
  };
  thursdayNote: { quote: string; quoteAuthor: string; paragraphs: string[] };
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
  computeBullets?: string[];
}

/** Capa del stack (Services: How it connects) */
export interface StackLayer {
  layer: string;
  title: string;
  description: string;
}

export interface LocaleServices {
  header: { title: string; subtitle: string };
  babelfish: {
    title: string;
    paragraphs: string[];
    imageKey: string;
    protocol: {
      title: string;
      intro: string;
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
    intro: string;
    services: SovereignServiceCard[];
  };
  howItConnects: {
    title: string;
    paragraphs: string[];
    imageKey: string;
    stackTitle: string;
    layers: StackLayer[];
  };
  blockchainCta: {
    title: string;
    paragraphs: string[];
    bullets: string[];
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
  header: { title: string; subtitle: string };
  intro: {
    quote: string;
    quoteAuthor: string;
    paragraphs: string[];
  };
  coreComponents: {
    title: string;
    token42: {
      title: string;
      summary: string;
      purpose: string;
      purposeValue: string;
      totalSupply: string;
      totalSupplyValue: string;
      releaseSchedule: string;
      releaseScheduleValue: string;
      atLaunch: string;
      atLaunchValue: string;
      keyUse: string;
    };
    fish: {
      title: string;
      summary: string;
      howToEarn: string;
      bullets: string[];
      seeHow: string;
    };
    governance: {
      title: string;
      summary: string;
      points: string[];
      quote: string;
      quoteAuthor: string;
    };
  };
  masterPools: {
    title: string;
    paragraphs: string[];
    noteTitle: string;
    note: string;
    tableColumns: { pool: string; percent: string; purpose: string; annualUnlock: string };
    rows: MasterPoolRow[];
    closingTitle: string;
    closingNote: string;
  };
  hyperspace: {
    title: string;
    quote: string;
    quoteAuthor: string;
    paragraphs: string[];
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
    sectionIntro: string;
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
