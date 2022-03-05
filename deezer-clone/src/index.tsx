import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';

import { SupBar } from './components/supBar';
import { Body } from './components/body';
import { BottomMusicBar } from './components/bottomMusicBar';

import { GlobalStyle } from './assets/css/global';

function App(){
  return(
    <Router> 

      <GlobalStyle />

      <SupBar />

      <Body />

      <BottomMusicBar />

    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
