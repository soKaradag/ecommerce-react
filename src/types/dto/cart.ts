//Cart responses and requests

export interface CartItemRequest {
  productId: string;
  quantity: number;
}

export interface CartRequest {
  userId: string;
  items: CartItemRequest[];
}