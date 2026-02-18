# Auditoría completa: producción vs implementación local

Este documento es un **análisis exhaustivo** de lo que la versión en producción ([infinitedrive.xyz](https://infinitedrive.xyz)) imprime en pantalla (negritas, colores, espaciados, contenedores) frente a lo que hace nuestra implementación local. El objetivo es **entender y documentar** todo lo que producción hace y todo lo que nosotros hacemos igual o distinto, no solo casos puntuales.

---

## Metodología: cómo comparar con producción

- **Producción es una SPA:** el HTML inicial solo tiene `<div id="root"></div>`; el contenido y los estilos se generan con JavaScript. No se puede obtener “qué va en negrita” solo con un fetch del HTML.
- **Formas de verificar:**
  1. **Navegador:** abrir cada página en producción y en local (misma ruta) y comparar visualmente.
  2. **DevTools:** en producción, inspeccionar cada bloque de texto y comprobar si tiene `font-weight: bold`, `font-weight: 600`, o color (`color`, `--id-accent`, etc.). Anotar qué frase exacta está en negrita o con color.
  3. **Contenido extraído:** el texto plano de producción (por ejemplo vía herramientas de accesibilidad o “readable” fetch) sirve para ver **orden y frases**, no para negritas/colores; esas hay que validarlas en el navegador.
- **Uso de este doc:** las tablas por página listan **cada bloque** donde puede haber diferencias. La columna **Producción (qué verificar)** describe qué comprobar en vivo; **Nosotros** describe qué hacemos hoy; **Estado** se rellena al validar (✅ igual / ⚠️ revisar / ❌ corregir).

---

## Resumen por página

| Página      | Bloques con posible bold/color/espacio | Prioridad verificación |
|------------|----------------------------------------|--------------------------|
| Home       | Hero, ecosystemIntro, quote, features, closingBlock, openSourceNote, joinSection | Alta |
| Project 42 | Header subtitle, hero quote, newWorld (4 líneas + spacing), philosophy, ecosystem, library (quote, cards, callouts), thursdayNote, taglines | Alta |
| Blockchain | Intro, Core (token42, FISH, governance), Master Pools (note, table, closing), Hyperspace (quote, cards, whyItMatters), Technical Arch, How to Participate, final quote | Alta |
| Services   | Capas, títulos de sección, getStarted footer | Media |
| Privacy    | lastUpdated label, enlaces | Baja |

---

## 1. Home (`/`)

| # | Bloque / ubicación | Producción (qué verificar) | Nosotros | Estado |
|---|--------------------|----------------------------|----------|--------|
| 1.1 | Hero título | ¿Todo en mayúsculas (INFINITE DRIVE)? ¿Mismo tamaño/letter-spacing? | `home.hero.title` tal cual | |
| 1.2 | Hero subtítulo | ¿Color muted? ¿Tamaño menor que título? | `home.hero.subtitle`, color muted, clamp | |
| 1.3 | Párrafo bajo imagen (“A complete digital ecosystem…”) | ¿Solo **“complete digital ecosystem”** (o frase equivalente) en negrita? ¿Resto normal? | FormattedText con `ecosystemIntro` (segmentos bold/text) | ✅ según §7.1 |
| 1.4 | Quote (Space is big…) | ¿Borde gris en los 4 lados (card)? ¿Itálica? | QuoteBlock `variant="fullBorder"` | ✅ |
| 1.5 | Párrafo largo (site.descriptionLong) | ¿Todo mismo estilo? ¿Sin negritas internas? | Un solo `<p>`, sin formato interno | |
| 1.6 | Títulos de las 4 feature cards | ¿Centrados? ¿Mayúsculas? | ContentCard `titleAlign="center"`, contenido tal cual | ✅ centro |
| 1.7 | Descripción de cada feature | ¿Todo normal, sin bold? | `<p>` con color secondary | |
| 1.8 | Título “Why Infinite Drive” / closingBlock.title | ¿Solo el título en negrita? ¿Subtítulo normal? | `<strong>{home.closingBlock.title}</strong>`; subtitle en `<p>` aparte | ✅ |
| 1.9 | Callout “100% Open Source” | ¿Mezcla: parte en negrita/acento, parte normal? ¿Padding más alto? | FormattedText si `openSourceNote` es segmentos; CalloutBox `paddingSize="spacious"` | ✅ según §7.1 |
| 1.10 | Join the Movement (título, descripción, CTA) | ¿Título sin bold o con bold? ¿Borde azul del recuadro? | Título h2; descripción p; borde accent | |

---

## 2. Project 42 (`/project42`)

| # | Bloque / ubicación | Producción (qué verificar) | Nosotros | Estado |
|---|--------------------|----------------------------|----------|--------|
| 2.1 | Subtítulo bajo “Project 42” | ¿**“The answer to digital sovereignty”** (o equivalente) en negrita y el resto normal? | FormattedText con `header.subtitle` (segmentos) | ✅ |
| 2.2 | Hero quote (Barlow) | ¿Cita en bloque con autor y fuente? ¿Borde azul o gris? | QuoteBlock sin variant (accent) | |
| 2.3 | “We Are Building a New World” – primeros 2 párrafos | ¿Párrafo normal, separación estándar? | Dos `<p>` con space-y-4 | ✅ |
| 2.4 | “We Are Building…” – 4 líneas (A cyberspace nation… / Where your…) | ¿**Menor separación** entre estas 4 que con el resto? ¿Partes en **negrita** (ej. “A cyberspace nation”, “Where your data is yours.”)? | `tightParagraphIndices` + grupo con space-y-1; segmentos bold en cada línea | ✅ |
| 2.5 | Último párrafo (“This is Project 42…”) | ¿Separación normal respecto al bloque de 4? | Un `<p>` con space-y-4 del bloque anterior | ✅ |
| 2.6 | Philosophy – intro “We stand on five pillars…” | ¿Sin bold? | `<p>` normal | |
| 2.7 | Philosophy – tabla Voice/Truth | ¿Fondo transparente / bordes suaves? ¿Sin negrita en celdas? | SiteTable `variant="minimal"`; celdas planas | ✅ |
| 2.8 | Ecosystem – intro y pillars | ¿Títulos de pillars en mayúsculas? ¿Descripción y bullets sin bold salvo si producción lo indica? | ContentCard con leading + title; BulletList | |
| 2.9 | Ecosystem – callout closing | ¿Texto normal? ¿Espacio arriba del callout? | CalloutBox con mt-8 | |
| 2.10 | Library – quote Douglas Adams | ¿Bloque cita con borde gris? | QuoteBlock `variant="muted"` | |
| 2.11 | Library – párrafos tras la cita | ¿Sin bold interno? | `<p>` por párrafo | |
| 2.12 | “We are not inventing the wheel” | ¿Solo título en estilo card? ¿Párrafos normales? | ContentCard, párrafos sin bold | |
| 2.13 | “Built on open protocols…” | ¿Mismo padding que el card anterior? ¿Nombres de protocolos (Bitcoin, Nostr…) en bold? | ContentCard sin compact; `<strong>{proto.name}</strong>` | ✅ padding unificado |
| 2.14 | Callout “We’re building a decentralized…” (survival) | ¿Primera línea más destacada? ¿Espacio arriba? | CalloutBox mt-6; primer p con mb-3 | |
| 2.15 | Thursday note – cita y párrafos | ¿Cita entrecomillada, autor, luego párrafos en estilo más suave? | CalloutBox variant muted; quote + author + paragraphs | |
| 2.16 | Taglines finales | ¿Cada línea en una línea? ¿Alguna en bold? | `<p>` por tagline, font-mono | |

---

## 3. Blockchain (`/blockchain`)

| # | Bloque / ubicación | Producción (qué verificar) | Nosotros | Estado |
|---|--------------------|----------------------------|----------|--------|
| 3.1 | Intro – quote Satoshi | ¿Borde gris (muted)? | QuoteBlock `variant="muted"` | |
| 3.2 | Intro – párrafos | ¿Lead (primero) más grande? ¿Sin bold? | Primer p 1.1rem, resto normal | |
| 3.3 | Core – títulos (IMPROBABILITY [42], FISH, GOVERNANCE) | ¿Mayúsculas? ¿Color acento? | ContentCard title (accent, mono) | |
| 3.4 | Token42 – Key Use callout | ¿Solo el texto, sin “Key Use:” en bold aparte? ¿Espacio sobre callout? | CalloutBox mt-4; contenido keyUse en `<p>` | |
| 3.5 | FISH – resumen + callout “How to Earn Fish” | ¿Callout con espacio respecto al párrafo de arriba? | CalloutBox con mt-4 mb-4 | ✅ |
| 3.6 | Governance – puntos y cita Barlow | ¿Cita en bloque con autor? ¿Puntos con “→” sin bold? | CalloutBox con quote + quoteAuthor | |
| 3.7 | Master Pools – “Note on liquidity” | ¿Solo **“Note on liquidity:”** (o título) en negrita, resto normal? | `<strong>{noteTitle}</strong> {note}` | ✅ |
| 3.8 | Master Pools – tabla | ¿Primera columna (Pool) en acento + bold? | pool: `<strong style={{ color: "var(--id-accent)" }}>` | ✅ |
| 3.9 | Master Pools – “All tokens locked…” callout | ¿Solo **título** en negrita/cursiva? ¿Nota debajo normal? | closingTitle en strong; closingNote en p | ✅ |
| 3.10 | Hyperspace – quote Douglas Adams | ¿Borde gris? | QuoteBlock muted | |
| 3.11 | Hyperspace – Native / Bridges subtítulos | ¿“IBC Protocol…”, “Ethereum & EVM…”, “Bitcoin…” en bold? | nativeSubtitle, bridgesEthereum, bridgesBitcoin en `<strong>` | |
| 3.12 | Hyperspace – “Why it matters” | ¿Solo **“Why it matters: ”** en negrita, resto del párrafo normal? | FormattedText con segmentos (bold solo título) | ✅ |
| 3.13 | Technical Architecture – tabla Layer/Function | ¿Columna Layer en acento + bold? | layer: `<strong style={{ color: "var(--id-accent)" }}>` | ✅ |
| 3.14 | Technical Architecture – callout “Forward-compatible…” | ¿Solo **título** (ej. “Deploy your Ethereum dApp…”) en bold/italic? ¿Párrafos debajo normales? | noteTitle en strong; noteParagraphs en `<p>` | ✅ |
| 3.15 | How to Participate – títulos de cards | ¿Mayúsculas (STAKE [42], etc.)? | ContentCard title | |
| 3.16 | Cita final Douglas Adams | ¿Bloque con borde/estilo especial? | div con borde accent, quote en font-mono accent | |

---

## 4. Services (`/services`)

| # | Bloque / ubicación | Producción (qué verificar) | Nosotros | Estado |
|---|--------------------|----------------------------|----------|--------|
| 4.1 | Títulos de sección (h2) | ¿Color primary? ¿Tamaño? | h2 con color text-primary | |
| 4.2 | Capas / layers (tabla o lista) | ¿Nombre de cada capa en **negrita**? ¿Color? | `<strong style={{ color: "var(--id-text-primary)" }}>{layer.title}</strong>` | |
| 4.3 | Get Started – pie (line1, line2) | ¿Solo **line1** en negrita? ¿line2 normal? | `<strong>{s.getStarted.footer.line1}</strong>`; line2 en otro elemento | |

---

## 5. Privacy (`/privacy`)

| # | Bloque / ubicación | Producción (qué verificar) | Nosotros | Estado |
|---|--------------------|----------------------------|----------|--------|
| 5.1 | “Last updated” | ¿Solo **“Last updated”** (o etiqueta) en negrita, fecha y texto normal? | `<strong>{privacy.lastUpdatedLabel}</strong> {privacy.lastUpdated}. {privacy.intro}` | ✅ |
| 5.2 | Enlaces | ¿Color acento? | color accent, underline | |

---

## 6. Contenedores (citas y callouts)

| Página / bloque | Contenedor adecuado | Borde producción (verificar) | Nosotros |
|------------------|---------------------|------------------------------|----------|
| Home – quote principal | QuoteBlock | Gris 4 lados (card) | fullBorder ✅ |
| Home – 100% Open Source | CalloutBox | ¿Azul izquierda? | default (accent) |
| Project 42 – hero quote | QuoteBlock | ¿Azul o gris? | accent |
| Project 42 – Library quote | QuoteBlock | Gris | muted ✅ |
| Project 42 – Thursday | CalloutBox | ¿Gris? | muted ✅ |
| Blockchain – intro quote | QuoteBlock | Gris | muted ✅ |
| Blockchain – Hyperspace quote | QuoteBlock | Gris | muted ✅ |
| Blockchain – Key Use, How to Earn, Governance, Why it matters, etc. | CalloutBox | Acorde al contexto (azul/gris) | default o muted según bloque |

---

## 7. Espaciados a verificar

| Ubicación | Qué comprobar en producción | Nosotros |
|-----------|----------------------------|----------|
| Entre párrafos dentro de una sección | margin-bottom uniforme o lead diferente | mb-4 / mb-6 según página |
| Entre título de sección y primer párrafo | espacio consistente | PageSection + mb-6/mb-8 |
| Entre párrafo y callout siguiente | espacio claro (no pegado) | mt-4 en callouts tras párrafo (ej. FISH) ✅ |
| Entre dos ContentCards consecutivos | mismo gap | space-y-6 o mt-8 según sección |
| Project 42 – “Not inventing” vs “Built on open protocols” | mismo padding en ambos cards | Ambos sin compact ✅ |

---

## 8. Cómo usar esta auditoría

1. **Por sesión:** elegir una página (p. ej. Project 42) y abrir producción y local en dos pestañas.
2. **Recorrer la tabla** de esa página: para cada fila, en producción comprobar con DevTools o a ojo si el bold/color/espacio coincide con la columna “Producción (qué verificar)”.
3. **Anotar Estado:** ✅ si coincide, ⚠️ si hay duda, ❌ si hay que corregir. Si algo no coincide, añadir una línea en “Notas” o en el doc principal (PRODUCTION-VS-CURRENT-DESIGN-ANALYSIS.md) con la corrección.
4. **Negritas:** si en producción **solo una parte** de un párrafo está en negrita, nosotros debemos usar **FormattedText** + contenido en `FormattedSegment[]` (solo el fragmento en bold), nunca poner el párrafo entero en `<strong>`.
5. **Contenedores:** si un bloque en producción tiene borde azul (acento) y nosotros muted (o al revés), ajustar la variante del componente (QuoteBlock / CalloutBox) según la tabla de §6.

Cuando se complete la verificación de una página, se puede poner al inicio del doc una línea tipo: “Última verificación Home: [fecha]”.
