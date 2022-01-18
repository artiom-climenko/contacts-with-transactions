import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://6172dd7e110a740017222e84.mockapi.io/users',
});
