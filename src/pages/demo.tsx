import React from 'react'
import { HeadFC } from 'gatsby'

import Navbar from './demo/Navbar'
import Hero from './demo/Hero'
import LogoClouds from './demo/LogoClouds'
import Features from './demo/Features'
import Testimonial from './demo/Testimonial'
import Metrics from './demo/Metrics'

const pageStyles = {
  fontFamily: 'Inter, -apple-system, Roboto, sans-serif, serif',
}

const DemoPage = () => {
  return (
    <main style={pageStyles}>
      <section className="header container">
        <Navbar />
      </section>
      <section className="hero container">
        <Hero />
      </section>
      <section className="logo-clouds container">
        <LogoClouds />
      </section>
      <section className="features container">
        <Features />
      </section>
      <section className="features container bg-[#D5FAFC]">
        <Testimonial />
      </section>
      <section className="features container">
        <Metrics />
      </section>
    </main>
  )
}

export default DemoPage

export const Head: HeadFC = () => (
  <>
    <title>Landify</title>
  </>
)
