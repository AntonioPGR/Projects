import React from 'react';
import ShoppingCartIcon from '../img/shopping_cart_icon-30.png';
import Logo from '../img/store_logo-40.png';

import '../assets/style/header.css'
import { Link } from 'react-router-dom';

export function Header(props){
   return(
      <header>
         <Link to="/" >
            <div id="logoDiv">
               <img id="logoImg" alt="logo da loja " src={Logo} />
            </div>
         </Link>
         <div id="shoppingCartLink">
            <Link to="/shoppingcart">
               <div id="ShoppingCartButton">
                  <div id="numberCartItens">1</div>
                  <img
                     alt="Botão utilizado para acessar seu carrinho de compras"
                     src={ShoppingCartIcon}
                     id="shoppingCartIcon"
                  />
               </div>
            </Link>
         </div>
      </header>
   )
}