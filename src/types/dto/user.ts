//User responses
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

export interface AddressInfoResponse {
  id: string;
  country: string;
  city: string;
  district: string;
  zipCode: string;
  openAddress: string;
}

export interface AdminInfoResponse {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  departmentName: string;
  departmentCode: string;
  userId: string; 
}

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

export interface DepartmentResponse {
  id: string;
  name: string;
  code: string;
}

export interface FavoriteResponse {
  id: string;
  userId: string;
  productId: string;
}

export interface GenderResponse {
  id: string;
  name: string;
}

export interface ProfilePhotoResponse {
  url: string;
}

//User requests
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

