import * as React from 'react';
const SvgChatLined = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#868789"
      d="M4 4.75v13.086l.793-.793.073-.066a1 1 0 0 1 .634-.227H20v-12zm18 12c0 1.102-.898 2-2 2H5.914l-2.207 2.207A1 1 0 0 1 2 20.25V4.75c0-1.102.898-2 2-2h16c1.102 0 2 .898 2 2z"
    />
    <path
      fill="#868789"
      d="M16 7.75a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2zM12 12.25a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z"
    />
  </svg>
);
export default SvgChatLined;
