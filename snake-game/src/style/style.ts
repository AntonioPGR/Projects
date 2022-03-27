import styled, { createGlobalStyle } from "styled-components";

export const StyledMainContainer = styled.main`

  text-align: center; 

`

export const PageTitle = styled.h1`

  font-family: Arial, Helvetica, sans-serif;
  color: #006400;
  font-size: 2em;
  margin: 40px auto 40px auto;

`

export const GameCanvasContainer = styled.canvas`

  width: 800px;
  height: 610px;
  border: 2px solid gray;
  border-radius: 4px;
  background-color: #00FF7F;

`

export const GlobalStyle = createGlobalStyle`

  body{

    background-color: #98FB98;

  }

`