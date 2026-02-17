/**
 * Envuelve las rutas bajo /:locale. Si el locale no está soportado, redirige a la misma ruta sin el segmento (idioma por defecto).
 * Debe renderizar <Outlet /> para que React Router muestre las rutas anidadas.
 */

import { Navigate, useParams, useLocation, Outlet } from "react-router-dom";
import { isSupportedLocale } from "@/content/i18n";

/** Quita el primer segmento del pathname (ej. /fr/privacy → /privacy). */
function pathWithoutFirstSegment(pathname: string): string {
  const without = pathname.replace(/^\/[^/]+/, "") || "/";
  return without.startsWith("/") ? without : `/${without}`;
}

export function LocaleGuard() {
  const { locale } = useParams<"locale">();
  const location = useLocation();

  if (!locale || !isSupportedLocale(locale)) {
    const target = pathWithoutFirstSegment(location.pathname);
    return <Navigate to={target || "/"} replace />;
  }

  return <Outlet />;
}
