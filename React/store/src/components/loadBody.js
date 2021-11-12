import React from 'react';
import { Slides } from './slideShower';
import { ListProducts } from './listProducts';

export function LoadBody(props){
   return(
      <div>
         <Slides />
         <ListProducts />
      </div>
   )
}