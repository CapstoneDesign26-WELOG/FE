import { Plus } from '@/shared/assets/svgs';
import { ROUTES } from '@/shared/routes/routes-config';
import { useNavigate } from 'react-router-dom';

const FloatingButton = ({ type }) => {
  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate(ROUTES.CREATE, { state: { type } });
  };

  return (
    <button
      type="button"
      aria-label="글 작성하기"
      className="fixed right-[max(1.6rem,calc((100vw-var(--max-width))/2+1.6rem))] bottom-[8.8rem] z-50 flex h-[4.8rem] w-[4.8rem] cursor-pointer items-center justify-center rounded-full bg-main-900"
      onClick={handleClickCreate}
    >
      <Plus width={18} height={18} />
    </button>
  );
};

export default FloatingButton;
