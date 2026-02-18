# Estilos de producción — extraídos del HTML (docs/production-snapshots)

Este documento lista los **estilos reales** de cada texto según el HTML renderizado de producción (infinitedrive.xyz), extraído con `npm run dump:production-html`. Para cada bloque se indica el **texto**, el **estilo en producción** (tag o inline) y si **nuestra implementación coincide**.

Colores en producción (rgb): primary ≈ rgb(230,237,243), secondary ≈ rgb(201,209,217), muted ≈ rgb(139,148,158), accent ≈ rgb(107,163,219), cyan accent ≈ rgb(0,217,255).

---

## Home (/)

| Texto | Estilo en producción (HTML) | Nosotros | Estado |
|-------|-----------------------------|----------|--------|
| INFINITE DRIVE (hero) | `<h1>` font-mono, clamp 2.5rem–5rem, letter-spacing 0.1em, color primary | Igual | ✅ |
| The Engine of Digital Freedom | `<p>` font-mono, clamp 1rem–1.5rem, opacity 0.8, color muted | Igual | ✅ |
| A **complete digital ecosystem** — a new kind of internet… | `<p>` 1.2rem; **<strong>** en "complete digital ecosystem"; resto normal | FormattedText ecosystemIntro (bold en "complete digital ecosystem") | ✅ |
| "Space is big…" | `<blockquote>` italic, 1rem, line-height 1.8; bloque border 1px gray, bg card | QuoteBlock fullBorder | ✅ |
| — Douglas Adams | text-sm, color muted | Igual | ✅ |
| Infinite Drive is not just storage. It's a **living infrastructure** that powers… | `<p>` 1.1rem; **<strong>** en "living infrastructure"; resto normal | site.descriptionLong como string plano, sin bold | ❌ Falta bold "living infrastructure" |
| SECURE FOUNDATION (card title) | `<h3>` font-mono, color accent (107,163,219), letter-spacing 0.05em | ContentCard title | ✅ |
| Card descriptions | `<p>` opacity 0.9, 0.95rem | Igual | ✅ |
| **This is infrastructure for everyone.** | `<p>` 1.1rem; **<strong>** en toda la frase | closingBlock.title en <strong> | ✅ |
| From individuals to enterprises… | `<p>` 1rem, opacity 0.7, muted | Igual | ✅ |
| **100% Open Source.** Every protocol… — **built in the open, owned by humanity**. | **<strong style="color: accent">** "100% Open Source."; texto normal; **<strong>** "built in the open, owned by humanity" | openSourceNote: boldAccent + text + bold | ✅ |
| Join the Movement | `<h2>` 1.5rem, primary, letter-spacing | ContentCard title | ✅ |
| Join Telegram Community → | `<a>` bg accent, color bg-page | SiteButton accent | ✅ |

---

## Project 42 (/project42)

