# Design tokens and style rules

Documento central de diseño del sitio Infinite Drive: tokens, componentes, cuándo usar cada elemento y cómo mantener interfaces congruentes con las guías.

**Objetivo:** que cualquier persona o herramienta que edite la UI tenga toda la información necesaria para no romper la consistencia.

---

## Para modelos y operadores (referencia única de UI)

- **Al crear o modificar interfaces:** usar solo los **componentes** listados en la sección 3 y los **tokens** de la sección 2. No inventar estilos inline (colores, opacidades) ni componentes nuevos sin documentarlos aquí.
- **Texto:** todo el cuerpo de lectura en `--id-text-primary`, sin opacidad; `--id-text-muted` solo para labels y autor de cita.
- **Decisión rápida:** ver la tabla "Qué componente usar" (sección 4) para elegir el elemento correcto según el tipo de contenido.
- **Formato en copy:** usar `FormattedSegment[]` en contenido y `<FormattedText>` en vistas (sección 5). No aplicar negrita/color a mano en JSX.

---

## 1. Principios

- **Mismo elemento / mismo componente → mismo estilo.** Si es el mismo tipo de contenido (p. ej. párrafo lead, lista, CTA), no se personaliza por página ni por instancia. Solo cambia el contenido.
- **Personalización = propósito concreto.** Los overrides (color, opacidad, variante) se usan solo cuando el **rol** es distinto y está documentado aquí o en el componente.
- **Nada por accidente.** No se añaden estilos puntuales “porque quedó bien”; si un estilo define jerarquía o se repite, vive en tokens o en el componente.
- **Un solo color de lectura.** Todo el texto de lectura usa `--id-text-primary` y opacidad 1. Solo `--id-text-muted` para labels y autorías (ej. "— Autor").

---

## 2. Tokens (src/styles/tokens.css)

Definidos en **`src/styles/tokens.css`**. No se inventan colores ni espaciados fuera de esta lista.

### 2.1 Fondos

| Token | Valor por defecto | Uso |
|-------|--------------------|-----|
| `--id-bg-page` | `#0d1117` | Fondo principal de la página. |
| `--id-bg-card` | `#1c2128` | Fondos de cards (ContentCard, QuoteBlock). |
| `--id-bg-elevated` | `#161b22` | Fondos elevados (CalloutBox, bloques con borde). |

### 2.2 Texto

| Token | Uso |
|-------|-----|
| `--id-text-primary` | **Todo el texto de lectura:** títulos, leads, párrafos, listas, descripciones en cards/callouts, celdas de tabla, citas. Misma claridad en todo el sitio; sin opacidad. |
| `--id-text-muted` | Solo **labels** ("Purpose", "Total supply"), **autor de cita** ("— Autor"), tags pequeños. |
| `--id-text-secondary` | Reservado; en la UI actual el cuerpo de texto usa primary. No usar para nuevo contenido sin documentar aquí. |

### 2.3 Acento e interactividad

| Token | Uso |
|-------|-----|
| `--id-accent` | Links (SiteLink), títulos de card, iconos, estados activos, términos destacados en FormattedText. |
| `--id-accent-soft` | Gradiente CTA (SiteButton primary), nav activo, elementos hero. |
| `--id-accent-secondary` | Extremo del gradiente CTA (con accent-soft). |

### 2.4 Bordes

| Token | Uso |
|-------|-----|
| `--id-border` | Divisores (SectionDivider), bordes suaves. |
| `--id-border-strong` | Bordes más visibles (cards con borde). |
| `--id-border-subtle` | Bordes muy discretos si se necesitan. |

### 2.5 Espaciado y layout

| Token | Uso |
|-------|-----|
| `--id-section-gap` | `3rem` — separación entre secciones (SectionDivider, PageSection). |
| `--id-radius` | `0.375rem` — radio de esquinas (cards, botones). |

### 2.6 Opacidad en la UI

- **Texto:** no se usa opacidad; todo a 1.
- **Imágenes decorativas (opcional):** `opacity: 0.8` en todas si se desea unificar; documentado en componentes que las usan.

---

## 3. Componentes de sitio (src/components/site/)

Cada componente tiene un **propósito** y **variantes** documentadas. Las páginas no sobrescriben estilos salvo que usen una variante explícita.

### 3.1 PageHeader

