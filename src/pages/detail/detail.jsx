import { useState } from 'react';
import Header from '@/shared/components/header/header';
import { MOCK_COMMENTS, MOCK_DETAIL_POST } from './constants/mock-detail';
import CommentInput from './components/comment-input';
import CommentList from './components/comment-list';
import PostDetail from './components/post-detail';

const Detail = () => {
  const post = MOCK_DETAIL_POST;
  const [comments, setComments] = useState(MOCK_COMMENTS);
  const [commentValue, setCommentValue] = useState('');

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const trimmedValue = commentValue.trim();

    if (trimmedValue.length === 0) return;

    const newComment = {
      id: Date.now(),
      author: '익명',
      content: trimmedValue,
      likeCount: 0,
      replies: [],
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setCommentValue('');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="back" />

      <PostDetail post={post} />

      <CommentList comments={comments} />

      <CommentInput
        value={commentValue}
        onChange={handleCommentChange}
        onSubmit={handleCommentSubmit}
      />
    </div>
  );
};

export default Detail;
