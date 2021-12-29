import Logo from '../assets/logo.png';
import { useState, useEffect } from 'react';

export default function Header(props){
   // informações a serem usadas no componente 
   const headerLinksUrl = "../assets/json/headerLinks.js"

   // guarda os links que serão mostrados no header
   const [links, setLinks] = useState()

   // faz o request ao json que guarda os links do header
   const loadLinks = async () => {
      try{
         
         const request = fetch(headerLinksUrl)
         const response = request.json()
         console.log(response)

      } catch(e){
         console.log(e)
      }      
   }

   const showLinks = () => {

   }

   return(
      <header id="pageHeader">
         <div id="logoConteiner">
            <img src={Logo} alt="Logo do site" />
         </div>
         <nav>
            {showLinks()}
         </nav>
      </header>
   )
}