/**
 * Configuración i18n y carga de contenido por locale.
 * Decisiones: docs/I18N-DECISIONS.md
 */

import type { LocaleContent } from "./locales/types";
import { enContent } from "./locales/en";
import { esContent } from "./locales/es";

export const defaultLocale = "en" as const;
export const supportedLocales = ["en", "es"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

/** Clave en localStorage para la preferencia de idioma (Fase 6). */
export const PREFERRED_LOCALE_KEY = "infinite-drive-preferred-locale";

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return (supportedLocales as readonly string[]).includes(locale);
}

/** Lee el locale preferido guardado (o null si no hay). */
export function getPreferredLocale(): SupportedLocale | null {
  try {
    const stored = localStorage.getItem(PREFERRED_LOCALE_KEY);
    return stored && isSupportedLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

/** Guarda el locale preferido. */
export function setPreferredLocale(locale: SupportedLocale): void {
  try {
    localStorage.setItem(PREFERRED_LOCALE_KEY, locale);
  } catch {
    // ignore
  }
}

/** Contenido por locale. */
const contentByLocale: Record<SupportedLocale, LocaleContent> = {
  en: enContent,
  es: esContent,
};

/**
 * Devuelve el contenido para el locale dado. Si el locale no está soportado, devuelve el default.
 * En desarrollo se hace log cuando se usa fallback (Fase 7).
 */
export function getContent(locale: string): LocaleContent {
  const safeLocale = isSupportedLocale(locale) ? locale : defaultLocale;
  if (import.meta.env.DEV && locale !== safeLocale) {
    console.warn(
      `[i18n] Locale "${locale}" no soportado; usando fallback "${safeLocale}". supportedLocales:`,
      supportedLocales
    );
  }
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

/**
 * Formato de fecha según el locale (Fase 7). Para uso cuando se muestren fechas en la UI.
 * Si el contenido ya trae la fecha como string localizado (ej. privacy.lastUpdated), no es necesario usarlo.
 */
export function formatDateForLocale(locale: string, date: Date, options?: Intl.DateTimeFormatOptions): string {
  const safeLocale = isSupportedLocale(locale) ? locale : defaultLocale;
  return new Intl.DateTimeFormat(safeLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  }).format(date);
}

/** Formato de número según el locale (Fase 7). Para cantidades o porcentajes en la UI. */
export function formatNumberForLocale(locale: string, value: number, options?: Intl.NumberFormatOptions): string {
  const safeLocale = isSupportedLocale(locale) ? locale : defaultLocale;
  return new Intl.NumberFormat(safeLocale, options).format(value);
}