- **Archivo:** `PageHeader.tsx`
- **Uso:** Título y subtítulo de una página (ej. Foundation, Project 42).
- **Props:** `title: string`, `subtitle?: string | React.ReactNode`, `className?`
- **Estilo por defecto:** Título vía SectionHeading level 1. Subtítulo: `fontSize: 1.2rem`, `color: var(--id-text-primary)`, sin opacidad, `maxWidth: 800px`.
- **Cuándo usar:** Encabezado de cada página con título + opcional subtítulo.
- **No:** No poner opacidad ni color distinto en el subtítulo.

### 3.2 SectionHeading

- **Archivo:** `SectionHeading.tsx`
- **Uso:** Títulos de sección o subsección (h1–h4).
- **Props:** `level: 1 | 2 | 3 | 4`, `children`, `className?`, `colorVariant?: "primary" | "accent" | "muted"`
- **Estilos:** level 1 = 2.5rem, 2 = 2rem, 3 = 1.5rem, 4 = 1.2rem. Color: primary (text-primary), accent (id-accent), muted (text-muted). `font-mono`, `letterSpacing: 0.05em`.
- **Cuándo usar:** Cualquier título de sección dentro de una página. Level 1 solo en PageHeader; 2–4 en PageSection o bloques.
- **No:** No usar `<h2>` u otros headings fuera de este componente para títulos de sección.

### 3.3 LeadParagraph

- **Archivo:** `LeadParagraph.tsx`
- **Uso:** Primer párrafo destacado bajo un título de sección (intro de bloque).
- **Props:** `children`, `className?`, `style?`, `as?: "p" | "div"`
- **Estilo por defecto:** `fontSize: 1.1rem`, `color: var(--id-text-primary)`, sin opacidad.
- **Cuándo usar:** El primer párrafo después de un SectionHeading o título de sección.
- **No:** No usar para párrafos de cuerpo normales; no añadir opacidad ni color distinto salvo motivo documentado.

### 3.4 Párrafos de cuerpo (sin componente)

- **Uso:** Párrafos que no son “lead” (siguientes a un lead, dentro de cards/callouts).
- **Estilo:** `color: var(--id-text-primary)`, sin opacidad. Tamaño según contexto (ej. `text-sm`, `1.1rem`); no inventar opacidades.
- **Cuándo usar:** Cualquier `<p>` de contenido que no sea el primer intro de la sección.

### 3.5 BulletList

- **Archivo:** `BulletList.tsx`
- **Uso:** Listas con prefijo "→" (ítems de características, pasos, etc.).
- **Props:** `items?: (string | React.ReactNode)[]` o `children`, `className?`
- **Estilo por defecto:** `color: var(--id-text-primary)`, `text-sm`, `list-style: none`, sin opacidad.
- **Cuándo usar:** Listas de ítems que llevan "→" delante.
- **No:** No usar otro color ni opacidad en la lista.

### 3.6 QuoteBlock

- **Archivo:** `QuoteBlock.tsx`
- **Uso:** Bloque de cita con autor (y opcional fuente).
- **Props:** `quote: string`, `author: string`, `source?: string`, `variant?: "accent" | "muted" | "fullBorder"`, `className?`
- **Variantes:** accent = borde izquierdo acento; muted = borde izquierdo muted; fullBorder = borde completo gris (estilo card).
- **Estilo por defecto:** Fondo `--id-bg-card`. Cita: `fontSize: 0.95rem`, `color: var(--id-text-primary)`, sin opacidad. Autor: `text-sm`, `color: var(--id-text-muted)`.
- **Cuándo usar:** Citas atribuidas en cualquier página.
- **No:** No cambiar color de la cita ni añadir opacidad.

### 3.7 ContentCard

- **Archivo:** `ContentCard.tsx`
- **Uso:** Bloque tipo card con opcional icono, leading numérico o título, y contenido.
- **Props:** `icon?`, `leading?`, `title?`, `titleAlign?: "left" | "center"`, `children`, `compact?`, `className?`, `style?`, `borderVariant?: "default" | "accent"`, `iconPosition?: "left" | "top"`
- **Variantes:** borderVariant accent = borde acento (CTAs); iconPosition top = icono arriba centrado (grid de features).
- **Estilo por defecto:** Fondo `--id-bg-card`, borde por token. Título e iconos en `--id-accent`. El contenido (párrafos, listas) debe usar `color: var(--id-text-primary)` (las páginas lo aplican).
- **Cuándo usar:** Cards de contenido, features, bloques CTA con título + descripción.
- **No:** No poner texto de cuerpo en secondary ni con opacidad dentro de la card.

