# Propuesta: Separación Contenido vs Vistas

**Objetivo:** Saneamiento de la estructura del proyecto para que cualquier cambio o movimiento futuro sea fácil y mantenible, con una **diferencia clara entre datos/contenido y vistas**.

---

## 1. Principio rector

| Capa | Responsabilidad | Ubicación | Regla |
|------|------------------|-----------|--------|
| **Contenido / datos** | *Qué* se muestra: textos, rutas, metadatos de assets, datos estructurados (pilares, tokenomics, secciones legales). Sin JSX. | `src/content/` | Solo tipos, constantes, objetos planos o arrays. Exportaciones por dominio. |
| **Vistas** | *Cómo* se muestra: layout, componentes React, estilos, estructura de la página. | `src/pages/`, `src/components/` | Reciben contenido por props o importando desde `@/content`. No definen copy ni datos de negocio. |

- **Contenido** = single source of truth. Un cambio de copy o de dato se hace en un solo sitio.
- **Vistas** = presentación. Reutilizan componentes UI y layout; no duplican strings ni estructuras de datos.

---

## 2. Estructura de carpetas propuesta

```
src/
├── content/                    # Contenido y datos (sin JSX)
│   ├── types.ts                # Tipos compartidos para contenido
│   ├── index.ts                # Barrel: reexportar lo que las vistas necesiten
│   ├── routes.ts               # Rutas de la app y etiquetas de navegación
│   ├── site.ts                 # Marca, tagline, enlaces externos globales
│   ├── assets.ts               # Metadata de imágenes (src, alt, créditos, uso)
│   ├── marketing/              # Contenido por página o bloque de marketing
│   │   ├── home.ts
│   │   ├── project42.ts
│   │   ├── services.ts
│   │   └── blockchain.ts
│   └── legal/
│       └── privacy.ts
│
├── components/
│   ├── layout/                 # Layout compartido (PageLayout, etc.)
│   │   └── PageLayout.tsx
│   ├── shared/                 # Componentes compartidos (ImageWithFallback, etc.)
│   └── ui/                     # Primitivas UI (shadcn)
│
├── pages/                      # Vistas: componen contenido + componentes
│   ├── HomePage.tsx
│   ├── Project42Page.tsx
│   ├── ServicesPage.tsx
│   ├── BlockchainPage.tsx
│   └── PrivacyPolicyPage.tsx
│
├── assets/                     # Archivos estáticos (imágenes); metadata en content/assets.ts
├── App.tsx
├── main.tsx
└── ...
```

---

## 3. Convenciones

### 3.1 Capa de contenido (`src/content/`)

- **Solo TypeScript/JSON:** tipos, constantes, objetos, arrays. Nada de JSX ni componentes.
- **Tipado estricto:** todo el contenido que consumen las vistas está tipado en `content/types.ts` (o en los propios módulos).
- **Organización por dominio:**
  - `routes.ts`, `site.ts`, `assets.ts` → configuración y datos globales.
  - `marketing/*` → por página o por bloque (home, project42, services, blockchain).
  - `legal/*` → políticas, términos, etc.
- **Barrel `content/index.ts`:** exporta lo que las vistas necesitan, para imports del tipo `import { siteContent, routes, homeContent } from '@/content'` (o desde `@/content/...` según preferencia).

### 3.2 Capa de vistas (`src/pages/`, `src/components/`)

- **Páginas:** importan contenido desde `@/content` y lo pasan a componentes de presentación. La página es “composición”: qué contenido mostrar y en qué orden.
- **Componentes de presentación:** reciben datos por props (por ejemplo `title: string`, `features: Feature[]`). No importan contenido de negocio; solo de `content` si es un layout global (p. ej. rutas para el nav).
- **Layout:** un único `PageLayout` (o variantes) que recibe `children` y opciones (ancho, padding). Las páginas envuelven su contenido en ese layout.

### 3.3 Assets (imágenes)

- Los **archivos** siguen en `src/assets/`.
- La **metadata** (ruta lógica, alt, créditos, en qué sección se usa) vive en `content/assets.ts`. Las vistas que muestran imágenes importan el módulo de assets que necesiten (o un mapa) y reciben la URL + alt desde contenido, o desde un helper que resuelve por key.

---

## 4. Flujo de datos

```
content/*.ts  →  exportan datos tipados
       ↓
pages/*.tsx   →  importan contenido, lo pasan a componentes
       ↓
components/*  →  renderizan props (y opcionalmente layout)
```

- **Nav/App:** lee `routes` desde `content/routes.ts` para generar enlaces y etiquetas.
- **Cada página:** importa su bloque desde `content/marketing/...` o `content/legal/...` y lo inyecta en secciones (Hero, FeatureGrid, LegalSection, etc.).

---

## 5. Migración gradual

1. **Fase 1 (estructura base):** Crear `content/`, tipos, `routes.ts`, `site.ts`, `assets.ts` y `PageLayout`. Sin cambiar aún el copy de las páginas.
2. **Fase 2:** Mover primero el contenido que ya está duplicado o es más crítico: rutas y nav desde `routes`, legal (Privacy) a `content/legal/privacy.ts`, y metadata de imágenes a `content/assets.ts`.
3. **Fase 3:** Extraer por páginas: home → `content/marketing/home.ts`, luego project42, services, blockchain. Ir refactorizando cada página para que lea de `content` y las vistas solo reciban props.
4. **Fase 4:** Unificar datos compartidos (pilares del ecosistema, descripción de [42]/Fish, stack en capas) en módulos únicos en `content/` y que varias páginas los reutilicen.

---

## 6. Beneficios

- **Mantenibilidad:** Cambios de copy o de datos en un solo lugar.
- **Claridad:** Quién trabaja en contenido edita `content/`; quien trabaja en UI edita componentes y páginas.
- **Escalabilidad:** Añadir i18n o CMS más adelante implica sustituir o generar la capa `content/` sin reescribir vistas.
- **Testing:** Los datos se pueden testear o validar (p. ej. esquemas) de forma aislada; las vistas se pueden testear con mocks de contenido.

---

## 7. Resumen

- **Contenido/datos** → `src/content/` (tipos, rutas, site, assets, marketing, legal). Sin JSX.
- **Vistas** → `src/pages/` + `src/components/`: componen y presentan; consumen contenido vía imports y props.
- **Migración** en fases: estructura y rutas primero, luego legal y assets, después marketing por página, y por último unificación de bloques compartidos.

Esta propuesta deja la base lista para que cualquier movimiento o cambio futuro sea predecible y mantenible a largo plazo.
