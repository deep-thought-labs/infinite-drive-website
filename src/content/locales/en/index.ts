/**
 * Contenido completo para locale «en» (inglés).
 */

import type { LocaleContent } from "../types";
import { site } from "./site";
import { routes } from "./routes";
import { home } from "./marketing/home";
import { privacy } from "./legal/privacy";

export const enContent: LocaleContent = {
  site,
  routes,
  home,
  privacy,
};
