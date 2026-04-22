# Castor E-commerce Module

## Current Phase: Stage 1 - Static Frontend

The Castor E-commerce module will provide a healthcare product shopping experience with support for self-pay products, insurance-based requests, and pricing-request products.

Stage 1 focuses only on the frontend. Product data, cart behavior, checkout, insurance requests, and pricing requests will use static or mock data. Backend APIs, database integration, payments, authentication, and admin workflows are planned for Stage 2.

## Stage 1 Goal

The goal of Stage 1 is to build a complete static frontend ecommerce experience that includes:

- Product catalog
- Product detail pages
- Product workflow handling
- Cart management
- Static checkout flow
- Order success page
- Insurance request flow
- Pricing request flow

The frontend should be built in a backend-ready way so static data can later be replaced with real APIs without major refactoring.

## Out of Scope for Stage 1

The following items are not part of Stage 1:

- Backend APIs
- Database storage
- Real payment processing
- Authentication
- Admin dashboard
- Real insurance submission
- Real pricing request submission
- Email or SMS notifications

## Stage 1 Routes

- `/` - Ecommerce landing or home screen
- `/products/[slug]` - Product detail page
- `/checkout` - Static checkout form
- `/order-success` - Static order confirmation
- `/insurance` - Insurance request flow
- `/pricing-request` - Pricing request flow

## Product Data Model

The product catalog will be powered by static product data during Stage 1.

Each product should include:

- Product ID
- Slug
- Name
- Description
- Category
- Image
- Price, if applicable
- Product workflow type: `self-pay`, `insurance`, or `pricing-request`
- Availability or status

## Core Features

### Product Catalog

The product catalog should allow users to browse healthcare products using static product data.

Expected catalog behavior:

- Display product cards
- Show product image, name, category, and price or workflow label
- Allow users to open product detail pages
- Support category-level organization at the UI level

### Product Detail Page

Each product detail page should render actions based on the product workflow type:

- `self-pay`: show price and Add to Cart button
- `insurance`: show Apply via Insurance action
- `pricing-request`: show Request Pricing action

### Cart System

The cart should support:

- Add product to cart
- Remove product from cart
- Increase or decrease quantity
- Persist cart in `localStorage`
- Recalculate subtotal dynamically
- Clear cart after simulated checkout

Only cart-safe product data should be stored in `localStorage`. Sensitive healthcare, insurance, or personal details should not be stored there.

### Static Checkout Flow

The checkout flow should collect basic non-sensitive customer details for UI simulation only.

Stage 1 checkout should:

- Validate required fields
- Display order summary
- Simulate order placement
- Clear the cart after completion
- Redirect to `/order-success`

No real payment or backend order creation will happen in Stage 1.

### Insurance Workflow

Insurance-eligible products should not enter the normal cart checkout flow.

Instead, users should be redirected to an insurance request page or external form placeholder. Stage 1 will only simulate this flow. Real Jotform or backend integration will be handled in Stage 2.

### Pricing Request Workflow

Products that require custom pricing should direct users to a pricing request form.

Stage 1 will only simulate form submission. Admin review, quote generation, and notifications will be implemented in Stage 2.

## Frontend Architecture

Stage 1 should separate UI, state, and static data so the module can later connect to backend APIs with minimal changes.

Recommended structure:

- `app/` for routes
- `components/` for reusable UI
- `context/` for cart state
- `lib/products/` for static product data and product helpers
- `lib/cart/` for cart utilities and calculations
- `types/` for shared TypeScript types

## Tech Stack

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Shared UI: `@castor/ui`
- State Management: React Context API
- Static Persistence: `localStorage`
- Package Manager: pnpm
- Monorepo Tooling: Turborepo

## Planned Project Structure

```txt
apps/ecommerce/
  app/
    page.tsx
    products/
      page.tsx
      [slug]/
        page.tsx
    checkout/
      page.tsx
    order-success/
      page.tsx
    insurance/
      page.tsx
    pricing-request/
      page.tsx

  components/
    products/
    cart/
    checkout/

  context/
    cart-context.tsx

  lib/
    products/
      products.ts
    cart/
      cart-service.ts

  types/
    product.ts
    cart.ts
```

## Product Workflows

The system supports three primary product workflow types.

### 1. Self-Pay

Self-pay products follow the standard ecommerce flow:

- Product detail
- Add to cart (Drawer)
- Checkout
- Order success

### 2. Insurance-Based

Insurance-based products use a request flow instead of direct checkout:

- Product detail
- Apply via insurance
- Insurance request page or form placeholder
- Admin review in a future phase

### 3. Pricing Request

Pricing-request products require follow-up before purchase:

- Product detail
- Request pricing
- Pricing request page or form placeholder
- Admin quote process in a future phase

## Stage 1 Acceptance Criteria

Stage 1 is complete when:

- Users can browse static products
- Users can open product detail pages
- Self-pay products can be added to cart
- Cart quantity updates work correctly
- Cart persists after page refresh
- Checkout can be completed using static data
- Order success page appears after checkout
- Insurance products route to the insurance flow
- Pricing-request products route to the pricing request flow
- The UI is responsive on desktop, tablet, and mobile
- No backend dependency is required to run the module

## Stage 2 Backend Plan

After Stage 1 is reviewed and approved, Stage 2 will introduce backend-driven behavior.

Planned Stage 2 items:

- Product APIs
- Database-backed product catalog
- Persistent cart or session handling
- Real order creation
- Customer records
- Payment integration, if required
- Insurance request integration
- Pricing request and quote management
- Admin workflows
- Email or SMS notifications
- Authentication and access control, if required

## Summary

Stage 1 delivers a working static ecommerce frontend for Castor. It focuses on product browsing, cart behavior, checkout simulation, and healthcare-specific product workflows.

After Stage 1 is reviewed and approved, Stage 2 will introduce backend APIs, database persistence, payment handling, admin workflows, and external form integrations.
