

import axios from 'axios';
import { jwtDecode, JwtPayload } from 'jwt-decode'; // npm install jwt-decode
import toast from 'react-hot-toast';
import { baseUrl } from '../baseUrl/BaseUrl';
import Cookies from "js-cookie";

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: baseUrl,
});

// Function to check if token is expired
function isTokenExpired(token: string) {
    try {
        const decoded = jwtDecode<JwtPayload>(token);
        if (!decoded.exp) return true;
        return decoded.exp * 1000 < Date.now();
    } catch (error) {
        console.log("token expire error", error);

        return true; // Invalid token → consider expired
    }
}

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("accessToken");

        if (token) {
            if (isTokenExpired(token)) {
                Cookies.remove("accessToken");
                Cookies.remove("refreshToken");
                toast.error("Session expired. Please login again.");
                window.location.href = "/";
                return Promise.reject(new Error("Token expired"));
            }
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor (fallback if backend returns 401)
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            toast.error('Session expired. Please login again.');
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");

            window.location.href = '/';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
