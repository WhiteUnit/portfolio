import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0;
    font-family: 'Lato';
  }
  body, body * {
    box-sizing: border-box;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle/>
      <main>{children}</main>
    </>
  )
}

export default Layout