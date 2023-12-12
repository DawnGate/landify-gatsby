import React from 'react'
import { HeadFC } from 'gatsby'

import Navbar from './demo/Navbar'
import Hero from './demo/Hero'
import LogoClouds from './demo/LogoClouds'
import Features from './demo/Features'
import Testimonial from './demo/Testimonial'
import Metrics from './demo/Metrics'
import Integrations from './demo/Integrations'
import Cta from './demo/Cta'
import Footer from './demo/Footer'

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
      <section className="features container">
        <Integrations />
      </section>
      <section className="features bg-secondary-600 container">
        <Cta />
      </section>
      <footer>
        <section className="features container bg-black">
          <Footer />
        </section>
      </footer>
    </main>
  )
}

export default DemoPage

export const Head: HeadFC = () => (
  <>
    <title>Landify</title>
  </>
)
