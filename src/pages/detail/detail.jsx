import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/shared/components/header/header';
import CommentList from './components/comment-list';
import PostDetail from './components/post-detail';
import InputBar from '@/shared/components/input-bar/input-bar';
import { formatTime } from '@/shared/utils/format-time';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postQueries } from '@/shared/apis/post/post-queries';
import { postMutations } from '@/shared/apis/post/post-mutations';
import { ROUTES } from '@/shared/routes/routes-config';

const mapCommentsToTree = (comments = []) => {
  // TODO: 작성자 기준 익명 번호 부여할지 확인
  const commentMap = new Map();

  comments.forEach((comment, index) => {
    commentMap.set(comment.ID, {
      id: comment.ID,
      parentId: comment.ParentID,
      author: `익명${index + 1}`,
      content: comment.Description,
      likeCount: comment.LikeCount,
      createdAt: formatTime(comment.CreatedAt),
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
  const { postId } = useParams();

  const [commentValue, setCommentValue] = useState('');
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { data, isLoading } = useQuery(postQueries.detail(postId));

  const { mutate: deletePost } = useMutation({
    ...postMutations.delete,
    onSuccess: () => {
      setIsDeleteModalOpen(false);
      navigate(ROUTES.HOME);
    },
  });

  // TODO: 삭제 로직 테스트
  const handleDeletePost = () => {
    deletePost(postId);
  };

  const post = data?.post
    ? {
        id: data.post.ID,
        title: data.post.Title,
        description: data.post.Description,
        createdAt: formatTime(data.post.CreatedAt),
      }
    : null;

  const comments = mapCommentsToTree(data?.comments);

  const handleCommentSubmit = () => {
    // TODO: 댓글 작성 API 연결
    setCommentValue('');
  };

  const handleReplySubmit = (parentId, replyContent) => {
    // TODO: 답글 작성 API 연결
    console.log(parentId, replyContent);
  };

  if (isLoading) return null;
  if (!post) return null;

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header variant="detail" onRightClick={() => setIsOptionOpen(true)} />

      <PostDetail post={post} />

      <CommentList comments={comments} onReplySubmit={handleReplySubmit} />

      <InputBar
        value={commentValue}
        onChange={setCommentValue}
        onSubmit={handleCommentSubmit}
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
