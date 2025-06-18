import axios from "../axios";
import type { AdminInfoResponse } from "../../types/dto/user";

export const fetchAdminInfo = async (userId: string): Promise<AdminInfoResponse> => {
  const res = await axios.get(`/admin-info/user/${userId}`);
  console.log(res.data);
  return res.data;
};

