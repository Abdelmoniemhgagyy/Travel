import React from 'react'
import logo from "./logo.png"
import "./Header.css"
import Navbar from "./Navbar"
function Header() {
  return (
    <div className='header-container'>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Travel</h2>
        </div>
        <Navbar/>
       
    </div>
  )
}

export default Header