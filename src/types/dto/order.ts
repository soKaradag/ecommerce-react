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
