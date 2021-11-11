import React from 'react';

import '../assets/style/global.css'

import { Header } from './header';
import { Footer } from './footer';
import { ListOfProducts } from './listOfProducts';
import { ShoppingCart } from './shoppingCart';

import {Routes, Route} from 'react-router-dom';


export class App extends React.Component{
    render(){
       return(
         <div id="page">
            <Header />

            <Routes>
               <Route path="/" component={ListOfProducts} />
               <Route path="/shoppingcart" component={ShoppingCart} />
            </Routes>

            <Footer />
         </div>
       )
    }
}