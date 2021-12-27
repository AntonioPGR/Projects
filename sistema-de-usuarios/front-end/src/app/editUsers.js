import UserForm from "./userForm";
import { getUsers, updateUsers } from "../api/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function EditUser(props){
   const { id } = useParams();
   const [user, setUser] = useState();

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
      
      console.log(response)
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
         <p>Usuario não encontrado</p>
      )
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