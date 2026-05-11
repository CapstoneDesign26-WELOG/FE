import * as React from 'react';
const SvgChatFilled = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#1A1A1A"
      stroke="#1A1A1A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 20.25V4.75c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H5.5z"
    />
    <path fill="#1A1A1A" d="M8 8.75h8z" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 8.75h8"
    />
    <path fill="#1A1A1A" d="M8 13.25h4z" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 13.25h4"
    />
  </svg>
);
export default SvgChatFilled;
