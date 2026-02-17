/**
 * Rutas de la aplicación y etiquetas de navegación.
 * Reexporta desde el contenido en inglés; en Fase 2–4 las rutas podrán depender del locale.
 */

import { getContent } from "./i18n";

const { ROUTES, routeDefs, navRoutes } = getContent("en").routes;

export { ROUTES, routeDefs, navRoutes };
export type RouteKey = keyof typeof ROUTES;
