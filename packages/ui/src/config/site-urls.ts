export const SITE_URLS = {
  services:  process.env.NEXT_PUBLIC_SERVICES_URL  ?? 'http://localhost:3002',
  ecommerce: process.env.NEXT_PUBLIC_ECOMMERCE_URL ?? 'http://localhost:3005',
  institute: process.env.NEXT_PUBLIC_INSTITUTE_URL ?? 'http://localhost:3000',
  transport: process.env.NEXT_PUBLIC_TRANSPORT_URL ?? 'http://localhost:3003',
  web:       process.env.NEXT_PUBLIC_WEB_URL       ?? 'http://localhost:3004',
} as const;
