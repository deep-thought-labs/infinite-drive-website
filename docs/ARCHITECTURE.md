# Infinite Drive Website — Architecture

This document describes the **current** architecture of the site: how it is structured, how content and locale work, and how routing and views are organized.

---

## 1. Overview

The Infinite Drive website is a **single-page application (SPA)** built with:

- **React 18** and **TypeScript**
- **Vite 6** for build and dev server
- **React Router v6** for client-side routing
- **Tailwind CSS v4** and **Radix UI** (shadcn/ui-style components)

The site is **bilingual** (English and Spanish). Content is fully separated from presentation: all copy and structured data live in a content layer; views only render data provided by that layer and never embed copy in JSX.

---

## 2. Content layer

### 2.1 Purpose

The **content layer** (`src/content/`) holds everything that defines *what* is shown: copy, route labels, site metadata, and structured data. It contains **no JSX** and no React components—only TypeScript types, constants, and plain objects.

- **Single source of truth:** Changing a string or a label is done in one place.
- **Locale-specific:** Each supported language has its own content tree; the app chooses the right one from the current locale.

### 2.2 Structure

```
src/content/
├── types.ts              # Shared types (e.g. AssetMeta)
├── assets.ts             # Image metadata (id, alt, credits, usedIn) — shared across locales
├── i18n.ts               # Locale config, getContent(locale), pathWithLocale, persistence
├── routes.ts             # Re-exports routes from default locale (for non-React usage if needed)
├── index.ts              # Barrel: types, assets, i18n exports
├── locales/
│   ├── types.ts          # LocaleContent and per-domain types (LocaleHome, LocalePrivacy, etc.)
│   ├── en/
│   │   ├── index.ts      # enContent (full content object for English)
│   │   ├── site.ts
│   │   ├── routes.ts
│   │   ├── marketing/
│   │   │   ├── home.ts
│   │   │   ├── project42.ts
│   │   │   ├── services.ts
│   │   │   └── blockchain.ts
│   │   └── legal/
│   │       └── privacy.ts
│   └── es/
│       └── (same structure as en/)
```

- **`locales/types.ts`** defines `LocaleContent` and all sub-types (e.g. `LocaleHome`, `LocalePrivacy`, `LocaleProject42`, `LocaleServices`, `LocaleBlockchain`).
- Each locale folder exports a single object (e.g. `enContent`, `esContent`) that implements `LocaleContent`.
- **Assets** (images) are shared: metadata lives in `assets.ts`; image files live in `src/assets/`. Alt text and credits are the same for all locales unless you later add locale-specific asset metadata.

### 2.3 How content is loaded

- **`getContent(locale)`** (in `i18n.ts`) returns the full `LocaleContent` for the given locale. If the locale is not supported, it falls back to the default locale (`en`) and, in development, logs a warning.
- **`useContent()`** (from `LocaleContext`) is the hook used in views. It returns `getContent(currentLocale)` where `currentLocale` comes from the URL (via the router and `LocaleProvider`). Views must use `useContent()` and never import raw content modules for copy or labels.

---

## 3. Locale and i18n

### 3.1 Supported locales

- **Default locale:** `en` (English)
- **Supported locales:** `['en', 'es']`
- **Config and helpers** live in `src/content/i18n.ts`: `defaultLocale`, `supportedLocales`, `isSupportedLocale(locale)`, `getContent(locale)`, `pathWithLocale(locale, basePath)`, `getLocaleFromPathname(pathname)`, `getBasePathFromPathname(pathname)`.

### 3.2 URL strategy

- **Optional locale prefix:**
  - **Without prefix:** `/`, `/project42`, `/privacy`, etc. → content is shown in the **default** locale (`en`), unless a stored preference exists (see below).
  - **With prefix:** `/es`, `/es/project42`, `/es/privacy` → content is shown in that locale (`es`).
- **Path building:** `pathWithLocale(locale, basePath)` builds the path for a given locale. For the default locale it returns the path without prefix (e.g. `/project42`); for others it returns the prefixed path (e.g. `/es/project42`).

### 3.3 Persistence and redirect

- The user’s language choice is stored in **localStorage** under the key `infinite-drive-preferred-locale` (see `PREFERRED_LOCALE_KEY`, `getPreferredLocale()`, `setPreferredLocale()` in `i18n.ts`).
- When the user opens a URL **without** a locale (e.g. `/` or `/project42`), the app checks the stored preference. If it is set and different from the default (e.g. `es`), the app **redirects** to the same logical path with that locale (e.g. `/` → `/es`, `/project42` → `/es/project42`).

### 3.4 Language selector

- A **language selector** (EN | ES) is available in the main nav (desktop) and in the mobile menu.
- Choosing a language: (1) navigates to the current page’s path in the new locale (using `pathWithLocale`), and (2) saves the choice in localStorage for future visits.

### 3.5 Context and provider

- **`LocaleProvider`** (in `src/contexts/LocaleContext.tsx`) wraps the app shell and receives the current locale (derived from the URL). It provides that locale and, via **`useContent()`**, the corresponding `LocaleContent` for all children.
- **`useLocale()`** returns `{ locale, setLocale? }`; **`useContent()`** returns `getContent(locale)` and is the main API for pages and components that need copy or data.

### 3.6 SEO and document attributes

- **`document.documentElement.lang`** is set to the current locale.
- **`<link rel="alternate" hreflang="en">` and **`hreflang="es"`** (and **`hreflang="x-default"`**) are injected into the document head for the current path so search engines can discover language variants.

---

## 4. Routing

