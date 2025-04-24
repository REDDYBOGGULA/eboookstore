// src/api/axiosInstance.js
import axios from 'axios';
import { auth } from '../firebase';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-endpoint.com/api', // 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
