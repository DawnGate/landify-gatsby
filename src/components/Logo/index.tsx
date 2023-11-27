import React from "react";
import LogoSVGComponent from "../ImageComponents/Logo";
import LogoTitleSVGComponent from "../ImageComponents/LogoTitle";
import TrademarkSVGComponent from "../ImageComponents/Trademark";

const Logo = () => {
  return (
    <div className="flex w-32 items-center justify-between">
      <LogoSVGComponent />
      <div className="relative">
        <LogoTitleSVGComponent />
        <TrademarkSVGComponent className="absolute top-0 right-0 translate-x-full" />
      </div>
    </div>
  );
};

export default Logo;
