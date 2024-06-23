import axios from 'axios';
//const BASE_URL = 'https://loginapi.sysopengineer.tech/';
const BASE_URL = 'http://localhost:8080/';

export default axios.create({
    baseURL: BASE_URL,
    headers:{
        "Access-Control-Allow-Origin": true
    }
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});