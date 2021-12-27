import UserForm from "./userForm";
import { getUsers, updateUsers } from "../api/api";
import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function EditUser(props){
   const { id } = useParams();
   const [user, setUser] = useState();
   const [updated, setUpdated] = useState(false);

   const getAtualUser = async () => {
      const user = await getUsers(null, id);
      if (user[0]) {
         setUser(user[0]);
      } else {
         setUser(user);
      }
      
   }

   const userEdition = async (userInfo) => {
      Object.keys(userInfo).map((key) => {
         if(userInfo[key] === ''){
            userInfo[key] = user[key]
         }
      })

      const fullUserInfo = {
         ...userInfo,  
         'id': id,
      }

      const response = await updateUsers(fullUserInfo)
      const status = response.status

      if (status === 200) { setUpdated(true) }
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

   const showUserInfo = () => {
      return (
         <div>
            <h1>Atual Information</h1>
            <div>
               <p>Name: {user.nome}</p>
               <p>Age: {user.idade}</p>
               <p>Sex: {user.sexo}</p>
            </div>
         </div>
      )
   }

   useEffect(()=>{
      getAtualUser();
   }, [])



   if (!user){
      return (
         <p>Loading User info</p>
      )
   }
   if(Object.keys(user).length === 0){
      return (
         <p>Não foi possivel carregar as informações do usuario</p>
      )
   }
   if(updated) {
      return <Navigate to="/" />
   }
   return(
      <main id="editUserForm">
         <div>
            {showUserInfo()}
         </div>
         <UserForm onSubmit={userEdition}/>
      </main>
   )
}