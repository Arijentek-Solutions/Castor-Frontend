export const SITE_URLS = {
  auth: process.env.NEXT_PUBLIC_AUTH_URL || 'https://castor-auth.vercel.app',
  services: process.env.NEXT_PUBLIC_SERVICES_URL || 'https://castor-getcare.vercel.app',
  ecommerce: process.env.NEXT_PUBLIC_ECOMMERCE_URL || 'https://castor-ecommerce.vercel.app',
  institute: process.env.NEXT_PUBLIC_INSTITUTE_URL || 'https://castor-institute.vercel.app',
  transport: process.env.NEXT_PUBLIC_TRANSPORT_URL || 'https://castor-transport.vercel.app',
  web: process.env.NEXT_PUBLIC_WEB_URL || 'https://castor-main.vercel.app',
} as const;
