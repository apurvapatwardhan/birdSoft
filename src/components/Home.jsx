import React from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import './Home.css'

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default Home
