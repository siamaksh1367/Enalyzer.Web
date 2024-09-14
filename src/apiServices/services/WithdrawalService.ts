import APIClient from "../ApiClient";

export interface Withdrawal {
  value: number;
  quantity: number;
  location: number;
}

export default new APIClient<number, Withdrawal[]>("/withdrawal");
