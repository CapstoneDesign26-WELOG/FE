import { Outlet } from 'react-router-dom';
import BottomNavigation from '../components/bottom-navigation/bottom-navigation';

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <main className="flex-1">
      <Outlet />
    </main>

    <BottomNavigation />
  </div>
);

export default Layout;
