import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Logo, Notifications } from '@/shared/assets/svgs';

const Header = ({
  title,
  variant = 'title',
  rightText = '완료',
  onBackClick,
  onNotificationClick,
  onRightClick,
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
      return;
    }

    navigate(-1);
  };

  const renderLeft = () => {
    if (variant === 'logo') return <Logo width={56} />;

    if (variant === 'back' || variant === 'write') {
      return (
        <button
          type="button"
          aria-label="뒤로가기"
          onClick={handleBackClick}
          className="cursor-pointer"
        >
          <ArrowLeft width={24} className="mr-[0.8rem]" />
        </button>
      );
    }

    return null;
  };

  const renderRight = () => {
    if (variant === 'logo') {
      return (
        <button type="button" aria-label="알림" onClick={onNotificationClick}>
          <Notifications width={30} />
        </button>
      );
    }

    if (variant === 'write') {
      return (
        <button
          type="button"
          className="body_16_m text-gray-600"
          onClick={onRightClick}
        >
          {rightText}
        </button>
      );
    }

    return null;
  };

  const isCenterTitle = variant === 'write';

  return (
    <header className="relative flex h-[6.2rem] items-center border-b border-gray-200 bg-white px-[2rem]">
      <div className="flex items-center">{renderLeft()}</div>

      {title && (
        <h1
          className={
            isCenterTitle
              ? 'head_20_sb absolute left-1/2 -translate-x-1/2'
              : 'head_20_sb'
          }
        >
          {title}
        </h1>
      )}

      <div className="ml-auto flex items-center">{renderRight()}</div>
    </header>
  );
};

export default Header;
