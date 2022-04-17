import React from 'react'

import './Body.css'

function Body() {
  return (
    <div className="body">
      <div className="body__left">Carousel</div>
      <div className="body__mid">
        <h2>MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS</h2>
        <p>
          We provide blockchain debelopment services and also assure you
          comprehensive security in blockchain development
        </p>
        <div>
          <button type="button">Explore More</button>
        </div>
      </div>
      <div className="body__right">
        <i class="fa fa-twitter white"></i>
        <i class="fa fa-facebook white"></i>
        <i class="fa fa-instagram white"></i>
      </div>
    </div>
  )
}

export default Body
