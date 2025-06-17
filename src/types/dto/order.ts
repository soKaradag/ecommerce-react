//Order responses and requests
export interface OrderAddressRequest {
  cityId: string;
  countryId: string;
  zipCode: string;
  address: string;
}

export interface OrderStatusRequest {
  name: string;
}

export interface CityRequest {
  name: string;
}

export interface CountryRequest {
  name: string;
}

export interface OrderStatusRequest {
  name: string;
}

export interface OrderAddressRequest {
  city: CityRequest;
  country: CountryRequest;
  zipCode: string;
  address: string;
}

export interface OrderItemRequest {
  productId: string;
  quantity: number;
}

export interface OrderRequest {
  userId: string;
  items: OrderItemRequest[];
  totalAmount: number;
  status: string;
  orderStatus: OrderStatusRequest;
  orderAddress: OrderAddressRequest;
}

export interface CityResponse {
  id: string;
  name: string;
}

export interface CountryResponse {
  id: string;
  name: string;
}

export interface OrderAddressResponse {
  id: string;
  city: CityResponse;
  country: CountryResponse;
  zipCode: string;
  address: string;
}

export interface OrderItemResponse {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  totalPrice: number;
}

export interface OrderStatusResponse {
  id: string;
  name: string;
}

export interface OrderResponse {
  id: string;
  userId: string;
  items: OrderItemResponse[];
  orderDate: string; 
  totalAmount: number;
  status: string;
  orderStatus: OrderStatusResponse;
  orderAddress: OrderAddressResponse;
}