import React from 'react'
import Button from 'components/Button'
import EssentialSVGComponent from 'components/ImageComponents/EssentialIcon'

const Hero = () => {
  return (
    <div className="mt-2">
      <div>
        <h1 className="text-md font-bold text-neutral-900">
          The easiest way to manage projects
        </h1>
        <p className="text-body-lg mt-4 text-neutral-700">
          From the small stuff to the big picture, organizes the work so teams
          know what to do, why it matters, and how to get it done.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button size="xl" className="bg-primary-600 text-white">
            Get started
          </Button>
          <Button
            size="xl"
            className="text-primary-600"
            leftIcon={
              <EssentialSVGComponent className="[&>path]:stroke-primary-600" />
            }
          >
            Watch video
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
