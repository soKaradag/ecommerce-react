//User responses and requests
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

export interface AddressInfoRequest {
  country: string;
  city: string;
  district: string;
  zipCode: string;
  openAddress: string;
}

export interface AdminInfoRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
  departmentId: string;
  userId: string;
}

export interface DepartmentRequest {
  name: string;
  code: string;
}

export interface FavoriteRequest {
  userId: string;
  productId: string;
}

export interface GenderRequest {
  name: string;
}

export interface ProfilePhotoRequest {
  url: string;
}

export interface UpdateCustomerInfoRequest {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  genderId: string;
  age: number;
  country: string;
  city: string;
  zipCode: string;
  openAddress: string;
}
