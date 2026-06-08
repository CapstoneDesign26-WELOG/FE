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

    eventSource.onopen = () => {
      console.log('SSE 연결됨');
    };

    eventSource.onmessage = (event) => {
      console.log('SSE 알림 수신:', event.data);

      try {
        const data = JSON.parse(event.data);

        if (data.type === 'AI_COMMENT_COMPLETE') return;
        if (data.type === 'CONNECTED') return;
        if (data.type !== 'AI_COMMENT_ADDED') return;

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

      const currentPath = window.location.pathname;
      const postIdFromUrl = currentPath.startsWith('/detail/')
        ? currentPath.split('/detail/')[1]
        : null;

      if (postIdFromUrl) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.POST_DETAIL, postIdFromUrl],
        });
      }

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
  }, [queryClient]);
};