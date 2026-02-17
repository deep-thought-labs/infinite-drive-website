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

export interface LocaleHome {
  hero: { title: string; subtitle: string; imageKey: string };
  quote: { text: string; author: string; source?: string };
  features: { title: string; description: string }[];
  ctas: { label: string; href: string; internal?: boolean }[];
  joinSection: { title: string; description: string; ctaLabel: string };
  openSourceNote: string;
}

export interface LocalePrivacy {
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  footerNote: string;
}

export interface LocaleContent {
  site: LocaleSite;
  routes: LocaleRoutes;
  home: LocaleHome;
  privacy: LocalePrivacy;
}
