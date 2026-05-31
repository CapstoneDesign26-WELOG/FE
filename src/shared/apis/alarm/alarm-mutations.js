import { END_POINT } from '@/shared/constants/api';

export const connectNotificationStream = () => {
  const token = localStorage.getItem('token');

  return new EventSource(
    `${import.meta.env.VITE_API_URL}${END_POINT.GET_NOTIFICATION}?token=${token}`,
  );
};
