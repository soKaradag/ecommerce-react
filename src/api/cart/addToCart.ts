// src/api/cart/addToCart.ts
import axios from "../axios";

export const addToCart = async (userId: string, productId: string) => {
  const response = await axios.post(`/cart/user/${userId}/add`, {
    productId,
    quantity: 1,
  });
  return response.data;
};
