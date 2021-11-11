import React from 'react';
import { Slides } from './slideShower';

export function LoadBody(props){
   return(
      <div>
         <Slides />
         <ListProducts />
      </div>
   )
}