### 4.1 Route definitions

Routing is defined in **`src/App.tsx`** with two branches:

1. **Routes without locale prefix**  
   `path="/"` with nested routes: index (Home), `project42`, `blockchain`, `services`, `privacy`.  
   These use the default locale (or redirect to the preferred locale if set).

2. **Routes with locale prefix**  
   `path="/:locale"` with the same nested routes inside a **`LocaleGuard`** that ensures the segment is a supported locale, then renders **`AppShell`** and an **`Outlet`** for the nested route.

So the same page components (e.g. `HomePage`, `Project42Page`) are used for both branches; the only difference is whether the locale comes from the URL segment or defaults to `en`.

### 4.2 Paths and navigation

- **Base paths** (logical routes) are in `BASE_PATHS` in `i18n.ts`: `home: "/"`, `project42: "/project42"`, `services: "/services"`, `blockchain: "/blockchain"`, `privacy: "/privacy"`.
- **Nav labels** and which routes appear in the nav come from **content**: `getContent(currentLocale).routes.navRoutes` (and optionally `routeDefs` for other labels, e.g. Privacy in the footer). Each locale has its own `routes.ts` with the same structure but translated labels.

### 4.3 User-facing routes

| Path (no prefix) | Path (with locale, e.g. Spanish) | Section    |
|------------------|----------------------------------|------------|
| `/`              | `/es`                            | Home       |
| `/project42`     | `/es/project42`                  | Project 42 |
| `/services`      | `/es/services`                   | Network    |
| `/blockchain`    | `/es/blockchain`                 | Foundation |
| `/privacy`       | `/es/privacy`                    | Privacy    |

Any other path is redirected to `/` (or `/es` when in the locale-prefixed branch).

---

## 5. Views and layout

### 5.1 Pages

- **Pages** live in `src/pages/`: `HomePage`, `Project42Page`, `ServicesPage`, `BlockchainPage`, `PrivacyPolicyPage`.
- They use **`useContent()`** to get the current locale’s content and render it. They do **not** import content modules directly for copy; they may import from `@/content` for types, `pathWithLocale`, or asset metadata.
- Internal navigation (e.g. from Services to Blockchain) uses the same locale: the shell’s `onNavigate(path)` (passed via `Outlet` context) calls `navigate(pathWithLocale(currentLocale, path))`.

### 5.2 Shell and layout

- **AppShell** (in `App.tsx`) provides: top nav (with locale selector), main area (React Router **`Outlet`** for the current page), and footer.
- The shell reads the current locale from the URL (via `useParams()` and fallback to default), resolves content with `getContent(currentLocale)`, and wraps the tree in **`LocaleProvider`** so all children can use **`useContent()`** and **`useLocale()`**.
- **PageLayout** (`src/components/layout/PageLayout.tsx`) is a simple wrapper for page content (max-width, padding). **LocaleGuard** ensures that the `:locale` param is supported and renders the nested route’s element (the shell’s **`Outlet`**).

### 5.3 Components

- **`components/layout/`** — layout (PageLayout, LocaleGuard).
- **`components/shared/`** — shared presentational components (e.g. ImageWithFallback).
- **`components/ui/`** — primitives (shadcn/ui-style). No copy; they receive props from pages or content.
- **`components/site/`** — site-specific UI (SectionHeading, LeadParagraph, ContentCard, CalloutBox, FormattedText, etc.). These define the **default** style for their element type so the same role looks the same everywhere.

### 5.4 Design guidelines (text and color)

- **Same element / same component → same style.** If it’s the same type of content (e.g. lead paragraph, body text, secondary list), do not customize per page or per instance; only the content changes. Customizations (opacity, color, etc.) are for a **specific purpose** (e.g. a different role like “page subtitle” or “quote”), and those variants must be documented in a central design doc.
- **Central design reference:** All tokens, allowed opacities, and per-component defaults are defined in **[DESIGN-TOKENS-AND-STYLES.md](DESIGN-TOKENS-AND-STYLES.md)**. Any style that makes an element “unique” (opacity, color, size) must follow that doc or the component’s default; no ad-hoc values that break consistency.
- **One style per role:** Lead = primary; body / lists = secondary; metadata = muted. Opacity is used only where the design doc allows (e.g. PageHeader subtitle, QuoteBlock). Same component with same content role → no per-instance overrides.

---

## 6. Summary

| Aspect            | Implementation                                                                 |
|-------------------|---------------------------------------------------------------------------------|
| **Content**       | `src/content/` and `src/content/locales/{en,es}/`; typed `LocaleContent`.      |
| **Consumption**   | Views use `useContent()` from `LocaleContext`; no copy in JSX.                  |
| **Locale**        | From URL (`/:locale` or default); optional redirect from localStorage.         |
| **Routing**       | Two route trees (no prefix + `/:locale`); same page components; pathWithLocale.|
| **Persistence**   | `localStorage` key `infinite-drive-preferred-locale`; used when URL has no locale. |
| **SEO**           | `lang` on `<html>`; `hreflang` links for en, es, and x-default.                |
| **Assets**        | Shared across locales; metadata in `content/assets.ts`.                       |

For **design tokens, opacities, and style rules** (same element = same style), see **[DESIGN-TOKENS-AND-STYLES.md](DESIGN-TOKENS-AND-STYLES.md)**. For how to add sections, edit content, or change the UI globally, see **[EDITING-AND-STRUCTURE.md](EDITING-AND-STRUCTURE.md)**. For deployment and local run, see the root **README.md** and **DEPLOY.md**.
