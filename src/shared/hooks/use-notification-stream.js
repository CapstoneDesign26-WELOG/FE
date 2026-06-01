import { useEffect } from 'react';
import { QUERY_KEY } from '@/shared/constants/query-key';
import { useQueryClient } from '@tanstack/react-query';

const BASE_URL = import.meta.env.VITE_API_URL;

export const useNotificationStream = (postId) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const rawToken = localStorage.getItem('token');

    if (!rawToken) return;

    const token = encodeURIComponent(rawToken);

    const eventSource = new EventSource(
      `${BASE_URL}/api/notifications/stream?token=${token}`,
    );

    eventSource.onopen = () => {
      console.log('SSE 연결됨');
    };

    eventSource.onmessage = (event) => {
      console.log('SSE 알림 수신:', event.data);

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_DETAIL, postId],
      });

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST],
      });
    };

    eventSource.onerror = (error) => {
      console.log('SSE 연결 에러:', error);
      // TODO: 테스트 끝나면 주석 활성화
      // eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [queryClient, postId]);
};
