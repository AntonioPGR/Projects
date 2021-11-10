import React from 'react';
import { Products } from './products';

import '../assets/style/listOfProducts.css';

export class ListOfProducts extends React.Component{
   constructor(props){
      super(props);

      this.state = {
         products: {},
      };

      this.componentDidMount = this.componentDidMount.bind(this);
   }

   componentDidMount(){
      // quando o componente é criado ele conecta a api e pega os produtos
      fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(
               (json)=>{
                  console.log(json)
                  this.setState({
                     products: json
                  })
               }
            )
   }

   render(){
      // caso ainda esteja carregando os produtos da api, o programa reproduz uma animação de loading, caso não exibe os produtos normalmente
      if(Object.keys(this.state.products).length === 0){
         return(
            <div id="products_conteiner">
               <div id="loading"></div>
            </div>
         )
      } else {
         return(
            <div id="products_conteiner">
               {
                  Object.keys(this.state.products).map(
                     (key) => {
                        return <Products key={key} product_obj={this.state.products[key]} />
                     }
                  )
               }
            </div>
         )
      }
   }
   
}