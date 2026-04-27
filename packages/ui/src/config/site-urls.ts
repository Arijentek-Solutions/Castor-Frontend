const isLocal = process.env.NODE_ENV === 'development';

const WEB_BASE = isLocal 
  ? 'http://localhost:3004' 
  : (process.env.NEXT_PUBLIC_WEB_URL || 'https://castor-main.vercel.app');

const ECOMMERCE_BASE = isLocal 
  ? 'http://localhost:3005' 
  : (process.env.NEXT_PUBLIC_ECOMMERCE_URL || 'https://castor-ecommerce.vercel.app');

export const SITE_URLS = {
  // Root domain — web corporate homepage
  web: WEB_BASE,
  // Path-based sections under the same domain
  services:  `${WEB_BASE}/getcare`,
  institute: `${WEB_BASE}/institute`,
  transport: `${WEB_BASE}/transport`,
  auth:      `${WEB_BASE}/auth`,
  // Ecommerce stays on its own separate domain
  ecommerce: ECOMMERCE_BASE,
} as const;
