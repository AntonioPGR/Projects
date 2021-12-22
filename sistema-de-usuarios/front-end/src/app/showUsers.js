import UserTable from './userTable.js';
import SearchForm from './searchForm.js';
import { getUsers } from '../api/api.js';
import { useState, useEffect } from 'react'


export default function ShowUsers(props){
   const [users, setUsers] = useState();
   const [searchP, setSearchP] = useState();

   const handleFormSubmit = async (ev) => {
      ev.preventDefault();

      const search = document.getElementById("userSearchBar").value;
      setSearchP(search);

      searchUsers(search);
   }

   const searchUsers = async (search=null) => {
      const usersObj = await getUsers(search)
      setUsers(usersObj)
   }

   useEffect(() => {
      searchUsers();
   }, [])

   return(
      <div>
         <h1>All Usuarios</h1>
         <SearchForm formSubmit={handleFormSubmit} />
         <UserTable searchP={searchP} users={users} />
      </div>
   )
}