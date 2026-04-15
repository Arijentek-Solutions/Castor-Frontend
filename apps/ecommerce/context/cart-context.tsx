"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  addCartItem,
  clearCartItems,
  decreaseCartItemQuantity,
  getCartTotals,
  increaseCartItemQuantity,
  removeCartItem,
  sanitizeCartItems,
  updateCartItemQuantity,
} from "@/lib/cart/cart-service";
import type {
  CartContextValue,
  CartItem,
  CartProductInput,
} from "@/types/cart";

const CART_STORAGE_KEY = "castor:ecommerce:cart";

const CartContext = createContext<CartContextValue | undefined>(undefined);

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    return sanitizeCartItems(JSON.parse(storedCart));
  } catch {
    return [];
  }
}

function writeStoredCart(items: CartItem[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export function 
CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStoredCart);

  useEffect(() => {
    writeStoredCart(items);
  }, [items]);

  const addItem = useCallback(
    (product: CartProductInput, quantity?: number) => {
      setItems((currentItems) => addCartItem(currentItems, product, quantity));
    },
    [],
  );

  const removeItem = useCallback((productId: string) => {
    setItems((currentItems) => removeCartItem(currentItems, productId));
  }, []);

  const increaseQuantity = useCallback((productId: string) => {
    setItems((currentItems) =>
      increaseCartItemQuantity(currentItems, productId),
    );
  }, []);

  const decreaseQuantity = useCallback((productId: string) => {
    setItems((currentItems) =>
      decreaseCartItemQuantity(currentItems, productId),
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems((currentItems) =>
      updateCartItemQuantity(currentItems, productId, quantity),
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems(clearCartItems());
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const totals = getCartTotals(items);

    return {
      items,
      itemCount: totals.itemCount,
      subtotal: totals.subtotal,
      isEmpty: items.length === 0,
      addItem,
      removeItem,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      clearCart,
    };
  }, [
    addItem,
    clearCart,
    decreaseQuantity,
    increaseQuantity,
    items,
    removeItem,
    updateQuantity,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
