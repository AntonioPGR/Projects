import styled from "styled-components";

const StyledMain = styled.main`
   width: clamp(300px, 90%, 1100px);
   margin: auto;
   padding: 10px;
   min-height: calc(100vh - 65px);
   
   h1{
      text-align: center;
   }

   background-color: ${props => props.theme.colors.bgColor};
`

const ArticlesSection = styled.div`
   
   display: flex;
   flex-flow: row wrap;
   justify-content: space-around;
   align-items: center;
   margin: 10px 0;

   article{
      width: clamp(300px, 470px, 40%);
      text-align: justify;
      margin: 10px;

      h2{
         margin-bottom: 5px;
      }

      div{
         text-align: center;
      }

      div > img{
         max-width: 100%;
         height: 300px;
         margin: 10px auto;
      }

   }

`

export { StyledMain, ArticlesSection };