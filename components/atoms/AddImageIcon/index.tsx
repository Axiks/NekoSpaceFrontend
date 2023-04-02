import { SVGProps } from "react";

const AddImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={20}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 5v2.99s-1.99.01-2 0V5h-3s.01-1.99 0-2h3V0h2v3h3v2h-3Zm-3 4V6h-3V3H2C.9 3 0 3.9 0 5v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9h-3ZM2 17l3-4 2 3 3-4 4 5H2Z"
      fill="#000"
    />
  </svg>
);

export default AddImageIcon;
