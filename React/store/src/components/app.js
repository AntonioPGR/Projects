import React from 'react';

import '../assets/style/global.css'

import { Header } from './header';
import { Footer } from './footer';
import { LoadBody } from './products/loadyBody';
import { ShoppingCart } from './shoppingCart';

import {Routes, Route} from 'react-router-dom';


export function App(props){
   return(
      <div id="page">
         <Header />

         <Routes>
            <Route path="/" element={<LoadBody />} />
            <Route path="shoppingcart" element={<ShoppingCart />} />
         </Routes>

         <Footer />
      </div>
   )
}