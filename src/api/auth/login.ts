// src/api/auth/login.ts
import axios from '../axios';
import { useAuthStore } from '../../stores/useAuthStore';

export const loginApi = async (email: string, password: string) => {
  const res = await axios.post<{ token: string }>('/auth/login', {
    email,
    password,
  });

  const token = res.data.token;

  // Token'ı decode et (örneğin jwt-decode ile)
  const payload = JSON.parse(atob(token.split('.')[1]));
  const role = payload.role as 'user' | 'admin';

  // Role'e göre login işlemi yap
  useAuthStore.getState().login(role);

  // Token'ı localStorage’a da istersen yaz
  localStorage.setItem('token', token);

  return token;
};
