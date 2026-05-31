import { Location } from '@/shared/assets/svgs';
import { cn } from '@/shared/utils/cn';

const InputBar = ({
  value,
  onChange,
  onSubmit,
  placeholder = '댓글을 입력하세요...',
  disabled = false,
  variant = 'default',
}) => {
  const isEmpty = value.trim().length === 0;
  const isReply = variant === 'reply';

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEmpty || disabled) return;

    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex w-full items-center gap-[0.8rem] bg-gray-white',
        isReply
          ? 'px-0 py-0'
          : 'sticky bottom-0 z-10 border-t border-gray-100 px-[1.6rem] py-[0.8rem] shadow-2',
      )}
    >
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        className={cn(
          'cap_14_m flex-1 rounded-[40px] border border-gray-300 px-[1.4rem] text-gray-900 outline-none placeholder:text-gray-500',
          isReply ? 'h-[3.6rem] py-[0.8rem]' : 'h-[4rem] py-[1rem]',
        )}
      />

      <button
        type="submit"
        disabled={isEmpty || disabled}
        aria-label="댓글 작성"
        className={cn(
          'flex h-[2.8rem] w-[2.8rem] shrink-0 items-center justify-center rounded-full bg-gray-600',
          !isEmpty && !disabled && 'cursor-pointer bg-main-900',
          (isEmpty || disabled) && 'cursor-not-allowed',
        )}
      >
        <Location width={16} height={16} />
      </button>
    </form>
  );
};

export default InputBar;