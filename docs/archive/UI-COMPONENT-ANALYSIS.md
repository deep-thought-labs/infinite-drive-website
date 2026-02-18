# UI and component architecture — Analysis

This document analyses whether the graphical and UI elements used across the site are **sectioned and encapsulated** so they can be reused, edited globally, and used as a base for new elements without losing consistency or maintainability.

---

## Goals and intent

The target state for the UI and content architecture is:

1. **Create new sections** — Adding a new page or section is a clear, repeatable process: add content (and optionally a route), compose existing UI components, no copy-paste of markup or styles.
2. **Edit existing sections** — Changing copy, order, or layout of existing sections is done in one place (content for copy, components or tokens for look and structure).
3. **Global reorganizations** — Reordering sections, moving blocks between pages, or applying a site-wide visual change (e.g. new accent, new card style) is possible without scattered edits or duplicated code.
4. **Content and process optimal** — Content lives only in the content layer; the path from “change a string” or “add a section” to “done” is straightforward and free of duplicated tasks.
5. **No duplicated code** — Each UI pattern and each piece of content has a single definition; reuse is by composition and reference, not by copying.
6. **Long-term maintainability** — Future contributors (and tooling) can understand where to change what and how to extend the system without reverse-engineering.
7. **AI-friendly structure** — The structure is explicit and documented so that any AI assistant can quickly understand the architecture, locate the right files, and follow the same conventions to add sections, edit content, or change the UI globally without guessing or duplicating logic.

The analysis below and the [UI-COMPONENT-ROADMAP](./UI-COMPONENT-ROADMAP.md) are aligned with these goals. After the roadmap is implemented, [EDITING-AND-STRUCTURE.md](./EDITING-AND-STRUCTURE.md) serves as the single entry point for how to edit and extend the site (for humans and for AI).

---

## 1. Current state

### 1.1 What is already encapsulated and reusable

| Layer | Location | Purpose |
|-------|----------|---------|
| **Layout** | `components/layout/PageLayout.tsx`, `LocaleGuard.tsx` | Page wrapper (max-width, padding); locale route guard. Reusable. |
| **Shared** | `components/shared/ImageWithFallback.tsx` | Image with fallback. Reusable. |
| **UI primitives** | `components/ui/*` (Card, Button, etc.) | shadcn-style primitives. Reusable and editable in one place. |
| **Content** | `content/`, `useContent()` | Copy and data are already separated; changing content does not require touching components. |

So: **layout**, **shared**, and **ui** are properly separated. Content is separate. The main gaps are in **how pages and the shell use** these pieces and in **visual design tokens**.

### 1.2 What is not encapsulated

1. **Design tokens (colors, spacing) are not centralized**  
   Pages and `App.tsx` use **inline styles** with hardcoded hex values repeated everywhere:
   - Backgrounds: `#0d1117`, `#1c2128`, `#161b22`
   - Text: `#e6edf3`, `#c9d1d9`, `#8b949e`
   - Accent/border: `#6ba3db`, `#00d9ff`
   - Borders: `#30363d`, `#444c56`, `#21262d`
   - Quote/callout left border: `3px solid #6ba3db`, `2px solid #8b949e`

   There is a `src/styles/globals.css` with a theme (e.g. `--card`, `--foreground`) but it is **not imported** anywhere; the app uses `index.css` (Tailwind) and does not use these variables in pages or the shell. So **global visual edits** (e.g. changing the accent or card background) require searching and replacing hex values in many files.

2. **Repeated UI patterns are implemented inline in each page**  
   The same “chunks” of UI appear in multiple places with the same structure and colors, but they are not shared components:

   | Pattern | Where it appears | Current implementation |
   |--------|-------------------|-------------------------|
   | **Page title + subtitle** | Every page | `<h1>` + `<p>` with repeated `fontSize`, `color`, `letterSpacing` |
   | **Section heading (h2)** | Project42, Services, Blockchain, Home | `className="font-mono mb-6"` + `style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}` |
   | **Quote / callout block** | Home, Project42, Blockchain, Services | `div` with `backgroundColor: "#1c2128"`, `borderLeft: "3px solid #6ba3db"`, blockquote + author |
   | **Feature/content card** | Home (features), Services (SovereignCard), Blockchain (cards) | Mix of raw `div` + `Card`; same palette applied via inline `style` |
   | **Section divider** | All long pages | `<div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />` |
   | **Bullet list (→)** | Services, Project42, Blockchain | `<ul>` + `<li>→ ...</li>` with `color: "#c9d1d9"` etc. |
   | **Small info box** (e.g. “How it works”) | Services, Project42 | `div` with `backgroundColor: "#161b22"`, `borderLeft: "2px solid #6ba3db"` |
   | **Table (dark)** | Project42, Blockchain | `<table>` with inline border/background/text colors |

   Editing one of these patterns “globally” (e.g. all section headings or all quote blocks) today means editing many places.

3. **Shell UI lives only in `App.tsx`**  
   Nav link, mobile nav link, and language selector are **not** extracted into components under `components/`:
   - `NavLink`, `MobileNavLink`, `LocaleSelector` are defined and used only in `App.tsx`.
   - Their styles (colors, hover) are inline.
   - Reusing the same look for a nav elsewhere, or changing the nav style globally, requires editing `App.tsx` and possibly copying the same style objects.

