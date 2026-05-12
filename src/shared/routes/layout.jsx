import { Outlet, matchPath, useLocation } from 'react-router-dom';
import BottomNavigation from '../components/bottom-navigation/bottom-navigation';
import { ROUTES } from './routes-config';

const Layout = () => {
  const { pathname } = useLocation();

  const isDetailPage = matchPath(ROUTES.DETAIL(), pathname);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="relative flex flex-1 flex-col">
        <Outlet />
      </main>

      {!isDetailPage && <BottomNavigation />}
    </div>
  );
};

export default Layout;
