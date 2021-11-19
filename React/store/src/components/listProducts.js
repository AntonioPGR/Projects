import React from 'react';
import { Product } from './products';

import '../assets/style/listOfProducts.css';

export class ListProducts extends React.Component{
   constructor(props){
      super(props)

      this.state = {
         connect_status: 0,
         products: {}
      }

      this.componentDidMount = this.componentDidMount.bind(this);
   }

   componentDidMount(){
      fetch('https://fakestoreapi.com/products/')
         .then(
            answer => {
               if(answer.status !== 200){
                  throw new Error(`An error has ocurred when the website was trying to connect to de server: ${answer.status}`)
               }

               this.setState({
                  connect_status: answer.status,
               });

               return answer.json();
            }
         )
         .then(
            json => {
               this.setState({
                  products: json,
               });
            }
         )
         .catch(
            error => {
               console.log(error.message)
            }
         );
   }

   addToShoppingCart(){
      fetch('../api/index.php')
         .then(answer => answer.json())
         .then(res => console.log(res))
      
         console.log('added')
   }

   render(){
      if(this.state.connect_status === 200){
         return(
            <div>
               {
                  Object.keys(this.state.products).map((key)=>{
                     const obj = this.state.products[key]
                     return <Product key={key} onClick={this.addToShoppingCart} product_obj={obj} />
                  })
               }
            </div>
         )
      } else {
         return(
            <div>
               carregando lista de produtos
            </div>
         )
      }
      
   }
}