4. **Page-local “components”**  
   - **`SovereignCard`** in `ServicesPage.tsx`: encapsulates one card type but is not reusable from other pages; styles are inline; similar card patterns exist on Blockchain and Project42 without a shared component.
   - **Local style constants** (e.g. `cardStyle`, `headingStyle` in HomePage) are reused only inside that file.

So: **design tokens are not used by the app**, **repeated patterns are not components**, and **shell/nav UI is not in the shared component tree**. As a result, the UI is **not** fully sectioned for global reuse and single-place editing.

---

## 2. Gaps summary

| Gap | Impact |
|-----|--------|
| No single source for colors/spacing | Changing the palette or key dimensions requires edits in many files. |
| Repeated patterns implemented per page | Changing “all quote blocks” or “all section titles” requires touching every page. |
| Nav/selector not in `components/` | Nav and language selector cannot be reused or restyled in one place. |
| Inconsistent use of primitives | Some pages use `Card` with heavy inline overrides; others use raw `div`s with the same look. |
| `globals.css` theme unused | A theme exists but is not wired in; the app does not benefit from it. |

---

## 3. Recommendations (to achieve full encapsulation and easy global editing)

### 3.1 Design tokens (single source for visuals)

- **Define the site palette and key dimensions as CSS custom properties** in one file (e.g. extend or replace `globals.css` and import it from `main.tsx`, or use a dedicated `tokens.css`).
  - Map current hex values to semantic names, e.g.:
    - `--id-bg-page`, `--id-bg-card`, `--id-bg-elevated`
    - `--id-text-primary`, `--id-text-secondary`, `--id-text-muted`
    - `--id-accent`, `--id-border`, `--id-border-subtle`
  - Use these variables in **new or refactored components** (and optionally in Tailwind theme) so that one change updates the whole site.

- **Do not** rely on inline hex for the main palette; reserve inline styles for one-off overrides only.

### 3.2 Shared “site” components (reusable patterns)

Introduce a small set of **site-specific** components that encode the repeated patterns and use the design tokens (or shared props). Suggested location: `components/site/` (or `components/marketing/`), to distinguish from generic `ui/` and `layout/`.

| Component | Purpose | Replaces / unifies |
|-----------|---------|---------------------|
| **PageSection** | Section with optional title, consistent spacing and divider | Repeated section + h2 + divider markup |
| **SectionHeading** | Consistent h1/h2 style (font, size, color) | Inline h1/h2 styles on every page |
| **QuoteBlock** | Quote + author + optional source; left border, background | Quote blocks on Home, Project42, Blockchain, Services |
| **ContentCard** | Card with optional icon, title, body, list; uses tokens | Feature cards, SovereignCard-style blocks, Blockchain cards |
| **CalloutBox** | Small highlighted box (e.g. “How it works”, note) | Info boxes with `#161b22` + left border |
| **BulletList** | List with “→” and consistent text color | Repeated ul/li styling |
| **SectionDivider** | Horizontal line between sections | Repeated divider div |

These components should:
- Accept **content as props** (and children where it makes sense).
- Use **CSS classes or token-based styles** (no hardcoded hex in the component).
- Be **documented** so new pages or new sections can reuse them and new variants can be added in one place.

### 3.3 Shell and nav as reusable components

- Move **NavLink**, **MobileNavLink**, and **LocaleSelector** from `App.tsx` into `components/layout/` (or `components/site/`), with props for `to`, `isActive`, `onNavigate`, etc.
- Style them via **tokens or shared CSS**, not inline objects in `App.tsx`.
- Then the shell only composes layout and these components; any future reuse or global nav restyle happens in one place.

### 3.4 Use primitives consistently

- Prefer **Card** (or a **ContentCard** wrapper that applies the site look via tokens) for all card-like blocks instead of mixing Card + heavy overrides and raw divs.
- Use **design tokens** for Card background, border, and text so that changing “all cards” is a single token change.

### 3.5 Assets

- As agreed, assets (images) remain **shared across locales**; metadata stays in `content/assets.ts`. No change needed for encapsulation of assets.

---

## 4. Outcome after applying recommendations

- **One place to change** colors and key spacing (tokens).
- **One place to change** each pattern (section heading, quote, card, callout, list, divider) across the site (shared components).
- **One place to change** nav and language selector (layout/site components).
- **New pages or new sections** can reuse the same components and stay consistent; **new variants** can be added by extending or composing these components instead of copying markup and styles.

That would give you a UI that is **fully sectioned and encapsulated** for reuse and global editing while keeping the current content/view separation intact.

---

## 5. Suggested order of work

1. **Tokens:** Add and import a single token file; map current hex values to variables.
2. **Shell:** Extract NavLink, MobileNavLink, LocaleSelector to components and wire them to tokens (or shared styles).
3. **High-impact patterns:** Introduce SectionHeading, QuoteBlock, SectionDivider, then ContentCard / CalloutBox / BulletList.
4. **Refactor pages:** Replace inline repetition with the new components and token-based styles.
5. **Document:** Update `docs/ARCHITECTURE.md` (or add a short “UI and design system” section) to describe tokens and the `components/site/` (or equivalent) layer.

If you want to proceed, a practical next step is to implement **design tokens** and **one or two shared components** (e.g. SectionHeading and QuoteBlock) and refactor one page as a reference; then repeat for the rest.
