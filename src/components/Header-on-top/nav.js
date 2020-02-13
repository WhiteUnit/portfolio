import React from "react";
import styled from "styled-components";
import NavItem from "./nav-item"

const menuElements = [{
    text: 'Home',
    target: '/'
  },{
    text: 'O mnie',
    target: '/about-me'
  },{
    text: 'Umiejętności',
    target: '/skills'
  },{
    text: 'Technologie',
    target: '#gallery'
  },{
    text: 'Hobby',
    target: '#skills'
  },{
    text: 'Kontakt',
    target: '#contact'
}]; 

const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const StyledNav = styled.nav`
`;

const Nav = () => (
    <StyledNav>
      <StyledUl> 
        {menuElements.map(menuElement => <NavItem {...menuElement}/>)}
      </StyledUl>
    </StyledNav>
)

export default Nav;