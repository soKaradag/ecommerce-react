// src/api/cart/getCartByUser.ts
import axios from "../axios";
import type { CartResponse } from "../../types/dto/cart";

export const getCartByUser = async (userId: string): Promise<CartResponse> => {
  const response = await axios.get(`/cart/user/${userId}`);
  return response.data;
};
