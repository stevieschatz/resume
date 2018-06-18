import React from 'react'
import Link from 'gatsby-link'
import image from '../data/image.png'

const LeftSide = ({ siteTitle, currentOccupation }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
      margin: 'auto',
    }}
  >
    <div
      style={{
        margin: 'auto',
        maxWidth: 500,
        padding: '1.45rem 1.0875rem',
      }}
    >


    <h4 style={{
        fontFamily: "Didot",
    }}>LeftSide</h4>
    <img src={image}></img>
    <h4 style={{
        fontFamily: "Didot",
    }}>Contact</h4>
    <br></br>
    <h4 style={{
        fontFamily: "Didot",
    }}>Email: stevieschatz91@gmail.com</h4>
    <hr></hr>

    <h4 style={{
        fontFamily: "Didot",
    }}>Phone: (+49) 17629061395</h4>
    <hr></hr>

    <h4 style={{
        fontFamily: "Didot",
    }}>Berlin, Germany</h4>
    <hr></hr>






    </div>
  </div>
)

export default LeftSide
