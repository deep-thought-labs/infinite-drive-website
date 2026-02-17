# Capa de contenido

Aquí vive **qué** se muestra en el sitio: textos, rutas, metadatos de assets, datos estructurados. **Sin JSX.**

## Reglas

- Solo TypeScript (tipos, constantes, objetos, arrays). Nada de componentes React.
- Las **vistas** (`pages/`, `components/`) importan desde `@/content` o `@/content/...` y renderizan estos datos.
- Un cambio de copy o de dato se hace en un solo lugar.

## Estructura (con i18n)

| Archivo / carpeta | Uso |
|-------------------|-----|
| `types.ts` | Tipos compartidos (Quote, FeatureItem, LegalSection, etc.) |
| `locales/types.ts` | Tipo `LocaleContent` y subtipos por dominio (LocaleSite, LocaleHome, etc.) |
| `locales/en/` | Contenido en inglés (site, routes, marketing/home, legal/privacy) |
| `locales/es/` | Contenido en español (se añade en Fase 5) |
| `i18n.ts` | `defaultLocale`, `supportedLocales`, `getContent(locale)` |
| `routes.ts` | Reexporta ROUTES y nav del contenido por defecto |
| `assets.ts` | Metadata de imágenes (id, alt, créditos, usedIn) |
| `index.ts` | Barrel: reexporta contenido en inglés para compatibilidad con vistas actuales |

## Cómo usar desde una vista (actual)

```ts
import { site, homeHero, homeFeatures } from "@/content";
import { ROUTES, navRoutes } from "@/content/routes";
```

A partir de Fase 4 las vistas usarán `useContent()` para obtener el contenido del locale actual.

## Añadir un nuevo idioma

Crear `locales/<locale>/` con la misma estructura que `locales/en/` y registrar el contenido en `i18n.ts`.
