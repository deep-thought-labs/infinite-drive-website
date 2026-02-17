/**
 * Configuración i18n y carga de contenido por locale.
 * Decisiones: docs/I18N-DECISIONS.md
 */

import type { LocaleContent } from "./locales/types";
import { enContent } from "./locales/en";

export const defaultLocale = "en" as const;
export const supportedLocales = ["en", "es"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return (supportedLocales as readonly string[]).includes(locale);
}

/** Contenido por locale; solo «en» tiene contenido hasta Fase 5. */
const contentByLocale: Record<SupportedLocale, LocaleContent> = {
  en: enContent,
  // es: se añade en Fase 5
  es: enContent, // fallback a inglés hasta tener traducción
};

/**
 * Devuelve el contenido para el locale dado. Si el locale no está soportado, devuelve el default.
 */
export function getContent(locale: string): LocaleContent {
  const safeLocale = isSupportedLocale(locale) ? locale : defaultLocale;
  return contentByLocale[safeLocale];
}
