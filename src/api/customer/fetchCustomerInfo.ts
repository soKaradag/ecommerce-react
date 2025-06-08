import axios  from "../axios";
import type { CustomerInfoResponse } from "../../types/dto/customer";

export const fetchCustomerInfo = async (id: string): Promise<CustomerInfoResponse> => {
  const res = await axios.get(`/customer-info/${id}`);
  return res.data;
};
