# UI and component organization — Phased roadmap

This document proposes **phases and steps** to achieve the organization described in [UI-COMPONENT-ANALYSIS.md](./UI-COMPONENT-ANALYSIS.md): design tokens, shared site components, shell components, and consistent use of primitives so the UI is fully sectioned, reusable, and editable in one place.

**Target outcomes** (once the roadmap is complete):

- **New sections** can be added by defining content + composing existing components, with no duplicated markup or styles.
- **Existing sections** can be edited (copy, order, layout) from a single place per concern (content vs UI).
- **Global reorganizations** (e.g. reorder sections, change site-wide look) are done by editing tokens or shared components, not by searching and replacing across many files.
- **Content and process** stay optimal: one source of truth for copy and for each UI pattern; no duplicated tasks or code.
- **Maintainability** is high: clear rules for where to change what.
- **AI-friendly:** A separate guide ([EDITING-AND-STRUCTURE.md](./EDITING-AND-STRUCTURE.md)) gives an explicit, rule-based description of the architecture and how to edit or extend the site so that any AI model can follow the same structure and conventions.

---

## Overview

| Phase | Goal | Outcome |
|-------|------|---------|
| **0** | Design tokens | One CSS file with palette and spacing; app imports it and uses variables |
| **1** | Shell components | NavLink, MobileNavLink, LocaleSelector in `components/layout/`; styles from tokens |
| **2** | Core site components | SectionHeading, QuoteBlock, SectionDivider, CalloutBox, BulletList |
| **3** | Card and section components | ContentCard, PageSection; replace repeated card/section markup |
| **4** | Table and page-header components | SiteTable, PageHeader; unify tables and title+subtitle blocks |
| **5** | Refactor pages to use components | All pages use tokens + site components; no duplicated inline patterns |
| **6** | Documentation and cleanup | ARCHITECTURE updated; remove obsolete inline style constants |

Each phase is **deliverable on its own**: you can stop after any phase and have a better-organized codebase. Dependencies run in order (tokens first, then components that use them, then refactor).

---

## Phase 0 — Design tokens

**Goal:** Centralize colors and key spacing in one place so global visual changes require editing a single file.

### Steps

1. **Create a tokens file**
   - Add `src/styles/tokens.css` (or adopt and fix `src/styles/globals.css`).
   - Define CSS custom properties for the current palette, for example:
     - **Backgrounds:** `--id-bg-page`, `--id-bg-card`, `--id-bg-elevated` (e.g. `#0d1117`, `#1c2128`, `#161b22`).
     - **Text:** `--id-text-primary`, `--id-text-secondary`, `--id-text-muted` (e.g. `#e6edf3`, `#c9d1d9`, `#8b949e`).
     - **Accent / border:** `--id-accent`, `--id-accent-soft`, `--id-border`, `--id-border-subtle` (e.g. `#6ba3db`, `#00d9ff`, `#30363d`, `#444c56`).
   - Add a few spacing/size tokens if useful (e.g. `--id-section-gap`, `--id-radius`).

2. **Wire tokens into the app**
   - Import the tokens file in `main.tsx` (before or after `index.css` so it is loaded).
   - Ensure the root element or body has the token values available (e.g. `:root { ... }` in the same file or in a layer).

3. **Optional: Tailwind theme**
   - If you use Tailwind v4 theme, map the same tokens into `@theme` (or equivalent) so utility classes like `bg-[var(--id-bg-card)]` can be used where convenient.

### Deliverable

- One token file defining the site palette (and optionally spacing).
- App loads that file; no change to pages yet (tokens are available for the next phases).

### Success criteria

- Changing e.g. `--id-accent` in the token file and using it in one test component updates that component’s accent color.

---

## Phase 1 — Shell components

**Goal:** Move nav and language selector into reusable components under `components/layout/` and style them with tokens (or classes that use tokens).

### Steps

1. **Extract NavLink**
   - Create `components/layout/NavLink.tsx`.
   - Props: `to`, `children`, `isActive` (and any other needed for `Link`).
   - Replace inline styles with classes or `style={{ ... }}` using CSS variables (e.g. `color: 'var(--id-text-muted)'`, active `var(--id-accent)`).

2. **Extract MobileNavLink**
   - Create `components/layout/MobileNavLink.tsx`.
   - Props: `to`, `children`, `isActive`, `onNavigate`.
   - Same idea: use tokens for colors and background.

3. **Extract LocaleSelector**
   - Create `components/layout/LocaleSelector.tsx`.
   - Props: `currentLocale`, `onNavigateLocale`, `onMobileSelect?`, `variant`.
   - Use tokens for text and active state.

4. **Use components in App.tsx**
   - Replace local `NavLink`, `MobileNavLink`, and `LocaleSelector` with imports from `components/layout/`.
   - Remove the in-file component definitions and duplicate style objects.

### Deliverable

