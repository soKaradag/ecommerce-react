import axios from "../axios";
import type { UpdateCustomerInfoRequest } from "../../types/dto/customer";

export const updateCustomerInfo = async (userId: string, data: UpdateCustomerInfoRequest): Promise<void> => {
  await axios.put(`/customer-info/${userId}`, data);
  console.log(data)
};
