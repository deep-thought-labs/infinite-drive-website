# Content layer

This folder holds **what** the site displays: copy, route labels, asset metadata, and structured data. **No JSX.**

## Rules

- **TypeScript only:** types, constants, objects, arrays. No React components.
- **Views** (`src/pages/`, `src/components/`) get content via **`useContent()`** from `LocaleContext` and render it. They do not import content modules for copy.
- A change to copy or a label is made in one place (the right locale file).

## Structure

| Path | Purpose |
|------|--------|
| `types.ts` | Shared types (e.g. `AssetMeta`) |
| `locales/types.ts` | `LocaleContent` and per-domain types (`LocaleHome`, `LocalePrivacy`, `LocaleProject42`, etc.) |
| `locales/en/` | English content: `site`, `routes`, `marketing/home`, `marketing/project42`, `marketing/services`, `marketing/blockchain`, `legal/privacy` |
| `locales/es/` | Spanish content: same structure as `en` |
| `i18n.ts` | `defaultLocale`, `supportedLocales`, `getContent(locale)`, `pathWithLocale`, persistence helpers |
| `routes.ts` | Re-exports routes from the default locale (for non-view usage if needed) |
| `assets.ts` | Image metadata (id, alt, credits, usedIn). Shared across locales. |
| `index.ts` | Barrel: types, assets, i18n exports |

## Using content in a view

```ts
import { useContent } from "@/contexts/LocaleContext";

const content = useContent();
// content.site, content.home, content.project42, content.services, content.blockchain, content.privacy
```

Navigation and route labels come from the current locale’s content: `content.routes.navRoutes`, `content.routes.routeDefs`, etc. The shell and footer use these; they do not import `@/content/routes` for labels.

## Adding a new locale

1. Create `locales/<locale>/` with the same structure as `locales/en/` (e.g. `site.ts`, `routes.ts`, `marketing/*`, `legal/privacy.ts`, `index.ts`).
2. In `i18n.ts`, add the locale to `supportedLocales` and to the `contentByLocale` map (import and register the new content object).
