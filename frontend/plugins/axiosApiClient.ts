import axios, { type AxiosInstance } from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const axiosApiClient: AxiosInstance = axios.create({
    baseURL: runtimeConfig.public.apiUrl,
  });
  
  axiosApiClient.interceptors.request.use(function (config) {
    if (config.headers) {
      config.headers['X-Binarybox-Api-Key'] = runtimeConfig.public.apiKey;
    }
    return config;
  });

  return {
    provide: {
      axiosApiClient,
    },
  };
});
