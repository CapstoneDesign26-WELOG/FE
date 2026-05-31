import { queryOptions } from '@tanstack/react-query';
import { get } from '@/shared/apis/base/https';
import { END_POINT } from '@/shared/constants/api';
import { QUERY_KEY } from '@/shared/constants/query-key';

export const getMyInfo = () => get(END_POINT.GET_MY_INFO);

export const myQueries = {
  info: () =>
    queryOptions({
      queryKey: [QUERY_KEY.MY_INFO],
      queryFn: getMyInfo,
    }),
};
