# Infinite Drive Website

Official website for the **Infinite Drive** ecosystem: the Infinite Improbability Drive blockchain, BabelFish Network, and sovereign infrastructure. Built with React, Vite, and TypeScript.

## Official resources

- **Website:** [infinitedrive.xyz](https://infinitedrive.xyz)
- **Documentation:** [docs.infinitedrive.xyz](https://docs.infinitedrive.xyz)
- **Deep Thought Labs:** [deep-thought.computer](https://deep-thought.computer)
- **Community:** [Telegram](https://t.me/+nt8ysid_-8VlMDVh)

## Tech stack

- **React** 18 · **Vite** 6 · **TypeScript**
- **Tailwind CSS** v4 · **Radix UI** (shadcn/ui–style components)
- **React Router** for client-side routing

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

| Path         | Section   |
|-------------|-----------|
| `/`         | Home      |
| `/project42`| Project 42|
| `/services` | Network   |
| `/blockchain`| Foundation |
| `/privacy`  | Privacy (footer) |

## Attributions

UI components are based on [shadcn/ui](https://ui.shadcn.com/) (MIT). See [src/Attributions.md](src/Attributions.md) for full credits.

## License

**Apache 2.0.** See [LICENSE](LICENSE) and [NOTICE](NOTICE). Part of the Infinite Drive ecosystem (Project 42). [Deep Thought Labs](https://deep-thought.computer).
