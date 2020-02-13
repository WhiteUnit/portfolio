import React from "react";
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLi = styled.li`
padding: 10px;
`;

const StyledLink = styled(props => <Link {...props}/>)`
text-decoration: none;
font-family: 'Lato';
font-size: 18pt;
line-height: 46pt;
font-weight: 300;
color: #000000;
text-decoration: none;
text-transform: uppercase;
padding: 10px 20px;

&:hover{
    background-color: rgba(255, 0, 0, 0.2);;
    border-radius: 5px;
    transform: scale(0,5);
    font-size: 22pt;
    transition: all 0.7s;
`;

const NavItem = ({target, text}) => (
    <StyledLi>
        <StyledLink to={ target }>{ text }</StyledLink>
    </StyledLi> 
)

export default NavItem;