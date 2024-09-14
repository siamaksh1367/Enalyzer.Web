import axios, { AxiosResponse } from "axios";

class APIClient<T, S> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = async (data: T): Promise<S> => {
    const response: AxiosResponse<S> = await axios.post(this.endpoint, data);
    return response.data;
  };
}

export default APIClient;
