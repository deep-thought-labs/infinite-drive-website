# Infinite Drive Website

Official website for the **Infinite Drive** ecosystem: the Infinite Improbability Drive blockchain, BabelFish Network, and sovereign infrastructure. Built with React, Vite, and TypeScript.

## Official resources

- **Website:** [infinitedrive.xyz](https://infinitedrive.xyz)
- **Documentation:** [docs.infinitedrive.xyz](https://docs.infinitedrive.xyz)
- **Deep Thought Labs:** [deep-thought.computer](https://deep-thought.computer)
- **Community:** [Telegram](https://t.me/+nt8ysid_-8VlMDVh)

## Tech stack

- **React** 18 · **Vite** 6 · **TypeScript**
- **Tailwind CSS** v4 · **Radix UI** (shadcn/ui-style components)
- **React Router** v6 for client-side routing

## Architecture (summary)

The site is a **single-page application (SPA)** with a clear separation between **content** and **views**:

- **Content layer** (`src/content/`): All copy, route labels, and structured data live in TypeScript modules per locale (`locales/en/`, `locales/es/`). No JSX.
- **Views** (`src/pages/`, `src/components/`): Pages use the **`useContent()`** hook from `LocaleContext` to get the current locale’s content and render it. They do not embed copy in JSX.

The app is **bilingual** (English and Spanish). The locale is determined by the URL (optional prefix: `/es/`, `/es/project42`, etc.) or by a stored preference when the URL has no prefix. A language selector in the nav switches locale and persists the choice.

For a full description of routing, i18n, and folder structure, see **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)**.

## Prerequisites

- **Node.js** 18+ and **npm**

## Install

```bash
npm install
```

## Development

Start the dev server (default: http://localhost:3000):

```bash
npm run dev
```

## Build

Produce a static build in the `build/` directory:

```bash
npm run build
```

Output is in `build/`. All assets (HTML, JS, CSS, images) are self-contained; no runtime dependency on external CDNs for the app or images.

## Deploy

This is a **single-page application (SPA)**. Build with `npm run build`; the output is in the `build/` folder.

For local runs (development or production preview) and for deploying to **Cloudflare Pages**, see **[DEPLOY.md](DEPLOY.md)**.

## Routes

The same logical sections are available with or without a locale prefix. Default (no prefix) uses English unless the user has a stored preference for Spanish.

| Path | With locale (e.g. Spanish) | Section |
|------|----------------------------|---------|
| `/` | `/es` | Home |
| `/project42` | `/es/project42` | Project 42 |
| `/services` | `/es/services` | Network |
| `/blockchain` | `/es/blockchain` | Foundation |
| `/privacy` | `/es/privacy` | Privacy (also in footer) |

## Attributions

UI components are based on [shadcn/ui](https://ui.shadcn.com/) (MIT). See [src/Attributions.md](src/Attributions.md) for full credits.

## License

**Apache 2.0.** See [LICENSE](LICENSE) and [NOTICE](NOTICE). Part of the Infinite Drive ecosystem (Project 42). [Deep Thought Labs](https://deep-thought.computer).
