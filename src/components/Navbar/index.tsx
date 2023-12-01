import React from 'react'
import Logo from '../Logo'
import HamburgerSVGComponent from '../ImageComponents/HamburgerIcon'
import { AppleBadge, GoogleBadge } from '../Badges'

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 ">
      <Logo />
      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-3 laptop:flex">
          <GoogleBadge />
          <AppleBadge />
        </div>
        <button className="rounded-lg p-2 hover:bg-primary-100 focus:ring-4 focus:ring-primary-900">
          <HamburgerSVGComponent />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
