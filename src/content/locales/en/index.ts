/**
 * Contenido completo para locale «en» (inglés).
 */

import type { LocaleContent } from "../types";
import { site } from "./site";
import { routes } from "./routes";
import { home } from "./marketing/home";
import { project42 } from "./marketing/project42";
import { services } from "./marketing/services";
import { blockchain } from "./marketing/blockchain";
import { privacy } from "./legal/privacy";

export const enContent: LocaleContent = {
  site,
  routes,
  home,
  project42,
  services,
  blockchain,
  privacy,
};
