# Ruta de migración: soporte multiidioma (i18n)

Estrategia por **fases** para añadir multiidioma sin romper lo que ya tenéis. Cada fase es desplegable y permite pausar o continuar cuando convenga.

---

## Visión general

| Fase | Objetivo | Resultado al terminar |
|------|----------|------------------------|
| **0** | Decisiones previas | Locales definidos, estrategia de URL y default claros |
| **1** | Estructura de contenido por locale | Contenido actual vive bajo `locales/en/`; existe `getContent(locale)` |
| **2** | Router con locale en la URL | Rutas `/:locale?/...`; redirecciones y enlaces con prefijo |
| **3** | Contexto y hook de contenido | `LocaleProvider` + `useContent()`; la app lee el locale actual de la URL |
| **4** | Vistas consumen contenido por locale | Páginas usan `useContent()` en lugar de import directo de `@/content` |
| **5** | Segundo idioma (ej. español) | Carpeta `locales/es/` con contenido traducido; sitio usable en dos idiomas |
| **6** | Selector de idioma y persistencia | UI para cambiar idioma; guardar preferencia en `localStorage` |
| **7** | Pulido | Fallbacks, meta tags por idioma, revisión legal y assets |

---

## Fase 0 — Decisiones previas (sin cambios en código)

**Objetivo:** Dejar fijado qué idiomas se soportan, cuál es el default y cómo se refleja en la URL.

| Decisión | Opciones | Recomendación |
|----------|----------|----------------|
| Locale por defecto | `en` u otro | `en` si el sitio actual está en inglés |
| Lista de locales | Ej. `['en', 'es']` | Definir al menos default + el primer idioma a añadir |
| URL con locale | Prefijo siempre vs opcional | Prefijo **opcional**: `/` y `/project42` = default; `/en/`, `/es/` explícitos. O bien **siempre** prefijo: `/` → redirect a `/en/`. |
| Persistencia | ¿Guardar idioma elegido? | Sí, en `localStorage` (clave ej. `preferredLocale`), usado cuando no hay locale en la URL |

**Entregable:** Documento corto (o sección en el README) con: `defaultLocale`, `supportedLocales`, regla de redirección de `/`.

---

## Fase 1 — Estructura de contenido por locale

**Objetivo:** El contenido actual pasa a ser “el contenido en inglés” y se expone mediante una función que recibe el locale.

**Pasos:**

1. **Crear la estructura de carpetas por locale (solo inglés por ahora).**
   - Añadir `src/content/locales/en/`.
   - Mover (o copiar y luego borrar) los módulos actuales que tienen textos traducibles:
     - `site.ts` → `locales/en/site.ts`
     - `routes.ts` → `locales/en/routes.ts`
     - `marketing/home.ts` → `locales/en/marketing/home.ts`
     - `legal/privacy.ts` → `locales/en/legal/privacy.ts`
   - Dejar en `content/` (fuera de `locales/`): `types.ts`, `assets.ts` (si los alt no varían por idioma; si varían, pueden ir por locale más adelante).

2. **Definir un tipo “contenido completo” por locale.**  
   En `content/types.ts` (o en un `content/locales/types.ts`), definir algo como `LocaleContent` que agrupe todo lo que hoy exportan `site`, `routes`, `marketing/home`, `legal/privacy` para un idioma.

3. **Implementar la carga por locale.**
   - Crear `content/locales/en/index.ts` que importe todos los módulos de `en/` y exporte un objeto `enContent` de tipo `LocaleContent`.
   - Crear `content/getContent.ts` (o `content/index.ts` ampliado) con:
     - `supportedLocales = ['en']` (luego se añade `'es'`).
     - `defaultLocale = 'en'`.
     - `getContent(locale: string): LocaleContent` que, si `locale === 'en'`, devuelve `enContent`; si no está soportado, devuelve `enContent` como fallback (y opcionalmente log en dev).

4. **Mantener el barrel actual funcionando (temporalmente).**  
   El barrel `content/index.ts` puede seguir exportando el contenido en inglés por defecto (re-exportando desde `getContent('en')` o desde `locales/en`) para no romper las vistas todavía.

