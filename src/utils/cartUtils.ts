// src/utils/cartUtils.ts
import type { Product, CartItem } from "../data/products";

interface CartState {
  items: CartItem[];
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

// Two decimals function
export function toTwoDecimals(num: number): number {
  return parseFloat(num.toFixed(2));
}

// Calculate prices based on cart items
export const calculateCartPrices = (
  items: CartItem[]
): Omit<CartState, "items"> => {
  const itemsPrice = toTwoDecimals(
    items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  const shippingPrice = items.length > 0 ? 5.99 : 0;
  const taxPrice = toTwoDecimals(itemsPrice * 0.05);

  const totalPrice = toTwoDecimals(itemsPrice + shippingPrice + taxPrice);

  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

// Add item to cart
export const addToCart = (cart: CartState, product: Product): CartState => {
  const existingItem = cart.items.find((item) => item.id === product.id);
  const updatedItems = existingItem
    ? cart.items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    : [...cart.items, { ...product, quantity: 1 }];

  return {
    items: updatedItems,
    ...calculateCartPrices(updatedItems),
  };
};

// Remove item from cart
export const removeFromCart = (cart: CartState, id: number): CartState => {
  const updatedItems = cart.items.filter((item) => item.id !== id);
  return {
    items: updatedItems,
    ...calculateCartPrices(updatedItems),
  };
};

// Increase item quantity
export const increaseQuantity = (cart: CartState, id: number): CartState => {
  const updatedItems = cart.items.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
  return {
    items: updatedItems,
    ...calculateCartPrices(updatedItems),
  };
};

// Decrease item quantity
export const decreaseQuantity = (cart: CartState, id: number): CartState => {
  const updatedItems = cart.items
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);

  return {
    items: updatedItems,
    ...calculateCartPrices(updatedItems),
  };
};

// Get total number of items in cart
export const getTotalItems = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
};
