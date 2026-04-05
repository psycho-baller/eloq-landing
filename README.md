# Eloq Landing

Standalone marketing site for Eloq, built with Vite, React, Tailwind, and shadcn UI.

## Local Development

```bash
pnpm install
pnpm --filter ./apps/eloq-landing dev
```

## Build

```bash
pnpm --filter ./apps/eloq-landing build
```

## Waitlist Environment

Set these variables before deploying the `/api/waitlist` endpoint:

```bash
NOTION_API_KEY=
NOTION_WAITLIST_DATASOURCE_ID=
```

The waitlist route stores `Email`, `Date`, `Platform`, and `App` in Notion, with `App = eloq` and `Platform = macOS` by default.
