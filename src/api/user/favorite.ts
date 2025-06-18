import axios from 'axios';
import type { FavoriteRequest, FavoriteResponse } from '../../types/dto/user';

export const addFavorite = async (data: FavoriteRequest): Promise<FavoriteResponse> => {
  const res = await axios.post('/favorites', data);
  return res.data;
};

export const deleteFavorite = async (favoriteId: string): Promise<void> => {
  await axios.delete(`/favorites/${favoriteId}`);
};

export const getFavoritesByUser = async (userId: string): Promise<FavoriteResponse[]> => {
  const res = await axios.get(`/favorites/user/${userId}`);
  return res.data;
};
