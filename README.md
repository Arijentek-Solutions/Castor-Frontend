# Castor

A unified healthcare platform built with a modular monorepo architecture.

## Platform Overview

Castor provides a comprehensive healthcare ecosystem including:

- **Main Portal** — Landing page, central dashboard, and health service pages
- **Medical Marketplace** — Online store for medical supplies and equipment

### Planned Applications

The following apps are defined in the roadmap but not yet implemented:

- `auth` — Centralized Authentication Service (SSO)
- `institute` — Health Institute / Education system
- `services` — Care services and transport tracking

## Project Structure

```
castor/
├── apps/
│   ├── web/              — Main healthcare portal (Next.js, port 3004)
│   └── ecommerce/        — Medical marketplace (Next.js, port 3005)
├── packages/
│   └── ui/               — Shared UI component library (@castor/ui)
├── package.json          — Root workspace manifest
├── turbo.json            — Turborepo build configuration
└── pnpm-workspace.yaml   — Workspace definitions
```

### Tech Stack

- **Runtime**: Node.js v18+
- **Package Manager**: pnpm v10.32.1
- **Build Orchestration**: Turborepo v2
- **Framework**: Next.js 16 (App Router) + React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Prerequisites

- **Node.js**: v18 or higher
- **pnpm**: v10.32.1 (specified via `packageManager` field)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Arijentek-Solutions/Castor-Frontend.git
cd castor

# Install dependencies
pnpm install

# Run all apps concurrently
pnpm dev
```

### Running Specific Apps

```bash
# Web portal (port 3004)
pnpm --filter web dev

# E-commerce store (port 3005)
pnpm --filter ecommerce dev
```

### Building & Linting

```bash
# Build all apps and packages
pnpm build

# Lint all code
pnpm lint
```

## Dependency Management

This project uses **pnpm workspaces**. Always use `pnpm` to ensure consistency.

### Install for a Specific App

```bash
pnpm --filter <app-name> add <package-name>
# Example:
pnpm --filter web add lucide-react
```

### Install at Workspace Root

```bash
pnpm add -D <package-name> -w
```

### Install for All Apps

```bash
pnpm add <package-name> -r
```

### Shared Package

The `@castor/ui` package exports shared components used across apps:

```bash
# Build the shared package
pnpm --filter @castor/ui build

# Watch mode for development
pnpm --filter @castor/ui dev
```

## Developer Workflow

1. **Create a branch**: `git checkout -b feature/your-feature`
2. **Commit**: Use [Conventional Commits](#conventional-commits)
3. **Push**: `git push -u origin feature/your-feature`
4. **Sync with main**: `git checkout main && git pull upstream main`

### Conventional Commits

| Prefix   | Type         | Description                                  |
| :------- | :----------- | :------------------------------------------- |
| `feat`   | Feature      | A new feature for the user                   |
| `fix`    | Bug Fix      | A bug fix for the user                       |
| `docs`   | Documentation| Documentation only changes                   |
| `style`  | Styling      | Changes that do not affect the meaning of code |
| `refactor`| Refactor    | A code change that neither fixes a bug nor adds a feature |
| `perf`   | Performance  | A code change that improves performance      |
| `test`   | Testing      | Adding or correcting tests                   |
| `chore`  | Maintenance  | Changes to the build process or tools        |

## Contributing

1. Fork the repository to your own account
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/Castor-Frontend.git`
3. Add the main repo as upstream: `git remote add upstream https://github.com/Arijentek-Solutions/Castor-Frontend.git`
4. Create a feature branch and push your changes
5. Open a Pull Request

## Environment Variables

Copy `.env.example` to `.env.local` in the respective `apps/` folders and fill in the required values.
