import axios from "axios";
import { RESPONSE_MESSAGE } from "@/shared/constants/response";

const BASE_URL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터: access token 자동 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  // 서버 응답 형식: { status, message, data }
  (response) => response.data.data,

  (error) => {
    if (error.response) {
      const { status, message } = error.response.data;

      const displayMessage =
        RESPONSE_MESSAGE[status] || message || "알 수 없는 오류입니다.";

      console.log(displayMessage);
    } else {
      console.log("서버에 연결할 수 없습니다.");
    }

    return Promise.reject(error);
  },
);
