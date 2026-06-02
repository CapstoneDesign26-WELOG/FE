import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/shared/components/header/header';
import CommentList from './components/comment-list';
import PostDetail from './components/post-detail';
import InputBar from '@/shared/components/input-bar/input-bar';
import { formatTime } from '@/shared/utils/format-time';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { POST_TYPE, postQueries } from '@/shared/apis/post/post-queries';
import { postMutations } from '@/shared/apis/post/post-mutations';
import { ROUTES } from '@/shared/routes/routes-config';
import { commentMutations } from '@/shared/apis/comment/comment-mutations';
import { QUERY_KEY } from '@/shared/constants/query-key';
import { useNotificationStream } from '@/shared/hooks/use-notification-stream';
import { userQueries } from '@/shared/apis/user/user-queries';

const mapCommentsToTree = (comments = []) => {
  const commentMap = new Map();

  comments.forEach((comment, index) => {
    commentMap.set(comment.id, {
      id: comment.id,
      userId: comment.user_id,
      parentId: comment.parent_id,
      author: `익명${index + 1}`,
      content: comment.description,
      likeCount: comment.like_count,
      isLiked: comment.is_liked,
      createdAt: formatTime(comment.created_at),
      replies: [],
    });
  });

  const rootComments = [];

  commentMap.forEach((comment) => {
    if (comment.parentId) {
      commentMap.get(comment.parentId)?.replies.push(comment);
      return;
    }
    rootComments.push(comment);
  });

  return rootComments;
};

const Detail = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { postId } = useParams();
  useNotificationStream(postId);

  const [commentValue, setCommentValue] = useState('');
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { data, isLoading } = useQuery(postQueries.detail(postId));
  const { data: myInfo } = useQuery(userQueries.status());

  const post = data
    ? {
        id: data.id,
        title: data.title,
        description: data.description,
        createdAt: formatTime(data.created_at),
      }
    : null;

  const comments = mapCommentsToTree(data?.comments);
  const postType = data?.type;

  const { mutate: deletePost } = useMutation({
    ...postMutations.delete,
    onSuccess: async () => {
      setIsDeleteModalOpen(false);

      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST, postType],
      });

      navigate(postType === POST_TYPE.PRIVATE ? ROUTES.HOME : ROUTES.PUBLIC);
    },
  });

  const { mutate: createComment, isPending } = useMutation({
    ...commentMutations.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_DETAIL, postId],
      });
    },
  });

  const { mutate: likeComment } = useMutation({
    ...commentMutations.like,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_DETAIL, postId],
      });
    },
  });

  const { mutate: removeComment } = useMutation({
    ...commentMutations.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_DETAIL, postId],
      });
    },
  });

  const { mutate: unlikeComment } = useMutation({
    ...commentMutations.unlike,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_DETAIL, postId],
      });
    },
  });

  const handleDeletePost = () => {
    deletePost(postId);
  };

  const handleCommentSubmit = () => {
    const trimmedValue = commentValue.trim();

    if (trimmedValue.length === 0 || isPending) return;

    createComment(
      {
        postId: Number(postId),
        description: trimmedValue,
        parentId: null,
      },
      {
        onSuccess: () => {
          setCommentValue('');
        },
      },
    );
  };

  const handleReplySubmit = (parentId, replyContent) => {
    const trimmedValue = replyContent.trim();

    if (trimmedValue.length === 0 || isPending) return;

    createComment({
      postId: Number(postId),
      description: trimmedValue,
      parentId,
    });
  };

  const handleCommentLike = (commentId) => {
    likeComment(commentId);
  };

  const handleCommentUnlike = (commentId) => {
    unlikeComment(commentId);
  };

  const handleCommentDelete = (commentId) => {
    removeComment(commentId);
  };

  if (isLoading) return null;
  if (!post) return null;

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header variant="detail" onRightClick={() => setIsOptionOpen(true)} />

      <PostDetail post={post} />

      <CommentList
        comments={comments}
        myUserId={myInfo?.id}
        onReplySubmit={handleReplySubmit}
        onLikeClick={handleCommentLike}
        onUnlikeClick={handleCommentUnlike}
        onDeleteClick={handleCommentDelete}
        disabled={isPending}
      />

      <InputBar
        value={commentValue}
        onChange={setCommentValue}
        onSubmit={handleCommentSubmit}
        disabled={isPending}
      />

      {isOptionOpen && (
        <div
          className="absolute inset-0 z-40"
          onClick={() => setIsOptionOpen(false)}
        >
          <div
            className="absolute right-[1rem] top-[6.2rem] w-[18rem] rounded-[1.2rem] bg-white shadow-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="cap_14_m flex h-[4rem] w-full items-center justify-between px-[2rem] text-gray-900 cursor-pointer"
              onClick={() => {
                setIsOptionOpen(false);
                setIsDeleteModalOpen(true);
              }}
            >
              삭제
            </button>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="absolute inset-x-0 top-0 z-50 flex h-dvh items-center justify-center bg-gray-800/30">
          <div className="w-[28rem] rounded-[1.6rem] bg-gray-white">
            <div className="flex h-[8rem] items-center justify-center border-b border-gray-200">
              <p className="subhead_18_sb text-gray-900">삭제하시겠습니까?</p>
            </div>

            <div className="flex h-[4.8rem]">
              <button
                type="button"
                className="body_16_m flex-1 border-r border-gray-200 text-gray-600 cursor-pointer"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                취소
              </button>

              <button
                type="button"
                className="body_16_m flex-1 text-welog-red cursor-pointer"
                onClick={handleDeletePost}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;