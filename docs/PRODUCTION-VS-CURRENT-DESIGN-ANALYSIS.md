# Production vs current design — Analysis for customizations

This document compares the **live production site** ([https://infinitedrive.xyz/](https://infinitedrive.xyz/)) with our **current implementation** after the UI roadmap (Phases 0–5). The goal is to identify **design customizations** that production uses per section or per component so we can support them without losing a single source of truth (tokens + shared components).

**Methodology:** Content and structure were fetched from production (home, blockchain; project42 and services timed out). Our codebase (pages, `components/site`, tokens) was reviewed to list what we render and which variants we support. Gaps are listed below with recommendations.

---

## 1. Typography and text styling

### 1.1 Uppercase / ALL CAPS

| Where (production) | Production behavior | Current implementation | Gap |
|--------------------|--------------------|-------------------------|-----|
| **Home hero title** | "INFINITE DRIVE" (all caps) | We render `home.hero.title` as-is; if content is "Infinite Drive" we show sentence case | Production likely uses **content in caps** or `text-transform: uppercase`. We have no variant for this. |
| **Home feature cards** | "SECURE FOUNDATION", "GLOBAL P2P NETWORK", etc. | ContentCard title renders content as-is | Same: need **content in caps** or a **typography variant** (e.g. `titleTransform?: 'uppercase' \| 'none'`). |
| **Blockchain section subheadings** | "IMPROBABILITY [42] — GOVERNANCE & UTILITY TOKEN", "FISH — NETWORK CONTRIBUTION & LIQUIDITY TOKEN", "GOVERNANCE — POWER TO THE PEOPLE" | ContentCard/SectionHeading render as-is | If content is stored in caps, we match. If not, we need a way to **optionally uppercase** titles per block. |
| **Blockchain subsections** | "NATIVE INTEROPERABILITY", "BRIDGES TO LEGACY CHAINS", "CONNECTED ECOSYSTEMS" | We use ContentCard title; no transform | Same as above. |
| **How to Participate** | "STAKE [42]", "BUILD & CONTRIBUTE", "GOVERN" | ContentCard titles | Same. |
| **Join the Movement** | "Join the Movement" (title case in production) | We render `home.joinSection.title` as-is | No gap if content matches. |

**Recommendation:**  
- **Option A (content-driven):** Store titles in the content layer in the desired casing (e.g. "SECURE FOUNDATION"). No component change.  
- **Option B (component-driven):** Add an optional prop to `SectionHeading` and `ContentCard`, e.g. `titleTransform?: 'uppercase' | 'none'`, and use it where production uses caps.  
- **Option C (hybrid):** Prefer content for casing; add a single variant only where the same component is used in both “all caps” and “normal” contexts (e.g. `SectionHeading variant="caps"`).

---

### 1.2 Heading hierarchy (levels 3 and 4)

| Where (production) | Production behavior | Current implementation | Gap |
|--------------------|--------------------|-------------------------|-----|
| **Blockchain "Core Components"** | Main section "Core Components" (h2); each block has a strong subheading like "IMPROBABILITY [42]..." (h3/h4) | We use PageSection + ContentCard; ContentCard uses `<h3>` for title | We have **no SectionHeading level 3 or 4**. Subsections inside cards are `<h3>`; nested subsections (e.g. "Key Use:") are plain text or custom. |
| **Technical Architecture** | "Full-Stack Sovereign Internet Layer" (h3), "Specifications" (h3), then "Consensus Mechanism", "Block Time" (h4) | We use raw `<h3>` in BlockchainPage with inline styles | **No shared component** for h3/h4; styles (fontSize, color, letterSpacing) are repeated. |
| **Services** | Section h2, card titles h3, labels h4 | Similar: h2/h3/h4 inline in page | Same: no LevelHeading(3) or LevelHeading(4) with token styles. |

**Recommendation:**  
- Extend **SectionHeading** to support `level: 1 | 2 | 3 | 4` with token-based sizes (e.g. level 3 = 1.5rem, level 4 = 1.2rem) and use it for all section/subsection titles so spacing and color stay consistent and customizable in one place.

---

### 1.3 Font size and letter-spacing

| Element | Production (inferred) | Current | Gap |
|---------|------------------------|---------|-----|
| Hero title | Large, responsive (clamp), wide letter-spacing | We use `clamp(2.5rem, 8vw, 5rem)` and `letterSpacing: "0.1em"` | None; we match. |
| Hero subtitle | Smaller, muted | We use clamp and `var(--id-text-muted)` | None. |
| Quote block text | Readable, italic | QuoteBlock: `fontSize: "0.95rem"`, lineHeight 1.8 | None. |
| Card titles | Accent color, monospace, letter-spacing | ContentCard: `fontSize: 1.2rem` (or 1rem compact), `letterSpacing: "0.05em"` | None. |
| Body / paragraphs | Mixed 1rem, 1.1rem for lead | Pages use 1.1rem for first paragraph in places; rest 1rem or default | Possible gap: production may use **slightly different lead vs body** sizes in more places. |

**Recommendation:**  
- Add optional **tokens** for type scale if we want one place to tune “lead” vs “body” (e.g. `--id-text-size-lead`, `--id-text-size-body`). Otherwise current approach is fine.

---

## 2. Quotes and callouts

### 2.1 Quote block variants

| Where (production) | Production behavior | Current | Gap |
|--------------------|--------------------|---------|-----|
| **Home** | One main quote (Douglas Adams); left border, card background | QuoteBlock (accent) | We support. |
| **Blockchain intro** | "Trust math, not men." — Satoshi; same block style | QuoteBlock (muted in our refactor) | We have **accent** vs **muted** (border 3px accent vs 2px muted). Matches. |
| **Blockchain Hyperspace** | Douglas Adams quote; attributed | QuoteBlock variant muted | Matches. |
| **Blockchain Governance** | Inline quote (Barlow) inside a callout | CalloutBox with quote text | We support. |

**Recommendation:**  
- No change required. We already have **QuoteBlock** with `variant: 'accent' | 'muted'`. If production ever uses a third style (e.g. no border, or different background), add another variant or an optional `className`/override.

---

### 2.2 Callout / info box variants

| Where (production) | Production behavior | Current | Gap |
|--------------------|--------------------|---------|-----|
| **"Key Use:" (Blockchain token42)** | Small box, left border accent, short text | CalloutBox (accent) | We support. |
| **"How to Earn Fish"** | Same pattern | CalloutBox | We support. |
| **Note on liquidity (Master Pools)** | Softer box (muted border?) | CalloutBox variant muted | We support. |
| **Open source (Home)** | One line, accent emphasis | CalloutBox | We support. |

**Possible gap:**  
- Production might use **different left border width** (2px vs 3px) in some callouts. We use 2px for CalloutBox. If a specific block needs 3px, we could add `borderWidth?: '2' | '3'` or rely on `className`/overrides.

**Recommendation:**  
- Keep current variants. If we find one place that needs a different border width, add an optional prop rather than duplicating the component.

---

## 3. Cards and sections

### 3.1 Feature / content cards

| Where (production) | Production behavior | Current | Gap |
|--------------------|--------------------|---------|-----|
| **Home features** | 4 cards: title (caps), short description; same background/border | ContentCard with title + children | Match if content is caps. **Spacing:** we use `p-6`; production may use same or different padding. |
| **Blockchain core blocks** | Token42, Fish, Governance: each has title, body, key-value rows, callouts, bullets | ContentCard + CalloutBox + BulletList | Structure matches. **Layout:** production may have different **internal spacing** (e.g. gap between “Key Use” and body). |
| **Blockchain How to Participate** | 3 cards: title (caps), one line description | ContentCard | Match. |
| **Join the Movement (Home)** | One big card: border accent, centered, CTA button | Custom block in HomePage (not ContentCard): `border: 1px solid var(--id-accent)`, `p-8`, centered | We do **not** use ContentCard here; we use a custom section. That’s acceptable for a one-off CTA block, but if we want consistency we could introduce a **SectionCard** or **CtaCard** variant (e.g. centered, accent border only, no left border). |

**Recommendation:**  
- Document “Join the Movement” as a **special section** (or add a variant like `ContentCard variant="cta"` if we want it inside the design system).  
- Optionally add **ContentCard** props for **padding** (`compact` already reduces it) or **border** (e.g. `borderVariant: 'default' | 'accent'`) so production’s “accent border only” cards can be expressed without custom markup.

---

### 3.2 Section spacing and dividers

| Where (production) | Production behavior | Current | Gap |
|--------------------|--------------------|---------|-----|
| **Between sections** | Visible horizontal line, margin above/below | SectionDivider: `borderTop: 1px solid var(--id-border)`, `margin: var(--id-section-gap) 0` | We use token `--id-section-gap: 3rem`. Production may use the same; if not, we can tune the token. |
| **Section internal spacing** | mb-16 on sections, mb-6/mb-8 on headings | PageSection has `mb-16`; SectionHeading has `mb-6` for level 2 | Aligned. |

**Recommendation:**  
- No change. If production has one section with **different** spacing, we can add an optional `className` or a `spacing` prop to PageSection later.

---

## 4. Tables

| Where (production) | Production behavior | Current | Gap |
|--------------------|--------------------|---------|-----|
| **Master Pools** | Table: Pool, %, Purpose, Annual Unlock; first column accent/bold | SiteTable with columns + rows; we pass first column as `<strong style={{ color: "var(--id-accent)" }}>` | We support. |
| **Technical Architecture** | Layer, Function; first column accent | Same pattern | We support. |
| **Project42 Philosophy** | Voice, Truth; no accent on first column | SiteTable, plain text in cells | We support. |

**Possible gaps:**  
- **Header row:** we use `2px solid var(--id-border)` for thead; production might use the same or a different weight.  
- **Cell padding:** we use `py-3 px-4`; production may differ.  
- **Table background:** we use `var(--id-bg-card)`; consistent with cards.

**Recommendation:**  
- Add optional **SiteTable** props only if we need per-page or per-table differences (e.g. `headerBorderWeight?: '1' | '2'`, `dense?: boolean` for smaller padding). Otherwise keep a single style.

---

## 5. Backgrounds and borders

### 5.1 Backgrounds

| Element | Production (inferred) | Current | Gap |
|---------|----------------------|---------|-----|
| Page | Dark (#0d1117) | `var(--id-bg-page)` | Match. |
| Cards | Slightly lighter (#1c2128) | `var(--id-bg-card)` | Match. |
| Callouts / elevated | Darker (#161b22) | `var(--id-bg-elevated)` | Match. |
| Join section | Same as card, with accent border | We use `var(--id-bg-card)` + `1px solid var(--id-accent)` | Match. |

No gap identified.

---

### 5.2 Borders

| Element | Production (inferred) | Current | Gap |
|---------|----------------------|---------|-----|
| Quote accent | 3px left, accent color | QuoteBlock accent: 3px | Match. |
| Quote muted | 2px left, muted color | QuoteBlock muted: 2px | Match. |
| Callout | 2px left | CalloutBox: 2px | Match. |
| Cards | 1px full border, neutral | ContentCard: `1px solid var(--id-border)` | Match. |
| Section divider | 1px top, neutral | SectionDivider: `var(--id-border)` | Match. |

No gap identified.

---

## 6. CTAs and buttons

| Where (production) | Production behavior | Current | Gap |
|--------------------|--------------------|---------|-----|
| **Home primary CTA** | "Explore Project 42" — gradient (cyan → purple), dark text | We use `var(--id-accent-soft)` and `var(--id-accent-secondary)` in gradient | Match. |
| **Home secondary** | "Explore the BabelFish Network", "Discover the Foundation" — outline style | We use `var(--id-bg-card)`, `var(--id-accent)` border and text | Match. |
| **Join Telegram** | Filled accent button | We use `var(--id-accent)` background, `var(--id-bg-page)` text | Match. |

No gap identified; all use tokens.

---

## 7. User-reported differences (Home and Project 42)

The following were observed by comparing production directly with the current build. These are **concrete gaps** to fix so our UI matches production’s intent. Similar patterns may appear on other pages.

### 7.1 Home

| # | Production | Current | Cause | Recommendation |
|---|------------|---------|--------|-----------------|
| **1** | “A **complete digital ecosystem** — a new kind of internet…” — only “complete digital ecosystem” in **bold**. | Entire line same style. | We render `ecosystemIntro` as a single string; no inline formatting. | **Rich text in content:** either (a) store `ecosystemIntro` as an array of segments `{ type: 'text' \| 'bold', content: string }[]` and render with `<strong>` where `type === 'bold'`, or (b) use a simple markup in a string (e.g. `**complete digital ecosystem**`) and parse it, or (c) split into `ecosystemIntroPrefix`, `ecosystemIntroBold`, `ecosystemIntroSuffix` and render in the page. Prefer (a) or (b) so the pattern scales to other paragraphs. |
| **2** | “Space is big…” quote block: **full gray border on all four sides** (same as the four feature cards below). | Quote has **blue left border** only (accent). | We use `QuoteBlock` with default `variant="accent"` (3px left accent). | Add **QuoteBlock** variant, e.g. `variant="card"` or `variant="fullBorder"`: same background as card, `border: 1px solid var(--id-border)` on all sides, no left accent. Use it for the home hero quote so it matches the card style. |
| **3** | Four feature cards (Secure Foundation, Global P2P Network, etc.): **titles centered**. | Titles **left-aligned**. | ContentCard always aligns title left. | Add **ContentCard** prop `titleAlign?: 'left' \| 'center'`. Use `titleAlign="center"` for the home features grid. |
| **4** | “100% Open Source” callout: (a) **more vertical padding** (box taller); (b) text **mixed**: part blue+bold, part normal, part bold. | (a) Same padding as other callouts; (b) **entire** text blue and bold. | CalloutBox has fixed padding; we render `openSourceNote` as one string and wrap the whole thing in `<strong style={{ color: 'var(--id-accent)' }}>`. | (a) Add **CalloutBox** variant e.g. `variant="spacious"` or prop `padding?: 'default' \| 'large'` for more vertical space. (b) **Rich text** for `openSourceNote`: same approach as ecosystemIntro (segments with bold/normal/accent so “100% Open Source.” = accent+bold, “Every protocol. Every service…” = normal, “— built in the open, owned by humanity.” = bold). |

### 7.2 Project 42

| # | Production | Current | Cause | Recommendation |
|---|------------|---------|--------|-----------------|
| **5** | Texts like “**The answer to digital sovereignty** — a cyberspace where…” (subtitle): **parts bold**, parts normal. | Entire subtitle same style. | We render `header.subtitle` as one string. | **Rich text** for subtitle (and any similar field): content as segments or markup; render with `<strong>` and default text style where needed. |
| **6** | “We are founding a nation” section: lines “A cyberspace nation”, “Where your data is yours”, “Where your voice cannot be silenced”, “Where your world is built by you” are **separate lines** (line breaks). | One **consecutive paragraph** (no line breaks). | Content has one long string in `newWorld.paragraphs[2]`; we render each `paragraphs[i]` as one `<p>`. So the third “paragraph” is one block. | **Content structure:** split that block in content into **multiple entries** in `paragraphs`, e.g. `["We are not launching a product.", "We are founding a nation.", "A cyberspace nation — open to all, owned by none, ruled by code.", "Where your data is yours.", "Where your voice cannot be silenced.", "Where your world is built by you — not rented from a corporation.", "This is Project 42 — ..."]`. Then each renders as its own `<p>`. Alternatively support **newlines in a string**: split by `\n` and render as `<p>` per line or `<br/>` between. Prefer splitting in content for clearer structure. |
| **7** | Philosophy table (“We stand on five pillars of truth”): **transparent background**, borders with **thickness/style that match that section** (not the same as other site tables). | Same **SiteTable** as elsewhere: solid card background, standard borders. | We use one table style everywhere. | Add **SiteTable** variant, e.g. `variant="minimal"` or `variant="transparent"`: `backgroundColor: 'transparent'`, borders using `var(--id-border)` (or section-specific token) with optional different weight. Use this variant for the philosophy table so it fits the section look. |

### 7.3 Recurring pattern

The user noted that **“examples like these repeat in different sections of other pages”**. So in addition to the fixes above we should:

- **Define a small rich-text convention** for the content layer (e.g. segments `{ type: 'text' | 'bold' | 'accent' | 'boldAccent', content: string }[]` or a minimal markdown subset) and a tiny **RichText** or **FormattedText** component that renders them with tokens. Use it for any copy that has inline bold/accent.
- **Document** which components support which variants (QuoteBlock: accent | muted | fullBorder; ContentCard: titleAlign; CalloutBox: padding; SiteTable: minimal) so future sections can reuse them without reinventing.

---

## 8. Summary: what to add to support customizations

1. **Typography**
   - **Uppercase:** Prefer **content-driven** (store caps in content). If the same component must support both caps and normal, add `titleTransform?: 'uppercase' | 'none'` to SectionHeading and/or ContentCard.
   - **Heading levels:** Extend **SectionHeading** to `level: 1 | 2 | 3 | 4` with token-based sizes so all section/subsection titles use one component.

2. **Quotes and callouts**
   - Current **QuoteBlock** (accent/muted) and **CalloutBox** (accent/muted) are sufficient. Add optional **borderWidth** or **className** only if a concrete block needs a different look.

3. **Cards**
   - Optionally add **ContentCard** variants: e.g. `borderVariant: 'default' | 'accent'` for “accent border only” (Join the Movement style), and/or **padding** override for one-off spacing.

4. **Tables**
   - Add **SiteTable** `variant="minimal"` (transparent background, section-appropriate borders) for philosophy-style tables; keep default for others.

5. **Spacing**
   - We already have `--id-section-gap`. If production has a section with different spacing, use **className** or an optional **PageSection** prop.

6. **Content-driven vs component-driven**
   - **Content-driven:** Casing (caps), copy, order of sections. No component API change.
   - **Component-driven:** Variants (accent/muted), heading level, optional transform. One place to change (the component) for all usages.
   - **Hybrid:** Store “display title” in content (including caps); use component props only when the **same** component must look different in different contexts (e.g. quote with 2px vs 3px border).

---


**From user-reported differences (section 7):** Rich text for inline bold/accent (ecosystemIntro, openSourceNote, subtitles); QuoteBlock variant fullBorder for home quote (gray border all sides); ContentCard titleAlign center for home features; CalloutBox larger padding + rich text for open-source block; split Project 42 newWorld lines in content; SiteTable variant minimal for philosophy table. Apply same patterns across other pages.

## 9. Next steps

- **Content layer:** Introduce a **rich-text format** for fields that need inline bold/accent (ecosystemIntro, openSourceNote, subtitles) and add a **FormattedText** component. Optionally split Project 42 `newWorld.paragraphs` so each line is a separate item.  
- **Components:** Implement QuoteBlock variant fullBorder, ContentCard titleAlign, CalloutBox padding variant, SiteTable variant minimal; use them on Home and Project 42.  
- **Docs:** Document which components support which variants and how rich text is structured for reuse on other pages.
- **Optional:** Capture production screenshots (home, project42, blockchain, services) for visual regression or reference and store in `docs/` or `archive/` so future changes can be compared.

If you want, the next step can be implementing **SectionHeading level 3/4** and **optional titleTransform** so we can support production’s hierarchy and caps without hardcoding in pages.
