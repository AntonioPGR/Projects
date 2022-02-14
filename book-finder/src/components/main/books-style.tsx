import styled from "styled-components";

const BooksDiv = styled.div`
  max-width: 700px;
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

  *{
    padding: 5px 0;
  }

  h2{

  }

  p#description{
    overflow: hidden;
    text-align: justify;
  }
`

export { BooksDiv, BookItem }