import React, { SVGProps } from "react";
const LogoSVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M0.657471 32H11.5068C16.6514 32 20.8219 27.8295 20.8219 22.6849H9.97254C4.82797 22.6849 0.657471 26.8554 0.657471 32Z"
      fill="#F22BB2"
    />
    <path
      d="M1.14282 9.31507V23.0137C6.28739 23.0137 10.4579 18.8432 10.4579 13.6986V0C5.31332 0 1.14282 4.1705 1.14282 9.31507Z"
      fill="#8C30F5"
    />
    <path
      d="M31.3424 0H20.493C15.3485 0 11.178 4.1705 11.178 9.31507H22.0273C27.1719 9.31507 31.3424 5.14457 31.3424 0Z"
      fill="#FE9A22"
    />
    <path
      d="M31.3424 22.137V8.43835C26.1978 8.43835 22.0273 12.6089 22.0273 17.7534V31.4521C27.1719 31.4521 31.3424 27.2816 31.3424 22.137Z"
      fill="#2EC5CE"
    />
  </svg>
);
export default LogoSVGComponent;
