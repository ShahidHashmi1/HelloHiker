import React from 'react'
import trailImg from '../../Images/trailPic.avif'
// import {Jumbotron} from 'react-bootstrap'
// import Jumbotron from 'react-bootstrap/Jumbotron'
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container'


const JumboTrail = () => {
  return (
    <>
    
    <Jumbotron>
        <img className='trailPic' src={trailImg} />
    </Jumbotron>
    
    </>
  )
}

export default JumboTrail