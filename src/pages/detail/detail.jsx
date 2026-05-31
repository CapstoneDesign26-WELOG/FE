import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/shared/components/header/header';
import CommentList from './components/comment-list';
import PostDetail from './components/post-detail';
import InputBar from '@/shared/components/input-bar/input-bar';
import { formatTime } from '@/shared/utils/format-time';
import { useQuery } from '@tanstack/react-query';
import { postQueries } from '@/shared/apis/post/post-queries';

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
  const { postId } = useParams();
  const [commentValue, setCommentValue] = useState('');

  const { data, isLoading } = useQuery(postQueries.detail(postId));

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
    <div className="flex min-h-screen flex-col">
      <Header variant="back" />

      <PostDetail post={post} />

      <CommentList comments={comments} onReplySubmit={handleReplySubmit} />

      <InputBar
        value={commentValue}
        onChange={setCommentValue}
        onSubmit={handleCommentSubmit}
      />
    </div>
  );
};

export default Detail;
