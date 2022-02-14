import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    border: 0;
  
    font-size: 16px;
    font-family: '';
  }

  html, body{
    font-size: ${props => props.theme.sizes.defaultSize};
    background-color: ${props => props.theme.colors.background};
  }

`

export { GlobalStyle }