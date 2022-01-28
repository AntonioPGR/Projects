import styled from "styled-components";

const Image = styled.div`
   margin: 10px;
   max-width: 400px;

   img {
      max-width: clamp(300px, 90%, 400px);
      height: 250px; 
   }
`

const ImagesDiv = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;

   justify-content: space-around;
   justify-items: center;
   align-content: space-around;
   align-items: center;
`

export { Image, ImagesDiv}