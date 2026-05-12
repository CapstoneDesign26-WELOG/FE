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
      <div className="rounded-[1.2rem] bg-gray-100 px-[1.2rem] py-[1rem]">
        <div className="flex items-center gap-[0.8rem]">
          <p className="cap_14_m text-gray-800">{comment.author}</p>
        </div>

        <p className="body_16_m mt-[0.8rem] text-gray-900">{comment.content}</p>
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
          <span aria-hidden="true">{isLiked ? '♥' : '♡'}</span>
          <span>{likeCount}</span>
        </button>

        {!isReply && (
          <button
            type="button"
            onClick={() => setIsReplying((prev) => !prev)}
            className="cap_14_m cursor-pointer text-gray-600"
          >
            답글
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
            className={`flex h-[3.2rem] w-[3.2rem] shrink-0 items-center justify-center rounded-full ${
              isReplyTyping
                ? 'cursor-pointer bg-[#00B894]'
                : 'cursor-default bg-gray-300'
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12.627 0.0371713C12.8548 -0.0449738 13.11 0.0114228 13.2812 0.182679C13.4525 0.353947 13.5089 0.609139 13.4268 0.836976L9.09375 12.837C9.08786 12.8533 9.08144 12.8701 9.07422 12.8858C8.99514 13.0583 8.86768 13.2042 8.70801 13.3067C8.5482 13.4093 8.36177 13.4639 8.17188 13.4639C7.98211 13.4639 7.79642 13.4092 7.63672 13.3067C7.477 13.2042 7.34961 13.0583 7.27051 12.8858V12.8848L5.03906 8.42389L0.579102 6.19244C0.575843 6.19095 0.572576 6.18909 0.569336 6.18756L0.55957 6.18366L0.560547 6.18268C0.396108 6.10311 0.256037 5.98118 0.157227 5.82721C0.0802365 5.70724 0.0298667 5.57271 0.00976562 5.43268L0 5.29205L0.00976562 5.15045C0.0298973 5.01054 0.0802914 4.87581 0.157227 4.75592C0.259672 4.59638 0.405806 4.46977 0.578125 4.39069L0.626953 4.37018L12.627 0.0371713ZM1.64648 5.33014L5.78516 7.39948L5.87109 7.45123C5.95262 7.50999 6.01904 7.58802 6.06445 7.67877L8.13281 11.8165L11.7988 1.66412L1.64648 5.33014Z"
                fill="white"
              />
            </svg>
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
