import axios from 'axios';
const BASE_URL = ' https://loginapi-4095wc9cw-codingdud.vercel.app';

export default axios.create({
    baseURL: BASE_URL,
    headers:{
        "Access-Control-Allow-Origin": true
    }
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
    credentials: 'include'
});