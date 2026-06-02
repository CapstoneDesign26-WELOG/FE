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

      try {
        const data = JSON.parse(event.data);

        if (data.type === 'CONNECTED') return;

        const newNotification = {
          id: Date.now(),
          type: '새로운 댓글이 달렸습니다',
          postTitle: data.post_title,
          comment: data.comment_description,
          postId: data.post_id,
          isRead: false,
        };

        const existing = JSON.parse(localStorage.getItem('notifications') ?? '[]');
        const updated = [newNotification, ...existing].slice(0, 15);
        localStorage.setItem('notifications', JSON.stringify(updated));

        window.dispatchEvent(new Event('notification-updated'));
      } catch (e) {
        console.log('알림 파싱 에러:', e);
      }

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_DETAIL, postId],
      });

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST],
      });
    };

    eventSource.onerror = (error) => {
      console.log('SSE 연결 에러:', error);
    };

    return () => {
      eventSource.close();
    };
  }, [queryClient, postId]);
};