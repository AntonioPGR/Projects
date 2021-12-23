import UserForm from "./userForm"
import { useParams } from "react-router-dom"
import { updateUsers } from "../api/api"


export default function EditUser(props){
   const { id } = useParams();

   const userEdition = async (userInfo) => {
      const fullUSerInfo = userInfo['id'] = id
      updateUsers(userInfo)
   }

   return(
      <main id="editUserForm">
         <UserForm onSubmit={userEdition}/>
      </main>
   )
}