import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Header from './app/header'
import Main from './app/main'

class App extends React.Component {
   render() {
      return (
         <BrowserRouter>
            <Header />
            <Main />
         </BrowserRouter>
      )
   }
}

ReactDOM.render(
   <App />,
   document.getElementById('root')
)