async function getUsers(search){
   let request;
   if (search){
      request = await fetch(`http://localhost:5000/?searchp=${search}`)
   } else {
      request = await fetch(`http://localhost:5000`)
   }
   
   const response = await request.json()
   return response;
}

async function createUsers(userInfo){
   const request = await fetch(`http://localhost:5000`, {
      method: 'POST',
      body: JSON.stringify(userInfo)
   })
   return request
}

async function updateUsers(id, newUserInfo){

}

export { getUsers, createUsers, updateUsers };