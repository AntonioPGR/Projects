import { HeaderContainer, ChangeThemeButton } from './header-style'
import Logo from "../../assets/hurrycaneImages/logo.jpeg"
import React from 'react'

export default function Header(props){
   return(
      <HeaderContainer>
         <img alt="logo do site" src={Logo} />
         {/* <ChangeThemeButton onClick={props.changeTheme}>
            Change Theme
         </ChangeThemeButton> */}
      </HeaderContainer>
   )
}