import React from 'react'
import "./Header.css"
import img from "../../assets/img.png";

function Header() {
  return (
    <div className='header'>
        <div className='content'>
          <img src='https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg' alt='no'></img>
          <div className='links'>
          <a className='link-1' href=''>Plan Your Trip</a> 
          <a className='link-1' href=''>Book Tour</a> 
          <a className='link-1' href=''>Book Ferry</a> 
          <a className='link-1' href=''>Travel Blog</a>
          <a className='link-1' href=''>Contact Us</a>
          <label><img src={img} alt="no1"></img></label>
          </div>
        </div>
    </div>
  )
}

export default Header;