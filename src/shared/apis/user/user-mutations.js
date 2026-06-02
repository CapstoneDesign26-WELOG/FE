import { patch } from '@/shared/apis/base/https';
import { END_POINT } from '@/shared/constants/api';

export const patchUserPreference = ({ aiPreference }) =>
  patch(END_POINT.PATCH_USER_PREFERENCE, {
    ai_preference: aiPreference,
  });

export const userMutations = {
  preference: {
    mutationFn: patchUserPreference,
  },
};
