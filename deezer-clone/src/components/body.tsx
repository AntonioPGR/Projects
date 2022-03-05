import React from "react";

import { SideBar } from './bodyComponents/sideBar';
import { InfoDisplay } from './bodyComponents/infoDisplay';
import { SearchBar } from './bodyComponents/searchBar';

import { AppBody } from '../assets/css/bodyStyle'
import { searchForMusic } from "../api/searchMusic";

export function Body(){

  const searchQuery = async (searchQuery:string) => {
    const query = searchQuery;

    // searchForMusic(query)
    // .then(res => console.log(res))

    console.log('fecth')
  }


  return(
    <AppBody>

      <SideBar />

      <SearchBar onSubmit={searchQuery} />

      <InfoDisplay />

    </AppBody>
  )
}