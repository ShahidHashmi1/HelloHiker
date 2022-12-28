import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
// import JumboTrail from '../components/JumboTrail/JumboTrail';


const Home = () => {


  return (
    <div>
        <Header />
        {/* <JumboTrail /> */}
    </div>
  )

}

export default Home