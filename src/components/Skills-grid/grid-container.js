import React from "react"
import styled from "styled-components"
import HtmlImage from "../../images/html.png"
import GridInsider from "./grid-insider";

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 300px 300px 300px;
`

const GridContainer = () => (
    <StyledGrid>
        <GridInsider></GridInsider>
    </StyledGrid>
)

export default GridContainer;