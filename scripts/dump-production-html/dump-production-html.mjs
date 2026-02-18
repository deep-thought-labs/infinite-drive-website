#!/usr/bin/env node
/**
 * Volcado del HTML renderizado de las páginas de producción (infinitedrive.xyz).
 * Dependencias: solo las de esta carpeta (playwright). No forma parte del proyecto principal.
 *
 * Uso (desde la raíz del repo):
 *   cd scripts/dump-production-html && npm install && npm run dump
 *
 * El HTML se guarda en docs/archive/production-snapshots/ para inspeccionar
 * etiquetas, estilos inline y documentar variantes de texto si hace falta.
 */

import { chromium } from "playwright";
import { writeFile, mkdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "https://infinitedrive.xyz";
const ROUTES = ["/", "/project42", "/blockchain", "/services", "/privacy"];
const OUT_DIR = join(__dirname, "..", "..", "docs", "archive", "production-snapshots");

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (compatible; production-html-dump)",
  });

  for (const route of ROUTES) {
    const name = route === "/" ? "home" : route.slice(1);
    const url = BASE + route;
    console.log("Fetching", url, "...");

    const page = await context.newPage();
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 15000 });
      await page.waitForSelector("main, [id='root']", { timeout: 5000 }).catch(() => {});

      const html = await page.evaluate(() => {
        const root = document.getElementById("root");
        if (root) return root.innerHTML;
        const main = document.querySelector("main");
        if (main) return main.outerHTML;
        return document.body.innerHTML;
      });

      const outPath = join(OUT_DIR, `${name}.html`);
      await writeFile(outPath, `<!DOCTYPE html>\n<html><head><meta charset="utf-8"/><title>${name}</title></head><body><div id="root">\n${html}\n</div></body></html>`, "utf8");
      console.log("  ->", outPath);
    } catch (e) {
      console.error("  Error:", e.message);
    } finally {
      await page.close();
    }
  }

  await context.close();
  await browser.close();
  console.log("Done.");
}

main();