- Three new layout components; App shell only composes them.
- Nav and language selector styles driven by tokens (or a single shared CSS module).

### Success criteria

- Visual behavior of nav and selector unchanged.
- Changing a token used by nav (e.g. accent) updates nav appearance everywhere.

---

## Phase 2 — Core site components (heading, quote, divider, callout, list)

**Goal:** Introduce shared components for the most repeated patterns so one edit updates all usages.

### Steps

1. **Create `components/site/`**
   - Add folder `src/components/site/` (or `components/marketing/`).
   - Add a short `README.md` or comment describing the folder: “Site-specific building blocks that use design tokens.”

2. **SectionHeading**
   - `SectionHeading.tsx`: accepts `level` (1 | 2), `children`; optional `className`.
   - Renders `h1` or `h2` with font-mono and token-based font size and color (e.g. `var(--id-text-primary)`).
   - Use for both page titles and section titles (level 1 vs 2).

3. **QuoteBlock**
   - `QuoteBlock.tsx`: props e.g. `quote: string`, `author: string`, `source?: string`.
   - One wrapper with left border and background from tokens; inner blockquote and author line.
   - Replaces repeated quote markup on Home, Project42, Blockchain, Services.

4. **SectionDivider**
   - `SectionDivider.tsx`: no props (or optional `className`).
   - Renders the horizontal line (border-top + margin) using token for border color.

5. **CalloutBox**
   - `CalloutBox.tsx`: props `children`, optional `variant?: 'accent' | 'muted'` (for border left accent vs muted).
   - Uses `--id-bg-elevated` and `--id-accent` / `--id-border` for the left border.

6. **BulletList**
   - `BulletList.tsx`: props `items: string[]` or `children` (ReactNode for flexibility).
   - Consistent “→” prefix and text color from tokens.

### Deliverable

- Five site components implemented and exported (e.g. from `components/site/index.ts`).
- No page refactor yet; components are ready to use.

### Success criteria

- Replacing one quote block on one page with `<QuoteBlock quote={...} author={...} />` looks correct and uses tokens.

---

## Phase 3 — Card and section components

**Goal:** Unify card-like blocks and section wrappers so cards and sections are consistent and editable in one place.

### Steps

1. **ContentCard**
   - `ContentCard.tsx`: props for optional icon, title, children; optional `className`, `style` for overrides.
   - Uses tokens for background, border, title color; composes `Card` from `ui/card` or a plain div with token classes.
   - Can support a “compact” variant (e.g. for small info boxes).

2. **PageSection**
   - `PageSection.tsx`: props `title?: string`, `children`, optional `headingLevel`, `className`.
   - Renders optional SectionHeading + children; consistent bottom margin.
   - Use SectionDivider between sections where needed (or a prop like `showDividerAbove`).

3. **Use in one page as pilot**
   - Refactor one long page (e.g. Project42 or Services) to use ContentCard + PageSection + QuoteBlock + SectionDivider + CalloutBox + BulletList where they fit.
   - Keep content from `useContent()`; only replace markup and inline styles with components.

### Deliverable

- ContentCard and PageSection implemented.
- At least one page refactored to use Phase 2 + Phase 3 components so the pattern is proven.

### Success criteria

- The pilot page looks the same (or better) and has no duplicated hex colors or repeated structure for quotes/cards/sections.

---

## Phase 4 — Table and page-header components

**Goal:** Centralize table styling and the “page title + subtitle” block.

### Steps

1. **SiteTable**
   - `SiteTable.tsx`: props for table structure (e.g. `columns: { key, label }[]`, `rows: Record<string, ReactNode>[]`) or accept `children` for full control.
   - Wrapper that applies token-based background, borders, and text colors so all site tables look the same.

2. **PageHeader**
   - `PageHeader.tsx`: props `title: string`, `subtitle?: string` (or `subtitle: ReactNode`).
   - Uses SectionHeading (level 1) and a subtitle paragraph with token-based muted color.

3. **Use across pages**
   - Replace all “page title + subtitle” blocks with PageHeader.
   - Replace table markup on Project42 and Blockchain with SiteTable (or a thin wrapper around it).

### Deliverable

- SiteTable and PageHeader in `components/site/`.
- All pages that have a title+subtitle use PageHeader; all site tables use SiteTable.

### Success criteria

- Changing a table border token updates all tables; changing PageHeader styling updates all page headers.

---

## Phase 5 — Full page refactor

**Goal:** Every page uses tokens and site components; no duplicated inline patterns or local style constants for the shared look.

### Steps

