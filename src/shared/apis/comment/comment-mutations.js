import { mutationOptions } from '@tanstack/react-query';
import { del, post } from '@/shared/apis/base/https';
import { END_POINT } from '@/shared/constants/api';

export const postNewComment = ({ postId, description, parentId = null }) =>
  post(END_POINT.POST_NEW_COMMENT(postId), {
    description,
    parent_id: parentId,
  });

export const deleteComment = (commentId) =>
  del(END_POINT.DELETE_COMMENT(commentId));

export const postCommentLike = (commentId) =>
  post(END_POINT.POST_COMMENT_LIKE(commentId));

export const deleteCommentLike = (commentId) =>
  del(END_POINT.DELETE_COMMENT_LIKE(commentId));

export const commentMutations = {
  create: mutationOptions({
    mutationFn: postNewComment,
  }),

  delete: mutationOptions({
    mutationFn: deleteComment,
  }),

  like: mutationOptions({
    mutationFn: postCommentLike,
  }),

  unlike: mutationOptions({
    mutationFn: deleteCommentLike,
  }),
};
