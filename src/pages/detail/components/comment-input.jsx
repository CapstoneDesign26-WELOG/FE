const CommentInput = ({ value, onChange, onSubmit }) => {
  const isTyping = value.trim().length > 0;

  return (
    <form
      className="h-[5.6rem] w-full border-t border-gray-100 bg-white px-[1.6rem] py-[0.8rem]"
      onSubmit={onSubmit}
    >
      <div className="flex h-full items-center gap-[0.8rem]">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="댓글을 입력하세요..."
          className="cap_14_m h-full flex-1 rounded-full border border-gray-200 bg-white px-[1.4rem] text-gray-900 outline-none placeholder:text-gray-400"
        />

        <button
          type="submit"
          disabled={!isTyping}
          aria-label="댓글 전송"
          className={`flex h-[4rem] w-[4rem] shrink-0 items-center justify-center rounded-full ${
            isTyping
              ? 'cursor-pointer bg-[#6FCF97]'
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
      </div>
    </form>
  );
};

export default CommentInput;
