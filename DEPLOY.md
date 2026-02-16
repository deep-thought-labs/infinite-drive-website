# Deploy guide

This document describes how to run the site locally (development and production preview) and how to deploy it to **GitHub Pages** or **Cloudflare Pages**.

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

## GitHub Pages

The repository includes a [GitHub Actions](https://docs.github.com/en/actions) workflow that builds the site and deploys it to [GitHub Pages](https://pages.github.com/). The workflow is in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### What the workflow does

On every push to `main` (or when you run it manually from the **Actions** tab):

1. **Build job:** Checkout → install dependencies with `npm ci` → run `npm run build` with the correct base path for project pages (`/repo-name/`) → upload the `build/` folder as an artifact.
2. **Deploy job:** Publish that artifact to GitHub Pages.

The site will be available at `https://<owner>.github.io/<repo>/` (e.g. `https://myorg.github.io/Infinitedrivefront/`). You can add a custom domain in the repo **Settings → Pages**.

### One-time setup

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` or run the workflow from the **Actions** tab. The first time, GitHub may ask to create the `github-pages` environment—accept if prompted.

No secrets or tokens are required. If your default branch is not `main`, edit `on.push.branches` in `.github/workflows/deploy.yml` to match your branch.

---

## Cloudflare Pages

You can deploy the same `build/` output to [Cloudflare Pages](https://pages.cloudflare.com/) by connecting your Git repository and configuring the build.

### Wrangler config (required)

You must have a **Wrangler** configuration file in the repository so Cloudflare can recognize and manage the project. The standard file is `wrangler.toml` in the project root. It should include at least:

- **Project name** (`name`) — identifies the project in the Cloudflare dashboard.
- **Pages-specific settings** — e.g. compatibility date, or other values your project needs.

Example minimal `wrangler.toml` for a static Pages site:

```toml
name = "infinitedrivefront"
compatibility_date = "2025-01-01"
pages_build_output_dir = "build"
```

Adjust `name` and `compatibility_date` as needed. See [Cloudflare Wrangler configuration](https://developers.cloudflare.com/workers/wrangler/configuration/) for all options. Without a valid Wrangler config in the repo, the Cloudflare project may not be set up correctly.

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
