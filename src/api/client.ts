import axios from 'axios';
import { useAuthStore } from '../auth/authStore';

// Base URL should eventually come from config/env
const BASE_URL = 'http://localhost:3000/api'; // Placeholder

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach token
apiClient.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling & token refresh placeholder
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Placeholder for 401 Unauthorized handling (e.g., token refresh)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // TODO: Implement token refresh logic here and call useAuthStore.getState().setSession(...)
      useAuthStore.getState().logout();
    }

    // Normalize error for the app
    const apiError = {
      message: error.response?.data?.message || error.message || 'An unexpected error occurred',
      status: error.response?.status,
      code: error.response?.data?.code,
    };

    return Promise.reject(apiError);
  }
);
