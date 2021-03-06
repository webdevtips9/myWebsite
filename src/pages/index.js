import * as React from 'react'

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  textAlign: 'center'
}

const headingStyles = {
  fontSize: '4rem'
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>webDevTips</h1>
      <p>Looks like we're successfully deployed this using Netlify</p>
    </main>
  )
}

export default IndexPage
