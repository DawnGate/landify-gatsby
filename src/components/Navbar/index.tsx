import React from "react";
import Logo from "../Logo";
import HamburgerSVGComponent from "../ImageComponents/HamburgerIcon";

const Navbar = () => {
  return (
    <nav className="py-4  justify-between flex">
      <Logo />
      <button className="p-2 focus:ring-4 focus:ring-primary-900 rounded-lg">
        <HamburgerSVGComponent />
      </button>
    </nav>
  );
};

export default Navbar;
