import axios from 'axios';
import { RESPONSE_MESSAGE } from '@/shared/constants/response';
import { ROUTES } from '@/shared/routes/routes-config';
import { toast } from 'react-toastify';

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

let isRedirecting = false;

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => response.data,

  (error) => {
    if (error.response) {
      const { status, message } = error.response.data;

      if (status === 401) {
        if (!isRedirecting) {
          isRedirecting = true;

          localStorage.removeItem('token');
          localStorage.removeItem('role');

          toast.error('로그인이 만료되었습니다. 다시 로그인해주세요.');

          setTimeout(() => {
            window.location.replace(ROUTES.LOGIN);
          }, 1000);
        }

        return Promise.reject(error);
      }

      const displayMessage =
        RESPONSE_MESSAGE[status] || message || '알 수 없는 오류입니다.';

      console.log(displayMessage);
    } else {
      console.log('서버에 연결할 수 없습니다.');
    }

    return Promise.reject(error);
  },
);
