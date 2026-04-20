import type { CartItem, CartProductInput, CartTotals } from "@/types/cart";

export const MAX_CART_QUANTITY = 99;

function clampQuantity(quantity: number) {
  if (!Number.isFinite(quantity)) {
    return 1;
  }

  return Math.min(Math.max(Math.trunc(quantity), 1), MAX_CART_QUANTITY);
}

function normalizePrice(price: number) {
  if (!Number.isFinite(price) || price < 0) {
    return 0;
  }

  return Math.round(price * 100) / 100;
}

function normalizeCartItem(item: CartItem): CartItem {
  return {
    ...item,
    price: normalizePrice(item.price),
    quantity: clampQuantity(item.quantity),
  };
}

export function canAddToCart(product: CartProductInput) {
  return !product.workflowType || product.workflowType === "self-pay" || product.workflowType === "insurance";
}

export function createCartItem(
  product: CartProductInput,
  quantity = 1,
): CartItem | null {
  if (!canAddToCart(product)) {
    return null;
  }

  return {
    productId: product.productId,
    slug: product.slug,
    sku: product.sku,
    name: product.name,
    image: product.image,
    price: normalizePrice(product.price),
    quantity: clampQuantity(quantity),
    insuranceCovered: product.insuranceCovered,
  };
}

export function addCartItem(
  items: CartItem[],
  product: CartProductInput,
  quantity = 1,
) {
  const nextItem = createCartItem(product, quantity);

  if (!nextItem) {
    return items;
  }

  const existingItem = items.find(
    (item) => item.productId === nextItem.productId,
  );

  if (!existingItem) {
    return [...items, nextItem];
  }

  return items.map((item) => {
    if (item.productId !== nextItem.productId) {
      return item;
    }

    return normalizeCartItem({
      ...item,
      quantity: item.quantity + nextItem.quantity,
    });
  });
}

export function removeCartItem(items: CartItem[], productId: string) {
  return items.filter((item) => item.productId !== productId);
}

export function updateCartItemQuantity(
  items: CartItem[],
  productId: string,
  quantity: number,
) {
  return items.map((item) => {
    if (item.productId !== productId) {
      return item;
    }

    return normalizeCartItem({
      ...item,
      quantity,
    });
  });
}

export function increaseCartItemQuantity(
  items: CartItem[],
  productId: string,
) {
  const item = items.find((cartItem) => cartItem.productId === productId);

  if (!item) {
    return items;
  }

  return updateCartItemQuantity(items, productId, item.quantity + 1);
}

export function decreaseCartItemQuantity(
  items: CartItem[],
  productId: string,
) {
  const item = items.find((cartItem) => cartItem.productId === productId);

  if (!item) {
    return items;
  }

  return updateCartItemQuantity(items, productId, item.quantity - 1);
}

export function clearCartItems() {
  return [];
}

export function getCartTotals(items: CartItem[]): CartTotals {
  const totals = items.reduce(
    (nextTotals, item) => {
      const normalizedItem = normalizeCartItem(item);

      return {
        itemCount: nextTotals.itemCount + normalizedItem.quantity,
        subtotal:
          nextTotals.subtotal +
          normalizedItem.price * normalizedItem.quantity,
      };
    },
    {
      itemCount: 0,
      subtotal: 0,
    },
  );

  return {
    itemCount: totals.itemCount,
    subtotal: Math.round(totals.subtotal * 100) / 100,
  };
}

export function sanitizeCartItems(value: unknown): CartItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is CartItem => {
      if (!item || typeof item !== "object") {
        return false;
      }

      const candidate = item as CartItem;

      return (
        typeof candidate.productId === "string" &&
        typeof candidate.slug === "string" &&
        typeof candidate.sku === "string" &&
        typeof candidate.name === "string" &&
        typeof candidate.image === "string" &&
        typeof candidate.price === "number" &&
        typeof candidate.quantity === "number"
      );
    })
    .map(normalizeCartItem);
}

export function formatCartCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(normalizePrice(value));
}

// Shipping cost logic (free over $50, else $5.99)
export function calculateShipping(subtotal: number): number {
  return subtotal >= 50 ? 0 : 5.99;
}

// Tax logic (8% flat for demo)
export function calculateTax(subtotal: number): number {
  return Math.round(subtotal * 0.08 * 100) / 100;
}
