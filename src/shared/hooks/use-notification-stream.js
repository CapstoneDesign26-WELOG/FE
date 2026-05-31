import { useEffect } from 'react';
import { QUERY_KEY } from '@/shared/constants/query-key';
import { useQueryClient } from '@tanstack/react-query';

const BASE_URL = import.meta.env.VITE_API_URL;

export const useNotificationStream = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const rawToken = localStorage.getItem('token');

    if (!rawToken) return;

    const token = encodeURIComponent(rawToken);

    const eventSource = new EventSource(
      `${BASE_URL}/api/notifications/stream?token=${token}`,
    );

    eventSource.onmessage = (event) => {
      console.log('SSE 알림 수신:', event.data);

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_DETAIL],
      });

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST],
      });
    };

    eventSource.onerror = (error) => {
      console.log('SSE 연결 에러:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [queryClient]);
};
