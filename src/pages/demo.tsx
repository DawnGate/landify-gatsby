import React from 'react'
import { HeadFC } from 'gatsby'

import Navbar from './demo/Navbar'
import Hero from './demo/Hero'

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
    </main>
  )
}

export default DemoPage

export const Head: HeadFC = () => (
  <>
    <title>Landify</title>
  </>
)
