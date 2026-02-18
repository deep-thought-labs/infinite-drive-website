# Dump HTML de producción (opcional)

Este script descarga el HTML renderizado del sitio de producción (infinitedrive.xyz) para poder analizar etiquetas y estilos. **No es necesario** para desarrollar, construir ni desplegar el proyecto.

## Uso

Solo si necesitas volver a generar los snapshots:

```bash
cd scripts/dump-production-html
npm install
npm run dump
```

Los archivos se guardan en `docs/archive/production-snapshots/`.

## Dependencias

Usa **Playwright** (solo en esta carpeta). El proyecto principal no instala Playwright, así que el desarrollo y el deploy no requieren estas dependencias.
