import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use((config) => {
	config.headers.Authorization = window.localStorage.getItem('token');
	return config;
});

instance.interceptors.response.use(function (response) {
	return response.data;
});

export default instance;
