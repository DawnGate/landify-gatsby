import { AppleBadge, GoogleBadge } from 'components/Badges'
import React from 'react'

const Cta = () => {
  return (
    <div className="flex flex-col gap-8 pt-12 tablet:gap-12 tablet:pt-20 laptop:flex-row laptop:items-center laptop:pt-0">
      <div className="flex-1">
        <p className="tablet:text-md text-sm font-bold text-neutral-900 laptop:text-lg">
          Manage all projects from your mobile
        </p>
        <p className="tablet:text-body-lg mt-2 text-body-md text-neutral-900">
          Download the app to manage your projects, keep track of the progress
          and complete tasks without procrastinating. Stay on track and complete
          on time!
        </p>
        <div className="mt-12">
          <p className="text-body-lg font-medium text-neutral-900">
            Get the App
          </p>
          <div className="mt-2 flex flex-row gap-3">
            <GoogleBadge className="z-10" />
            <AppleBadge className="z-10" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-10 overflow-y-hidden tablet:flex-row tablet:gap-32 laptop:h-[558px] laptop:gap-8">
        {/* 80 + (558 - 464) */}
        <div className="relative -mt-20 h-[464px] w-[232px] rounded-[32px] shadow-2xl laptop:-mt-[174px]">
          <img
            className="inset-center absolute z-20 w-[232px]"
            src="/images/phone-screen.png"
            alt="Phone skeleton "
          />
          <img
            className="inset-center absolute z-10 w-[202px]"
            src="/images/mobile-screen-two.png"
            alt="Phone screen"
          />
        </div>
        <div className="relative -mb-20 h-[464px] w-[232px] rounded-[32px] shadow-2xl tablet:mt-[174px]">
          <img
            className="inset-center absolute z-20 w-[232px]"
            src="/images/phone-screen.png"
            alt="Phone skeleton "
          />
          <img
            className="inset-center absolute z-10 w-[202px]"
            src="/images/mobile-screen-one.png"
            alt="Phone screen"
          />
        </div>
      </div>
    </div>
  )
}

export default Cta
