# Análisis de distribución de contenido — Infinite Drive Website

**Fecha:** 17 de febrero de 2026  
**Objetivo:** Documentar la distribución actual del contenido para preparar un refactor de contenidos.

---

## 1. Resumen ejecutivo

El sitio **infinite-drive-website** es una SPA con **5 rutas** y **5 páginas** de contenido. Todo el contenido está **embebido en componentes React** (TSX); no existe una capa de datos separada (CMS, Markdown, JSON). Las páginas son largas y densas en texto, con repetición temática entre Home, Project 42, Services y Blockchain.

| Métrica | Valor |
|--------|--------|
| Rutas principales | 5 (`/`, `/project42`, `/services`, `/blockchain`, `/privacy`) |
| Páginas de contenido | 5 (una por ruta) |
| Contenido en código | 100% inline en TSX |
| Assets de imagen | 5 (todas en `src/assets/`) |
| Componentes compartidos de contenido | 1 (`ImageWithFallback`) |
| Componentes UI (shadcn) | ~35 (solo parte usada en páginas) |

---

## 2. Estructura de rutas y páginas

| Ruta | Componente | Nombre en nav | Tipo de contenido |
|------|------------|----------------|--------------------|
| `/` | `HomePage` | Home | Landing: hero, descripción ecosistema, CTAs |
| `/project42` | `Project42Page` | Project 42 | Visión, filosofía cypherpunk, ecosistema, biblioteca, protocolos |
| `/services` | `ServicesPage` | Network | BabelFish, servicios soberanos (DNS, hosting, email, storage, compute), stack, blockchain resumido |
| `/blockchain` | `BlockchainPage` | Foundation | Infinite Improbability Drive: tokens [42]/Fish, gobernanza, Master Pools, bridges, arquitectura |
| `/privacy` | `PrivacyPolicyPage` | (footer) Privacy | Política de privacidad legal (13 secciones) |

- **Nav principal:** Home, Project 42, Network, Foundation (Privacy solo en footer).
- **Redirect:** `*` → `/`.

---

## 3. Distribución del contenido por página

### 3.1 HomePage (`/`)

- **Secciones:** Hero (“INFINITE DRIVE”, “The Engine of Digital Freedom”) → imagen “Don’t Panic” → descripción del ecosistema → bloque de cita (Douglas Adams) → grid de 4 features (Secure Foundation, Global P2P, Sovereign Services, Your Universe) → CTAs (Explore Project 42, BabelFish, Foundation) → “Join the Movement” (Telegram).
- **Contenido:** ~230 líneas; texto corto, orientado a presentación y enlaces a otras páginas.
- **Assets:** 1 (`dontpanic-space.jpg`).
- **Enlaces internos:** `/project42`, `/services`, `/blockchain`.

### 3.2 Project42Page (`/project42`)

- **Secciones:** Header → cita Barlow → “We Are Building a New World” (imagen) → “Our Philosophy: Cypherpunk Nation” (tabla de voces + imagen) → “The Ecosystem” (4 pilares numerados: Infinite Improbability Drive, BabelFish, Sovereign Services, User Universes) → “Library of Alexandria” (cita Adams, texto, grid de protocolos: Bitcoin, Nostr, EVM, Cosmos, IPFS, Tor, Pears, QVAC, xAI) → “Thursday Note” → cierre “Project 42 / A Cypherpunk Nation”.
- **Contenido:** ~335 líneas; la página más larga y narrativa; muchas citas y listas.
- **Assets:** 2 (`DaVincisASCII.jpeg`, `punks.jpeg`).
- **Duplicación:** Los 4 pilares del ecosistema se repiten (con más detalle) en Services y Blockchain.

### 3.3 ServicesPage (`/services`)

- **Secciones:** Header → BabelFish Network (texto + imagen) → “The BabelFish Protocol” (qué hace / cómo funciona) → 3 cards (Multi-layer, Self-organizing, Fault-tolerant) → “Sovereign Internet Services” con 5 Cards: DNS (.id42), Web & App Hosting, Email & Messaging, File Storage, Cloud Computing → “How It All Connects” (stack en capas 1–5) → bloque Blockchain (resumen + CTA a `/blockchain`) → “Start Using The Network” (Usuario / Builder, Telegram).
- **Contenido:** ~430 líneas; la más larga en total; mezcla red + servicios + stack + blockchain resumido.
- **Assets:** 2 (`blocks.jpeg`, `dots.jpeg`).
- **Duplicación:** Stack de capas y descripción del blockchain coinciden con BlockchainPage y con Project42.