| Texto | Estilo en producción (HTML) | Nosotros | Estado |
|-------|-----------------------------|----------|--------|
| Project 42 (título) | `<h1>` 2.5rem, primary | PageHeader | ✅ |
| **The answer to digital sovereignty** — a cyberspace where… | **<strong>** en "The answer to digital sovereignty"; resto normal | FormattedText header.subtitle | ✅ |
| Hero quote (Barlow) | blockquote italic; bloque border-left 3px accent | QuoteBlock (accent) | ✅ |
| We are not launching a product. | `<p>` normal | string | ✅ |
| We are **founding a nation**. | **<strong>** en "founding a nation" | Párrafo plano "We are founding a nation." | ❌ Falta bold "founding a nation" |
| A **cyberspace nation** — open to all… Where your data is yours. Where your voice… Where your world… | Un solo `<p>`; **<strong>** solo en "cyberspace nation"; "Where your…" son líneas con <br>, sin bold | Nosotros: 4 párrafos con bold en cada "Where…" y "cyberspace nation" | ❌ Producción no tiene bold en las 3 líneas "Where your…" |
| This is **Project 42** — the answer to life… | **<strong>** en "Project 42" | Párrafo plano | ❌ Falta bold "Project 42" |
| Philosophy table: Don't Panic. | Última celda con **<em>** "Don't Panic." | truth como texto plano | ❌ Falta cursiva en "Don't Panic." |
| Ecosystem intro | "it's a **complete digital nation** with four…" | LeadParagraph, sin segmentos | ❌ Falta bold "complete digital nation" |
| Pillar bullets (Proof of Contribution, DAO governance…) | **<strong>** en cada frase destacada (Proof of Contribution, DAO governance, Improbability [42], etc.) | BulletList items string | ❌ Producción destaca términos en bold en algunos bullets |
| These four pillars… **one unified system** | **<strong>** en "one unified system" | CalloutBox texto plano | ❌ Falta bold "one unified system" |
| Library: "Once, humanity built the **Library of Alexandria**…" | **<strong>** en "Library of Alexandria" | library.paragraphs string | ❌ Falta bold |
| **Project 42 is the Library of Alexandria rebuilt in code** | **<strong>** en toda esa frase | string | ❌ Falta bold |
| WE ARE NOT INVENTING: **open, interconnected ecosystem**; **integrate, honor, and extend**; **open source**, **public**, **humanity** | Varios **<strong>** en esas frases | library.notInventingParagraphs string | ❌ Falta segmentos |
| Protocol names (Bitcoin, Nostr…) | **<strong>** en nombre; descripción normal | ContentCard con <strong>{proto.name}</strong> | ✅ |
| Survival callout | **We're building a decentralized…** y **survival** en bold | library.survivalParagraphs string | ❌ Falta bold en esas partes |
| Thursday: "When **42** finally makes sense." | **<strong>** en "42" | string | ❌ Falta bold "42" |
| Taglines (Project 42, A Cypherpunk Nation…) | `<p>` font-mono, secondary; sin bold | Igual | ✅ |

---

## Blockchain (/blockchain)

| Texto | Estilo en producción (HTML) | Nosotros | Estado |
|-------|-----------------------------|----------|--------|
| Subtítulo | "where **trust meets Bistromathics**." | string plano | ❌ Falta bold "trust meets Bistromathics" |
| The **Infinite Improbability Drive** is the security… | **<strong>** (primary) en "Infinite Improbability Drive" | string | ❌ Falta bold |
| **Key Use:** Stake Improbability [42]… | **<strong>** solo en "Key Use:"; resto normal | keyUse string en CalloutBox | ❌ Falta bold "Key Use:" |
| **How to Earn Fish:** Share storage… | **<strong>** solo en "How to Earn Fish:" | howToEarn string | ❌ Falta bold "How to Earn Fish:" |
| Note on liquidity: **Note on liquidity:** (bold primary); **Fish Bootstrap pool** y **Fish protocol** (bold accent) | Tres partes con estilo distinto | noteTitle + note en un párrafo; noteTitle bold | ❌ Falta Fish Bootstrap / Fish protocol en accent en el cuerpo |
| Master Pools párrafos | Múltiples **<strong>** (cups of Improbability [42], locked at genesis, 42 years, practically 0%…, chain inflation, validators, receive tokens, transaction fee collection) | Párrafos planos | ⚠️ Muchos bold; opcional replicar todos |
| Tabla Pool | Primera columna **<strong>** + color accent | strong + accent | ✅ |
| All tokens locked… | **<strong>** (primary) en la frase; nota debajo normal | closingTitle strong, closingNote p | ✅ |
| Why it matters: **Why it matters:** (bold primary); resto normal | FormattedText solo "Why it matters: " bold | ✅ |
| Technical Arch: **complete internet stack**; **Forward-compatible…** (título callout en bold) | Varios strong | sectionIntro y noteTitle | ⚠️ "complete internet stack" en bold en intro |
| Specs (Consensus Mechanism, Block Time…) | h4 muted; valor normal | SectionHeading level 4 muted | ✅ |
| How to Participate cards | H3 accent, mayúsculas | ContentCard title | ✅ |
| Cita final Douglas Adams | p font-mono 1.2rem accent; bloque border accent | ContentCard borderVariant accent | ✅ |

