import axios from 'axios';
import { RESPONSE_MESSAGE } from '@/shared/constants/response';
import { ROUTES } from '@/shared/routes/routes-config';

const BASE_URL = import.meta.env.VITE_API_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터: access token 자동 추가
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => response.data,

  (error) => {
    if (error.response) {
      const { status, message } = error.response.data;

      // TODO: 토큰 만료 시 로그인 페이지로 이동
      // if (status === 401) {
      //   localStorage.removeItem('token');
      //   window.location.href = ROUTES.LOGIN;
      // }

      const displayMessage =
        RESPONSE_MESSAGE[status] || message || '알 수 없는 오류입니다.';

      console.log(displayMessage);
    } else {
      console.log('서버에 연결할 수 없습니다.');
    }

    return Promise.reject(error);
  },
);
