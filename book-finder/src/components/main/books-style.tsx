import styled, { keyframes } from "styled-components";

const BooksDiv = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 10px;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: space-between;
  justify-items: center;
  justify-content: space-between;
  
`

const BookItem = styled.article`
  background-color: aliceblue;
  width: clamp(250px, 300px, 300px);
  height: 400px;
  text-align: center;
  margin: 15px auto;
  padding: 10px;

  overflow: hidden;

  *{
    padding: 5px 0;
  }

  header h2{
    font-size: 1.5rem;
    font-family: ${props => props.theme.fonts.titles};
    text-transform: capitalize;
  }

  main {
    div#imageContainer{
      height: 200px;

      img{
        height: 200px;
        width: auto;
      }
    }
    p{
      text-align: justify;
    }
  }

`

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoadingDiv = styled.div`
  margin: auto;
  height: 100px;
  width: 100px;

  border-radius: 50%;
  border: 3px solid ${props => props.theme.colors.secundary};
  border-top-color: ${props => props.theme.colors.primary};

  animation: ${loadingAnimation} 1s linear infinite;
`

export { BooksDiv, BookItem, LoadingDiv }