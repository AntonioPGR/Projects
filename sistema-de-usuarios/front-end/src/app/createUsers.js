import {createUsers} from "../api/api.js";
import UserForm from './userForm.js';
import { Navigate } from "react-router-dom";
import { useState } from 'react';


export default function CreateUsers(props){
   const [created, setCreated] = useState(false);

   const userCreation = async (userInfo) => {
      const request = await createUsers(userInfo)
      const status = request.status

      if (status === 200) { setCreated(true) }
      else {
         try {
            const p = document.querySelector("p#createdInfo")
            p.parentNode.removeChild(p);
         } catch (e) {}
   
         const main = document.querySelector("main#createUserForm")
         const infoP = document.createElement("p")
         infoP.id = "createdInfo"
         infoP.textContent = "Can't connect to server, User not created";
         main.appendChild(infoP)
      }
   }

   if(created) {
      return <Navigate to="/" />
   }
   return (
      <main id="createUserForm">
         <UserForm onSubmit={userCreation}/>
      </main>
   )
}