1. **Refactor remaining pages**
   - HomePage: remove `cardStyle`, `headingStyle`; use PageHeader, SectionHeading, QuoteBlock, ContentCard (for features), CalloutBox, SectionDivider.
   - ServicesPage: replace SovereignCard with ContentCard (or a ServicesCard that composes ContentCard) and use QuoteBlock, CalloutBox, BulletList, SectionDivider; ensure all colors from tokens.
   - BlockchainPage: use PageHeader, ContentCard, QuoteBlock, CalloutBox, SiteTable, SectionDivider, BulletList.
   - PrivacyPolicyPage: use PageHeader, SectionHeading, CalloutBox if applicable; tokens for body text and section titles.

2. **Remove inline palette usage**
   - Search for remaining hex codes from the palette (#0d1117, #1c2128, #161b22, #e6edf3, #c9d1d9, #8b949e, #6ba3db, #00d9ff, #30363d, #444c56) and replace with token-based styles or component usage.

3. **Optional: ContentCard variants**
   - If needed, add a “feature” or “service” variant to ContentCard (or a wrapper) so Home features and Services cards share one base component.

### Deliverable

- All pages refactored; no duplicated pattern markup; styles driven by tokens and site components.

### Success criteria

- Changing `--id-accent` (or equivalent) in the token file changes accent color across the entire site without editing pages or App.

---

## Phase 6 — Documentation and cleanup

**Goal:** Architecture docs and repo reflect the new structure; no leftover obsolete style objects or comments; the system is easy for humans and AI to understand and extend.

### Steps

1. **Update ARCHITECTURE.md**
   - Add a subsection under “Views and layout” (or a new “UI and design system” section) that describes:
     - Design tokens: where they live, how they are used.
     - `components/site/`: purpose and list of components (SectionHeading, QuoteBlock, ContentCard, etc.).
     - Rule of thumb: pages use site components and tokens; avoid inline hex for the main palette.

2. **Document tokens**
   - In the token file or in a short `docs/DESIGN-TOKENS.md`, list tokens and their role (e.g. “--id-accent: primary accent and active nav”).

3. **Create EDITING-AND-STRUCTURE.md (editing guide for humans and AI)**
   - Single entry point for “how to edit and extend the site.” Structure it so that both humans and AI can follow it without guessing:
     - **Where things live:** Content → `src/content/locales/{en,es}/`. UI patterns → `src/components/site/`. Shell → `src/components/layout/`. Global look → tokens file.
     - **To add a new section/page:** 1) Add content and types; 2) Add route if needed; 3) Add page that uses `useContent()` and site components only.
     - **To change copy:** Edit only the content layer for the right locale; no component changes.
     - **To change a UI pattern globally:** Edit the single component in `components/site/` (or the token file for colors/spacing).
     - **To reorganize (e.g. move a block, reorder sections):** Change content structure or page composition; reuse existing components.
   - Use short, rule-based bullets and a simple “Where to edit what” table so an AI can resolve “user asked to change X” → “edit file Y.”

4. **Cleanup**
   - Remove any unused style constants (e.g. `cardStyle` in HomePage if already removed).
   - Ensure `components/site/` has a single entry point (e.g. `index.ts`) and that README or ARCHITECTURE points to it.
   - In README or ARCHITECTURE, add one line pointing to EDITING-AND-STRUCTURE.md for “how to add or edit sections and UI.”

### Deliverable

- Docs updated; tokens documented; EDITING-AND-STRUCTURE.md created; codebase clean.

### Success criteria

- A new developer (or an AI) can read ARCHITECTURE + EDITING-AND-STRUCTURE and know where to change global visuals, where to add a section, and where to edit content—without duplicated code or ambiguous instructions.

---

## Dependency order

```
Phase 0 (tokens) → Phase 1 (shell) → Phase 2 (core site) → Phase 3 (cards/sections)
                                                         → Phase 4 (table/header)
                                                         → Phase 5 (refactor all)
                                                         → Phase 6 (docs)
```

- **Phase 0** is required for all others if you want a single source for colors.
- **Phases 1–4** can be parallelized after Phase 0 (e.g. 1 + 2 in parallel), but 3 and 4 benefit from 2 being done.
- **Phase 5** uses components from 2, 3, and 4.
- **Phase 6** after 5.

---

## Summary table

| Phase | Name              | Main deliverable                          |
|-------|-------------------|--------------------------------------------|
| 0     | Design tokens     | One token file; app imports it             |
| 1     | Shell components  | NavLink, MobileNavLink, LocaleSelector in layout |
| 2     | Core site components | SectionHeading, QuoteBlock, SectionDivider, CalloutBox, BulletList |
| 3     | Card and section  | ContentCard, PageSection; pilot page refactor |
| 4     | Table and header  | SiteTable, PageHeader; used on all pages  |
| 5     | Full refactor     | All pages use tokens + site components    |
| 6     | Documentation     | ARCHITECTURE + token docs + EDITING-AND-STRUCTURE; cleanup |

You can stop after any phase: after 0 you have tokens; after 1 the shell is reusable; after 2–4 you have the building blocks; after 5 the UI is fully organized; after 6 the approach is documented and ready for future changes.
