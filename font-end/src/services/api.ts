import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL_MOTORS,
});

export default api;
