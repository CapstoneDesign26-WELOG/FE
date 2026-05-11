import {
  ChatFilled,
  ChatLined,
  HomeFilled,
  HomeLined,
  MyFilled,
  MyLined,
} from '@/shared/assets/svgs';
import { ROUTES } from '@/shared/routes/routes-config';

export const NAV_ITEMS = [
  {
    label: '공용 게시판',
    path: ROUTES.PUBLIC,
    icon: {
      filled: HomeFilled,
      lined: HomeLined,
    },
  },
  {
    label: '개인 게시판',
    path: ROUTES.HOME,
    icon: {
      filled: ChatFilled,
      lined: ChatLined,
    },
  },
  {
    label: '마이페이지',
    path: ROUTES.MYPAGE,
    icon: {
      filled: MyFilled,
      lined: MyLined,
    },
  },
];
