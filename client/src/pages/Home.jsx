import React from 'react'
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { GET_ME } from '../utils/queries';
// import Header from '../components/Header/Header';
// import Nav from '../components/Nav/Nav';
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