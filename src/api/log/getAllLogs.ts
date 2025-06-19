import axios from '../axios';
import type { LogResponse } from '../../types/dto/logging';

export const getAllLogs = async (): Promise<LogResponse[]> => {
  const res = await axios.get<LogResponse[]>('/logs');
  return res.data;
};