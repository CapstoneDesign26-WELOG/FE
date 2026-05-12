export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  PUBLIC: '/public',
  CREATE: '/create',
  DETAIL: (id = ':postId') => `/detail/${id}`,
  MYPAGE: '/mypage',
  NOTIFICATION: '/notification',
};