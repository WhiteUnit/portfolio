import React from "react"
import styled from "styled-components"
import Nav from "./nav"
import Container from "../container"

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 0px;
  background: #ffffff;
`;


const HeaderNav = () => (
  <Container>
    <StyledHeader>
      <Nav/>
    </StyledHeader>
  </Container>
) 

export default HeaderNav
