import React from "react"
import { FormMenu, LinksContainer } from "./navmenu-style.js"

function NavMenu(props){ 
   const searchInput = React.createRef()


   const suggestions = [
      {
         "text": "Mountains",
         "searchQuery": "mountains",
      },
      {
         "text": "Beachs",
         "searchQuery": "beachs",
      },
      {
         "text": "Paints",
         "searchQuery": "paints",
      },
   ]

   const listSuggestions = () => {
      return suggestions.map((key, index) => {
         return (
            <button key={index} onClick={() => props.searchImages(key.searchQuery)}>
               {key.text}
            </button>
         ) 
      })
   }

   const searchForQuery = (ev) => {
      ev.preventDefault();

      const searchQuery = searchInput.current.value;
      props.searchImages(searchQuery);
   }

   return(
      <nav>
         <FormMenu onSubmit={searchForQuery}>
            <input ref={searchInput} type="text" placeholder="Searching for any image?" /> 
            <input type="submit" value="Search" />
         </FormMenu>
         <LinksContainer>
            {listSuggestions()}
         </ LinksContainer>
      </nav>
   )
}

export default NavMenu;