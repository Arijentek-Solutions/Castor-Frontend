Type:
Multi-vertical healthcare platform (B2C + B2B) with unified identity and modular architecture.

Core Goal:
Unify multiple existing healthcare-related platforms (currently separate domains) into a single ecosystem with shared authentication, centralized access, and modular services.

--------------------------------------------------

🌐 FRONTEND ARCHITECTURE

Current State (Production):
- castorhealthinstitute.com (Education)
- castorhomenursing.com (Care Services)
- castormedicaltransport.com (Transport)
- castorecommerce.com (E-commerce - tentative)

Target:
- castor.com → Central hub (landing + dashboard)
- auth.castor.com → Central authentication (SSO)

Approach:
- Multi-domain architecture (federated system)
- Each module runs as independent frontend/backend
- Connected via centralized authentication (SSO)

User Flow:
User → castor.com → login → redirect to module domain → seamless access (no re-login)

Future (optional):
- Migrate to subdomains (*.castor.com) for better cookie sharing

--------------------------------------------------

🔐 AUTHENTICATION & ACCESS CONTROL

- Single user identity (email unique)
- Centralized authentication service (SSO)
- JWT-based authentication
- Role-based access using UserModuleAccess

UserModuleAccess:
- userId
- module (institute | services | ecommerce | transport)
- role (student | user | provider | b2b | admin | super_admin)
- status

Rules:
- One user can have access to multiple modules
- Roles are module-specific
- Admin approval required for certain roles (provider, B2B)

--------------------------------------------------

🧩 CORE MODULES

1. Health Institute (Education System)
- Course discovery and enrollment
- Flow:
  Course → Enrollment Form → Jotform Checklist → Admin Review → Approval → Dashboard
- Features:
  - Student dashboard (courses, schedule, payments)
  - Manual approval system
- Payment:
  Admin-generated payment links

--------------------------------------------------

2. Care Services (Home Health + Transport)
- Service request system
- Flow:
  Request → Intake (Jotform) → Admin Review → Coordination → Tracking → Payment
- Features:
  - Service tracking (Submitted → Under Review → Approved → Completed)
  - Hybrid operations (online + offline coordination)
- Payment:
  Admin-triggered payment links

--------------------------------------------------

3. Provider Referral System (B2B Intake Layer)
- External providers submit patient referrals
- Flow:
  Provider → Referral Form → (Optional Jotform) → Admin Review → Service Conversion
- Features:
  - Minimal provider dashboard
  - Referral tracking
- Purpose:
  Acts as lead generation pipeline for Care Services

--------------------------------------------------

4. E-Commerce (Medical Marketplace)

Supports both B2C and B2B

Product Types:
1. Self-pay:
   Browse → Cart → Checkout → Payment → Order

2. Insurance-based:
   Product → Insurance Submission → Admin Approval → Checkout

3. Call-for-pricing:
   Request → Admin provides price → Purchase

Order Tracking:
- Pending → Processing → Shipped → Completed

--------------------------------------------------

🏢 E-COMMERCE B2B WORKFLOW (SPECIAL CASE)

Flow:
Login → Curated Catalog → Contract Pricing → Place Order → Invoice (Net-30) → Fulfillment → Offline Payment

Key Points:
- No Jotform intake
- No per-order approval
- Payment handled offline
- Account-level approval required

--------------------------------------------------

🔄 COMMON SYSTEM PATTERN (NON-ECOMMERCE)

Most modules follow:

Request → External Intake (Jotform) → Admin Review → Approval → Dashboard Access → Payment → Completion

Used in:
- Health Institute
- Care Services
- Provider Referral

--------------------------------------------------

🧠 SYSTEM DESIGN PRINCIPLES

1. Modular Architecture
- Each module is independent
- Shared core services (auth, payments, notifications)

2. Hybrid Operations
- Combines software + real-world manual processes
- Admin-driven workflows (approvals, pricing, coordination)

3. External Form Strategy
- Jotform used for complex data collection
- Google Sheets used for sync and review

4. B2C + B2B Support
- Direct users (customers, students)
- Business users (providers, facilities)

--------------------------------------------------

🗂️ CORE DATA STRUCTURE (HIGH LEVEL)

Users (SSO)
UserModuleAccess (roles per module)

Institute:
- Courses
- Enrollments

Services:
- ServiceRequests

Referral:
- Referrals

E-commerce:
- Products
- Orders
- OrderItems
- InsuranceRequests
- PricingRequests

Shared:
- Payments
- Notifications

--------------------------------------------------

💳 PAYMENT MODELS

1. Direct Online Payment (E-commerce B2C)
2. Admin-Generated Payment Links (Services / Institute)
3. Invoice-Based Payments – Net-30 (E-commerce B2B)

--------------------------------------------------

🔗 EXTERNAL INTEGRATIONS

- Jotform → Intake forms
- Google Sheets → Data sync
- Payment Gateway → Transactions

--------------------------------------------------

⚡ SYSTEM NATURE

- Not fully automated
- Strong reliance on admin workflows
- Designed for real-world healthcare operations
- Scalable for future modules

--------------------------------------------------

SUMMARY

Castor is a federated, modular, multi-domain platform that unifies healthcare services, education, commerce, and provider networks into a single ecosystem using centralized authentication and hybrid operational workflows.