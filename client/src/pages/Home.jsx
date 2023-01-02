import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';


const Home = () => {


  return (
    <div className='titleDiv'>
        <h2>Home Page</h2>
    </div>
  )

}

export default Home