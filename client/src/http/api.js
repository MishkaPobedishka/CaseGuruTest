import axios from 'axios';

export const API_URL = 'http://localhost:5500/api'

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

export default api;