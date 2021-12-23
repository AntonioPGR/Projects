import { Link } from "react-router-dom"

export default function Header(props){
   const links = {
      "See Users": "/",
      "Create User": '/create-user',
   }

   const loadLinks = () => {
      return Object.keys(links).map((key, index) => {
         return (
            <Link to={ links[ key ] } key={ `link${index}` }>
               { key }
            </Link>
         )
      })
   }

   return(
      <header>
         <h1>Sistema de Usuarios</h1>
         <nav>
            {loadLinks()}
         </nav>
      </header>
   )
}