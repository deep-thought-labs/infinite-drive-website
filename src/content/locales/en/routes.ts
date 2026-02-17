/**
 * Rutas y navegación — inglés.
 */

import type { LocaleRoutes } from "../types";

const ROUTES = {
  home: "/",
  project42: "/project42",
  services: "/services",
  blockchain: "/blockchain",
  privacy: "/privacy",
} as const;

const routeDefs = [
  { path: ROUTES.home, label: "Home", inNav: true },
  { path: ROUTES.project42, label: "Project 42", inNav: true },
  { path: ROUTES.services, label: "Network", inNav: true },
  { path: ROUTES.blockchain, label: "Foundation", inNav: true },
  { path: ROUTES.privacy, label: "Privacy", inNav: false },
];

export const routes: LocaleRoutes = {
  ROUTES: { ...ROUTES },
  routeDefs: [...routeDefs],
  navRoutes: routeDefs.filter((r) => r.inNav !== false),
};
