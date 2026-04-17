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
import toast from "react-hot-toast";

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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [removedItemName, setRemovedItemName] = useState<string | null>(null);

  useEffect(() => {
    writeStoredCart(items);
  }, [items]);

  // Show toast when item is removed
  useEffect(() => {
    if (removedItemName) {
      toast.error(`${removedItemName} removed from cart`);
      setRemovedItemName(null);
    }
  }, [removedItemName]);

  const addItem = useCallback(
    (product: CartProductInput, quantity?: number) => {
      setItems((currentItems) => addCartItem(currentItems, product, quantity));
      toast.success(`${product.name} added to cart`);
    },
    [],
  );

  const removeItem = useCallback((productId: string) => {
    setItems((currentItems) => {
      const itemToRemove = currentItems.find(item => item.productId === productId);
      const newItems = removeCartItem(currentItems, productId);
      if (itemToRemove) {
        setRemovedItemName(itemToRemove.name);
      }
      return newItems;
    });
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
      isCartOpen,
      setIsCartOpen,
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
    isCartOpen,
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
