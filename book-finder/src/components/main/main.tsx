import React, { useState } from "react";
import { Books } from './books';
import { searchForBooks } from '../../api/indexApi'
import { CompleteInfoBooks } from "../../api/booksInterface";

type MainProps = {
  books: CompleteInfoBooks[],
}

function Main(props:MainProps){
 
  return(
    <main>

      <Books books={props.books} />
      
    </main>
  )
}

export {
  Main
};