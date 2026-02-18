# Cómo obtener el HTML completo de producción (con estilos)

En producción, [infinitedrive.xyz](https://infinitedrive.xyz) es una **SPA** (Single Page Application). Cuando haces un `curl` o un `fetch` a la URL, el servidor devuelve un HTML mínimo que solo incluye algo así:

```html
<div id="root"></div>
<script src="/assets/index-xxx.js"></script>
```

Todo el contenido (textos, negritas, colores) lo pinta **JavaScript en el navegador** después de cargar. Por eso un simple “descargar la página” no nos da el HTML final con `<strong>`, `<span style="...">`, etc.

Para obtener el **HTML completo ya renderizado** (con etiquetas y estilos) hay que **ejecutar la página como un navegador** y leer el DOM cuando ya esté pintado.

---

## Opciones

### 1. Script con Playwright (recomendado)

Playwright abre un navegador (headless o con ventana), carga cada URL, espera a que la app React termine de renderizar y luego puede:

- Leer **todo el HTML** del documento o de `#root` (incluyendo `<strong>`, `<span>`, `style`, clases).
- Guardarlo en archivos (por ejemplo `docs/production-snapshots/home.html`) para inspeccionar o procesar.

**Ventajas:** Repetible, se puede ejecutar con `npm run` cuando quieras actualizar las capturas.  
**Desventaja:** Hay que instalar Playwright como dependencia de desarrollo.

En este repo hay un script listo: **`scripts/dump-production-html.mjs`**. Uso:

```bash
npm install
npm run dump:production-html
```

(La primera vez, `npm install` instalará Playwright como devDependency.)  
Los HTML se guardan en **`docs/production-snapshots/`** (home.html, project42.html, blockchain.html, services.html, privacy.html). Esa carpeta está en `.gitignore` para no versionar los volcados.

---

### 2. Navegador real + copiar HTML

1. Abre [infinitedrive.xyz](https://infinitedrive.xyz) (y luego /project42, /blockchain, etc.) en Chrome o Firefox.
2. Cuando la página esté cargada, abre DevTools (F12).
3. En la pestaña **Elements** (Elementos), clic derecho en `<main>` o en `<div id="root">` → **Copy** → **Copy outerHTML**.
4. Pega el resultado en un `.html` o en un editor para analizarlo.

**Ventajas:** No requiere instalar nada.  
**Desventaja:** Manual; hay que repetir por cada ruta y cada vez que quieras actualizar.

---

### 3. Consola del navegador

En la misma página de producción, abre la consola (F12 → Console) y ejecuta:

```js
// HTML completo del #root (solo el contenido de la app)
copy(document.getElementById('root').innerHTML);

// O todo el body
copy(document.body.innerHTML);
```

`copy()` (en Chrome DevTools) pone el resultado en el portapapeles. Luego puedes pegarlo en un archivo.

**Ventajas:** Rápido, sin dependencias.  
**Desventaja:** Manual; hay que hacerlo en cada página.

---

### 4. Herramientas tipo “save full page”

Extensiones como “SingleFile” o “Save Page WE” guardan la página **después** de que el JavaScript haya ejecutado, es decir, el DOM ya renderizado. Si instalas una en tu navegador, puedes guardar “página completa” de cada URL y abrir el `.html` para ver etiquetas y estilos.

**Ventaja:** No requiere código en el repo.  
**Desventaja:** Depende de una extensión y de hacerlo a mano por ruta.

---

## Qué te da el HTML completo

Con el HTML ya renderizado puedes ver, por cada texto:

- Si está dentro de **`<strong>`** o **`<b>`** → negrita.
- Si está en un **`<span style="font-weight: bold">`** o con una clase que aplica `font-weight: bold` → negrita.
- Si tiene **`style="color: ..."`** o una clase de color (p. ej. acento) → color.
- Estructura de **encabezados** (`h1`, `h2`, …), **blockquotes**, **listas**, etc.

Así puedes rellenar con precisión el **Registro de textos** (`PRODUCTION-TEXTS-REGISTER.md`) con variantes del tipo: “solo este fragmento en negrita”, “este enlace con color acento”, etc.

---

## Resumen

| Método | Requiere | Resultado |
|--------|----------|-----------|
| **Script Playwright** | `npm install -D playwright` + ejecutar script | HTML de cada ruta en `docs/production-snapshots/` |
| **Copy outerHTML en DevTools** | Nada | Pegas el HTML a mano donde quieras |
| **Consola `copy(root.innerHTML)`** | Nada | HTML en el portapapeles |
| **Extensión SingleFile / Save Page** | Extensión en el navegador | Un .html por página guardada |

Para automatizar y tener siempre el mismo proceso, la opción más sólida es el **script con Playwright** (opción 1).
