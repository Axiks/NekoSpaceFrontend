import { FC, SVGProps } from 'react';

const SearchIcon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 9V6l5 4-5 4v-3H0V9h9Zm-7.542 4h2.124A8.003 8.003 0 0 0 19 10 8 8 0 0 0 3.582 7H1.458C2.732 2.943 6.522 0 11 0c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7Z"
      fill="#fff"
    />
  </svg>
);

export default SearchIcon;