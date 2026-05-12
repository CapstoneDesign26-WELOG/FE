import { useState } from 'react';
import Header from '@/shared/components/header/header';
import { MOCK_COMMENTS, MOCK_DETAIL_POST } from './constants/mock-detail';
import CommentInput from './components/comment-input';
import CommentList from './components/comment-list';
import PostDetail from './components/post-detail';

const countComments = (comments) =>
  comments.reduce(
    (count, comment) => count + 1 + countComments(comment.replies ?? []),
    0,
  );

const addReplyToComment = (comments, parentId, newReply) =>
  comments.map((comment) => {
    if (comment.id === parentId) {
      return {
        ...comment,
        replies: [...(comment.replies ?? []), newReply],
      };
    }

    return {
      ...comment,
      replies: addReplyToComment(comment.replies ?? [], parentId, newReply),
    };
  });

const Detail = () => {
  const post = MOCK_DETAIL_POST;
  const [comments, setComments] = useState(MOCK_COMMENTS);
  const [commentValue, setCommentValue] = useState('');

  const getNextAuthor = () => `익명${countComments(comments) + 1}`;

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const trimmedValue = commentValue.trim();

    if (trimmedValue.length === 0) return;

    const newComment = {
      id: Date.now(),
      author: getNextAuthor(),
      content: trimmedValue,
      likeCount: 0,
      replies: [],
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setCommentValue('');
  };

  const handleReplySubmit = (parentId, replyContent) => {
    const trimmedValue = replyContent.trim();

    if (trimmedValue.length === 0) return;

    const newReply = {
      id: Date.now(),
      author: getNextAuthor(),
      content: trimmedValue,
      likeCount: 0,
      replies: [],
    };

    setComments((prevComments) =>
      addReplyToComment(prevComments, parentId, newReply),
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="back" />

      <PostDetail post={post} />

      <CommentList comments={comments} onReplySubmit={handleReplySubmit} />

      <CommentInput
        value={commentValue}
        onChange={handleCommentChange}
        onSubmit={handleCommentSubmit}
      />
    </div>
  );
};

export default Detail;
