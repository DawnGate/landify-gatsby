import React from 'react'
import Logo from '../../../components/Logo'
import HamburgerSVGComponent from '../../../components/ImageComponents/HamburgerIcon'
import { AppleBadge, GoogleBadge } from '../../../components/Badges'

const NavItem = ({ title, url }: { title: string; url: string }) => {
  return (
    <a
      href={url}
      className="block px-2 py-1 underline-offset-2 hover:underline"
    >
      <p className="text-body-sm font-semibold text-neutral-900">{title}</p>
    </a>
  )
}

const NavbarContent = () => {
  return (
    <div className="hidden laptop:block">
      <ul className="flex gap-2">
        <li>
          <NavItem url="/features" title="Features" />
        </li>
        <li>
          <NavItem url="/pricing" title="Pricing" />
        </li>
        <li>
          <NavItem url="/careers" title="Careers" />
        </li>
        <li>
          <NavItem url="/help" title="Help" />
        </li>
      </ul>
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 tablet:py-5">
      <div className="flex items-center gap-8">
        <Logo />
        <NavbarContent />
      </div>
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
