import React, { useState } from "react";
import ReactDOM from "react-dom";

// Components of App function:
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { searchForBooks } from './api/indexApi'
import { CompleteInfoBooks } from "./api/booksInterface";

// themes:
import { LightTheme } from "./assets/themes/light";
import { ThemeProvider } from "styled-components";

// styled-componets
import { GlobalStyle } from "./index-style";


// Render the body of the page
function App(){
  const [ currentTheme ] = useState(LightTheme);

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
    <div id="content">
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />

          <Header onSubmit={(name:string) => searchBook(name)} />
        
          <Main books={books} />

      </ThemeProvider>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);