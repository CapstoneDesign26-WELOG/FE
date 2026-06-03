import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Logo, More, Notifications } from '@/shared/assets/svgs';
import { ROUTES } from '@/shared/routes/routes-config';
import { useState, useEffect } from 'react';

const Header = ({
  title,
  variant = 'title',
  rightText = '완료',
  onBackClick,
  onNotificationClick,
  onRightClick,
  disabled,
}) => {
  const navigate = useNavigate();
  const [hasNotification, setHasNotification] = useState(false);

  useEffect(() => {
    const checkNotifications = () => {
      const notifications = JSON.parse(
        localStorage.getItem('notifications') ?? '[]',
      );
      setHasNotification(notifications.some((n) => !n.isRead));
    };

    checkNotifications();

    window.addEventListener('storage', checkNotifications);
    window.addEventListener('notification-updated', checkNotifications);

    return () => {
      window.removeEventListener('storage', checkNotifications);
      window.removeEventListener('notification-updated', checkNotifications);
    };
  }, []);

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
      return;
    }
    navigate(-1);
  };

  const handleNotificationClick = () => {
    if (onNotificationClick) {
      onNotificationClick();
      return;
    }

    const notifications = JSON.parse(
      localStorage.getItem('notifications') ?? '[]',
    );
    const updated = notifications.map((n) => ({ ...n, isRead: true }));
    localStorage.setItem('notifications', JSON.stringify(updated));
    setHasNotification(false);

    navigate(ROUTES.NOTIFICATION);
  };

  const renderLeft = () => {
    if (variant === 'logo') {
      return (
        <button
          type="button"
          aria-label="홈으로 이동"
          onClick={() => navigate(ROUTES.HOME)}
          className="cursor-pointer"
        >
          <Logo width={56} />
        </button>
      );
    }

    if (variant === 'back' || variant === 'write' || variant === 'detail') {
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
        <button
          type="button"
          aria-label="알림"
          onClick={handleNotificationClick}
          className="relative cursor-pointer"
        >
          <Notifications width={30} />
          {hasNotification && (
            <span className="absolute right-0 top-0 h-[0.8rem] w-[0.8rem] rounded-full bg-red-500" />
          )}
        </button>
      );
    }

    if (variant === 'write') {
      return (
        <button
          type="button"
          className="body_16_m cursor-pointer text-gray-black disabled:cursor-default disabled:text-gray-600"
          onClick={onRightClick}
          disabled={disabled}
        >
          {rightText}
        </button>
      );
    }

    if (variant === 'detail' && onRightClick) {
      return (
        <button
          type="button"
          aria-label="더보기"
          onClick={onRightClick}
          className="cursor-pointer"
        >
          <More width={24} />
        </button>
      );
    }

    return null;
  };

  const isCenterTitle = variant === 'write';

  return (
    <header className="sticky top-0 z-10 flex h-[6.2rem] items-center border-b border-gray-300 bg-white px-[2rem]">
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
