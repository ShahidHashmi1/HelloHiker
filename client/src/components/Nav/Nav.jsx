import { React, useState }from 'react';
import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './nav.css'
import { useNavigate, NavLink } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'
import {GiTrail} from 'react-icons/gi'
import {BsFillPeopleFill} from 'react-icons/bs'
import {BiLogIn} from 'react-icons/bi'
import {BiLogOut} from 'react-icons/bi'
import {AiOutlineLogin} from 'react-icons/ai'
import Signup from '../Signup/Signup';
import Auth from '../../utils/auth'

// const LinkTo = NavLink();
// 
const Nav = () => {
  const navigate = useNavigate();
  console.log('Auth.loggedIn()', Auth.loggedIn())
  return (
    <div className='parentDiv'>
      <SideNav
        onSelect={(selected) => {
          console.log('Page Selected:', selected);
          navigate('/'+selected)
        }}
        // onSelect={} => {
        //   LinkTo = {`/${SideNav.Nav.name}`}
        // }

        className='navStyle'
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">

          <NavItem eventKey='' className='navItem'>
              <NavIcon>
                <AiOutlineHome className='iconSize' />
              </NavIcon>
              <NavText className='navText'>Home</NavText>
          </NavItem>
          
          <NavItem eventKey='Trails' className='navItem'>

              <NavIcon>
                <GiTrail className='iconSize' />
              </NavIcon>
              <NavText className='navText'>Trails</NavText>
          </NavItem>

          <NavItem eventKey='Users' className='navItem'>
            <NavIcon>
              <BsFillPeopleFill className='iconSize' />
            </NavIcon>
            <NavText className='navText'>Users</NavText>
          </NavItem>

          
          {Auth.loggedIn() ? 
            <NavItem onClick={Auth.logout} eventKey='' className='navItem'>
            <NavIcon>
              <BiLogOut className='iconSize' />
            </NavIcon>
            <NavText className='navText'>Logout</NavText>
          </NavItem>
          : 
            
            <NavItem eventKey='SignIn' className='navItem'>
            <NavIcon>
              <BiLogIn className='iconSize' />
            </NavIcon>
            <NavText className='navText'>SignIn</NavText>
          </NavItem>
          
}
          
          {!Auth.loggedIn() && 
            <NavItem eventKey='SignUp' className='navItem'>

            <NavIcon>
              <AiOutlineLogin className='iconSize' />
            </NavIcon>
            <NavText className='navText'>SignUp</NavText>
          </NavItem>
}
        </SideNav.Nav>
      </SideNav>
      
      </div>
  )
}

export default Nav