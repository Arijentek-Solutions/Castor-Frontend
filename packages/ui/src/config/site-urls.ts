const isLocal = process.env.NODE_ENV === 'development';

const WEB_BASE = isLocal 
  ? 'http://localhost:3004' 
  : (process.env.NEXT_PUBLIC_WEB_URL || 'https://temp.castorhealth.com');

const ECOMMERCE_BASE = isLocal 
  ? 'http://localhost:3005' 
  : (process.env.NEXT_PUBLIC_ECOMMERCE_URL || 'https://supplies.castorhealth.com');

export const SITE_URLS = {
  web: WEB_BASE,
  services:  `${WEB_BASE}/getcare`,
  institute: `${WEB_BASE}/institute`,
  transport: `${WEB_BASE}/transport`,
  auth:      `${WEB_BASE}/auth`,
  ecommerce: ECOMMERCE_BASE,
} as const;
