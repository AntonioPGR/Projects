import React, { useState } from "react";
import { SearchForm } from "./searchForm";
import { Books } from './books';
import { searchForBooks } from '../../api/indexApi'
import { CompleteInfoBooks } from "../../api/booksInterface";

function Main(){
  const startBooks :CompleteInfoBooks[] = []
  const [books, setBooks] = useState(startBooks)

  /**
   * Make a request to api trying to find books with the parameter passaded
   * 
   * @param bookName - the search query with the name of the book to be search.
  */
  function searchBook(bookName:string){

    /**
     * save the books array received in books constant
    */
    const saveBooks = (booksArray:CompleteInfoBooks[]) :void => {
      setBooks(booksArray);
    }

    searchForBooks(bookName, saveBooks);

  }
 
  return(
    <main>
      <SearchForm onSubmit={(value:string) => searchBook(value)} />
      <Books books={books} />
    </main>
  )
}

export {
  Main
};