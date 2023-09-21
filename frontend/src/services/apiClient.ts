// frontend\src\services\apiClient.ts

import axios, { AxiosInstance } from "axios";

export const getApiClient = (): AxiosInstance => {
  const apiClient = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true,
  });

  return apiClient;
};
