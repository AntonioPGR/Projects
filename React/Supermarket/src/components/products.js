import {React, useState, useEffect} from 'react';
import list_products from '../json/getProducts';
import '../css/products.css';

export default function DisplayProducts(){ 
    const [productsArray, setProductsArray] = useState([]);

    // adiciona os produtos que estão no JSON ao array de produtos quando a pagina é carregada
    window.addEventListener('load', ()=>{
        for(let i = 0; i < Object.keys(list_products).length; i++){
            setProductsArray((prev)=>{
                const new_array = [
                    ...prev,
                    list_products[`p${i}`]
                ]
                console.log(new_array);
                return new_array;
            }) 
        };
    })

    const handleClick = () => {}

    return(
        <div>
            <h1 id="products_title">Products</h1>
            <div>
                {productsArray.map((value, index) => <Product onClick={handleClick} key={index} produto={value} />)}
            </div>
        </div>
    )
}

function Product(props){
    return(
        <article className="product">
            <h1>{props.produto.produto}</h1>
            <picture>
                <img className="product_foto" alt={`Foto do produto ${props.produto.produto} da marca ${props.produto.marca}`} src={props.produto.img} />
            </picture>
            <p>R$: {props.produto.preco} </p>
            <p> {props.produto.descricao} </p>
            <div>
                <button onClick={props.onClick}> 
                    <img className="shoppingCartIcon" alt="icone de carrinho de supermercado" src="./img/icons/shopping-cart.png"/> 
                    Adicionar ao carrinho
                </button>
            </div>
        </article>
    )
}