/**
 * Contexto de locale actual (desde la URL) y hook para obtener el contenido de ese locale.
 * Fase 3 i18n.
 */

import { createContext, useContext, useMemo } from "react";
import { getContent } from "@/content/i18n";
import type { LocaleContent } from "@/content/locales/types";
import type { SupportedLocale } from "@/content/i18n";

interface LocaleContextValue {
  locale: string;
  /** Para el selector de idioma (Fase 6); por ahora opcional */
  setLocale?: (locale: SupportedLocale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  setLocale,
  children,
}: {
  locale: string;
  setLocale?: (locale: SupportedLocale) => void;
  children: React.ReactNode;
}) {
  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale }),
    [locale, setLocale]
  );
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

/**
 * Devuelve el contenido del locale actual (el de la URL). Usar en vistas en lugar de import directo de @/content.
 */
export function useContent(): LocaleContent {
  const { locale } = useLocale();
  return useMemo(() => getContent(locale), [locale]);
}
