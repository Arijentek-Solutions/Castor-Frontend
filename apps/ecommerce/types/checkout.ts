export type PaymentMethod = "cod" | "card" | "upi";

export type CheckoutFormData = {
  // Contact
  fullName: string;
  email: string;
  phone: string;

  // Shipping Address
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;

  // Payment
  paymentMethod: PaymentMethod;
  // Card fields (only when paymentMethod === "card")
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
  cardName?: string;
  // UPI fields (only when paymentMethod === "upi")
  upiId?: string;

  // Options
  saveInfo: boolean;
  termsAccepted: boolean;
};

export type Order = {
  id: string;
  customer: {
    fullName: string;
    email: string;
    phone: string;
  };
  shippingAddress: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  payment: {
    method: PaymentMethod;
    status: "pending" | "paid";
    lastFour?: string;
    upiId?: string;
  };
  items: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  createdAt: string;
  estimatedDelivery: string;
};
