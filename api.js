import axios from 'axios';

const API = axios.create({
  baseURL: 'https://a270202.github.io/Sandeep/api',
});

export const signup = (data) => API.post('/auth/signup', data);
export const login = (data) => API.post('/auth/login', data);
