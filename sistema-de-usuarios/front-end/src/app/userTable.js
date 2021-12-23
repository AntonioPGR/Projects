import { Link } from "react-router-dom"

export default function UserTable(props){
   const users = props.users
   
   const loadUsers = () => {
      return Object.keys(users).map((key, index)=>{
         const atualUser = users[key]
         return (
            <tr key={index}>
               <td>{atualUser.id}</td>
               <td>{atualUser.nome}</td>
               <td>{atualUser.idade}</td>
               <td>{atualUser.sexo === "M"? "Masculino":"Feminino"}</td>
               <td>
                  <Link to={`/edit-user/${atualUser.id}`} >Edit</Link>
                  <Link to={`/delete-user/${atualUser.id}`} >Delete</Link>
               </td>
            </tr>
         )
      })
   }

   const loadTableHeaders = () => {
      return Object.keys(users[0]).map((key, index)=>{
         return (
            <td key={index}>{key}</td>
         )
      })
   } 

   if(users === undefined) {
      return(
         <div id="no-users-error">
            <p>
               Loading Users
            </p>
         </div>
      )
   } else if(Object.keys(users).length === 0){
      return(
         <div id="no-users-error">
            <p>
               No users registrated with "{props.searchP}" in name on our data base, if you want to register one <Link to="/create-user">click here</Link> 
            </p>
         </div>
      ) 
   } else {
      return(
         <table>
            <thead>
               <tr>
                  {loadTableHeaders()}
                  <td>Options</td>
               </tr>
            </thead>
            <tbody>
               {loadUsers()}
            </tbody>
         </table>
      )
   }
}