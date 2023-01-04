import React from 'react'
import titleImg from '../../Images/HelloHiker-title.png'
import './header.css'

const Header = () => {
  return (
    <section id='header'>
      <div className='titleDiv'>
        <img className='titleImg' src={titleImg} />
      </div>
    </section>
  )
}

export default Header