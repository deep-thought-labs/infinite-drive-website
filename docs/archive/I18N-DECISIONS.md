# Decisiones i18n (Fase 0)

Decisiones tomadas para el soporte multiidioma. Referencia para la implementación.

| Decisión | Valor |
|----------|--------|
| **Locale por defecto** | `en` (inglés) |
| **Idiomas soportados (inicial)** | `['en', 'es']` — inglés y español |
| **Prefijo en la URL** | **Opcional.** Si el usuario accede sin idioma en la URL (ej. `/`, `/project42`), se muestra el idioma por defecto. Con prefijo (ej. `/es/`, `/es/privacy`) se muestra ese idioma. |
| **Persistir idioma elegido** | **Sí.** Guardar en `localStorage` (clave `preferredLocale`). Cuando la URL no tenga locale, usar esta preferencia si existe y es válida. |

## Resumen de comportamiento esperado

- **Sin locale en la URL:** Se muestra inglés (default) o el idioma guardado en `localStorage` si se implementa esa lectura en la primera carga.
- **Con locale en la URL** (ej. `/es/privacy`): Se muestra ese idioma.
- **Al cambiar de idioma** (selector, Fase 6): Se guarda en `localStorage` para la próxima visita.
