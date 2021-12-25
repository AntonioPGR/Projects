import UserTable from './userTable.js';
import SearchForm from './searchForm.js';
import { getUsers } from '../api/api.js';
import { useState, useEffect } from 'react'


export default function ShowUsers(props){
   const [users, setUsers] = useState();
   const [connectionError, setConnectionError] = useState({
      status: false,
      errorMsg: '',
   })
   const [searchP, setSearchP] = useState();

   const handleFormSubmit = async (ev) => {
      ev.preventDefault();

      const search = document.getElementById("userSearchBar").value;
      setSearchP(search);

      searchUsers(search);
   }

   const searchUsers = async (search=null) => {
      const usersObj = await getUsers(search)
      if (usersObj instanceof Error){
         setConnectionError({
            status: true,
            errorMsg: usersObj
         })
      } else {
         setUsers(usersObj)
      }
   }

   const setWhatIsShowing = () => {
      if (connectionError.status){
         return (
            <p>Não foi possivel conectar-se ao servidor</p>
         )
      } else {
         return <UserTable searchP={searchP} users={users} />
      }
   }

   useEffect(() => {
      searchUsers();
   }, [])

   return(
      <div>
         <h1>All Usuarios</h1>
         <SearchForm formSubmit={handleFormSubmit} />
         {setWhatIsShowing()}
      </div>
   )
}