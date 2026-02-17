/**
 * Metadata de assets (imágenes): alt, créditos, uso.
 * El src se resuelve en vistas vía import o un registry; aquí solo datos.
 */

import type { AssetMeta } from "./types";

export const assetsMeta: Record<string, AssetMeta> = {
  dontpanic: {
    id: "dontpanic",
    alt: "Don't Panic - The Hitchhiker's Guide",
    credit: "Project / Unsplash",
    usedIn: ["home-hero"],
  },
  newWorld: {
    id: "newWorld",
    alt: "Digital network",
    credit: "Project / Unsplash",
    usedIn: ["project42-new-world"],
  },
  cypherpunk: {
    id: "cypherpunk",
    alt: "Cypherpunk gathering",
    credit: "Project / Unsplash",
    usedIn: ["project42-philosophy"],
  },
  networkMesh: {
    id: "networkMesh",
    alt: "Network mesh",
    credit: "Project / Unsplash",
    usedIn: ["services-babelfish"],
  },
  connectedSystems: {
    id: "connectedSystems",
    alt: "Connected systems",
    credit: "Project / Unsplash",
    usedIn: ["services-how-it-connects"],
  },
};
