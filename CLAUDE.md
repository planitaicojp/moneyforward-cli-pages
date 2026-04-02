# Money Forward CLI Documentation Site

## Project Overview

`moneyforward-cli` の公式ドキュメントサイト。VitePress で構築し、GitHub Pages でホスティング。

- **Site URL**: https://planitaicojp.github.io/moneyforward-cli-pages/
- **CLI repo**: https://github.com/planitaicojp/moneyforward-cli (private)

## Tech Stack

- VitePress 1.6.4
- Base path: `/moneyforward-cli-pages/`

## Commands

```bash
npm run docs:dev      # Dev server (hot reload)
npm run docs:build    # Production build → docs/.vitepress/dist/
npm run docs:preview  # Preview production build
```

Build verification:
```bash
npx vitepress build docs
```

## Directory Structure

```
docs/
├── .vitepress/config/
│   ├── index.ts      # Main config
│   ├── shared.ts     # Title, base path, search
│   └── ja.ts         # Japanese (default locale, root path /)
├── guide/            # How-to guides
├── reference/        # CLI command reference
└── public/           # Static assets
```

## Language

- Japanese only (root locale)

## Git Workflow

- Branch from `main`
- Build must pass (`npx vitepress build docs`)
- Merge to `main` triggers GitHub Pages deploy
