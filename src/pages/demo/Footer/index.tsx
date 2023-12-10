import { AppleBadge, GoogleBadge } from 'components/Badges'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 py-10 tablet:flex-row tablet:justify-between tablet:py-16">
      <div>
        <div>
          <img alt="small logo" src="/images/logo.svg" />
        </div>
        <div className="mt-8">
          <div className="flex flex-row gap-6">
            <p className="text-body-md text-white">Download Now</p>
            <p className="text-body-md text-white">License</p>
          </div>
          <div className="mt-3 flex flex-row flex-wrap gap-x-6 gap-y-3">
            <p className="text-body-md text-white">About</p>
            <p className="text-body-md text-white">Features</p>
            <p className="text-body-md text-white">Pricing</p>
            <p className="text-body-md text-white">News</p>
            <p className="text-body-md text-white">Help</p>
            <p className="text-body-md text-white">Contacts</p>
          </div>
          <div className="mt-8">
            <p className="text-body-sm text-neutral-300">
              © 2021 Landify UI Kit. All rights reserved
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 laptop:w-[176px]">
        <p className="text-body-lg font-medium text-neutral-300">Get the app</p>
        <GoogleBadge variant="outlined" className="z-10" />
        <AppleBadge variant="outlined" className="z-10" />
      </div>
    </div>
  )
}

export default Footer
