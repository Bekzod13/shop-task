import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:8000/api`
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

api.interceptors.response.use((response) => {
    return response;
},
    (error) => {
        try {
            const { response } = error;
            if (response.status === 401) {
                localStorage.removeItem('TOKEN');
            }
        } catch (error) {
            console.log(error);
        }
        throw error;
    });

export default api;