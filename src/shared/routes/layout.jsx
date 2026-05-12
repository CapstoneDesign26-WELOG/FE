import { Outlet, matchPath, useLocation } from 'react-router-dom';
import BottomNavigation from '../components/bottom-navigation/bottom-navigation';
import { ROUTES } from './routes-config';
  
const HIDDEN_NAV_ROUTES = [ROUTES.NOTIFICATION, ROUTES.CREATE];
  
const Layout = () => {
  const { pathname } = useLocation();
  const hideNav = HIDDEN_NAV_ROUTES.includes(pathname);
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

  return (
    <div className="flex min-h-screen flex-col">
      <main className="relative flex-1 flex flex-col">
        <Outlet />
      </main>
      {!hideNav && <BottomNavigation />}
    </div>
  );
};

export default Layout;