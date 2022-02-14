import styled from "styled-components";

const defaultStyle = `
  border: 1px solid gray;
  border-radius: 5px;
`

const SearchButton = styled.button`
  ${defaultStyle}
  padding: 3px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  :hover{
    background-color: darkgray;
  }
`

const SearchInput = styled.input`
  ${defaultStyle}
  padding: 6px 2px 3px 2px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

export { SearchButton, SearchInput}