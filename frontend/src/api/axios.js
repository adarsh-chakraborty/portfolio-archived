import axios from 'axios';

const baseURL = 'https://adarsh.up.railway.app';
// const baseURL = 'http://localhost:5000';

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
