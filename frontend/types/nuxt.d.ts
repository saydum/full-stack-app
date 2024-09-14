import { AxiosInstance } from 'axios';

declare module '#app' {
  interface NuxtApp {
    $axiosApiClient: AxiosInstance;
  }
}