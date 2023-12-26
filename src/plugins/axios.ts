import { Domain } from '@src/enums/Domain';
import type { AxiosError } from 'axios';
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

// Error Handler
const errorHandler = async (error: AxiosError) => {
  const config: AxiosRequestConfig | undefined = error?.config;

  //   axios(config)

  return Promise.reject(error);
};

const requestHandler = async (request: AxiosRequestConfig) => {
  // Add Access Token to Request Header
  if (request.headers) {
    request.headers.Authorization = `Bearer ${'accessToken'}}`;
  }

  return request;
};

const responseHandler = (response: AxiosResponse) => {
  return response;
};

const axiosInstance = axios.create({
  baseURL: `${Domain.API_URL}/api`,
  //   headers: { lang: 'ar' },
});

axiosInstance.interceptors.request.use(requestHandler as any);
axiosInstance.interceptors.response.use(responseHandler, errorHandler);

export { axiosInstance };
