import { create } from 'zustand';
import type { CartItemRequest } from '../types/dto/cart';
import type { OrderItemRequest } from '../types/dto/order';

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getTotalAmount: () => number;
  getCartRequestPayload: () => CartItemRequest[];
  getOrderItemsPayload: () => OrderItemRequest[];
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],

  addToCart: (product, quantity = 1) => {
    const existingItem = get().cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      set({
        cartItems: get().cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      });
    } else {
      set({
        cartItems: [...get().cartItems, { product, quantity }],
      });
    }
  },

  removeFromCart: (productId) => {
    set({
      cartItems: get().cartItems.filter(
        (item) => item.product.id !== productId
      ),
    });
  },

  clearCart: () => set({ cartItems: [] }),

  getTotalAmount: () => {
    return get().cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  },

  getCartRequestPayload: () => {
    return get().cartItems.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
    }));
  },

  getOrderItemsPayload: () => {
    return get().cartItems.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
    }));
  },
}));
