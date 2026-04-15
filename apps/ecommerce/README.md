# 🛒 Castor E-commerce Module — Stage 1 (Frontend)

## 📌 Overview

The **Castor E-commerce module** is part of the unified Castor platform, designed to enable users to browse and access healthcare-related products through multiple purchasing workflows.

This Stage 1 implementation focuses on delivering a **fully functional frontend experience** using static data, while preparing the architecture for future backend integration.

The system supports both traditional e-commerce interactions and healthcare-specific workflows such as insurance-based requests and administrative pricing flows.

---

## 🎯 Objective (Stage 1)

The goal of this phase is to:

* Build a complete **frontend product browsing experience**
* Implement a **cart and checkout flow (static)**
* Support **multiple product workflows (Self-pay, Insurance, Pricing)**
* Ensure the system is **backend-ready without requiring refactoring**

---

## 🧩 Core Features

### 🛍️ Product Catalog

* Browse healthcare products
* View product details
* Categorized product listing (UI level)

### 📄 Product Detail Page

* Displays product information
* Dynamically renders actions based on product type:

  * Self-pay → Add to Cart
  * Insurance → Apply via Insurance
  * Pricing → Request Price

### 🛒 Cart System

* Add/remove products
* Quantity management
* Real-time updates using React Context
* Persistent storage using localStorage

### 💳 Checkout Flow (Static)

* User enters basic details
* Simulated order placement
* Redirect to order success page

### 🏥 Insurance Workflow

* Triggered for insurance-eligible products
* Redirects users to a form flow (Jotform integration planned)
* No payment at this stage

### 📞 Pricing Request Workflow

* Users can request pricing for restricted products
* Simple form submission (admin follow-up in later stages)

---

## 🧠 System Design Approach

This module follows a **hybrid architecture**, combining:

* Traditional e-commerce UI
* Healthcare workflow-based interactions
* Admin-driven processes (to be implemented in later stages)

All complex workflows (insurance, pricing) are designed to integrate with external systems such as Jotform and admin review pipelines.

---

## ⚙️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **State Management:** React Context API
* **Persistence:** localStorage
* **Styling:** (Tailwind CSS / Custom — based on implementation)
* **Package Manager:** pnpm (monorepo with Turborepo)

---

## 🧱 Project Structure

```
apps/ecommerce/
  app/
    products/
    cart/
    checkout/
    insurance/
    pricing-request/
  
  components/
  context/
  lib/
    cart/
    products/
```

---

## 🛒 Cart Architecture

The cart system is designed using a layered approach:

* **Context:** Handles live UI updates
* **Cart Service Layer:** Manages business logic
* **localStorage:** Provides persistence across sessions

This ensures:

* Instant UI updates
* Data retention after refresh
* Easy migration to backend APIs in future

---

## 🔄 Product Workflows

The system supports three primary product types:

### 1. Self-Pay

* Standard e-commerce flow
* Add to cart → Checkout → Order success

### 2. Insurance-Based

* User submits request via form
* No direct checkout
* Admin review required (future phase)

### 3. Call-for-Pricing

* User submits pricing request
* Admin provides custom pricing (future phase)

---

## 🧠 Key Design Principle

> “Build frontend-first, but architect for backend scalability.”

This ensures that the current implementation can seamlessly transition into a fully dynamic system without major refactoring.

---

## 📌 Summary

The Stage 1 E-commerce module delivers a **complete user experience** while maintaining a **clean, scalable architecture** aligned with Castor’s multi-module ecosystem.

It acts as a strong foundation for future backend-driven workflows and real-world healthcare operations.

---
