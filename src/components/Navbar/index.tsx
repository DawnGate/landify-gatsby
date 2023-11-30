import React from "react";
import Logo from "../Logo";
import HamburgerSVGComponent from "../ImageComponents/HamburgerIcon";
import Badges, { AppleBadge, GoogleBadge } from "../Badges";

const Navbar = () => {
  return (
    <nav className="py-4  justify-between flex">
      <Logo />
      <div className="flex gap-4 items-center">
        <div className="items-center gap-3 hidden laptop:flex">
          <GoogleBadge />
          <AppleBadge />
        </div>
        <button className="p-2 hover:bg-primary-100 focus:ring-4 focus:ring-primary-900 rounded-lg">
          <HamburgerSVGComponent />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
