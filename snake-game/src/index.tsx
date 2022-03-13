import React from "react";
import ReactDOM from "react-dom";

import { Game } from "./components/game";
import { StyledMainContainer, PageTitle, GlobalStyle } from './style/style'

const App = () => {
  
  // return container components
  const StyledMain = StyledMainContainer;
  const Title = PageTitle;

  return(
    <StyledMain>

      <GlobalStyle />

      <Title> Snake Game </Title>

      <Game />


    </StyledMain>
  )
}

ReactDOM.render(

  <App />,
  document.querySelector("div#root")

);