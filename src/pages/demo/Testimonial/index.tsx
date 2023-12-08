import React from 'react'

const TestimonialItem = ({
  imgSrc,
  content,
  author,
  authorInformation,
}: {
  imgSrc: string
  content: string
  author: string
  authorInformation: string
}) => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <div>
        <img src={imgSrc} alt="Testimonial item" />
      </div>
      <div className="mt-8 flex gap-4">
        <div>
          <img src="/images/quote-mark-mini.svg" alt="Quote mark mini" />
        </div>
        <div className="flex-1">
          <div>
            <p className="text-body-lg text-neutral-900">{content}</p>
          </div>
          <div className="mt-6">
            <p className="text-body-lg font-bold text-neutral-900">{author}</p>
            <p className="text-body-sm text-neutral-500">{authorInformation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonial = () => {
  return (
    <div className="tablet:pt-30 gap-8 pb-12 pt-20 tablet:pb-20 laptop:flex laptop:pb-24">
      <div className="flex-1 flex-col laptop:flex laptop:items-end">
        <div className="relative laptop:max-w-[488px]">
          <h1 className="tablet:text-md relative z-20 text-sm font-bold text-neutral-900 laptop:text-lg">
            Real Stories from Real Customers
          </h1>
          <p className="tablet:text-body-lg mt-2 text-body-md text-neutral-900">
            Get inspired by these stories.
          </p>
          <img
            className="absolute top-0 z-10 translate-x-[-10%] translate-y-[-40%] tablet:w-[142px] tablet:translate-x-[-20%] tablet:translate-y-[-50%]"
            src="/images/quote-mark.svg"
            alt="Quote mark"
          />
        </div>
        <div className="mt-8 tablet:mt-10 laptop:max-w-[384px]">
          <TestimonialItem
            imgSrc="/images/testimonial-item-one.svg"
            content="I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
            author="Jane Cooper"
            authorInformation="CEO, Airbnb"
          />
        </div>
      </div>
      <div className="flex-1 flex-col laptop:flex laptop:items-start">
        <div className="mt-6 laptop:max-w-[488px]">
          <TestimonialItem
            imgSrc="/images/testimonial-item-two.svg"
            content="To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organized and easily editable."
            author="Floyd Miles"
            authorInformation="Vice President, GoPro"
          />
        </div>
        <div className="mt-6 laptop:max-w-[384px]">
          <TestimonialItem
            imgSrc="/images/testimonial-item-three.svg"
            content="Landify saved our time in designing my company page."
            author="Kristin Watson"
            authorInformation="Co-Founder, Strapi"
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
