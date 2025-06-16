// src/api/product/productApi.ts
import axios from "../axios";
import type { ProductRequest, ProductResponse } from "../../types/dto/product";

const BASE_URL = "http://localhost:8080/api/products";

export const fetchProducts = async (): Promise<ProductResponse[]> => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const createProduct = async (data: ProductRequest): Promise<ProductResponse> => {
  const res = await axios.post(BASE_URL, data);
  return res.data;
};

export const updateProduct = async (id: string, data: ProductRequest): Promise<ProductResponse> => {
  const res = await axios.put(`${BASE_URL}/${id}`, data);
  return res.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
