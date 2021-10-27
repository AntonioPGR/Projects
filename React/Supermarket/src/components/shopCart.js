import React from 'react';
import { shopping_cart_list } from '../json/getProducts';
import list_products from '../json/getProducts';

export default function ShopCart(props){
    return(
        <div>
            <h1>Carrinho de compras</h1>
            <div>
                {shopping_cart_list.map((value,index)=>{
                    return(
                        <article key={index}>
                            <h1> {list_products[`p${value}`].produto} </h1>
                            <p> Marca: {list_products[`p${value}`].marca} </p>
                            <p> R$: {list_products[`p${value}`].preco} </p>
                            <p> {list_products[`p${value}`].descricao} </p>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}