# Editing and structure — How to change and extend the site

This document is the **single entry point** for understanding where everything lives and how to add sections, edit content, or change the UI globally. It is written so that both **humans** and **AI assistants** can follow the same rules and conventions without guessing or duplicating code.

**Prerequisite reading:** [ARCHITECTURE.md](./ARCHITECTURE.md) describes the overall architecture (content layer, routing, i18n). This guide focuses on **where to edit what** and **how to do common tasks**.

---

## 1. Where things live

| What you want to change | Where to edit | Rule |
|------------------------|---------------|------|
| **Copy or labels (any language)** | `src/content/locales/{en,es}/` — the right file per page or domain (e.g. `marketing/home.ts`, `legal/privacy.ts`) | Never put copy in components or pages. Only in content. |
| **Route labels, nav labels** | `src/content/locales/{en,es}/routes.ts` | Same as above. |
| **Site-wide colors, spacing, borders** | Design tokens file (e.g. `src/styles/tokens.css` or the file imported in `main.tsx`). See DESIGN-TOKENS or ARCHITECTURE. | One file. All components and pages use variables from here. |
| **One UI pattern used in many places** (e.g. all quote blocks, all section titles) | The **single** component in `src/components/site/` that implements that pattern (e.g. `QuoteBlock.tsx`, `SectionHeading.tsx`) | One component per pattern. Pages only use it; they do not reimplement it. |
| **Shell (nav, footer, language selector)** | `src/components/layout/` (e.g. `NavLink.tsx`, `LocaleSelector.tsx`) and `src/App.tsx` (composition only) | Shell UI is in layout components; App only composes them. |
| **Layout of a single page** | The page file in `src/pages/` (e.g. `HomePage.tsx`). Compose site components and content only. | Page = structure + `useContent()` + site components. No new inline patterns or duplicate styles. |
| **New route or new locale** | Routes: `App.tsx` + content `routes.ts` per locale. New locale: `content/locales/<locale>/` + `content/i18n.ts`. | See ARCHITECTURE for routing and i18n. |

**Rule of thumb:** If it’s **text or data**, it’s in **content**. If it’s **look or structure of a repeated pattern**, it’s in **tokens** or **one site/layout component**. If it’s **page-specific layout**, it’s in the **page** using only content + components.

---

## 2. How to add a new section or page

Follow these steps in order. Do not duplicate markup or styles; reuse existing components and content types.

1. **Content**
   - Add or extend types in `src/content/locales/types.ts` if the new section needs new data shapes.
   - Add content for each locale in `src/content/locales/{en,es}/` (e.g. a new file under `marketing/` or a new section in an existing file).
   - Register the new content in `src/content/locales/{en,es}/index.ts` so it appears in `LocaleContent`.

2. **Route (if it’s a new page)**
   - Add the route in `src/App.tsx` (both route trees: without locale and with `/:locale`).
   - Add the path and label in `src/content/locales/{en,es}/routes.ts` (and to `navRoutes` if it should appear in the nav).

3. **Page component**
   - Create a new component in `src/pages/` (e.g. `NewSectionPage.tsx`).
   - Use **only** `useContent()` for copy and data; use **only** components from `src/components/site/` and `src/components/layout/` for UI (SectionHeading, QuoteBlock, ContentCard, PageSection, etc.). Use **tokens** for any one-off styling (no hardcoded hex for the main palette).

4. **No duplication**
   - Do not copy-paste large blocks of JSX or style objects from another page. If a pattern repeats, it should be (or become) a shared component in `components/site/`.

---

## 3. How to edit existing sections

| Task | Action |
|------|--------|
| **Change copy or labels** | Edit only the content file for the right locale: `src/content/locales/{en,es}/...`. Rebuild; no component changes. |
| **Change order of sections on a page** | Reorder the composition in the page component (e.g. move `<PageSection>...</PageSection>` blocks). Content can stay as-is if it’s already split by section. |
| **Change how one type of block looks everywhere** (e.g. all quote blocks) | Edit the **one** component in `src/components/site/` that renders that block (e.g. `QuoteBlock.tsx`). All pages using it update. |
| **Change a single page’s layout** | Edit only that page in `src/pages/`. Use existing site components; do not add new inline patterns that duplicate existing components. |

---

## 4. How to do global reorganizations or visual changes

| Task | Action |
|------|--------|
| **Change site-wide colors or spacing** | Edit the **design tokens** file only. All components and pages that use the tokens update. |
| **Change how all cards look** | Edit the shared card component in `src/components/site/` (e.g. `ContentCard.tsx`) or the tokens it uses. |
| **Change nav or footer** | Edit components in `src/components/layout/` (and tokens if needed). |
| **Move a block from one page to another** | Move the content (or section) in the content layer if needed; in the page components, add or remove the composition that renders that block using the same site component. No copy-paste of markup. |
| **Reorder nav items** | Edit `navRoutes` (or equivalent) in `src/content/locales/{en,es}/routes.ts`. The shell renders from that; no need to edit App for order. |

---

## 5. Conventions that help AI and humans

- **One source of truth:** Each piece of content has one definition per locale. Each UI pattern has one component (or one token set). Resolve “change X” to “edit file Y” uniquely when possible.
- **Naming:** Use clear, semantic names. Tokens: e.g. `--id-bg-card`, `--id-text-primary`. Components: e.g. `QuoteBlock`, `SectionHeading`. Content: by domain (e.g. `home`, `privacy`, `project42`).
- **Layering:** Content → content layer. Look and structure of repeated patterns → tokens + site components. Page-specific layout → page component that only composes content + components.
- **No duplication:** If you need to repeat a block of markup or a style pattern, extract it to a shared component or a token and reuse. Do not copy-paste the same block into multiple pages.
- **Documentation:** Keep this file and ARCHITECTURE up to date when you add a new layer (e.g. a new component folder or a new content domain) so that “where to edit what” stays unambiguous.

---

## 6. Quick reference: “I want to …”

| I want to … | Do this |
|-------------|--------|
| Change a string or label | Edit `src/content/locales/{en,es}/...` in the right file. |
| Add a new page | Add content + route + one new page component that uses `useContent()` and site components only. |
| Change the accent color everywhere | Edit the accent token in the tokens file. |
| Change how all section titles look | Edit `SectionHeading` in `src/components/site/`. |
| Change how one page is structured | Edit that page in `src/pages/`; keep using site components. |
| Add a new locale | Add `src/content/locales/<locale>/` and register in `i18n.ts`. |
| Change nav items or order | Edit `routes.ts` (and nav structure) in each locale. |

This table and the sections above are the intended contract for editing and extending the site so that the process is optimal, non-duplicated, and easy to follow for both humans and AI.
