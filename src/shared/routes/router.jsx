import { createBrowserRouter } from 'react-router-dom';
import Create from '@/pages/create/create';
import Detail from '@/pages/detail/detail';
import Home from '@/pages/home/home';
import Login from '@/pages/login/login';
import MyPage from '@/pages/mypage/my-page';
import MyPosts from '@/pages/mypage/my-posts';
import MyComments from '@/pages/mypage/my-comments';
import Personal from '@/pages/public/public';
import { ROUTES } from './routes-config';
import Layout from './layout';
import Notification from '@/pages/notification/notification';
import PublicRoutes from './public-routes';
import ProtectedRoutes from './protected-routes';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <PublicRoutes />,
        children: [
          {
            path: ROUTES.LOGIN,
            element: <Login />,
          },
        ],
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: ROUTES.HOME,
            element: <Home />,
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
          {
            path: ROUTES.MY_POSTS,
            element: <MyPosts />,
          },
          {
            path: ROUTES.MY_COMMENTS,
            element: <MyComments />,
          },
          {
            path: ROUTES.NOTIFICATION,
            element: <Notification />,
          },
        ],
      },
    ],
  },
]);
