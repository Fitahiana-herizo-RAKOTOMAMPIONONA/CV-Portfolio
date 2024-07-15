import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/portfolio',
  withCredentials: true
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  return config;
});

export default api;