import {createUsers} from "../api/api.js"
import UserForm from './userForm.js'


export default function CreateUsers(props){
   const userCreation = async (userInfo) => {
      const request = await createUsers(userInfo)
      const status = request.status

      try {
         const p = document.querySelector("p#createdInfo")
         p.parentNode.removeChild(p);
      } catch (e) {}

      const main = document.querySelector("main#createUserForm")
      const infoP = document.createElement("p")
      infoP.id = "createdInfo"
      infoP.textContent = status === 201? `User created successfully` : "Can't connect to server, User not created";
      main.appendChild(infoP)
   }

   return (
      <main id="createUserForm">
         <UserForm onSubmit={userCreation}/>
      </main>
   )
}