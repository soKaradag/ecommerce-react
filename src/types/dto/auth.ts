//Auth responses and requests
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordRequest {
  email: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ResetPasswordResponse {
  message: string;
}
