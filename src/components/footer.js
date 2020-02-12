import React from "react"
import styled from "styled-components"
import Container from "../components/container"
import Particles from "../components/particles"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Footer = () => (
    <Container>
        <button onClick={() => scrollTo('#about')}>My link</button>
    </Container>
)

export default Footer