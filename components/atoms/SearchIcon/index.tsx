import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.125 16.25a8.093 8.093 0 0 0 4.806-1.572h-.001c.037.05.078.097.123.143l4.812 4.813a1.25 1.25 0 1 0 1.769-1.768l-4.813-4.812a1.267 1.267 0 0 0-.143-.125A8.128 8.128 0 0 0 8.125 0a8.125 8.125 0 1 0 0 16.25Zm0-10.648c2.08-2.09 7.281 1.568 0 6.273-7.281-4.705-2.08-8.363 0-6.272Z"
      fill="#000"
    />
  </svg>
)

export default SearchIcon;
