export const SITE_URLS = {
  auth:      process.env.NEXT_PUBLIC_AUTH_URL      ?? 'http://localhost:3001',
  services:  process.env.NEXT_PUBLIC_SERVICES_URL  ?? 'http://localhost:3002',
  ecommerce: process.env.NEXT_PUBLIC_ECOMMERCE_URL ?? 'http://localhost:3005',
  institute: process.env.NEXT_PUBLIC_INSTITUTE_URL ?? 'http://localhost:3000',
  transport: process.env.NEXT_PUBLIC_TRANSPORT_URL ?? 'http://localhost:3003',
  web:       process.env.NEXT_PUBLIC_WEB_URL       ?? 'http://localhost:3004',
} as const;
