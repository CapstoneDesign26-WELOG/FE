import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from './routes-config';

const PublicRoutes = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;
