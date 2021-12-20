import UserTable from './userTable.js'

export default function Users(props){
   const handleFormSubmit = (ev) => {
      ev.preventDefault();
      const search = document.getElementById("userSearchBar").value
      const users = requestUsersToApi(search);
   }

   const requestUsersToApi = () => {

   }

   const filterInput = (ev) => {
      ev.key ==
   }

   return(
      <div>
         <h1>All Usuarios</h1>
         <form id="findUsers" OnSubmit={handleFormSubmit}>
            <div id="searchBar">
               <input onKeyUp={filterInput} type="text" id="userSearchBar" placeholder="Searching for someone?..." />
               <input type="button" value="&#128270; Search" />
            </div>
         </form>
         <UserTable users={''} />
      </div>
   )
}