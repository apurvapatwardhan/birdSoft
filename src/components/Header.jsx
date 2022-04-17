import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <h2>Merka</h2>
      <div className="header_routes">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/projects">Project</Link>
        </div>
        <div>
          <Link to="/services">Services</Link>
        </div>
        <div>
          <Link to="/blogs">Blogs</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
