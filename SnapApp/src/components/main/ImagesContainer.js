import { Image, ImagesDiv } from './Images-style.js'
import React from 'react'


function ImagesContainer(props){ 

   const loadImages = () => {
      const images = props.images

      if(images.length === 0){
         return (
            <p>
               Please, select a theme above to see the images
            </p>
         )
      }

      return images.map((key, index)=>{
         return ( 
            <Image key={index}>
               <img src={key.link} alt={key} />
               <p> {key.artist} </p>
            </Image>
         )
      })
   }

   return(
      <ImagesDiv>
         {loadImages()}
      </ImagesDiv>
   )
}

export default ImagesContainer;