// src/api/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Request Interceptor – tự gắn token từ localStorage
apiClient.interceptors.request.use(
  (config) => {
    const authData = JSON.parse(localStorage.getItem("auth")); // lấy từ localStorage do recoil đã lưu
    const token = authData?.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor – xử lý lỗi chung (tuỳ chọn)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Token hết hạn hoặc không hợp lệ!");
      // window.location.href = "/login"; // tuỳ app
    }

    return Promise.reject(error);
  }
);

export default apiClient;
