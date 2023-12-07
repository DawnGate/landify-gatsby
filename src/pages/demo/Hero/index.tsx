import React from 'react'
import Button from 'components/Button'

import EssentialSVGComponent from 'components/ImageComponents/EssentialIcon'

const Hero = () => {
  return (
    <div className="mt-2 flex flex-col justify-between gap-10 pb-20 tablet:gap-0 laptop:mb-20 laptop:mt-20 laptop:flex-row laptop:pb-0">
      <div className="py-10 tablet:py-20 laptop:max-w-[648px]">
        <h1 className="text-md font-bold text-neutral-900">
          The easiest way to manage projects
        </h1>
        <p className="text-body-lg mt-4 text-neutral-700">
          From the small stuff to the big picture, organizes the work so teams
          know what to do, why it matters, and how to get it done.
        </p>
        <div className="mt-8 flex items-center justify-start gap-4">
          <Button
            size="xl"
            className="bg-primary-600 text-white hover:opacity-90 focus:ring-4 focus:ring-primary-900"
          >
            Get started
          </Button>
          <Button
            size="xl"
            className="text-primary-600 hover:opacity-90 focus:ring-4 focus:ring-primary-900"
            leftIcon={
              <EssentialSVGComponent className="[&>path]:stroke-primary-600 " />
            }
          >
            Watch video
          </Button>
        </div>
      </div>
      <div className="laptop:px-20">
        <div className="relative m-auto h-[640px] w-[320px] rounded-[45px] shadow-2xl">
          <img
            className="inset-center absolute w-[279px]"
            alt="mobile-screen"
            src="/images/mobile-screen-one.png"
          />
          <img
            className="inset-center absolute w-[320px]"
            alt="phone-screen"
            src="/images/phone-screen.png"
          />
        </div>
      </div>
      <img
        alt="Hero background"
        src="/images/hero-background.png"
        className="inset-x-center absolute top-0 -z-10 tablet:hidden"
      />
      <img
        alt="Hero background"
        src="/images/hero-background-tablet.png"
        className="inset-x-center absolute top-0 -z-10 hidden tablet:block laptop:hidden"
      />
      <img
        alt="Hero background"
        src="/images/hero-background-laptop.png"
        className="inset-x-center absolute top-0 -z-10 hidden laptop:block"
      />
    </div>
  )
}

export default Hero
