const CommentInput = ({ value, onChange, onSubmit }) => {
  const isTyping = value.trim().length > 0;

  return (
    <form
      className="sticky bottom-0 z-10 h-[5.6rem] w-full border-t border-[#EFF0F4] bg-white px-[1.6rem] py-[0.8rem]"
      onSubmit={onSubmit}
    >
      <div className="flex h-full items-center gap-[0.8rem]">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="댓글을 입력하세요..."
          className="cap_14_m h-full flex-1 rounded-full border border-[#EFF0F4] bg-white px-[1.4rem] text-black outline-none placeholder:text-gray-500"
        />

        <button
          type="submit"
          disabled={!isTyping}
          aria-label="댓글 전송"
          className={`flex h-[2.8rem] w-[2.8rem] shrink-0 items-center justify-center rounded-full ${
            isTyping
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
      </div>
    </form>
  );
};

export default CommentInput;