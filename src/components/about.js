import React from "react"
import styled from "styled-components"

const AboutStyled = styled.ul`

`
const AboutLiStyled = styled.li`
    display: flex;
    justify-content: center;
`


const About = () =>{

    return(
        <AboutStyled>
        <AboutLiStyled>
            <h2>Nazywam się Filip Łasica</h2>
        </AboutLiStyled>
        <AboutLiStyled>
        <h5>Jestem Front-end developerem</h5>
        </AboutLiStyled>

        </AboutStyled>
    )
}


export default About