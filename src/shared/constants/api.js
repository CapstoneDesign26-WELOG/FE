export const BASE_URL = import.meta.env.VITE_API_URL;

export const END_POINT = {
  // 로그인
  POST_AUTH_LOGIN: '/api/auth/google',

  // 유저
  GET_USER_STATUS: '/api/users/me',

  // 게시글
  GET_POST_LIST: ({ type = 'PUBLIC', page = 1, limit = 20 }) =>
    `/api/posts?type=${type}&page=${page}&limit=${limit}`,
  GET_POST_DETAIL: (postId) => `/api/posts/${postId}`,
  POST_NEW_POST: '/api/posts',
  DELETE_POST: (postId) => `/api/posts/${postId}`,

  // 댓글
  POST_NEW_COMMENT: (postId) => `/api/posts/${postId}/comments`,
  DELETE_COMMENT: (commentId) => `/api/comments/${commentId}`,
  POST_COMMENT_LIKE: (commentId) => `/api/comments/${commentId}/like`,

  // 실시간 알림
  GET_NOTIFICATION: '/api/notifications/stream',

  // 마이페이지
  GET_MY_INFO: '/api/users/mypage',
};