### 3.4 BlockchainPage (`/blockchain`)

- **Secciones:** Header → cita Satoshi → introducción → “Core Components” (Cards: [42], Fish, Governance) → “Master Pools” (tabla de distribución de tokens) → “Hyperspace Bypasses” (IBC, bridges, ecosistemas conectados) → “Technical Architecture” (tabla Full-Stack, especificaciones) → “How to Participate” (Stake, Build, Govern) → cita final Adams.
- **Contenido:** ~400 líneas; muy técnica (tokenomics, tablas, arquitectura).
- **Assets:** 0 (solo componentes UI).
- **Duplicación:** [42] y Fish se mencionan también en Project42 y Services; arquitectura y stack se solapan con Services.

### 3.5 PrivacyPolicyPage (`/privacy`)

- **Secciones:** 13 secciones numeradas (Who We Are, Blockchain Data, Information We Collect, Use, Legal Basis, Cookies, Third-Party, Retention, Rights, Transfers, Children, Changes, Contact).
- **Contenido:** ~170 líneas; solo texto legal, sin imágenes ni componentes complejos.
- **Assets:** 0.

---

## 4. Fuentes de contenido

| Fuente | Uso actual |
|--------|------------|
| **Strings en TSX** | Títulos, párrafos, listas, citas, labels de tabla, CTAs. |
| **Assets estáticos** | 5 imágenes en `src/assets/`, importadas por path en cada página. |
| **Enlaces externos** | Telegram, deep-thought.computer, docs.infinitedrive.xyz, whitepaper BabelFish, infinitedrive.xyz/fish. |
| **Markdown** | Solo `Attributions.md` (no se renderiza en la app). |
| **CMS / JSON / i18n** | No existe. |

Conclusión: **todo el contenido editorial está acoplado al código** de cada página. No hay single source of truth por tipo de contenido (legal, marketing, técnico).

---

## 5. Assets y medios

| Archivo | Usado en | Uso |
|---------|----------|-----|
| `dontpanic-space.jpg` | HomePage | Hero visual |
| `DaVincisASCII.jpeg` | Project42Page | “We Are Building a New World” |
| `punks.jpeg` | Project42Page | “Our Philosophy: Cypherpunk Nation” |
| `blocks.jpeg` | ServicesPage | BabelFish Network |
| `dots.jpeg` | ServicesPage | “How It All Connects” |

- Todas las imágenes se cargan por **import estático** en el componente que las usa.
- Solo **Project42Page** y **ServicesPage** usan `ImageWithFallback`; HomePage usa `<img>` directo.
- No hay carpeta de contenido tipo “media” o “blog”; no hay metadata (alt, créditos) centralizada.

---

## 6. Componentes y reutilización

- **Contenido:** Casi todo es JSX inline por página. El único componente de “contenido” compartido es **`ImageWithFallback`** (usado en Project42 y Services).
- **UI:** Se usan de shadcn: `Card`, `CardHeader`, `CardTitle`, `CardContent` (en Services y Blockchain). Resto de componentes UI no aparecen en las páginas analizadas.
- **Layout:** Cada página usa la misma estructura: `<main className="flex-1 px-4 md:px-8 py-12 max-w-7xl mx-auto w-full">` (Privacy usa `max-w-4xl`). No hay un componente `PageLayout` compartido.
- **Estilos:** Colores y espaciados repetidos en objetos `style` inline (`#e6edf3`, `#c9d1d9`, `#6ba3db`, `#1c2128`, etc.). No hay design tokens o tema centralizado para contenido.

---

## 7. Duplicación y solapamiento de contenido

### 7.1 Temas que se repiten en varias páginas

| Tema | Home | Project42 | Services | Blockchain |
|------|------|-----------|----------|------------|
| Descripción general del ecosistema | ✓ | ✓ | ✓ | (implícito) |
| Los 4 pilares (Blockchain, BabelFish, Services, Universes) | ✓ (grid) | ✓ (detalle) | ✓ (servicios + stack) | ✓ (solo blockchain) |
| Token [42] y Fish | — | ✓ | ✓ (resumen) | ✓ (completo) |
| BabelFish Network | ✓ (mención) | ✓ (pilar) | ✓ (protagonista) | — |
| Servicios soberanos (DNS, hosting, etc.) | ✓ (mención) | ✓ (lista) | ✓ (cards detalladas) | — |
| Stack en capas | — | — | ✓ (capas 1–5) | ✓ (tabla técnica) |
| Gobernanza / DAO | — | ✓ | ✓ (breve) | ✓ (card) |
| Citas (Adams, Barlow, Satoshi, Hughes) | Adams | Barlow, Adams (varias) | Hughes | Satoshi, Adams, Barlow |
| CTAs Telegram / “Join” | ✓ | — | ✓ | — |
| Enlace a docs / whitepaper | — | — | ✓ | ✓ |

