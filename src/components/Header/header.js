import React from "react"
import styled from "styled-components"
import LogoSVG from "../../../assets/icons/logo.svg"
import Nav from "./nav"
import Container from "../container"

const StyledHeader = styled.header`
  padding: 20px 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 80px;
`;

const Header = () => (
  <Container>
    <StyledHeader>
      <StyledLogo src={LogoSVG}/>
      <Nav/>
    </StyledHeader>
  </Container>
) 

export default Header
