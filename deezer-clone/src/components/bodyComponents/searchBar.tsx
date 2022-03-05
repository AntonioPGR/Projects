import { Search } from "history";
import React, { FormEvent, useRef } from "react";

interface SearchBarProps{
  onSubmit: (query:string) => void;
}

export function SearchBar(props:SearchBarProps){
  const searchInput = useRef<HTMLInputElement | null>(null)

  const handleSearchSubmit = (ev:FormEvent) => {
    ev.preventDefault()
    const inputQuery = searchInput.current?.value;

    if(inputQuery){
      props.onSubmit(inputQuery)
    }
    
  }

  return(
    <form onSubmit={handleSearchSubmit} >

      <span>&#x1F50E;</span>
      <input ref={searchInput} type='text' placeholder="Buscar" />
      
    </form>
  )
}