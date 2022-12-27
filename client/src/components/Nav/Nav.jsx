import { React, useState }from 'react';
import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './nav.css'
import { useNavigate } from 'react-router-dom';
// import {FaHome} from 'react/icons-fa';
// import {FaHiking} from 'react/icons-fa';
// import {GiMountainRoad} from 'react/icons-gi';

const Nav = () => {
  // const navigate = useNavigate();
  return (
    <SideNav
      onSelect={selected => {
        console.log(selected);
        // navigate(`/${selected}`)
      }}
      className='navStyle'
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">

        <NavItem>
          <NavIcon>
            {/* <FaHome /> */}
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        
        <NavItem>
          <NavIcon>
            {/* <GiMountainRoad/> */}
          </NavIcon>
          <NavText>Trails</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            {/* <FaHiking/> */}
          </NavIcon>
          <NavText>Users</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            {/* icon */}
          </NavIcon>
          <NavText>SignIn</NavText>
        </NavItem>

      </SideNav.Nav>
    </SideNav>
  )
}

export default Nav