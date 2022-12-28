import { React, useState }from 'react';
import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './nav.css'
import { useNavigate } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'
import {GiTrail} from 'react-icons/gi'
import {BsFillPeopleFill} from 'react-icons/bs'
import {BiLogIn} from 'react-icons/bi'



const Nav = () => {
  const navigate = useNavigate();
  return (
    <SideNav
      onSelect={(selected) => {
        console.log('selected', selected);
        navigate('/'+selected)
      }}
      className='navStyle'
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">

        <NavItem>
          <NavIcon>
            <AiOutlineHome />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        
        <NavItem>
          <NavIcon>
            <GiTrail />
          </NavIcon>
          <NavText>Trails</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <BsFillPeopleFill />
          </NavIcon>
          <NavText>Users</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <BiLogIn />
          </NavIcon>
          <NavText>SignIn</NavText>
        </NavItem>

      </SideNav.Nav>
    </SideNav>
  )
}

export default Nav