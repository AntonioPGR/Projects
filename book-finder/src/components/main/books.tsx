import React from "react";
import { CompleteInfoBooks, ImageLinks } from "../../api/booksInterface";
import { BooksDiv, BookItem, LoadingDiv } from './books-style';
import DefaultImage from '../../assets/img/defaultImage.png';

interface Props {
  books: CompleteInfoBooks[];
  loading: boolean;
}

function Books(props:Props){
  const books = props.books;

  /**
   * Decide what will show on books container depending of the bookObj passad in props
   * 
   * @returns content of the books' container 
   */
  function loadBooks(){
    if(props.loading){
      return <LoadingDiv></LoadingDiv>
    }

    if(!books || books.length === 0){
      return <p>Nada a mostrar ainda, que tal pesquisar por alguns livros acima?</p>
    }

    return books.map((value, index, array) => renderBooks(value, index, array))
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

        <header>
          <h2> {value.title.toLowerCase()} </h2>
        </header>

        <main>
          <div id="imageContainer">

            <img alt={`Capa do livro ${value.title}`} src={value.imageLinks? renderBookCape(value.imageLinks) : DefaultImage} />

          </div>

          { value.description? <p id="description">{value.description.substring(0, 150)+"...".toLowerCase()}</p> : '' }

        </main>

        <footer>
          { 
          value.infoLink? 
          <a href={value.infoLink} target="_blank" rel="noreferrer" referrerPolicy="no-referrer" > Clique aqui para ver o livro </a> 
          : 
          <p>Link de acesso indisponivel</p> 
          }
        </footer>

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