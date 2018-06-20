import React from 'react'

import image from '../data/image.png'

const LeftSide = ({ siteTitle }) => (
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


  <img src={image}></img>
  <h4 style={{
      fontFamily:'Didot',
  }}> Contact</h4>
  <br></br>
  <h4 style={{
    fontFamily:'Didot',
  }}>Email: stevieschatz91@gmail.com</h4>
  <hr></hr>
  <h4 style={{
    fontFamily:'Didot'
  }}>Phone: (+49) 17629061395</h4>

  <hr></hr>

  <h4 style= {{
    fontFamily:'Didot'}}
    >Berlin, Germany</h4>



  </div>
  </div>

)

export default LeftSide
