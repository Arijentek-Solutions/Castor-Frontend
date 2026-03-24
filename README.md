# Castor

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

## Developer Setup

To contribute to this project, follow this **Fork & Pull** workflow:

1. **Fork the repository** on GitHub to your own account.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Castor-Frontend.git
   cd castor
   ```
3. **Add the main repo as 'upstream'** to get latest updates:
   ```bash
   git remote add upstream https://github.com/Arijentek-Solutions/Castor-Frontend.git
   ```
4. **Pull latest updates** from main repo:
   ```bash
   git pull upstream main
   ```
5. **Push your work** to your personal fork:
   ```bash
   git push origin branchname
   ```


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
2. **Commit**: Use Conventional Commits for better project history.
   ```bash
   git commit -m "feat: add user profile dashboard"
   ```

| Prefix | Type | Description |
| :--- | :--- | :--- |
| `feat` | Feature | A new feature for the user |
| `fix` | Bug Fix | A bug fix for the user |
| `docs` | Documentation | Documentation only changes |
| `style` | Styling | Changes that do not affect the meaning of the code |
| `refactor`| Refactor | A code change that neither fixes a bug nor adds a feature |
| `perf` | Performance | A code change that improves performance |
| `test` | Testing | Adding missing tests or correcting existing tests |
| `chore` | Maintenance | Changes to the build process, auxiliary tools, or libraries |

3. **Push**: `git push -u origin feature/your-feature`.
4. **Pull updates**: `git checkout main && git pull`.

## Environment Variables
Copy `.env.example` to `.env.local` in the respective `apps/` folders and fill in the required values.

---

For more details on the platform architecture, refer to `projectoverview.md`.
