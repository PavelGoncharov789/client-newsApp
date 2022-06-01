import axios from 'axios';

import { readTokenFromLS } from '../utils/tokenUtils';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = readTokenFromLS();
    if (token) {
      headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