---

## Services (/services)

| Texto | Estilo en producción (HTML) | Nosotros | Estado |
|-------|-----------------------------|----------|--------|
| Subtítulo | "A complete sovereign… **decentralized, user-owned, and unstoppable**." | string | ❌ Falta bold |
| BabelFish: "The **global P2P backbone**…"; "it's a **living infrastructure**…" | **<strong>** en esas frases | LeadParagraph / p | ❌ Falta bold |
| THE BABELFISH PROTOCOL: "**direct device-to-blockchain communication**"; "**100% open source**" (accent) | Strong y strong+accent | CalloutBox texto | ❌ Falta segmentos |
| WHAT IT DOES / HOW IT WORKS | h4 muted, letter-spacing | SectionHeading level 4 muted | ✅ |
| Whitepaper link | `<a>` color accent, underline | SiteLink | ✅ |
| Sovereign Services intro | "**enterprise-grade infrastructure**" | string | ❌ Falta bold |
| How It All Connects | "**BabelFish Network**", "**Infinite Improbability Drive blockchain**", "**Improbability [42]**", "**Fish**", "**unified ecosystem**" | Párrafos planos | ❌ Falta bold en esos términos |
| THE STACK: Layer N (accent); **User-Created Universes** (bold primary) | div accent + strong primary en título de capa | Contenido actual | ⚠️ Verificar |
| The Blockchain: "**Infinite Improbability Drive**", "**[42]**", "**Fish**", etc. | Varios strong en párrafos y lista | strings | ❌ Falta bold |
| This is infrastructure for everyone. | **<strong>** en toda la frase | getStarted.footer line1 en strong | ✅ |

---

## Privacy (/privacy)

| Texto | Estilo en producción (HTML) | Nosotros | Estado |
|-------|-----------------------------|----------|--------|
| **Last updated:** 16 February 2026. This Privacy Policy… | **<strong>** solo en "Last updated:" | <strong>{lastUpdatedLabel}</strong> + resto | ✅ |
| Títulos sección (1. Who We Are…) | `<h2>` 1.25rem, color accent, letter-spacing | SectionHeading level 3 accent | ✅ |
| Cuerpo: **Infinite Drive**, **Infinite Improbability Drive**, **BabelFish Network**, **Deep Thought Labs** | Varios **<strong>** en párrafos | Párrafos planos | ⚠️ Opcional replicar todos |
| Contact: enlaces Telegram, Deep Thought Labs | `<a>` color accent, underline | SiteLink | ✅ |
| Footer | text-sm, opacity 0.7, muted | Igual | ✅ |

---

## Resumen validación (actualizado tras aplicar correcciones)

- **Ya coinciden:** Hero, quote home, ecosystemIntro, descriptionLong "living infrastructure", openSourceNote, closingBlock, Join; Project 42 subtitle, hero quote, newWorld (bold solo founding/cyberspace/Project 42), Philosophy "Don't Panic." cursiva, Ecosystem intro "complete digital nation", pillars bullets (Proof of Contribution, DAO governance, etc.), closing "one unified system", Library (Library of Alexandria, Project 42 is the Library…), Not inventing (open interconnected, integrate honor extend, open source, public, humanity), Survival y Thursday "42"; Blockchain subtitle, intro, token42 summary/keyUse/release/atLaunch, fish summary/howToEarn, governance summary/points, Master Pools párrafos, Note on liquidity (accent), Hyperspace párrafos, Technical Arch "complete internet stack", Why it matters; Services subtitle, BabelFish párrafos, protocol intro (bold + 100% open source accent), sovereign intro, How It Connects párrafos; Privacy last updated y enlaces.
- **Opcional (no aplicado):** Privacy cuerpo con strong en nombres propios (Infinite Drive, BabelFish Network, etc.) en párrafos largos.

Todas las prioridades alta y media listadas arriba están implementadas con FormattedSegment y FormattedText en contenido EN/ES y páginas.
