import axios from '../axios';
import type { RegisterRequest } from '../../types/dto/auth';

export const registerApi = async (data: RegisterRequest) => {
  await axios.post('/auth/register', data);
};
