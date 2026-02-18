# Análisis: remanentes no centralizados

Después de centralizar los botones CTA en **SiteButton**, este documento recoge el resultado de un **escaneo** del código para detectar **elementos que siguen definidos a mano** en varias partes (estilos inline repetidos, patrones que podrían ser componentes o tokens) y que convendría centralizar para alinear con el objetivo del refactor.

**Estado (actualizado):** Se aplicaron las correcciones descritas: SectionHeading level 3/4, SiteLink, LeadParagraph, ContentCard borderVariant e iconPosition, CalloutBox borderWidth; ServicesPage refactorizado con PageSection, SectionHeading, ContentCard, SiteLink, LeadParagraph; BlockchainPage, HomePage, Project42Page y PrivacyPolicyPage actualizados para usar los nuevos componentes.

---

## 1. Títulos de sección (h2 / h3 / h4)

### Estado actual
- **SectionHeading** existe y soporta solo **level 1 y 2** (h1 2.5rem, h2 2rem), con `font-mono`, `color: var(--id-text-primary)`, `letterSpacing: 0.05em`.
- **PageSection** usa SectionHeading cuando se pasa `title`; así **BlockchainPage** y **Project42Page** sí centralizan los títulos de sección en muchas zonas.

### Remanentes
| Ubicación | Qué se repite | Veces aprox. |
|-----------|----------------|--------------|
| **ServicesPage** | `<h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "var(--id-text-primary)", letterSpacing: "0.05em" }}>` | 6 |
| **ServicesPage** | `<h3 className="font-mono mb-4" ... style={{ fontSize: "1.2rem" o "1.3rem", color: "var(--id-accent)", letterSpacing: "0.05em" }}>` | 4+ |
| **ServicesPage** | `<h4 className="font-mono text-sm mb-2" o "mb-3" style={{ color: "var(--id-accent)" o "var(--id-text-muted)" }}>` | 10+ |
| **BlockchainPage** | `<h3 className="mb-6 font-mono" style={{ fontSize: "1.5rem", color: "var(--id-text-primary)", letterSpacing: "0.05em" }}>` | 2 |
| **BlockchainPage** | `<h4 className="font-mono text-sm mb-2" style={{ color: "var(--id-text-muted)" }}>` | 1 |
| **PrivacyPolicyPage** | `sectionTitleStyle` local (1.25rem, accent, letterSpacing) para h2 de sección | 1 (objeto reutilizado en la página) |

**Recomendación:**  
- Ampliar **SectionHeading** a `level: 1 | 2 | 3 | 4` con tamaños por nivel (ej. 3 = 1.5rem, 4 = 1.2rem o 1rem) y usarlo en todas las páginas.  
- En **ServicesPage** sustituir las secciones sueltas por **PageSection** con `title` (o PageSection + SectionHeading) para no repetir el h2 manual.

---

## 2. Uso de PageSection vs `<section>` manual

### Estado actual
- **BlockchainPage** y **Project42Page** usan **PageSection** (y a veces SectionDivider) de forma consistente.
- **ServicesPage** no usa PageSection: todas sus secciones son `<section className="mb-16">` y el título es un `<h2>` con estilos inline repetidos.

**Recomendación:**  
Refactorizar **ServicesPage** para usar **PageSection(title=...)** (y SectionDivider entre secciones donde aplique) de modo que margen inferior (mb-16) y título (SectionHeading) salgan del mismo componente.

---

## 3. Bloques tipo “card” con estilos repetidos

### Estado actual
- **ContentCard** centraliza: `backgroundColor: var(--id-bg-card)`, `border: 1px solid var(--id-border)`, padding, título con estilo acento/mono.
- **CalloutBox** centraliza cajas con borde lateral y bg-elevated.

### Remanentes
| Ubicación | Patrón repetido | Componente que podría usarse |
|-----------|------------------|------------------------------|
| **ServicesPage** | `<div className="p-6 rounded" style={{ backgroundColor: "var(--id-bg-card)", border: "1px solid var(--id-border)" }}>` (grid de 3 cards, luego 2 cards “Get started”) | **ContentCard** sin título o con título según el bloque |
| **ServicesPage** | `<div className="p-8 rounded" style={{ backgroundColor: "var(--id-bg-card)", border: "1px solid var(--id-accent)" }}>` (stack de capas) | ContentCard con variante de borde acento, o componente **SectionCard** si se quiere nombre propio |
| **ServicesPage** | `<div className="mb-8 p-6 rounded" style={{ backgroundColor: "var(--id-bg-card)", borderLeft: "3px solid var(--id-accent)" }}>` (bloque “protocol”) | **CalloutBox** o variante de QuoteBlock/Callout con borde izquierdo 3px |
| **ServicesPage** | `<div className="p-4 rounded" style={{ backgroundColor: "var(--id-bg-elevated)" }}>` (con o sin borderLeft) | Variante de **CalloutBox** o componente genérico **Box** con token bg-elevated |
| **HomePage** | Join the Movement: `<div className="p-8 rounded" style={{ backgroundColor: "var(--id-bg-card)", border: "1px solid var(--id-accent)" }}>` | **ContentCard** con prop tipo `borderVariant="accent"` o componente **CtaCard** si se documenta como bloque especial |
| **BlockchainPage** | Bloque final (cita): `<div className="p-8 rounded ..." style={{ backgroundColor: "var(--id-bg-card)", border: "1px solid var(--id-accent)" }}>` | Mismo criterio: ContentCard con variante o bloque de cita reutilizable |

