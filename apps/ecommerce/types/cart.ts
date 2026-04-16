export type CartWorkflowType = "self-pay" | "insurance" | "pricing-request";

export type CartProductInput = {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  workflowType?: CartWorkflowType;
};

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export type CartTotals = {
  itemCount: number;
  subtotal: number;
};

export type CartContextValue = CartTotals & {
  items: CartItem[];
  isEmpty: boolean;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addItem: (product: CartProductInput, quantity?: number) => void;
  removeItem: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};
