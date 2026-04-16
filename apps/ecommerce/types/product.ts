export type ProductWorkflowType = "self-pay" | "insurance" | "pricing-request";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  sku: string;
  rating: number;
  reviewCount: number;
  manufacturer: string;
  weight: string;
  workflowType: ProductWorkflowType;
}
