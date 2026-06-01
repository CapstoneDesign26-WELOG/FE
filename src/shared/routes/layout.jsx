import { Outlet, matchPath, useLocation } from 'react-router-dom';
import BottomNavigation from '../components/bottom-navigation/bottom-navigation';
import { ROUTES } from './routes-config';

const HIDDEN_NAV_ROUTES = [
  ROUTES.NOTIFICATION,
  ROUTES.CREATE,
  ROUTES.MY_POSTS,
  ROUTES.MY_COMMENTS,
  ROUTES.LOGIN,
];

const Layout = () => {
  const { pathname } = useLocation();

  const hideNav = HIDDEN_NAV_ROUTES.includes(pathname);
  const isDetailPage = matchPath(ROUTES.DETAIL(), pathname);

  return (
    <div className="flex h-dvh flex-col">
      <main className="relative flex-1 flex flex-col">
        <Outlet />
      </main>

      {!hideNav && !isDetailPage && <BottomNavigation />}
    </div>
  );
};

export default Layout;
