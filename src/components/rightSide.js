import React from 'react'
import Link from 'gatsby-link'

const RightSide = ({ siteTitle }) => (
  <div
  style={{
    background: 'white',
    marginBottom: '1.45rem',

  }}
  >

  <div style={{
    margin: 'auto',
    maxWidth: '500px',
    padding: '1.45rem 1.0875rem',
  }}>

  <h3 style={{
    fontFamily: 'Didot',
      }}>Experience
  </h3>


  <h4 style={{
    fontFamily: 'Didot',
    fontWeight: 'bold',
      }}>Lieferando.de/Takeaway.com Berlin, Germany
    </h4>

  {/* <h5 style={{
    fontFamily: 'Didot',
    fontWeight: 'bold',
      }}>Berlin, Germany
  </h5> */}

  <h6 style={{
    fontFamily: 'Didot',
    fontWeight: 'bold',
      }}>January 2018 - Present
  </h6>

    <p style={{
      fontFamily: 'Didot',
      }}>Designed and developed a dynamic Customer Service Portal for 11 different countries worldwide, the Customer Service Portal had a home grown backend system to allow our internal CS, Marketing, Press teams to add/update content for our end users.
    </p>






  </div>
</div>
)

export default RightSide
