

export interface ProductRequest {
  name: string;
  description: string;
  price: number;
  categoryId: string;
  quantity: number;
}

export interface ProductResponse {
  id: string;
  name: string;
  description: string;
  price: number;
  category: { name: string; id: string };
  quantity: number;
}