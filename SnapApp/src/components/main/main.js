import NavMenu from './navMenu.js';
import ImagesContainer from './ImagesContainer.js'
import { StyledMain } from './main-style.js'
import { getImages } from '../../api/searchImages.js';
import React, { useState } from 'react';

function Main(props){ 
   const [ImagesJson, setImagesJson] = useState([])

   const searchImages = (searchQuery) => {
      getImages(searchQuery)
      .then(
         res => setImagesJson(res)
      )
   }

   return (
      <StyledMain>
         <header>
            <h1>Image Finder</h1>
            <h2>Subtitle</h2>
         </header>

         <NavMenu searchImages={(sq) => searchImages(sq)} />
         
         <ImagesContainer images={ImagesJson} />
      </StyledMain>
   )
}

export default Main;