import React from 'react'
import { HeadFC } from 'gatsby'

import Navbar from './demo/Navbar'
import Hero from './demo/Hero'
import LogoClouds from './demo/LogoClouds'

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
      <section className="hero container">
        <LogoClouds />
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
