import axios from 'axios';

// Create axios instance with base URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8001';
console.log('Using API URL:', API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Lesson endpoints
export const lessonService = {
  getAll: () => api.get('/api/lessons'),
  getById: (id) => api.get(`/api/lessons/${id}`),
  create: (data) => api.post('/api/lessons', data),
  update: (id, data) => api.put(`/api/lessons/${id}`, data),
  delete: (id) => api.delete(`/api/lessons/${id}`),
};

export default api;
