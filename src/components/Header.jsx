import React, { Component } from 'react'
import styled from 'styled-components'
import SideNavBar from './SideNavBar';
const NavBar =  styled.div`
    height: 10vh;
    width: 100vw;
    background:#000000;
    color: white;
`;


 class Header extends Component {
  render() {
    return (
    <div>
          
         <NavBar>
         <SideNavBar />
         </NavBar>
          
    </div>
    
    
    )
  }
}
export default Header;