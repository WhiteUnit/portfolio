import React from "react"
import styled from "styled-components"
import Nav from "./nav"
import Container from "../container"

const StyledHeader = styled.header`
  position: absolute;
  top: 0%;
  left: 10%;
  padding: 0px 0;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;


const Header = () => (
  <Container>
    <StyledHeader>
      <Nav/>
    </StyledHeader>
  </Container>
) 

export default Header
