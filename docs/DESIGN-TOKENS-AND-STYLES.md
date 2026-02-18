# Design tokens and style rules

Documento central de diseño: qué estilos se usan, dónde y por qué. Cualquier valor que haga un elemento “único” (opacidad, color, tamaño) debe estar definido aquí o en el componente que representa ese **tipo** de elemento.

---

## 1. Principios

- **Mismo elemento / mismo componente → mismo estilo.** Si es el mismo tipo de contenido (p. ej. párrafo lead, texto de cuerpo, lista secundaria), no se personaliza por página ni por instancia. Solo cambia el contenido.
- **Personalización = propósito concreto.** Los overrides (color, opacidad, etc.) se usan solo cuando el **rol** es distinto (p. ej. subtítulo de página vs. párrafo lead) o cuando el diseño define una variante explícita (p. ej. “quote” con opacidad 0.9). Esos casos quedan registrados aquí o en el componente.
- **Nada por accidente.** Evitar valores “porque quedó bien en una página”: si un estilo se repite o define jerarquía, debe vivir en tokens, en el componente o en este doc.

---

## 2. Tokens de texto (tokens.css)

| Token | Uso |
|-------|-----|
| `--id-text-primary` | **Todo el texto de lectura:** títulos, leads, párrafos, listas, descripciones en cards/callouts, celdas de tabla, citas. Se usa en todo el sitio para que ningún texto se vea más tenue que otro; misma claridad y brillo. Sin opacidad. |
| `--id-text-muted` | Solo **labels** (ej. "Purpose", "Total supply"), **autor de cita** ("— Autor"), tags pequeños, texto de apoyo muy breve. |

No se inventan colores inline; se usan estos tokens. Para acentos (links, términos destacados): `--id-accent`.

### Misma claridad en todo el texto

Para que ningún párrafo o bloque se vea más opaco o tenue que otro, **todo el cuerpo de texto** (encabezados de página, leads, párrafos, listas, contenido de cards y callouts, tablas, citas) usa **`--id-text-primary`** y **sin opacidad**. Solo se usa `--id-text-muted` en labels y autorías (ej. "— Douglas Adams"). Así se evita la mezcla de tonalidades que hace que unos textos se vean peor que otros.

---

## 3. Opacidad

La opacidad se usa solo donde está **documentada** aquí. El resto del texto (lead, body, listas) va a **opacidad 1**; la jerarquía se hace con color (primary / secondary / muted).

| Contexto | Valor | Dónde |
|----------|--------|--------|
| Imagen decorativa (opcional) | 0.8 | Imágenes de sección; mismo valor en todas. |

El texto **no** usa opacidad: todo va a 1 para mantener la misma claridad en toda la página.

No se aplican opacidades distintas (0.85, 0.9, 0.7, etc.) a párrafos o listas “normales” para suavizar; eso rompe la regla de mismo elemento = mismo estilo.

---

## 4. Componentes y estilos por defecto

Cada componente de sitio define **un** estilo por defecto para su rol. Las páginas no sobrescriben salvo que necesiten una **variante** explícita (y esa variante debería estar documentada o ser un prop del componente).

| Componente | Estilo por defecto | Notas |
|------------|--------------------|--------|
| **LeadParagraph** | `fontSize: 1.1rem`, `color: var(--id-text-primary)`, sin opacidad. | Primer párrafo bajo un título de sección. |
| **PageHeader** (subtítulo) | `fontSize: 1.2rem`, `color: var(--id-text-primary)`, sin opacidad. | Misma claridad que el resto del texto. |
| **BulletList** | `color: var(--id-text-primary)`, `text-sm`, sin opacidad. | Listas con prefijo “→”. |
| **QuoteBlock** (cita) | `color: var(--id-text-primary)`, `fontSize: 0.95rem`, sin opacidad. Autor en muted. | Cita con misma claridad que el cuerpo. |
| **ContentCard** / **CalloutBox** | Cuerpo en primary; sin opacidad. | Misma claridad en todo el sitio. |
| **FormattedText** | Respeta segmentos (bold/accent); color por contexto del contenedor. | No añade opacidad. |

Párrafos y listas que no usan componente usan **`color: var(--id-text-primary)`** y sin opacidad. Solo `--id-text-muted` para labels y autor de cita.

---

## 5. Resumen

- **Un estilo por rol:** todo el texto de lectura = primary, sin opacidad; solo muted para labels y autorías. Opacidad solo en imágenes decorativas (0.8) si se desea.
- **Mismo componente, mismo contenido lógico → mismo estilo.** Nada de “este párrafo 0.9 y el de al lado sin opacidad” si ambos son cuerpo.
- **Cambios de look:** ajustar el componente o los tokens; no estilos puntuales por página sin documentar.

Para la estructura del sitio y dónde viven los componentes, ver **[ARCHITECTURE.md](ARCHITECTURE.md)**. Para tokens CSS, **`src/styles/tokens.css`**.
