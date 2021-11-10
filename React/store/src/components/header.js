import React from 'react';
import ShoppingCartIcon from '../img/shopping_cart_icon-30.png';
import Logo from '../img/store_logo-40.png';

import '../assets/style/header.css'

export function Header(props){
   return(
      <header>
         <div id="logoDiv">
            <img id="logoImg" alt="logo da loja " src={Logo} />
         </div>
         <div id="ShoppingCartButton">
            <div id="numberCartItens">1</div>
            <img 
            alt="Botão utilizado para acessar seu carrinho de compras" 
            src={ShoppingCartIcon}
            id="shoppingCartIcon"
            />
         </div>
      </header>
   )
}