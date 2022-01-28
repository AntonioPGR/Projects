import styled from "styled-components";

const FormMenu = styled.form`
   margin: 5px 0;

   input[type="submit"], input[type="text"]{
      border: 1px solid black;
      padding: 5px;
   }

   input[type="text"]:focus{
      border: 1px solid black;
   }

   input[type="submit"]{
      border-left: none
   }
`

const LinksContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-content: center;
   padding: 10px;
   min-height: 30px;

   *{
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
      padding: 10px;
   }

   *:hover{
      border: 1px solid ${props => props.theme.colors.primary}
   }
`

export { FormMenu, LinksContainer }