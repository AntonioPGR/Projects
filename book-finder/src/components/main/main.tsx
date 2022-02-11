import React, { useState } from "react";
import { SearchForm } from "./searchForm";
import { Books } from './books';
import { searchForBooks } from '../../api/indexApi'
import { BooksObject } from "../../interfaces/books";

function Main(){
  const [books, setBooks] = useState([])

  /**
   * Make a request to api trying to find books with the parameter passaded
   * 
   * @param bookName - the search query with the name of the book to be search.
  */
  function searchBook(bookName:string){

    /**
     * Function to be passad to api as a callBack and be executed after the request
     */
    const callBack = (booksObj:any) => {

    }

    searchForBooks(bookName, callBack);
  }
 
  return(
    <main>
      <SearchForm onSubmit={(value:string) => searchBook(value)} />
      <Books booksObject={books} />
    </main>
  )
}

export {
  Main
};