import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from './constants/bottom-navigation';
import { cn } from '@/shared/utils/cn';

const BottomNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky bottom-0 flex w-full justify-between border-t border-gray-200 bg-gray-white px-[1.6rem] py-[0.8rem] shadow-2">
      {NAV_ITEMS.map(({ label, path, icon }) => {
        const active = isActive(path);
        const IconComponent = active ? icon.filled : icon.lined;

        return (
          <button
            key={label}
            type="button"
            className="flex w-[6rem] flex-col items-center justify-center gap-[0.4rem] cursor-pointer "
            onClick={() => navigate(path)}
          >
            <IconComponent width={24} height={24} />
            <p
              className={cn(
                'cap_12_m text-gray-600',
                active && 'text-gray-black',
              )}
            >
              {label}
            </p>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
