import React from 'react';

export class ShoppingCart extends React.Component{
   constructor(props){
      super(props);

      this.state = {
         allproducts: [],
      };

      this.componentDidMount = this.componentDidMount.bind(this);
   }

   componentDidMount(){
      // quando o componente é criado ele conecta a api e pega os produtos
      fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(
               (json)=>{
                  const products = Object.keys(json).filter(isOnList)
                  this.setState({
                     products: products
                  })
                  console.log(products)
               }
            )
   }

   render(){
      return(
         <div>
            Olá, eu sou um shopping cart
         </div>
      )
   }
}