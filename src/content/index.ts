/**
 * Barrel: tipos, assets y utilidad i18n.
 * Las vistas consumen contenido vía useContent() (contexto); no importan contenido plano desde aquí.
 */

export * from "./types";
export * from "./assets";
export {
  getContent,
  defaultLocale,
  supportedLocales,
  isSupportedLocale,
  pathWithLocale,
  getLocaleFromPathname,
  getBasePathFromPathname,
  BASE_PATHS,
} from "./i18n";
export type { SupportedLocale } from "./i18n";
export type { LocaleContent } from "./locales/types";
