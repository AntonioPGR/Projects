import React, { FormEvent, useRef, useState } from "react";

interface SearchFormProps {
  onSubmit: ( bookName:string ) => void,
}

function SearchForm(props : SearchFormProps){
  const searchInput = useRef<HTMLInputElement>(null)
  const [formError, setFormError] = useState('')

  /**
   * Faz a verificação basica dos dados do formulário e repassa-as para a função de callback
   * 
   * @param event recebe o evento o qual foi executado a função, nesse caso o submit do form
   * @returns none
   */
  function handleSubmit(event : FormEvent){
    event.preventDefault();
    
    // função que verifica se o elemento da referência já foi criado
    if(!searchInput.current){
      return;
    }

    const value = searchInput.current.value;

    // verifica se o input não está vazio
    if(!value){
      setFormError("Erro! o formulário não pode ficar vazio!");
      return;
    }

    props.onSubmit(value);

  }

  /**
   * 
   * @returns Caso haja erro, retorna um paragráfo contento a mensagem do erro
   */
  function loadFormError(){
    return formError? <p>{formError}</p>:'';
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <div id="searchBar">
          
          <input ref={searchInput} type="text" placeholder="Searching for something...?" maxLength={50} autoComplete="off" required />
          <button>Search 🔎</button>

        </div>

      </form>

      {loadFormError()}

    </div>
  )
}

export {
  SearchForm
};