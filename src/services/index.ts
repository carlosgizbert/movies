import axios, { AxiosError } from 'axios';
export const BASE_API_URL = '/api';

export const CACHE_QUERY_KEYS: Readonly<unknown> = {
  useGetMovies: 'getFlags',
};

export const QUERIES_CONFIG = {
  staleTime: 120000,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  retry: 1,
  retryDelay: 3000,
};

export const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('@auth:jwt');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const { response } = error;
    if (response && response.status === 401) {
      console.error('Logging out due to 401 error');
    }
    return Promise.reject(error);
  },
);
