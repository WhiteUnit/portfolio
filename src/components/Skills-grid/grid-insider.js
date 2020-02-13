import React from "react"
import styled from "styled-components"
import HtmlImage from "../../images/html.png"

const htmlText = "znam to czy tamto"

const StyledGridInsider = styled.div`
    position: relative;
    background-image: url(${props => props.img});
    background-size: 100%;
    width: 100%;
    height: auto;
    background-size: 100%;
    background-position: center;
    transition: 0.2s;
    text-align: center;
    font-family: lato;
    &:hover{
        background-size:110%;
    }

    &:after{
        position: absolute;
        top: 100%;
        left: 0;
        bottom: 0;
        right: 0;
        word-wrap: break-word;
        owerflow: hidden;
        background-color: rgba(255,255,255,0.6);
        color: #000;
        padding: 8px;
        opacity: 0;
        content: attr(data-text) " ";
        transition:0.4s;
    }

    &:hover:after{
        opacity: 1;
        top: 0;
        padding: 8px;
    }
`

const GridInsider = () => (
    <StyledGridInsider 
    img={HtmlImage}
    data-text={htmlText}
    ></StyledGridInsider>
)

export default GridInsider;