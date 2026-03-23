# Castor Monorepo

Welcome to the Castor project! This is a unified healthcare platform built with a modular monorepo architecture.

## Project Structure

This monorepo uses **pnpm workspaces** and **Turborepo** to manage multiple applications and shared packages.

- `apps/`: Contains all independent frontend applications.
  - `auth`: Centralized Authentication Service (SSO).
  - `web`: Main landing page and central dashboard.
  - `ecommerce`: Medical marketplace.
  - `institute`: Health Institute / Education system.
  - `services`: Care services and transport tracking.
  - `transport`: Medical transport services.
- `packages/`: (Future) Shared UI components, utilities, and configurations.

## Prerequisites

- **Node.js**: v18.x or higher.
- **pnpm**: v9.x or higher (Recommended).

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Arijentek-Solutions/Castor-Frontend.git
   cd castor
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Development**:
   To run all applications concurrently:
   ```bash
   pnpm dev
   ```
   Or run a specific app:
   ```bash
   pnpm --filter web dev
   ```

4. **Building**:
   ```bash
    pnpm build
   ```

## Dependency Management

This project uses **pnpm workspaces**. Always use `pnpm` to ensure consistency.

### 1. Install a Dependency for a Specific App
To add a package to a single application (e.g., `auth`):
```bash
pnpm --filter auth add <package-name>
```
*Tip: The name after `--filter` must match the "name" field in the app's `package.json`.*

### 2. Install a Dependency for the Entire Workspace (Root)
For dev tools or utilities that need to be accessible from the root:
```bash
pnpm add -D <package-name> -w
```

### 3. Install a Dependency for ALL Apps Recursively
To add a package to every application at once:
```bash
pnpm add <package-name> -r
```

### 4. Running Scripts
To run a script in a specific app from the root:
```bash
pnpm --filter <app-name> <script-name>
# Example:
pnpm --filter web dev
```

---

## Workflow for Developers

1. **Create a branch**: `git checkout -b feature/your-feature`.
2. **Commit**: `git commit -m "feat: your description"`.
3. **Push**: `git push -u origin feature/your-feature`.
4. **Pull updates**: `git checkout main && git pull`.

## Environment Variables
Copy `.env.example` to `.env.local` in the respective `apps/` folders and fill in the required values.

---

For more details on the platform architecture, refer to `projectoverview.md`.
