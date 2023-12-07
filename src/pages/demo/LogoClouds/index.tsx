import React from 'react'

const CloudItem = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div>
      <img src={imgSrc} alt="Cloud item" />
    </div>
  )
}

const LogoClouds = () => {
  return (
    <div className="my-4 border-b border-t">
      <div className="my-6 flex flex-wrap justify-center gap-x-16 gap-y-8">
        <CloudItem imgSrc="/images/cloud-item-one.svg" />
        <CloudItem imgSrc="/images/cloud-item-two.svg" />
        <CloudItem imgSrc="/images/cloud-item-three.svg" />
        <CloudItem imgSrc="/images/cloud-item-four.svg" />
        <CloudItem imgSrc="/images/cloud-item-five.svg" />
        <CloudItem imgSrc="/images/cloud-item-six.svg" />
      </div>
    </div>
  )
}

export default LogoClouds
