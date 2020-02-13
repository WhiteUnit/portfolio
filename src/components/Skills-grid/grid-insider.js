import React from "react"
import styled from "styled-components"
import HtmlImage from "../../images/html.png"

console.log(HtmlImage);

const StyledGridInsider = styled.div`
    background-image: url(${props => props.img});
    background-size: 100%;
    width: 100%;
    higth: 100%;
`

const GridInsider = () => (
    <StyledGridInsider img={HtmlImage}></StyledGridInsider>
)

export default GridInsider;