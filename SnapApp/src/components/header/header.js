import { HeaderContainer, ChangeThemeButton } from './header-style'
import React from 'react'

export default function Header(props){
   return(
      <HeaderContainer>
         <p>Logo</p>
         <ChangeThemeButton onClick={props.changeTheme}>
            Change Theme
         </ChangeThemeButton>
      </HeaderContainer>
   )
}