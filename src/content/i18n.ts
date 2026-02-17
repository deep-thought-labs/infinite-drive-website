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

/** Rutas base sin prefijo de locale (las que usa el contenido en cada idioma). */
export const BASE_PATHS = {
  home: "/",
  project42: "/project42",
  services: "/services",
  blockchain: "/blockchain",
  privacy: "/privacy",
} as const;

/**
 * Construye la ruta con el locale. Si locale es el por defecto, no añade prefijo (ej. /project42).
 * Si no, añade el prefijo (ej. /es/project42).
 */
export function pathWithLocale(locale: string, basePath: string): string {
  const path = basePath === "/" ? "" : basePath;
  if (locale === defaultLocale) return path || "/";
  return `/${locale}${path}`;
}

/**
 * Extrae el locale del pathname si existe. Ej. /es/privacy -> "es", /privacy -> undefined.
 */
export function getLocaleFromPathname(pathname: string): string | undefined {
  const segments = pathname.replace(/^\/+|\/+$/g, "").split("/");
  const first = segments[0];
  if (!first) return undefined;
  return isSupportedLocale(first) ? first : undefined;
}

/**
 * Pathname sin el segmento de locale. Ej. /es/privacy -> /privacy, /privacy -> /privacy.
 */
export function getBasePathFromPathname(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (!locale) return pathname || "/";
  const rest = pathname.slice(locale.length + 1) || "/";
  return rest.startsWith("/") ? rest : `/${rest}`;
}
