import React from "react";
import { Books } from './books';
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