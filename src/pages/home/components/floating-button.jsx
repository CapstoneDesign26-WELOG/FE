import { Plus } from '@/shared/assets/svgs';
import { ROUTES } from '@/shared/routes/routes-config';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingButton = () => {
  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate(ROUTES.CREATE);
  };

  return (
    <button
      type="button"
      aria-label="글 작성하기"
      className="flex justify-center items-center w-[4.8rem] h-[4.8rem] bg-main-900 rounded-full cursor-pointer"
      onClick={handleClickCreate}
    >
      <Plus width={18} height={18} />
    </button>
  );
};

export default FloatingButton;
