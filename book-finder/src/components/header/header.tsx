import React from "react";
import { HeaderContainer, TitleContainer, SubTitle, Title } from "./header-style";
import { SearchForm } from "./searchForm";

type HeaderProps = {
  onSubmit: (name : string) => void,
}

export default function Header(props:HeaderProps){
  return(
    <HeaderContainer>

      <TitleContainer>

        <Title>BookFinder</Title>
        <SubTitle>All your books in one place</SubTitle>

      </TitleContainer>

      <SearchForm onSubmit={(name:string) => props.onSubmit(name)} />
      
    </HeaderContainer>
  )
}

export {
  Header
};