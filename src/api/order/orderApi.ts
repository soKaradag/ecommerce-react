// src/api/order/orderApi.ts
import axios from "../axios";
import type { OrderRequest } from "../../types/dto/order";

export const createOrder = async (data: OrderRequest) => {
  const res = await axios.post("/orders", data);
  return res.data;
};

export const placeOrderApi = async (order: OrderRequest) => {
  const res = await axios.post("/orders", order);
  return res.data;
};