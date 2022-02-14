import React from "react";
import { CompleteInfoBooks, ImageLinks } from "../../api/booksInterface";
import { BooksDiv, BookItem } from './books-style'

interface Props {
  books: CompleteInfoBooks[]
}

function Books(props:Props){
  const books = props.books;

  /**
   * Decide what will show on books container depending of the bookObj passad in props
   * 
   * @returns content of the books' container 
   */
  function loadBooks(){
    if(!books || books.length === 0){
      return <p>Nada a mostrar ainda, que tal pesquisar por alguns livros acima?</p>
    } else {
      return books.map((value, index, array) => renderBooks(value, index, array))
    }
  }

  /**
   * Render each book article that are on BooksContainer
   * 
   * @param value BooksObject with the informations about the book
   * @param index the index of the book in an array
   * @param array The array of books
   * 
   * @returns JSX formated with each book information
   */
  function renderBooks(value:CompleteInfoBooks, index:number, array?:CompleteInfoBooks[]){

    /**
     * verify if the image url is correctaly, else return a pre-set image url
     * 
     * @returns url of the image
     */
    const renderBookCape = (bookCapeUrl:ImageLinks) :string => {
      const preSetUrl :string = ''

      if(bookCapeUrl.thumbnail){
        return bookCapeUrl.thumbnail

      }
      
      if(bookCapeUrl.smallThumbnail){
        return bookCapeUrl.smallThumbnail
      }

      return preSetUrl
    }

    return(
      <BookItem key={index}>

        <h2> {value.title} </h2>

        <div id="imageContainer">
          <img alt={`Capa do livro ${value.title}`} src={value.imageLinks? renderBookCape(value.imageLinks) : ''} />
        </div>

        { value.description? <p id="description">${value.description}</p> : '' }

        { value.infoLink? <a href={value.infoLink} target="_blank" referrerPolicy="no-referrer" rel="noopener">Clique aqui para ver o livro</a> : <p>Link de acesso indisponivel</p> }

      </BookItem>
    )
  }

  return (
    <BooksDiv>
      {loadBooks()}
    </BooksDiv>
  )
}

export {
  Books
};