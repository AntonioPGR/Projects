import React from 'react';
import ReactDOM from 'react-dom';

import './assets/style/global.css'

import { Header } from './components/header';
import { PageBody } from './components/PageBody';
import { Footer } from './components/footer';

class Page extends React.Component{
    render(){
       return(
         <div id="page">
            <Header />

            <PageBody />

            <Footer />
         </div>
       )
    }
}

ReactDOM.render(
   <Page />,
   document.querySelector("div#root")
)