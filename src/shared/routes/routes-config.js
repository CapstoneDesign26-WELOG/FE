export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  PERSONAL: "/personal",
  CREATE: "/create",
  DETAIL: (id = ":postId") => `/detail/${id}`,
  MYPAGE: "/mypage",
};
