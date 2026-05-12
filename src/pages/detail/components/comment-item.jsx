import { useState } from 'react';

const CommentItem = ({ comment, isReply = false, onReplySubmit }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyValue, setReplyValue] = useState('');

  const likeCount = isLiked ? comment.likeCount + 1 : comment.likeCount;
  const isReplyTyping = replyValue.trim().length > 0;

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  const handleReplySubmit = (event) => {
    event.preventDefault();

    const trimmedValue = replyValue.trim();

    if (trimmedValue.length === 0) return;

    onReplySubmit(comment.id, trimmedValue);
    setReplyValue('');
    setIsReplying(false);
  };

  return (
    <li
      className={`flex flex-col gap-[0.8rem] ${isReply ? 'ml-[1.2rem]' : ''}`}
    >
      <div className="flex flex-col gap-[0.5rem]">
        <p className="cap_14_m text-gray-500">{comment.author}</p>

        <div className="rounded-[1.2rem] bg-gray-100 px-[1.2rem] py-[1rem]">
          <p className="body_16_m text-gray-900">{comment.content}</p>
        </div>
      </div>

      <div className="flex items-center gap-[1.2rem] px-[0.4rem]">
        <button
          type="button"
          aria-label="좋아요"
          onClick={handleLikeClick}
          className={`cap_14_m flex cursor-pointer items-center gap-[0.4rem] ${
            isLiked ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          <img
            src={isLiked ? '/svgs/heart-filled.svg' : '/svgs/heart.svg'}
            alt=""
            className="h-[1.6rem] w-[1.6rem]"
          />
          <span>{likeCount}</span>
        </button>

        {!isReply && (
          <button
            type="button"
            onClick={() => setIsReplying((prev) => !prev)}
            className="cap_14_m flex cursor-pointer items-center gap-[0.4rem] text-gray-600"
          >
            <img
              src="/svgs/comment.svg"
              alt=""
              className="h-[1.33rem] w-[1.33rem]"
            />
            <span>답글</span>
          </button>
        )}
      </div>

      {isReplying && (
        <form
          className="flex items-center gap-[0.8rem] px-[0.4rem]"
          onSubmit={handleReplySubmit}
        >
          <input
            type="text"
            value={replyValue}
            onChange={(event) => setReplyValue(event.target.value)}
            placeholder="답글을 입력하세요..."
            className="cap_14_m h-[3.6rem] flex-1 rounded-full border border-gray-200 bg-white px-[1.4rem] text-gray-900 outline-none placeholder:text-gray-400"
          />

          <button
            type="submit"
            disabled={!isReplyTyping}
            aria-label="답글 전송"
            className={`flex h-[2.8rem] w-[2.8rem] shrink-0 items-center justify-center rounded-full ${
              isReplyTyping
                ? 'cursor-pointer bg-[#00B890]'
                : 'cursor-default bg-[#93959D]'
            }`}
          >
            <img
              src="/svgs/location.svg"
              alt=""
              className="h-[1.6rem] w-[1.6rem]"
            />
          </button>
        </form>
      )}

      {comment.replies?.length > 0 && (
        <ul className="flex flex-col gap-[1.2rem]">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              isReply
              onReplySubmit={onReplySubmit}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default CommentItem;
