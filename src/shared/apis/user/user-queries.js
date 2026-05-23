import { queryOptions } from '@tanstack/react-query';
import { get } from '@/shared/apis/base/https';
import { END_POINT } from '@/shared/constants/api';
import { QUERY_KEY } from '@/shared/constants/query-key';

export const getUserStatus = () => get(END_POINT.GET_USER_STATUS);

export const userQueries = {
  status: () =>
    queryOptions({
      queryKey: [QUERY_KEY.USER_STATUS],
      queryFn: getUserStatus,
    }),
};
