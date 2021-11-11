import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { App } from './components/app';

class Page extends React.Component{
    render(){
      return(
         <BrowserRouter>
            <App />
         </BrowserRouter>
      )
    }
}

ReactDOM.render(
   <Page />,
   document.querySelector("div#root")
)