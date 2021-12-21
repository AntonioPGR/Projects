import UserTable from './userTable.js'

export default function Users(props){
   const handleFormSubmit = (ev) => {
      ev.preventDefault();
      const search = document.getElementById("userSearchBar").value
      const users = requestUsersToApi(search);
   }

   const requestUsersToApi = (search) => {
      fetch(`http://localhost:8080/?query=${search}`, {
         method: 'GET',
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
   }

   return(
      <div>
         <h1>All Usuarios</h1>
         <form id="findUsers" onSubmit={handleFormSubmit}>
            <div id="searchBar">
               <input type="text" id="userSearchBar" placeholder="Searching for someone?..." />
               <input type="submit" value="&#128270; Search" />
            </div>
         </form>
         <UserTable users={''} />
      </div>
   )
}