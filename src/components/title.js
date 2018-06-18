import React from 'react'
import Link from 'gatsby-link'

const Title = ({ siteTitle, currentOccupation }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: 'auto',
        maxWidth: 500,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{
        fontFamily: "Didot",
        margin: 0,
        textAlign: 'center',
      }}>
        <Link
          to="/"
          style={{
            color: 'Black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <h3 style={{
        fontFamily: "Didot",
        textAlign: 'center',
      }}>{currentOccupation}</h3>


    </div>
  </div>
)

export default Title
