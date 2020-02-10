import React from "react"
import styled from "styled-components"
import Nav from "./nav"
import Container from "../container"

const StyledHeader = styled.header`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Header = () => (
  <Container>
    <StyledHeader>
      <Nav/>
    </StyledHeader>
  </Container>
) 

export default Header
