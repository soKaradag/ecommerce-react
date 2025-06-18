// src/api/product/categoryApi.ts
import type { CategoryRequest } from "../../types/dto/product";
import axios from "../axios";

const BASE_URL = "http://localhost:8080/api/categories";

export const fetchCategories = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const createCategory = async (data: CategoryRequest): Promise<CategoryResponse> => {
  const res = await axios.post("/categories", data);
  return res.data;
};
