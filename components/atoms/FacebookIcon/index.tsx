import type { FC, SVGProps } from 'react'

const FacebookIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="#000"
      d="M15.252 12.099H13.29v7.048h-2.908V12.1H9V9.607h1.382v-1.61c0-1.155.544-2.958 2.935-2.958l2.155.008v2.418h-1.564c-.255 0-.617.129-.617.679v1.464h2.216l-.255 2.49z"
    ></path>
    <mask
      id="mask0_810_1190"
      style={{ maskType: 'luminance' }}
      width="7"
      height="15"
      x="9"
      y="5"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#fff"
        d="M15.252 12.099H13.29v7.048h-2.908V12.1H9V9.607h1.382v-1.61c0-1.155.544-2.958 2.935-2.958l2.155.008v2.418h-1.564c-.255 0-.617.129-.617.679v1.464h2.216l-.255 2.49z"
      ></path>
    </mask>
    <g mask="url(#mask0_810_1190)">
      <path fill="#000" d="M0 0H24V24.186H0z"></path>
    </g>
  </svg>
)

export default FacebookIcon
