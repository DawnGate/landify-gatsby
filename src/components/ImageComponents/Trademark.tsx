import * as React from "react";
import { SVGProps } from "react";
const TrademarkSVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={5}
    viewBox="0 0 8 5"
    fill="none"
    {...props}
  >
    <path
      d="M3.16812 0.800049H0.078125V1.59205H1.20613V5.00005H2.03413V1.59205H3.16812V0.800049Z"
      fill="black"
    />
    <path
      d="M7.74036 0.800049H6.88836L5.68836 2.78605L4.48236 0.800049H3.63036V5.00005H4.45836V2.28205L5.64036 4.22605H5.73636L6.91836 2.27605V5.00005H7.74036V0.800049Z"
      fill="black"
    />
  </svg>
);
export default TrademarkSVGComponent;
