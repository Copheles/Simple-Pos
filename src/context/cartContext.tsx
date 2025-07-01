import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useOptimistic,
  startTransition,
} from "react";
import type { Product, CartItem } from "../data/products";
import {
  addToCart as addToCartUtil,
  removeFromCart as removeFromCartUtil,
  increaseQuantity,
  decreaseQuantity,
  getTotalItems,
  calculateCartPrices,
} from "../utils/cartUtils";

type CartContextType = {
  cart: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  totalItems: number;
};

interface CartState {
  items: CartItem[];
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType>({
  cart: {
    items: [],
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0
  },
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQty: () => {},
  decreaseQty: () => {},
  totalItems: 0,
});

export const useCart = () => useContext(CartContext);

const STORAGE_KEY = "cart";

export const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [cart, setCart] = useState<CartState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          items: parsed.items || [],
          ...calculateCartPrices(parsed.items || []),
        };
      }
      return {
        items: [],
        itemsPrice: 0,
        shippingPrice: 0,
        taxPrice: 0,
        totalPrice: 0,
      };
    } catch {
      return {
        items: [],
        itemsPrice: 0,
        shippingPrice: 0,
        taxPrice: 0,
        totalPrice: 0,
      };
    }
  });

  const [optimisticCart, addOptimistic] = useOptimistic(cart);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  // Add to cart
  const addToCart = (product: Product) => {
    startTransition(() => {
      addOptimistic((prev) => addToCartUtil(prev, product));
    });
    setCart((prev) => addToCartUtil(prev, product));
  };

  // Remove item
  const removeFromCart = (id: number) => {
    setCart((prev) => removeFromCartUtil(prev, id));
  };

  // Increase quantity
  const increaseQty = (id: number) => {
    setCart((prev) => increaseQuantity(prev, id));
  };

  // Decrease quantity
  const decreaseQty = (id: number) => {
    setCart((prev) => decreaseQuantity(prev, id));
  };

  const totalItems = getTotalItems(cart.items);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
