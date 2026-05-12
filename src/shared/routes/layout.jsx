import { Outlet } from 'react-router-dom';
import BottomNavigation from '../components/bottom-navigation/bottom-navigation';

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <main className="relative flex-1 flex flex-col">
      <Outlet />
    </main>

    <BottomNavigation />
  </div>
);

export default Layout;
