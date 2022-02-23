import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';

import { SupBar } from './components/supBar';
import { Body } from './components/body';
import { Footer } from './components/footer';

import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  display: block;
`

function App(){
  return(
    <Router> 

      <GlobalStyle />


      <SupBar />

      <Body />

      <Footer />

    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
