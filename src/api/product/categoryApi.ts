// src/api/product/categoryApi.ts
import axios from "../axios";

const BASE_URL = "http://localhost:8080/api/categories";

export const fetchCategories = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};
