import React from "react";
import ReactDom from "react-dom";

import Header from './components/header.js';
import Footer from './components/footer.js';
import DisplayProducts from "./components/products.js";
import ShopCart from "./components/shopCart.js";
import NotFound from "./components/notFound.js";

import './css/reset.css';

class SuperMarket extends React.Component{
    // Função que decide qual código será renderizado no 'main', isso é decidido baseado na url
    renderMain(){
        const path = window.location.pathname
        switch(path){
            case '/':
                return <DisplayProducts />
            case '/carrinho':
                return <ShopCart />
            default:
                return <NotFound />
        }
    }

    render(){
        return(
            <div>
                <Header />
                {/* 
                Criar links do menu aqui
                <Links />
                */}
                {this.renderMain()}
                <Footer>
                    <a rel="noopener noreferrer" className="footer_link" href='https://www.instagram.com' target="_blank">Instagram</a>
                    <a rel="noopener noreferrer" className="footer_link" href='https://www.twitter.com' target="_blank">Twitter</a>
                    <a rel="noopener noreferrer" className="footer_link" href='https://www.gmail.com' target="_blank">Contato</a>
                </Footer>
            </div>
        )
    }
}

ReactDom.render(
    <SuperMarket />,
    document.getElementById('root')
)