export type ProductWorkflowType = "self-pay" | "insurance" | "pricing-request";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  category?: string;
  group?: string;
  manufacturer: string;
  price: number;
  sku: string;
  rating: number;
  reviewCount: number;
  weight: string;
  workflowType: ProductWorkflowType;
  // Extended fields
  hcpcs?: string;
  billingUomUnits?: string;
  uomSetName?: string;
  status?: string;
  partNumber?: string;
}
