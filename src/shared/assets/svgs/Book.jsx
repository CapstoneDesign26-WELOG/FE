import * as React from 'react';
const SvgBook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 20"
    {...props}
  >
    <path
      fill="#292D32"
      d="M14 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2M5 2h2v5l-1-.75L5 7zm9 16H2V2h1v9l3-2.25L9 11V2h5z"
    />
  </svg>
);
export default SvgBook;
