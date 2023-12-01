import React from 'react'
import { HeadFC } from 'gatsby'

import Navbar from '../components/Navbar'

const pageStyles = {
  fontFamily: 'Inter, -apple-system, Roboto, sans-serif, serif',
}

const DemoPage = () => {
  return (
    <main style={pageStyles}>
      <section className="hero container">
        <Navbar />
        <h1 className="text-xl font-bold">Hello</h1>
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