**Entregable:** Contenido vive bajo `content/locales/en/`; existe `getContent(locale)` que siempre devuelve contenido tipado; las vistas siguen funcionando sin cambios si el barrel apunta a inglés.

**Criterio de éxito:** `npm run build` pasa; la app se ve igual que antes.

---

## Fase 2 — Router con locale en la URL

**Objetivo:** Las rutas incluyen un segmento opcional de locale; el resto de la app puede leer “locale actual” de la URL.

**Pasos:**

1. **Definir constantes de i18n en un solo sitio.**  
   Por ejemplo en `content/i18n.ts` o en el mismo módulo donde está `getContent`:
   - `supportedLocales`, `defaultLocale`, `isSupportedLocale(locale)`.

2. **Cambiar la definición de rutas “base” (sin locale).**  
   Las rutas lógicas siguen siendo `/`, `/project42`, `/privacy`, etc. El router tendrá rutas con prefijo opcional: `/:locale?/`, `/:locale?/project42`, etc.

3. **Actualizar el router en `App.tsx` (o donde estén las `Route`).**
   - Rutas: `<Route path="/" element={...} />`, `<Route path="/:locale/" element={...} />`, `<Route path="/:locale/project42" element={...} />`, etc., o un único `<Route path="/:locale?/*" element={...} />` con rutas anidadas.
   - En el elemento que renderiza la página, leer `useParams().locale`; si no existe o no es soportado, usar `defaultLocale`.

4. **Redirecciones.**
   - Si decidiste “siempre prefijo”: `<Route path="/" element={<Navigate to={`/${defaultLocale}/`} replace />} />`.
   - Si un `locale` en la URL no está en `supportedLocales`, redirigir a la misma ruta con `defaultLocale` o a `/`.

5. **Helper para construir rutas con locale.**  
   `pathWithLocale(locale: string, path: string): string` (ej. `pathWithLocale('es', '/privacy')` → `'/es/privacy'`). Lo usarán el selector de idioma y los enlaces en la Fase 6.

**Entregable:** Se puede abrir `/en/project42` o `/project42` (si locale es opcional); el locale se obtiene de `useParams()`; hay redirecciones coherentes y un helper para rutas con locale.

**Criterio de éxito:** Navegar a `/en/` y a `/` (si aplica) muestra la home; no hay rutas rotas.

---

## Fase 3 — Contexto y hook de contenido

**Objetivo:** Toda la app tiene un “locale actual” y un modo único de obtener el contenido de ese locale (hook o contexto).

**Pasos:**

1. **Crear un contexto de locale.**  
   Por ejemplo `LocaleContext` con: `locale: string`, `setLocale?: (l: string) => void` (opcional; para el selector de idioma en Fase 6).

2. **Rellenar el contexto desde la URL.**  
   En el componente que envuelve las rutas (o en el layout principal), leer `useParams().locale`, validar con `isSupportedLocale`, y proporcionar ese valor (y el setter si aplica) vía `LocaleProvider`.

3. **Crear el hook `useContent()`.**  
   Dentro del mismo provider (o leyendo el contexto), implementar `useContent(): LocaleContent` que llame a `getContent(locale)` con el locale del contexto. Así las vistas solo usan `useContent()` y no importan directamente desde `@/content`.

4. **Asegurar que el provider envuelve todas las rutas** que necesitan contenido traducido.

**Entregable:** `useContent()` devuelve el contenido del locale actual (que viene de la URL vía contexto). Las vistas aún pueden seguir usando imports directos; en Fase 4 se cambian a `useContent()`.

**Criterio de éxito:** En una página de prueba, usar `useContent()` y comprobar que el contenido cambia si se cambia el locale en la URL (cuando exista más de un locale).

---

## Fase 4 — Vistas consumen contenido por locale

**Objetivo:** Ninguna vista importa contenido directamente de `@/content`; todas usan `useContent()` (o props inyectadas desde un contenedor que use `useContent()`).

