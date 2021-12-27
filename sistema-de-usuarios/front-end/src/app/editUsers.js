import UserForm from "./userForm"
import { useParams } from "react-router-dom"
import { updateUsers } from "../api/api"


export default function EditUser(props){
   const { id } = useParams();

   const userEdition = async (userInfo) => {
      const fullUserInfo = userInfo
      fullUserInfo['id'] = id
      console.log(fullUserInfo)
      updateUsers(fullUserInfo)
   }

   return(
      <main id="editUserForm">
         <UserForm onSubmit={userEdition}/>
      </main>
   )
}