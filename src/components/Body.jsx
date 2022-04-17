import React, { useState } from 'react'

import './Body.css'

function Body() {
  const [carState, setCarState] = useState(0)

  return (
    <div className="body">
      <div className="body__left">
        {Array(4)
          .fill(0)
          .map((el, index) => (
            <button
              onClick={() => {
                setCarState(index)
              }}
            >
              <i
                className={
                  index === carState ? 'fa fa-circle' : 'fa fa-circle-thin'
                }
                aria-hidden="true"
              ></i>
            </button>
          ))}
      </div>
      <div className="body__mid">
        <h2>MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS</h2>
        <p>
          We provide blockchain development{`carousal${carState}`} services and
          also assure you comprehensive security in blockchain development
        </p>
        <div>
          <button type="button">Explore More</button>
        </div>
      </div>
      <div className="body__right">
        <a href="https://twitter.com/">
          <i class="fa fa-twitter white"></i>
        </a>
        <a href="https://www.facebook.com/">
          <i class="fa fa-facebook white"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i class="fa fa-instagram white"></i>
        </a>
      </div>
    </div>
  )
}

export default Body
