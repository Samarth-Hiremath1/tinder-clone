import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8001', // Corrected to baseURL
});

export default instance;
