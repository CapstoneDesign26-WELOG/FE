import { mutationOptions } from '@tanstack/react-query';
import { post } from '@/shared/apis/base/https';
import { END_POINT } from '@/shared/constants/api';

export const postAuthLogin = (googleToken) =>
  post(END_POINT.POST_AUTH_LOGIN, {
    google_token: googleToken,
  });

export const authMutations = {
  login: mutationOptions({
    mutationFn: postAuthLogin,
  }),
};
