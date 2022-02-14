import { CompleteInfoBooks } from "./booksInterface";

/**
 * Search for the book wished
 * 
 * @param name name of the book the user wish to search
 * @param callBack a callback function with what it has to do after make the request
 */
function searchForBooks(name:string, callBack: (booksArray:CompleteInfoBooks[]) => void ){


  fecthBooksApi(name)
  .then(res => res.json())
  .then(
    booksList => {

      const booksOrganized = organizeBooks(booksList.items);
      
      callBack(booksOrganized)

    }
  )

  .catch(e => console.log(e))

}


/**
 * Make the request to google books api trying to find the wished book
 * 
 * @param query the name of the book the user wants to search
 * @returns an Promise with the request to api
 */
function fecthBooksApi(query:string){
  const requestUrl = `https://www.googleapis.com/books/v1/volumes?q='${query}`

  return fetch(requestUrl)

}


/**
 * Format the object received from google books api
 * 
 * @param booksArray the google api return object
 * @return a formated way to the google api find object
 */
function organizeBooks(booksArray:Array<any>):CompleteInfoBooks[]{
  const orgBooksArray :CompleteInfoBooks[] = []

  booksArray.map((value, index) => {
    const bookInfo = value.volumeInfo

    orgBooksArray.push({
      title: bookInfo.title,
      authors: bookInfo.authors,

      publisher: bookInfo.publisher,
      publishedDate: bookInfo.publishedDate,

      description: bookInfo.description,
      categories: bookInfo.categories,

      canonicalVolumeLink: bookInfo.canonicalVolumeLink,
      infoLink: bookInfo.infoLink,

      imageLinks: bookInfo.imageLinks
    })

    return
  })

  return orgBooksArray

}

export {
  searchForBooks
}