### 7.2 Riesgos para el refactor

- **Inconsistencias:** Cambiar un concepto (p. ej. “4 pilares” o % de Master Pools) exige tocar varias páginas.
- **Mantenimiento:** Cualquier cambio de copy o legal (Privacy) es solo en TSX, sin separación por tipo de contenido.
- **Escalabilidad:** Añadir nuevas secciones o páginas implica más JSX largo y más duplicación si no se extrae contenido a datos o componentes semánticos.

---

## 8. Recomendaciones para el refactor de contenidos

### 8.1 Separar contenido de presentación

- **Contenido por tipo:** Definir fuentes únicas para:
  - **Legal:** Privacy (y futuros términos). Opciones: Markdown en repo, o JSON/YAML por idioma.
  - **Marketing/vision:** Citas, eslóganes, descripción del ecosistema, “4 pilares”. Opciones: JSON/YAML o MD por sección.
  - **Técnico:** Tokenomics, Master Pools, arquitectura, especificaciones. Opciones: JSON/YAML o MD para que docs y web compartan datos si aplica.
- **Páginas como composición:** Cada página importa “bloques” de contenido (por ejemplo `homeHero`, `ecosystemPillars`, `privacySections`) y los renderiza con componentes de presentación (Hero, CardGrid, LegalSection, etc.).

### 8.2 Unificar “single source of truth” para temas repetidos

- **Ecosistema / pilares:** Un único módulo (p. ej. `content/ecosystem.ts` o `content/pillars.yaml`) que defina título, descripción corta y larga, y lista de pilares. Home, Project42 y Services lo consumen.
- **Tokens [42] y Fish:** Un único contenido (descripción, uso, enlaces) referenciado desde Project42, Services y Blockchain.
- **Stack / capas:** Una única definición (orden, nombre, descripción) reutilizada en Services y Blockchain con distintas vistas (cards vs tabla).

### 8.3 Estructura de carpetas sugerida (ejemplo)

```
src/
  content/           # o /content en raíz del proyecto
    legal/
      privacy.ts     # o .md + loader
    marketing/
      ecosystem.ts
      quotes.ts
      pillars.ts
    technical/
      tokens.ts
      master-pools.ts
      stack.ts
  data/              # opcional: JSON/YAML crudo
  components/
    content/         # componentes que renderizan contenido (reciben data)
      Hero.tsx
      FeatureGrid.tsx
      LegalSection.tsx
    layout/
      PageLayout.tsx
  pages/             # solo composición + enrutado
```

Así el refactor puede ir por fases: primero extraer legal y citas, luego ecosistema/pilares, luego tokenomics y stack.

### 8.4 Assets y metadata

- Centralizar lista de imágenes (y en el futuro otros medios) en un índice (`content/assets.ts` o JSON) con `src`, `alt`, `credits`, `usage` (en qué página/sección).
- Usar `ImageWithFallback` en todas las páginas que muestren imágenes y derivar `alt`/credits de ese índice.

### 8.5 Design tokens y layout

- Extraer paleta y tipografía a CSS variables o tema (Tailwind/theme o archivo de tokens) para que las páginas no repitan `#6ba3db`, `#e6edf3`, etc.
- Introducir un `PageLayout` (y quizá variantes `PageLayoutNarrow` para Privacy) para homogeneizar `max-w-*`, padding y estructura.

---

## 9. Resumen por página (líneas aproximadas de contenido relevante)

| Página | Líneas aprox. | Imágenes | Componentes UI destacados | Contenido único vs compartido |
|--------|----------------|----------|---------------------------|-------------------------------|
| Home | ~230 | 1 | — | Mayoría único (landing) |
| Project42 | ~335 | 2 | — | Mezcla único (narrativa) y compartido (pilares, protocolos) |
| Services | ~430 | 2 | Card x varias | Mucho compartido (pilares, stack, blockchain) |
| Blockchain | ~400 | 0 | Card, tablas | Compartido (tokens, gobernanza) + único (Master Pools, bridges, specs) |
| Privacy | ~170 | 0 | — | 100% único (legal) |

Este documento puede usarse como base para decidir qué contenidos mover primero a fuentes de datos y qué componentes de contenido/layout crear en el refactor.