**Recomendación:**  
- Unificar recuadros “card” con borde completo usando **ContentCard** (añadiendo si hace falta `borderVariant: 'default' | 'accent'`).  
- Cajas con solo borde izquierdo y bg-elevated valorar si entran en **CalloutBox** con una variante más o en un **Box** genérico con tokens.

---

## 4. Enlaces externos (acento + subrayado)

### Estado actual
No hay componente compartido para enlaces que abren en nueva pestaña con el mismo aspecto.

### Remanentes
| Ubicación | Uso |
|-----------|-----|
| **ServicesPage** | Whitepaper: `<a href="..." target="_blank" rel="noopener noreferrer" style={{ color: "var(--id-accent)", textDecoration: "underline" }}>` |
| **PrivacyPolicyPage** | Telegram y Deep Thought Labs: mismo estilo en dos `<a>` |

**Recomendación:**  
Crear **SiteLink** (o reutilizar un nombre existente) que renderice `<a>` con `color: var(--id-accent)`, `textDecoration: "underline"`, `target="_blank"` y `rel="noopener noreferrer"` por defecto cuando sea externo, y usarlo en todas las páginas para enlaces externos con ese estilo.

---

## 5. Párrafo “lead” (primer párrafo de una sección)

### Estado actual
El patrón “un poco más grande (1.1rem) + color secondary (+ a veces opacity)” se repite en muchas páginas de forma manual.

### Remanentes
| Ubicación | Patrón |
|-----------|--------|
| **HomePage** | `fontSize: "1.1rem"`, opacity, `color: "var(--id-text-secondary)"` o text-primary |
| **BlockchainPage** | `fontSize: i === 0 ? "1.1rem" : undefined`, `color: "var(--id-text-secondary)"` en varios bloques |
| **Project42Page** | `fontSize: "1.1rem"`, `color: "var(--id-text-secondary)"` |
| **ServicesPage** | `fontSize: i === 0 ? "1.1rem"` o `fontSize: "1.1rem"`, opacity 0.9, `color: "var(--id-text-secondary)"` en varios sitios |

**Recomendación:**  
- Opción A: componente **LeadParagraph** (o **SectionLead**) que aplique 1.1rem + token de color secondary (y opcionalmente opacity) para no repetir el objeto de estilos.  
- Opción B: definir tokens CSS (ej. `--id-text-size-lead`, `--id-text-size-body`) y usar una clase (ej. `.text-lead`) en un archivo de estilos del sitio; las páginas solo asignan la clase.

---

## 6. Iconos + título + descripción (cards de arquitectura / features)

### Estado actual
En **ServicesPage**, las tres cards (Layers, Wifi, Shield) son un `<div>` con estilos inline: icono con `color: var(--id-accent)`, h4, p. No usan **ContentCard** (que sí soporta icon/leading y título).

**Recomendación:**  
Usar **ContentCard** con `icon={Icon}` (y opcionalmente `title`) para esas tres cards, de modo que color de icono, tipo de título y padding queden centralizados en el componente.

---

## 7. Resumen de acciones sugeridas (por prioridad)

| Prioridad | Acción | Impacto |
|-----------|--------|--------|
| Alta | Ampliar **SectionHeading** a level 3 y 4; usar en Blockchain y Services (y sustituir h3/h4 sueltos) | Elimina decenas de estilos inline repetidos de títulos |
| Alta | Refactorizar **ServicesPage** para usar **PageSection** + SectionHeading en lugar de `<section>` + h2 manual | Unifica estructura y espaciado con el resto del sitio |
| Media | Introducir **SiteLink** (o equivalente) para enlaces externos con estilo acento + subrayado | Un solo lugar para el estilo de enlace externo |
| Media | Unificar cards con borde (incl. Join the Movement y bloque final de Blockchain) en **ContentCard** con variante de borde si hace falta | Menos divs con estilos duplicados |
| Media | Usar **ContentCard** para las 3 cards de arquitectura en Services (icon + title + children) | Misma apariencia y comportamiento que otras cards del sitio |
| Baja | **LeadParagraph** o clase/token para párrafo lead (1.1rem + color secondary) | Menos repetición de objetos de estilo en párrafos |
| Baja | Revisar cajas con `bg-elevated` y borde lateral en Services: valorar variantes de **CalloutBox** o componente **Box** | Consistencia de “cajas informativas” |

---

## 8. Cómo comprobar que no queden remanentes

- Tras cada cambio, buscar en `src/pages` y en componentes de sitio:
  - `style={{` con `var(--id-` para ver si ese bloque podría ser un componente o clase ya existente.
  - `fontSize: "1.1rem"`, `fontSize: "2rem"`, `letterSpacing: "0.05em"` para detectar tipografía que podría vivir en SectionHeading o en tokens.
  - `backgroundColor: "var(--id-bg-card)"` y `border: "1px solid` para ver si encaja en ContentCard/CalloutBox.
- Mantener este doc actualizado cuando se centralice un remanente (marcar como “resuelto” o mover a una sección “Hecho”).
