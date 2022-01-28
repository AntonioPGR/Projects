import styled from "styled-components";

const StyledMain = styled.main`
   width: clamp(300px, 90%, 1100px);
   margin: auto;
   padding: 10px;
   min-height: calc(100vh - 65px);
   
   text-align: center;

   background-color: ${props => props.theme.colors.bgColor};
`

export { StyledMain };