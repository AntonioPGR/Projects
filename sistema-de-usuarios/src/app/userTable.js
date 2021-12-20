import { Link } from "react-router-dom"

export default function UserTable(props){
   if (!props.users){
      return(
         <div id="no-users-error">
            <p>
               No users registrated in data base, if you want to register one <Link to="/create-user">click here</Link> 
            </p>
         </div>
      )
   } else {
      return(
         <table>
            <tr>
               <td>Id</td>
               <td>Nome</td>
               <td>Idade</td>
               <td>Sexo</td>
            </tr>
         </table>
      )
   }
}