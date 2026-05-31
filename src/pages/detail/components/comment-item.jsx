import { Chat, Heart, HeartFilled } from '@/shared/assets/svgs';
import { useState } from 'react';
import InputBar from '@/shared/components/input-bar/input-bar';

const CommentItem = ({ comment, isReply = false, onReplySubmit, disabled }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyValue, setReplyValue] = useState('');

  const likeCount = isLiked ? comment.likeCount + 1 : comment.likeCount;

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  const handleReplySubmit = () => {
    const trimmedValue = replyValue.trim();

    if (trimmedValue.length === 0) return;

    onReplySubmit(comment.id, trimmedValue);
    setReplyValue('');
    setIsReplying(false);
  };

  return (
    <li
      className={`flex flex-col gap-[0.8rem] ${isReply ? 'ml-[1.6rem]' : ''}`}
    >
      <div className="flex flex-col gap-[0.4rem]">
        <p className="cap_12_m text-gray-600">{comment.author}</p>

        <div className="rounded-[8px] bg-gray-200 px-[1.6rem] py-[1.2rem]">
          <p className="body_16_m text-gray-900">{comment.content}</p>
        </div>
      </div>

      <div className="flex items-center gap-[0.8rem] px-[0.4rem]">
        <button
          type="button"
          aria-label="좋아요"
          onClick={handleLikeClick}
          className={`cap_12_m flex cursor-pointer items-center gap-[0.4rem] ${
            isLiked ? 'text-welog-red' : 'text-gray-600'
          }`}
        >
          {isLiked ? <HeartFilled width={16} /> : <Heart width={16} />}
          <span>{likeCount}</span>
        </button>

        {!isReply && (
          <button
            type="button"
            onClick={() => setIsReplying((prev) => !prev)}
            className="cap_12_m flex cursor-pointer items-center gap-[0.4rem] text-gray-600"
          >
            <Chat width={16} />
            <span>답글</span>
          </button>
        )}
      </div>

      {isReplying && (
        <div>
          <InputBar
            value={replyValue}
            onChange={setReplyValue}
            onSubmit={handleReplySubmit}
            placeholder="답글을 입력하세요..."
            variant="reply"
            disabled={disabled}
          />
        </div>
      )}

      {comment.replies?.length > 0 && (
        <ul className="flex flex-col gap-[1.2rem]">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              isReply
              onReplySubmit={onReplySubmit}
              disabled={disabled}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default CommentItem;
