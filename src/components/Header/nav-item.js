import React from "react";
import styled from "styled-components"

const StyledLi = styled.li`
    margin-right: 90px;
    &:last-child {
        margin-right: 0;
    }
`;

const StyledA = styled.a`
    font-family: 'Lato';
    font-size: 18pt;
    line-height: 46pt;
    font-weight: 300;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 20px;
    &:hover{
        background-color: rgba(255, 0, 0, 0.2);;
        border-radius: 5px;
    }
`;

const NavItem = ({target, text}) => (
    <StyledLi>
        <StyledA href={ target }>{ text }</StyledA>
    </StyledLi> 
)

export default NavItem;