**Pasos:**

1. **Sustituir imports de contenido por `useContent()`.**  
   En cada página que importe desde `@/content` (Home, Privacy, y luego Project42, Services, Blockchain):
   - Quitar `import { site, homeHero, ... } from '@/content'`.
   - Añadir `const content = useContent()` (o desestructurar lo que necesiten).
   - Usar `content.site`, `content.home`, `content.privacy`, etc., según la forma de `LocaleContent`.

2. **Ajustar el barrel `content/index.ts`.**  
   Dejar de exportar el contenido “plano” en inglés; exportar solo tipos, `getContent`, `supportedLocales`, `defaultLocale`, y lo que usen el router o el selector de idioma. Las vistas ya no deberían depender del barrel para textos.

3. **Revisar enlaces internos.**  
   Los botones/links que usen `onNavigate` o `<Link to="...">` deben usar rutas con locale. Eso suele hacerse con el helper de Fase 2: `pathWithLocale(locale, path)`. Si el locale viene del contexto, los enlaces se construyen con el locale actual.

4. **Componente `LocaleLink` (opcional pero recomendable).**  
   Un `<LocaleLink to="/privacy">` que internamente haga `<Link to={pathWithLocale(locale, '/privacy')}>`. Así el nav y el footer usan `LocaleLink` y no se olvida el prefijo.

**Entregable:** Todas las páginas leen contenido vía `useContent()`; los enlaces internos incluyen el locale; el sitio sigue mostrando solo inglés pero ya está “conectado” al locale de la URL.

**Criterio de éxito:** Cambiar la URL de `/en/` a `/es/` (aún sin contenido en español) no rompe; al añadir `es` en Fase 5, cambiar a `/es/` mostrará el contenido en español.

---

## Fase 5 — Segundo idioma (ej. español)

**Objetivo:** Añadir un segundo locale con contenido completo; el sitio es usable en dos idiomas.

**Pasos:**

1. **Añadir el locale a la configuración.**  
   `supportedLocales = ['en', 'es']` (o el que hayáis elegido).

2. **Crear la carpeta y archivos para el nuevo locale.**  
   Copiar la estructura de `content/locales/en/` a `content/locales/es/` y traducir cada módulo (site, routes, marketing/home, legal/privacy, etc.). Mantener los mismos tipos y la misma “forma” del objeto; solo cambian los strings.

3. **Registrar el contenido en `getContent`.**  
   En `getContent(locale)`, si `locale === 'es'`, devolver el contenido de `locales/es/`; si no está soportado, seguir devolviendo el fallback (p. ej. inglés).

4. **Probar todas las rutas en ambos idiomas.**  
   Navegar a `/es/`, `/es/privacy`, etc., y comprobar que no hay keys faltantes ni imports rotos.

5. **Legal:** Si la política de privacidad en español es una traducción oficial, actualizar la fecha “Last updated” en el contenido de `es` si aplica.

**Entregable:** Sitio disponible en inglés y en el segundo idioma; cambiar el locale en la URL cambia todo el contenido.

**Criterio de éxito:** Un usuario puede leer todo el sitio en ambos idiomas sin ver textos en el idioma equivocado.

---

## Fase 6 — Selector de idioma y persistencia

**Objetivo:** El usuario puede cambiar de idioma desde la UI y la preferencia se guarda para la siguiente visita.

**Pasos:**

1. **Componente selector de idioma.**  
   Un dropdown o botones (ej. “EN | ES”) que muestre los `supportedLocales`. Al elegir uno:
   - Navegar a la misma “ruta lógica” con el nuevo locale (ej. de `/en/privacy` a `/es/privacy`) usando `pathWithLocale` y la ruta actual sin locale.
   - Opcionalmente llamar a `setLocale` del contexto si lo usáis para algo más que la URL.

2. **Persistencia en `localStorage`.**  
   Al cambiar de idioma, guardar en `localStorage` (ej. clave `preferredLocale`) el nuevo valor. En la primera carga (Fase 2 o 3), si la URL no tiene locale, leer `preferredLocale` y, si es válido, redirigir a `/${preferredLocale}/...` para la ruta actual. Así la primera visita sin locale puede ir al idioma preferido.

