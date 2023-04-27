import axios from 'axios';

let baseURL = 'http://localhost:5000';
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://adarsh.up.railway.app';
}

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true // enable cookies
});

export default axiosInstance;
