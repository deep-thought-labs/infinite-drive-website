/**
 * Tipos compartidos para la capa de contenido.
 * Las vistas consumen estos tipos; no definen datos de negocio.
 */

/** Ruta de la app con su etiqueta para navegación */
export interface RouteDef {
  path: string;
  label: string;
  /** Si false, no se muestra en el nav principal (ej. Privacy en footer) */
  inNav?: boolean;
}

/** Cita con autor */
export interface Quote {
  text: string;
  author: string;
  source?: string;
}

/** Item de una lista de features o pilares */
export interface FeatureItem {
  title: string;
  description: string;
}

/** CTA (call to action) con destino interno o externo */
export interface CtaItem {
  label: string;
  /** Ruta interna (ej. /project42) o URL externa */
  href: string;
  /** Si true, href es ruta interna de la app */
  internal?: boolean;
}

/** Metadata de un asset (imagen); el src se resuelve en vistas o en un registry */
export interface AssetMeta {
  id: string;
  alt: string;
  credit?: string;
  /** Secciones o páginas donde se usa (documentación) */
  usedIn?: string[];
}

/** Sección de documento legal (título + cuerpo) */
export interface LegalSection {
  id: string;
  title: string;
  body: string | string[];
}
