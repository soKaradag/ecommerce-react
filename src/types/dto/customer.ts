export interface CustomerInfoResponse {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: string;
  gender: string;
  country: string;
  city: string;
  zipCode: string;
  openAddress: string;
}

export interface UpdateCustomerInfoRequest {
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: string;
  genderId: string;
  country: string;
  city: string;
  zipCode: string;
  openAddress: string;
}
