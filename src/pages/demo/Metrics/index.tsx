import React from 'react'

const MetricItem = ({
  iconSrc,
  title,
  subTitle,
}: {
  iconSrc: string
  title: string
  subTitle: string
}) => {
  return (
    <div className="flex flex-1 flex-row items-center justify-center gap-6">
      <div className="p-2">
        <img src={iconSrc} alt="Metric item" />
      </div>
      <div className="flex-1">
        <p className="laptop:text-md text-xs font-bold text-neutral-900 tablet:text-sm">
          {title}
        </p>
        <p className="text-body-sm text-neutral-900 tablet:text-body-md">
          {subTitle}
        </p>
      </div>
    </div>
  )
}

const Metrics = () => {
  return (
    <div className="items-center py-12 tablet:py-20 laptop:flex laptop:flex-row laptop:gap-8">
      <div className="laptop:flex-1">
        <h2 className="tablet:text-md text-sm font-bold text-neutral-900 laptop:text-lg">
          Our 18 years of achievements
        </h2>
        <p className="tablet:text-body-lg mt-2 text-body-md text-neutral-900">
          With our super powers we have reached this
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-6 tablet:gap-10 laptop:mt-0 laptop:flex-1">
        <div className="flex flex-col gap-6 tablet:flex-row tablet:gap-8">
          <MetricItem
            iconSrc="/images/metric-one.svg"
            title="10,000+"
            subTitle="Downloads per day"
          />
          <MetricItem
            iconSrc="/images/metric-two.svg"
            title="2 Million"
            subTitle="Users"
          />
        </div>
        <div className="flex flex-col gap-6 tablet:flex-row tablet:gap-8">
          <MetricItem
            iconSrc="/images/metric-three.svg"
            title="500+"
            subTitle="Clients"
          />
          <MetricItem
            iconSrc="/images/metric-four.svg"
            title="140"
            subTitle="Countries"
          />
        </div>
      </div>
    </div>
  )
}

export default Metrics
