# Simple Kanban Dashboard (Client)

[Server Repo](https://github.com/leendrew/kanban-server-nest)

[Deployed](https://leendrew.github.io/kanban-client-react)

## Stack

- React
- Redux Toolkit
- RTK Query
- React Beautiful DnD
- React Hook Form
- zod

## Installation

### dev

```bash
cp .env.example .env.local
pnpm i
pnpm dev
```

### prod

```bash
cp .env.example .env.production
pnpm i --frozen-lockfile
pnpm build && pnpm preview
```
