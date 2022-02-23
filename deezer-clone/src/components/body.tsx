import React from "react";

import { SideBar } from './bodyComponents/sideBar';
import { InfoDisplay } from './bodyComponents/infoDisplay';
import { BottomMusicBar } from './bodyComponents/bottomMusicBar';
import { SearchBar } from './bodyComponents/searchBar';

export function Body(){
  return(
    <div>

      <SideBar />

      <SearchBar />

      <InfoDisplay />

      <BottomMusicBar />

    </div>
  )
}