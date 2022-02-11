import React from "react";



interface BooksProps{
  booksObject?: Array<BooksObject> 
}

type BooksObject = {
  title: string,
  imageUrl: string,
  description?: string,
  link?: string
}



function Books(props:BooksProps){

  /**
   * Decide what will show on books container depending of the bookObj passad in props
   * 
   * @returns content of the books' container 
   */
  function loadBooks(){
    const books = props.booksObject

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
  function renderBooks(value:BooksObject, index:number, array?:BooksObject[]){

    /**
     * verify if the image url is correctaly, else return a pre-set image url
     * 
     * @returns url of the image
     */
    const renderBookCape = (bookCapeUrl:string) :string => {
      const preSetUrl = '';

      return bookCapeUrl? bookCapeUrl : preSetUrl;
    }

    return(
      <article key={index}>

        <h2> {value.title} </h2>

        <div id="imageContainer">
          <img alt={`Capa do livro ${value.title}`} src={renderBookCape(value.imageUrl)} />
        </div>

        { value.description? <p>value.description</p> : '' }

        { value.link? <a href={value.link} about="_Blank" >Clique aqui para ver o livro</a> : <p>Link de acesso indisponivel</p> }

      </article>
    )
  }

  return (
    <div>
      {loadBooks()}
    </div>
  )
}

export {
  Books
};