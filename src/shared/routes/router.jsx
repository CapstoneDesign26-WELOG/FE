import { createBrowserRouter } from 'react-router-dom';
import Create from '@/pages/create/create';
import Detail from '@/pages/detail/detail';
import Home from '@/pages/home/home';
import Login from '@/pages/login/login';
import MyPage from '@/pages/mypage/my-page';
import Personal from '@/pages/public/public';
import { ROUTES } from './routes-config';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.CREATE,
    element: <Create />,
  },
  {
    path: ROUTES.DETAIL(),
    element: <Detail />,
  },
  {
    path: ROUTES.PUBLIC,
    element: <Personal />,
  },
  {
    path: ROUTES.MYPAGE,
    element: <MyPage />,
  },
]);
