# Consideraciones para soporte multiidioma (i18n)

Qué contemplar si el sitio debe soportar **múltiples idiomas**, y cómo encajarlo con la capa **contenido vs vistas** que ya tenéis.

---

## 1. Decisiones de diseño

### 1.1 Estrategia de URL

| Opción | Ejemplo | Pros | Contras |
|--------|---------|------|--------|
| **Prefijo por ruta** | `/es/`, `/es/privacy`, `/en/project42` | SEO claro por idioma, enlaces compartibles, estándar | Hay que integrar el segmento de locale en el router |
| **Subdominio** | `es.infinitedrive.xyz`, `en.infinitedrive.xyz` | Separación clara por idioma | Más configuración (DNS, build/deploy por subdominio) |
| **Query / cookie sin URL** | `?lang=es` o solo cookie | Implementación simple | Malo para SEO, enlaces no conservan idioma |

**Recomendación:** **Prefijo por ruta** (`/en/`, `/es/`, etc.) con un idioma por defecto (ej. inglés) en la raíz `/` o también bajo `/en/`. Es lo más habitual y compatible con vuestra SPA y con el router actual.

### 1.2 Cómo determinar el idioma

- **URL** (prioridad alta): si la ruta es `/es/...`, locale = `es`.
- **Persistencia:** guardar en `localStorage` (ej. `preferredLocale`) para la siguiente visita.
- **Navegador:** `Accept-Language` como fallback la primera vez (opcional).
- **Default:** si no hay nada, usar un locale por defecto (ej. `en`).

Las vistas y la capa de contenido deben leer **siempre** un locale explícito (del router o de un contexto), no depender de globals.

### 1.3 Idiomas que quieren soportar

Definir la lista desde el inicio (ej. `en`, `es`, …). Eso fija:

- Rutas permitidas.
- Qué carpetas/archivos de contenido existen.
- Qué opciones se muestran en el selector de idioma.

---

## 2. Cómo encaja con vuestra capa de contenido

Hoy todo está en **un solo “idioma implícito”**. Con i18n:

- El **contenido** debe estar **por locale** (por idioma).
- Las **vistas** no cambian de estructura: siguen recibiendo “un objeto de contenido” y lo renderizan; lo que cambia es **de qué locale se lee** ese objeto.

Es decir: la separación **contenido vs vistas** se mantiene; el contenido pasa a ser **contenido por idioma**.

### 2.1 Estructura de contenido por idioma

Dos enfoques coherentes con lo que tenéis:

**Opción A — Carpetas por locale (recomendada para pocos idiomas)**

```
src/content/
  types.ts
  locales/
    en/
      site.ts
      routes.ts
      marketing/
        home.ts
        ...
      legal/
        privacy.ts
    es/
      site.ts
      routes.ts
      marketing/
        home.ts
      legal/
        privacy.ts
  assets.ts              # puede ser compartido (alt por locale si hace falta)
  index.ts               # exporta getContent(locale) o useContent(locale)
```

Cada módulo bajo `en/` y `es/` exporta la **misma forma** (mismos tipos); solo cambian los textos.

**Opción B — Un solo archivo por “tema” con keys por locale**

```
src/content/
  site.ts       # export const site = { en: { ... }, es: { ... } }
  marketing/
    home.ts     # export const home = { en: { ... }, es: { ... } }
```

Las vistas reciben `content.site[locale]`, `content.home[locale]`, etc. Funciona bien si son 2–3 idiomas y preferís menos archivos.

**Recomendación:** Opción A (carpetas por locale) escala mejor, mantiene un solo idioma por archivo y facilita que traductores o herramientas trabajen por carpeta.

### 2.2 Cómo consumen las vistas el contenido

- **Sin i18n (actual):** `import { site, homeHero } from '@/content'`.
- **Con i18n:** el locale viene del **router** (o de un contexto) y la capa de contenido expone algo como:
  - `getContent(locale)` → devuelve todo el contenido de ese idioma, o
  - `useContent()` (hook) que lee el locale del contexto y devuelve el contenido ya filtrado.

Las páginas y componentes **siguen recibiendo datos por props o por un hook**; no tienen que saber si los datos vienen de `en` o `es`, solo que son “el contenido actual”.

---

## 3. Router e integración en la app

- **Rutas:** Definir un prefijo opcional de locale, por ejemplo `/:locale?/`, `/:locale?/project42`, `/:locale?/privacy`.
- **Locale por defecto:** Si `locale` es `undefined`, usar `en` (o el que elijáis). Opcionalmente redirigir `/` → `/en` para que la URL sea siempre explícita.
- **Validación:** Si `locale` no está en la lista de idiomas soportados, redirigir al default o a 404.
- **Enlaces internos:** Todas las `<Link>` deben incluir el locale actual (ej. `/es/project42`). Puede ser un componente `LocaleLink` que añada el prefijo, o un helper `path(locale, path)`.

