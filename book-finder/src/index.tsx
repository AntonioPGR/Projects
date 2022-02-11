import React from "react";
import ReactDOM from "react-dom";

// Components of App function:
import { Header } from './components/header/header';
import { Main } from './components/main/main';

// Render the body of the page
function App(){
  return(
    <div id="content">

      <Header />

      <Main />

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);