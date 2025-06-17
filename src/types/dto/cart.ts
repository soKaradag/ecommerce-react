//Cart responses and requests

export interface CartItemRequest {
  productId: string;
  quantity: number;
}

export interface CartRequest {
  userId: string;
  items: CartItemRequest[];
}

export interface CartItemResponse {
  id: string;
  productId: string;
  quantity: number;
}

export interface CartResponse {
  id: string;
  userId: string;
  items: CartItemResponse[];
}