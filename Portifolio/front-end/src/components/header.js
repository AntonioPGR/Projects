import { Link } from "react-router-dom";

import Logo from "../assets/imgs/logo/logo-teste.png";

export default function Header(props){
   // guara as informações do cabeçalho da pagina
   const headerInfo = props.info

   //INFO: apos a construção do backend, a logo sera trocada por uma url ao invés de um import
   // logo que sera exibida no cabeçalho do site
   const logoImage = Logo
   // guarda os itens que serão mostrados no menu de navegação do cabeçalho
   const links = headerInfo.links

   // mapeia o objeto de links e exibe cada link que o objeto contem
   const loadNavLinks = () => {
      return Object.keys(links).map((key, index) => {
         return <Link key={index} to={links[key]} > { key } </Link>
      })
   }

   return(
      <header>
         <div>
            <img src={logoImage} alt="logo do site" />
         </div>
         <nav>
            { loadNavLinks() }
         </nav>
      </header>
   )
}