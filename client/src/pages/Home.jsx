import React from 'react'
import TestCarousel from '../components/Testimonials/Testimonials'
import trailPic from '../../src/Images/mountainLandscape.avif'


const Home = () => {
  return (
    <>
    <section id='homePic'>
      <div className="mtn-container">
        <img className='mtnPic' src={trailPic} alt="hiking picture"/>
        <div>
          <h3 className='txtPos'>Adventure Awaits</h3>
        </div>
      </div>
    </section>


    <TestCarousel />

    </>
  )

}

export default Home