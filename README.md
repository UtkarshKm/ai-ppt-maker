# PPTMage

Project status README for what is completed so far.

## Current Stack

- [TanStack Start](https://tanstack.com/start) (React + Vite)
- [TanStack Router](https://tanstack.com/router) with file-based routing
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Neon Postgres](https://neon.tech/)
- [Biome](https://biomejs.dev/) for linting/formatting

## What Has Been Set Up

- TanStack Start app initialized and running
- Prisma installed and configured
- Neon Postgres connection wired through `DATABASE_URL`
- Prisma client output configured to `src/generated/prisma`
- Basic `User` model added in `prisma/schema.prisma`
- Shared Prisma instance created in `src/lib/db.ts`
- `DATABASE_URL` runtime guard added (no non-null assertion)
- `components.json` fixed for TanStack Start CSS path (`src/styles.css`)

## Important Files

- `prisma/schema.prisma` - Prisma schema and models
- `prisma.config.ts` - Prisma config and datasource URL mapping
- `.env` - environment variables (`DATABASE_URL`)
- `src/lib/db.ts` - Prisma client + Neon PG adapter setup
- `components.json` - shadcn/UI config for Tailwind CSS entry

## Environment Variables

Create/update `.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DB?sslmode=require&channel_binding=require"
```

## Run Locally

```bash
npm install
npm run dev
```

## Prisma Commands

Generate client:

```bash
npx prisma generate
```

Create and apply a migration:

```bash
npx prisma migrate dev --name init
```

## Useful Scripts

```bash
npm run dev
npm run build
npm run preview
npm run test
npm run lint
npm run format
npm run check
```
