import { React, useState }from 'react';
import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './nav.css'
import { Link, useNavigate } from 'react-router-dom';
// import {FaHome} from 'react/icons-fa';
// import {FaHiking} from 'react/icons-fa';
// import {GiMountainRoad} from 'react/icons-gi';

const Nav = () => {
  // const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100 ) {
      setColor(true);
    } else {
      setColor(false)
    }
  };

  window.addEventListener("scroll", changeColor);

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
          <Link to="/">Home</Link>
        </NavItem>
        
        <NavItem>
          <NavIcon>
            {/* <GiMountainRoad/> */}
          </NavIcon>
          <Link to="/trails">Trails</Link>
        </NavItem>

        <NavItem>
          <NavIcon>
            {/* <FaHiking/> */}
          </NavIcon>
          <Link to="/users">Users</Link>
        </NavItem>

        <NavItem>
          <NavIcon>
            {/* icon */}
          </NavIcon>
          <Link to="/signin">SignIn</Link>
        </NavItem>

      </SideNav.Nav>
    </SideNav>
  )
}

export default Nav