### 3.8 CalloutBox

- **Archivo:** `CalloutBox.tsx`
- **Uso:** Caja destacada con borde izquierdo (notas, avisos, bloques de énfasis).
- **Props:** `children`, `variant?: "accent" | "muted"`, `paddingSize?: "default" | "spacious"`, `borderWidth?: "2px" | "3px"`, `className?`
- **Variantes:** accent = borde acento; muted = borde muted. paddingSize spacious = más padding vertical.
- **Estilo por defecto:** Fondo `--id-bg-elevated`, borde izquierdo según variant. Contenido en primary (las páginas lo aplican).
- **Cuándo usar:** Notas, “open source”, bloques que no son una card completa.
- **No:** No usar opacidad ni secondary en el texto del callout.

### 3.9 PageSection

- **Archivo:** `PageSection.tsx`
- **Uso:** Contenedor de sección con opcional título (SectionHeading) y margen inferior consistente.
- **Props:** `title?`, `children`, `headingLevel?: 1 | 2 | 3 | 4`, `showDividerAbove?`, `className?`
- **Estilo:** Margen inferior `mb-16`. Si `showDividerAbove`, muestra SectionDivider arriba.
- **Cuándo usar:** Cada sección lógica de una página que puede llevar título.
- **No:** No sustituir por `<section>` sin este componente si se quiere el mismo espaciado y título.

### 3.10 SectionDivider

- **Archivo:** `SectionDivider.tsx`
- **Uso:** Línea horizontal entre secciones.
- **Props:** `className?`
- **Estilo:** `border-top: 1px solid var(--id-border)`, `margin: var(--id-section-gap) 0`.
- **Cuándo usar:** Entre bloques grandes (ej. después del hero, entre secciones).
- **No:** No inventar otro estilo de divisor.

### 3.11 SiteButton

- **Archivo:** `SiteButton.tsx`
- **Uso:** Botón o enlace CTA (navegación interna o externa).
- **Props:** `variant?: "primary" | "secondary" | "accent"`, `size?: "default" | "small" | "lg"`, `href?`, `target?`, `rel?`, `onClick?`, `children`, `className?`, `style?`
- **Variantes:** primary = gradiente + glow (CTA principal, ej. Project 42); secondary = outline acento; accent = relleno acento (ej. Telegram, Explorar blockchain).
- **Tamaños:** default = px-6 py-3; small = px-4 py-2 text-sm; lg = px-8 py-3.
- **Comportamiento:** Si `href` existe se renderiza `<a>`, si no `<button>` con `onClick`. Cursor pointer y hover con ligero translateY + brightness.
- **Cuándo usar:** Cualquier CTA (enlace o acción). primary para CTA principal de la página; accent para secundarios destacados; secondary para enlaces tipo “outline”.
- **No:** No usar `<a>` o `<button>` con estilos propios para CTAs; no quitar cursor pointer.

### 3.12 SiteLink

- **Archivo:** `SiteLink.tsx`
- **Uso:** Enlace externo con estilo del sitio (subrayado, acento).
- **Props:** `href`, `children`, `className?`, `style?`, resto de atributos de `<a>`
- **Estilo por defecto:** `color: var(--id-accent)`, `textDecoration: underline`, `cursor: pointer`. Abre en nueva pestaña con `rel="noopener noreferrer"`.
- **Cuándo usar:** Enlaces a sitios externos (docs, Telegram, etc.) dentro de texto.
- **No:** No usar `<a>` sin este componente para enlaces externos que deban verse como “link del sitio”.

### 3.13 SiteTable

- **Archivo:** `SiteTable.tsx`
- **Uso:** Tablas de datos con cabecera y filas.
- **Props:** `columns: { key: string; label: string }[]`, `rows: Record<string, React.ReactNode>[]`, `className?`, `variant?` (ej. minimal).
- **Estilo por defecto:** Cabecera `color: var(--id-text-muted)`. Celdas cuerpo `color: var(--id-text-primary)`. Bordes con tokens.
- **Cuándo usar:** Tablas (capas, pools, filosofía, etc.).
- **No:** No usar `<table>` con estilos propios para tablas de contenido.

