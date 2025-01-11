import Axios, { InternalAxiosRequestConfig } from "axios";
import { toast } from "sonner";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = "application/json";
  }

  return config;
}

export const api = Axios.create({
  baseURL: import.meta.env.API_URL,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    toast.error(message);

    return Promise.reject(error);
  }
);
