import styled from "styled-components";
import { shade } from "polished";

const HeaderContainer = styled.header`
   height: 45px;
   padding: 0 5%;

   background-color: ${props => props.theme.colors.primary};

   display: flex;
   align-items: center;
   justify-content: space-between;

   * {
      border: 1px solid ${props => props.theme.colors.secundary};
      padding: 8px;
      border-radius: 5px;
   }
`

const ChangeThemeButton = styled.button`
   :hover{
      background-color: ${props => props.theme.colors.secundary};
      border: 2px solid ${props => shade(0.1, props.theme.colors.primary)};
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
   }
`

export { HeaderContainer, ChangeThemeButton };