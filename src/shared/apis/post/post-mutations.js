import { mutationOptions } from '@tanstack/react-query';
import { del, post } from '@/shared/apis/base/https';
import { END_POINT } from '@/shared/constants/api';

export const postNewPost = ({ title, description, type = 'PUBLIC' }) =>
  post(END_POINT.POST_NEW_POST, {
    title,
    description,
    type,
  });

export const deletePost = (postId) => del(END_POINT.DELETE_POST(postId));

export const postMutations = {
  create: mutationOptions({
    mutationFn: postNewPost,
  }),

  delete: mutationOptions({
    mutationFn: deletePost,
  }),
};
