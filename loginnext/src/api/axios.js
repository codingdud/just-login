import axios from 'axios';
const BASE_URL = 'https://loginapi-i7apm84tm-codingdud.vercel.app';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
    credentials: 'include'
});