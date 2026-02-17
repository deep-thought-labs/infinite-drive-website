/**
 * Barrel: exportaciones para las vistas.
 * Por ahora reexporta el contenido en inglés (getContent('en')) con la forma que esperan las vistas.
 * En Fase 4 las vistas pasarán a useContent(); entonces este barrel puede simplificarse.
 */

import { getContent } from "./i18n";
import type { LocaleContent } from "./locales/types";

export * from "./types";
export * from "./assets";

const en = getContent("en");

export const site = en.site;
export const homeHero = en.home.hero;
export const homeQuote = en.home.quote;
export const homeFeatures = en.home.features;
export const homeCtas = en.home.ctas;
export const homeJoinSection = en.home.joinSection;
export const homeOpenSourceNote = en.home.openSourceNote;
export const privacyLastUpdated = en.privacy.lastUpdated;
export const privacyIntro = en.privacy.intro;
export const privacySections = en.privacy.sections;
export const privacyFooterNote = en.privacy.footerNote;

export type { LocaleContent };
