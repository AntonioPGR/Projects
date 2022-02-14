import React from "react";
import { Books } from './books';
import { CompleteInfoBooks } from "../../api/booksInterface";

type MainProps = {
  books: CompleteInfoBooks[],
  loading: boolean
}

function Main(props:MainProps){
 
  return(
    <main>

      <Books loading={props.loading} books={props.books} />
      
    </main>
  )
}

export {
  Main
};