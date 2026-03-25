# Castor Monorepo: Vercel Deployment Guide

This guide explains how to host the Castor monorepo on Vercel. Since this is a monorepo with multiple Next.js applications, you need to create **6 separate projects** in Vercel, all linked to the same GitHub repository.

## 1. Prerequisites
- Your code must be pushed to a GitHub repository.
- You should have a Vercel account.

---

## 2. Deploying Each Application
Repeat these steps for **each** app in the `apps/` folder:
- `apps/web` (Main Site)
- `apps/auth` (SSO/Auth)
- `apps/ecommerce` (Marketplace)
- `apps/institute` (Education)
- `apps/services` (Care Services)
- `apps/transport` (Medical Transport)

### Step-by-Step Vercel Setup:
1.  **Create New Project**: In Vercel, click "Add New" -> "Project".
2.  **Import Repository**: Select your `Castor-Frontend` repository.
3.  **Configure Project**:
    -   **Project Name**: Give it a unique name (e.g., `castor-web`, `castor-auth`).
    -   **Framework Preset**: Select **Next.js**.
    -   **Root Directory**: Click "Edit" and select the specific app folder (e.g., `apps/web`). Keep "Include source files outside of the Root Directory in the Build Step" **checked** (important for shared packages).
4.  **Build & Output Settings**:
    -   Framework should automatically detect `pnpm`.
    -   Build Command: `pnpm build` (Vercel runs this from the `apps/xxx` directory).
    -   Output Directory: `.next` (default).
5.  **Environment Variables**:
    -   Add all required `NEXT_PUBLIC_*` variables (copy from `.env.example`).
    -   **Critical**: For the `web` project, `NEXT_PUBLIC_AUTH_URL` should point to your deployed `auth` Vercel URL.

---

## 3. Connecting Subdomains

Once all projects are deployed, you will have multiple `.vercel.app` URLs. To test them as subdomains:

### For Vercel Domains:
- Map each project to a specific subdomain in the Vercel Dashboard under **Settings -> Domains**.
- Example: `auth.yourdomain.com`, `ecommerce.yourdomain.com`, etc.

### For Testing (without a custom domain):
You can use the default Vercel URLs for now. Just ensure you update the **Environment Variables** in each Vercel project to point to the correct production URLs of the other apps.

---

## 4. Shared UI Package
The `@castor/ui` package is automatically handled by Vercel because of the `transpilePackages` setting in each `next.config.ts`. You don't need to deploy the `packages/ui` folder separately.

## 5. Summary of Internal Linking
The `Navbar` relies on these environment variables to navigate between your apps. If you change a URL in Vercel, remember to update the corresponding environment variable in the other projects and re-deploy!
