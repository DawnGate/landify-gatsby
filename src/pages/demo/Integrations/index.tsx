import React from 'react'

const Integrations = () => {
  return (
    <div className="flex flex-col gap-4 border-t border-neutral-100 py-10 tablet:flex-row tablet:gap-8 laptop:py-20">
      <div className="flex-1 py-5 laptop:grow-[5] laptop:py-10">
        <p className="tablet:text-md text-sm font-bold text-neutral-900 laptop:text-lg">
          Easy integrations with 170+ tools
        </p>
        <p className="tablet:text-body-lg mt-2 text-body-md text-neutral-900">
          Connect Landify with your favourite tools that you use daily and keep
          things on track.
        </p>
      </div>
      <div className="flex-1 laptop:grow-[7]">
        <div className="relative mx-auto laptop:w-[540px]">
          <img
            className="absolute right-0 top-0 laptop:w-[540px]"
            src="/images/integrations-vector.svg"
            alt="vector"
          />
          <div className="px-[28px] py-[25px] laptop:px-[46px] laptop:py-[40px]">
            <div className="flex items-center justify-between">
              <img
                src="/images/integration-logo-one.svg"
                alt="Integrations logo"
                className="relative z-20 h-10 w-10 laptop:h-16 laptop:w-16"
              />
              <img
                src="/images/integration-logo-two.svg"
                alt="Integrations logo"
                className="relative z-20 h-10 w-10 laptop:h-16 laptop:w-16"
              />
              <img
                src="/images/integration-logo-three.svg"
                alt="Integrations logo"
                className="relative z-20 h-10 w-10 laptop:h-16 laptop:w-16"
              />
              <img
                src="/images/integration-logo-four.svg"
                alt="Integrations logo"
                className="relative z-20 h-10 w-10 laptop:h-16 laptop:w-16"
              />
            </div>
            <div className="mt-10 flex items-center justify-center gap-10 laptop:mt-16 laptop:gap-16">
              <img
                src="/images/integration-logo-five.svg"
                alt="Integrations logo"
                className="relative z-20 h-10 w-10 laptop:h-16 laptop:w-16"
              />
              <img
                src="/images/integration-logo-six.svg"
                alt="Integrations logo"
                className="relative z-20 h-10 w-10 laptop:h-16 laptop:w-16"
              />
              <img
                src="/images/integration-logo-seven.svg"
                alt="Integrations logo"
                className="relative z-20 h-10 w-10 laptop:h-16 laptop:w-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Integrations
