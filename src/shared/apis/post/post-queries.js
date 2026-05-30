import { queryOptions } from '@tanstack/react-query';
import { get } from '@/shared/apis/base/https';
import { END_POINT } from '@/shared/constants/api';
import { QUERY_KEY } from '@/shared/constants/query-key';

export const POST_TYPE = {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
};

export const getPostList = ({
  type = POST_TYPE.PUBLIC,
  page = 1,
  limit = 20,
} = {}) => get(END_POINT.GET_POST_LIST({ type, page, limit }));

export const getPostDetail = (postId) => get(END_POINT.GET_POST_DETAIL(postId));

export const postQueries = {
  list: ({ type = 'PUBLIC', page = 1, limit = 20 } = {}) =>
    queryOptions({
      queryKey: [QUERY_KEY.POST_LIST, type, page, limit],
      queryFn: () => getPostList({ type, page, limit }),
    }),

  detail: (postId) =>
    queryOptions({
      queryKey: [QUERY_KEY.POST_DETAIL, postId],
      queryFn: () => getPostDetail(postId),
      enabled: Boolean(postId),
    }),
};
