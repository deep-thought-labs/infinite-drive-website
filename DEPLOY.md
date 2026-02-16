# Deploy guide

This document describes how to run the site locally (development and production preview) and how to deploy it to **Cloudflare Pages**.

The site is a **single-page application (SPA)**. After building with `npm run build`, the output is the `build/` folder. For deployment, any host must serve that folder and return `index.html` for all routes (SPA fallback) so that paths like `/project42` or `/privacy` work on refresh or direct open.

---

## Local

### Development (with hot reload)

Use this while you are editing code. The dev server updates the browser automatically when you save.

```bash
npm install
npm run dev
```

The app runs at http://localhost:3000 (or the next free port). Changes in the source are reflected immediately.

### Preview the production build (no hot reload)

Use this to check the built site locally before deploying. You see exactly what will be deployed—no automatic updates.

1. Build:
   ```bash
   npm run build
   ```
2. Serve the `build/` folder, for example with [serve](https://www.npmjs.com/package/serve):
   ```bash
   npx serve build
   ```
   By default this serves at http://localhost:3000. Open it in the browser and click through; all routes should work.

**Summary:** `npm run dev` = develop with live reload. `npm run build` + `npx serve build` = static preview of the last build.

---

## Cloudflare Pages

You can deploy the same `build/` output to [Cloudflare Pages](https://pages.cloudflare.com/) by connecting your Git repository and configuring the build.

### Wrangler config (required)

You must have a **Wrangler** configuration file in the project root so Cloudflare can deploy the site. This project uses **`wrangler.jsonc`** (JSON with comments); Cloudflare also supports `wrangler.toml`.

The config must specify:

- **`name`** — project identifier in the Cloudflare dashboard.
- **`compatibility_date`** — e.g. `"2026-02-16"`.
- **`assets.directory`** — path to the built static files. This project uses Vite with output in **`build/`** (not `dist/`), so the directory must be **`./build`**.
- **`assets.not_found_handling`** — set to **`"single-page-application"`** so that routes like `/project42` or `/privacy` return `index.html` (SPA fallback).

Example `wrangler.jsonc` for this repo:

```jsonc
{
  "name": "infinite-drive-website",
  "compatibility_date": "2026-02-16",
  "assets": {
    "directory": "./build",
    "not_found_handling": "single-page-application"
  }
}
```

The file is already in the repository. Adjust `name` or `compatibility_date` if needed. See [Cloudflare static assets](https://developers.cloudflare.com/workers/static-assets/) and [Wrangler configuration](https://developers.cloudflare.com/workers/wrangler/configuration/) for more options.

### Option A: Connect with Git (recommended)

1. In [Cloudflare Dashboard](https://dash.cloudflare.com/) go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the repository and branch (e.g. `main`).
3. Configure the build:
   - **Framework preset:** None (or Vite if available).
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Root directory:** leave empty (or `/` if required).
4. Click **Save and Deploy**. Cloudflare will run `npm install` (or `npm ci` if available), then `npm run build`, and serve the `build/` directory.

Cloudflare Pages treats the site as an SPA by default when there is no custom `404.html`: it serves `index.html` for paths that do not match a static file, so client-side routes like `/project42` and `/privacy` work without extra configuration.

### Option B: Deploy the `build/` folder manually

1. Run locally: `npm run build`.
2. In **Workers & Pages** → **Create** → **Pages** → **Upload assets**, upload the contents of the `build/` folder (or use [Wrangler](https://developers.cloudflare.com/workers/wrangler/) to deploy the directory).

Your site will be available at `https://<project>.pages.dev` or at a custom domain you add in the Pages project settings.