### 3.14 FormattedText

- **Archivo:** `FormattedText.tsx`
- **Uso:** Renderizar arrays de segmentos con formato inline (negrita, acento, itálica) para igualar producción.
- **Props:** `segments: FormattedSegment[]`, `className?`, `style?`, `as?: "span" | "p"`
- **Tipos de segmento (content/locales/types.ts):** `{ type: "text", content }` | `{ type: "bold", content }` | `{ type: "accent", content }` | `{ type: "boldAccent", content }` | `{ type: "italic", content }`.
- **Estilo:** bold = fontWeight bold; accent = color --id-accent; boldAccent = ambos; italic = fontStyle italic. El color de base lo hereda del contenedor (primary).
- **Cuándo usar:** Cualquier cadena que en contenido esté definida como `string | FormattedSegment[]` (subtítulos, intros, bullets con términos destacados).
- **No:** No aplicar color u opacidad extra al contenedor de FormattedText; usar los segmentos para énfasis.

---

## 4. Qué componente usar (guía rápida)

| Necesito… | Componente | Notas |
|-----------|------------|--------|
| Título + subtítulo de página | PageHeader | title + subtitle opcional |
| Título de sección (h2/h3/h4) | SectionHeading | level 2–4; colorVariant si hace falta |
| Primer párrafo de una sección | LeadParagraph | sin overrides de color/opacity |
| Párrafo normal | `<p>` con style color primary | o LeadParagraph si es el primero |
| Lista con "→" | BulletList | items o children |
| Cita con autor | QuoteBlock | variant accent | muted | fullBorder |
| Card con título/icono | ContentCard | title, icon, borderVariant, iconPosition |
| Caja destacada (nota) | CalloutBox | variant accent | muted; paddingSize si hace falta |
| Sección con título | PageSection | title, headingLevel, showDividerAbove |
| Separador entre secciones | SectionDivider | sin props requeridos |
| Botón o enlace CTA | SiteButton | variant primary | secondary | accent; href o onClick |
| Enlace externo en texto | SiteLink | href, children |
| Tabla de datos | SiteTable | columns, rows |
| Texto con negrita/acento inline | FormattedText | segments (FormattedSegment[]); contenido en locales |

---

## 5. Contenido y formato inline (FormattedSegment)

Para que copys tengan **negrita**, **color acento** o *itálica* sin hardcodear en JSX:

- En **content/locales/types.ts** el tipo es:  
  `FormattedSegment = { type: "text"|"bold"|"accent"|"boldAccent"|"italic"; content: string }`.
- En los archivos de contenido (ej. `en/marketing/blockchain.ts`) se definen arrays de segmentos, ej.:  
  `subtitle: [ { type: "text", content: "The blockchain foundation — " }, { type: "bold", content: "trust meets Bistromathics" } ]`.
- En la vista se renderiza con `<FormattedText segments={...} />` (y `as="p"` si debe ser bloque).

Campos que suelen ser `string | FormattedSegment[]` en tipos: subtítulos de página, intros, bullets con términos destacados, notas con énfasis. Ver comentarios en **content/locales/types.ts** para cada campo.

---

## 6. Resumen para ediciones futuras

- **Tokens:** Solo los definidos en **tokens.css**; no colores ni espaciados inventados.
- **Texto de lectura:** Siempre **primary**, **sin opacidad**. Muted solo para labels y autor de cita.
- **Mismo rol = mismo componente y mismo estilo.** No personalizar por página sin documentar.
- **CTAs:** SiteButton (primary / secondary / accent). Enlaces externos en texto: SiteLink.
- **Estructura de página:** PageHeader → SectionDivider → PageSection(s) con SectionHeading, LeadParagraph, párrafos, BulletList, ContentCard, CalloutBox, QuoteBlock según el contenido.
- **Formato en copy:** FormattedSegment en contenido y FormattedText en vista; no mezclar estilos ad hoc.

Para **estructura del sitio, rutas y contenido**, ver **[ARCHITECTURE.md](ARCHITECTURE.md)** y **[EDITING-AND-STRUCTURE.md](EDITING-AND-STRUCTURE.md)**. Para **valores exactos de tokens**, **`src/styles/tokens.css`**.
