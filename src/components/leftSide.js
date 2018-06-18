import React from 'react'

import image from '../data/image.png'

const LeftSide = ({ siteTitle }) => (
  <div style={{
    margin: 'auto',
    maxWidth: '500px',
  }}>

  <h4 style={{
      }}>LeftSide</h4>

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

)

export default LeftSide
