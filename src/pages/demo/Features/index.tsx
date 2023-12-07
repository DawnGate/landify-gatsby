import React from 'react'

const FeatureItem = ({ imgSrc, title }: { imgSrc: string; title: string }) => {
  return (
    <div className="text-center tablet:max-w-[328px]">
      <div>
        <img className="m-auto" src={imgSrc} alt="feature item" />
      </div>
      <div className="mt-6 px-4">
        <h2 className="text-xs font-bold text-neutral-900 laptop:text-sm">
          {title}
        </h2>
        <p className="mt-2 text-body-md text-neutral-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
          tristique ipsum.
        </p>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <div className="py-12 tablet:py-20 laptop:py-24">
      <div className="text-center">
        <h1 className="text-md font-bold text-neutral-900 laptop:text-lg">
          Tailor-made features
        </h1>
        <p className="text-body-lg m-auto mt-2 max-w-[800px] text-neutral-900">
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </p>
      </div>
      <div className="mt-12 flex flex-col flex-wrap items-center justify-center gap-12 tablet:mt-16 tablet:flex-row tablet:gap-x-[30px] tablet:gap-y-16">
        <FeatureItem imgSrc="/images/feature-one.svg" title="Robust workflow" />
        <FeatureItem imgSrc="/images/feature-two.svg" title="Flexibility" />
        <FeatureItem imgSrc="/images/feature-three.svg" title="User friendly" />
        <FeatureItem
          imgSrc="/images/feature-four.svg"
          title="Multiple layouts"
        />
        <FeatureItem
          imgSrc="/images/feature-five.svg"
          title="Better components"
        />
        <FeatureItem imgSrc="/images/feature-six.svg" title="Well organized" />
      </div>
    </div>
  )
}

export default Features