Así el “controlador” (router) sigue decidiendo **qué página** y **en qué idioma** se muestra; las vistas solo renderizan el contenido que reciben para ese idioma.

---

## 4. Qué más contemplar

### 4.1 Contenido legal (Privacy, etc.)

- Suele ser **por idioma y por versión/fecha**: “Privacy Policy (ES), last updated …”.
- Conviene que cada locale tenga su propio archivo (o su clave dentro del módulo) y su **fecha de última actualización** en ese idioma.
- En algunos casos el texto legal en un idioma es el “oficial”; el resto son traducciones. Definir si todos los idiomas son equivalentes o si uno es la referencia.

### 4.2 Assets (imágenes)

- **Metadata (alt, créditos):** puede ser por locale en `content` (ej. `assetsMeta[locale][key]`) para que los `alt` estén traducidos.
- **Imágenes con texto incrustado:** si hay gráficos con texto, podéis tener una imagen por idioma (ej. `hero-en.jpg`, `hero-es.jpg`) y elegir en la vista según `locale`.

### 4.3 Plurales y formato de números/fechas

- **Plurales:** en inglés 1 item / 2 items; en otros idiomas más formas. Si en el futuro tenéis listas dinámicas o mensajes con cantidad, un helper de pluralización (o una lib como i18next) evita lógica repartida en las vistas.
- **Fechas y números:** formatear con `Intl.DateTimeFormat` e `Intl.NumberFormat` pasando el `locale` (ej. `es`, `en-US`). Las vistas pueden usar un pequeño helper `formatDate(date, locale)` / `formatNumber(n, locale)`.

### 4.4 RTL (derecha a izquierda)

Si más adelante soportáis árabe o hebreo:

- El layout y los componentes deben respetar `dir="rtl"` cuando `locale` sea RTL (por ejemplo con `document.documentElement.dir` o un wrapper con `dir`).
- CSS que asuma “izquierda/derecha” (márgenes, padding, flex) es mejor manejarlo con propiedades lógicas (`margin-inline-start`, etc.) o con clases que dependan del locale.

No es obligatorio implementarlo desde el primer día, pero conviene no hardcodar “izquierda” en estilos críticos si pensáis en i18n a largo plazo.

### 4.5 Traducciones faltantes

- Definir un **locale de fallback** (ej. siempre `en`). Si falta una clave o un archivo para `es`, mostrar el texto en `en` en lugar de una clave cruda o un vacío.
- Opcional: en desarrollo, marcar visualmente los textos que están en fallback para detectar huecos.

---

## 5. Librerías vs enfoque propio

- **react-i18next + i18next:** estándar en React. Trabaja con JSON/JS por namespace; soporta plurales, interpolación, carga lazy por idioma. Encaja bien si preferís claves tipo `t('home.hero.title')` y ficheros de traducción separados.
- **Enfoque propio (content por locale en TS):** como ya tenéis contenido tipado en TypeScript, podéis **no usar i18next** y en su lugar:
  - Tener `content/locales/en/...` y `content/locales/es/...` con la misma estructura.
  - Exportar `getContent(locale)` (o un hook `useContent()`) que devuelva el objeto de contenido del locale. Las vistas siguen igual: reciben contenido, no claves.

Ventaja del enfoque propio: **tipado fuerte** (el contenido es TS), sin depender de claves string. Ventaja de i18next: ecosistema (plurales, detección de idioma, integración con herramientas de traducción). Podéis empezar con el enfoque propio y, si más adelante necesitáis flujos más complejos (plurales, CMS), introducir i18next delante de vuestra capa de contenido.

---

## 6. Resumen de lo que deberíais contemplar

| Tema | Qué decidir / hacer |
|------|----------------------|
| **URL** | Prefijo por ruta (`/es/`, `/en/`) y locale por defecto. |
| **Detección de idioma** | URL > localStorage > Accept-Language > default. |
| **Estructura de contenido** | Carpetas por locale (`content/locales/en/`, `content/locales/es/`) o un objeto por tema con keys por locale. |
| **Consumo en vistas** | Un único punto de entrada (`getContent(locale)` o `useContent()`) para que las vistas no importen directamente por idioma. |
| **Router** | Rutas con `/:locale?/...`; enlaces internos siempre con el locale actual. |
| **Legal** | Un archivo (o bloque) por idioma con fecha de actualización; fallback al idioma de referencia si falta. |
| **Assets** | Alt (y opcionalmente imágenes) por locale en la capa de contenido. |
| **Plurales y formato** | Helpers con `locale` para fechas y números; valorar i18next si los plurales se complican. |
| **RTL** | Solo si vais a soportar árabe/hebreo; usar `dir` y estilos lógicos. |
| **Fallback** | Siempre un locale por defecto y política clara cuando falte una traducción. |

Con esto, el sitio puede tener soporte para múltiples idiomas manteniendo la misma separación **contenido (por idioma) vs vistas**, y sin mezclar lógica de idioma dentro de la presentación.
