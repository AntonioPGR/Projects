import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header';
import { SlideShower } from './components/slideShower';
import { ListOfProducts } from './components/listOfProducts';
import { Footer } from './components/footer';

class Page extends React.Component{
    render(){
       return(
         <div id="page">
            <Header />
            <main>
               <SlideShower />
               <ListOfProducts />
            </main>
            <Footer />
         </div>
       )
    }
}

ReactDOM.render(
   <Page />,
   document.querySelector("div#root")
)