3. **Colocación del selector.**  
   Integrarlo en el nav (desktop) y en el menú móvil, de forma que sea visible pero no domine el diseño.

**Entregable:** Selector de idioma visible; al cambiar, la URL y el contenido cambian y la preferencia se guarda.

**Criterio de éxito:** Elegir español, recargar o volver otro día, y que la app abra en español (si la lógica de redirección sin locale usa `preferredLocale`).

---

## Fase 7 — Pulido

**Objetivo:** Fallbacks claros, SEO básico por idioma y revisión de edge cases.

**Pasos:**

1. **Fallback de traducciones.**  
   Ya lo tenéis si `getContent(locale)` devuelve `defaultLocale` cuando el locale no está soportado. Opcional: en desarrollo, loguear cuando se use fallback para detectar traducciones faltantes.

2. **Meta tags por idioma.**  
   En el `<head>`, usar `lang` y `hreflang` según el locale actual (y las alternativas). Si tenéis un componente de layout o de documento, que reciba el locale y ponga `<html lang={locale}>` y los `<link rel="alternate" hreflang="..." />` para cada versión de la página.

3. **Revisión de contenido legal.**  
   Confirmar que cada idioma tiene su versión y fecha de actualización correctas.

4. **Assets (alt por idioma).**  
   Si los `alt` de las imágenes deben estar traducidos, mover o duplicar la metadata de assets por locale (ej. `locales/en/assets.ts`, `locales/es/assets.ts`) e incluirlos en `LocaleContent`.

5. **Formato de fechas y números.**  
   Si hay fechas o números mostrados en la UI, usar el locale actual con `Intl.DateTimeFormat` e `Intl.NumberFormat` para que se formateen según el idioma.

**Entregable:** Comportamiento estable, SEO básico por idioma y contenido legal/alt coherente con cada locale.

---

## Orden y dependencias

```
Fase 0 → Fase 1 → Fase 2 → Fase 3 → Fase 4 → Fase 5 → Fase 6 → Fase 7
         │         │         │         │         │
         │         │         │         │         └── Primera experiencia bilingüe
         │         │         │         └── App “i18n-ready”; solo falta contenido en otro idioma
         │         │         └── Vistas pueden leer contenido por locale
         │         └── URL ya lleva locale; contexto puede leerlo
         └── Contenido organizado por idioma; getContent(locale) existe
```

- **Fases 0–2** no cambian cómo las vistas consumen contenido (siguen con imports o con el barrel actual).
- **Fase 3** introduce el canal (contexto + hook); **Fase 4** migra las vistas a ese canal.
- A partir de **Fase 5** el sitio es ya multiidioma; **Fase 6 y 7** mejoran UX y SEO.

Podéis hacer un release después de Fase 4 (todo en un idioma pero con URL y contenido por locale) y otro después de Fase 5 (dos idiomas). Las fases 6 y 7 se pueden hacer en paralelo o en iteraciones cortas.

---

## Resumen

| Fase | Nombre corto | Cambio principal |
|------|----------------|-------------------|
| 0 | Decisiones | defaultLocale, supportedLocales, regla de URL |
| 1 | Contenido por locale | `locales/en/`, `getContent(locale)` |
| 2 | Router + URL | `/:locale?/...`, redirecciones, `pathWithLocale` |
| 3 | Contexto + hook | `LocaleProvider`, `useContent()` |
| 4 | Vistas usan hook | Páginas usan `useContent()`; `LocaleLink` |
| 5 | Segundo idioma | `locales/es/`, contenido traducido |
| 6 | Selector + persistencia | UI para cambiar idioma, `localStorage` |
| 7 | Pulido | Fallbacks, meta/hreflang, legal, assets, fechas/números |

Siguiente paso práctico: cerrar **Fase 0** (documentar decisiones) y luego implementar **Fase 1** (mover contenido a `locales/en/` y crear `getContent`).
