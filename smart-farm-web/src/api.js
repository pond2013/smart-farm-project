import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

API.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data)
);