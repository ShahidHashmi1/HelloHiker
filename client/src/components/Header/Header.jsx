import React from 'react'
import titleImg from '../../Images/HelloHiker-title.png'
import './header.css'

const Header = () => {
  return (
    <div className='titleDiv'>
      <img className='titleImg' src={titleImg} />
    </div>

    // <div className="hh-text">
    //   <h1>HelloHiker 🥾</h1>
    // </div>
  )
}

export default Header