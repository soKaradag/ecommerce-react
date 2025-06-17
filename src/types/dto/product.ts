//Product responses and requests

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

export interface CategoryRequest {
  name: string;
  description: string;
}

export interface CategoryResponse {
  id: string;
  name: string;
  description: string;
}

export interface ProductImageRequest {
  imageUrl: string;
  productId: string;
}

export interface ProductImageResponse {
  id: string;
  imageUrl: string;
  productId: string;
}

export interface ReviewRequest {
  comment: string;
  rating: number;
  userId: string;
  productId: string;
}

export interface ReviewResponse {
  id: string;
  comment: string;
  rating: number;
  userId: string;
  productId: string;
}

