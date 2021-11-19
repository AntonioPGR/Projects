import React from 'react';
import '../assets/style/products.css'

export function Product(props){
   const product = props.product_obj;

   return(
      <article className="product">
         <h1 className="productTitle">{product.title}</h1>
         
         <div>
            <img 
            className="productImage"
            alt={`Ilustration of the product ${product.title}`} 
            src={product.image}
            />
         </div>

         <p className="productPrice">{product.price}</p>

         <div id="buyButtonDiv">
            <button onClick={props.onClick} className="addShoppingCartButton">
               Add to ShoppingCart
            </button>
         </div>
      </article>
   )
}