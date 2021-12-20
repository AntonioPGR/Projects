import { Link } from "react-router-dom"

export default function Header(props){
   const links = {
      "See Users": "/users",
      "Create User": '/create-user',
      "Edit User": '/edit-user',
      "Delete User": '/delete-user',
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