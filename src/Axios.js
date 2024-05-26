import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://uems-main.vercel.app/api',
});

export default instance;