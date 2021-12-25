async function getUsers(search){
   const httpInfo = {
      method: 'GET',
   }
   const urlComplement = search? `searchp=${search}`:``;

   const response = await requestToBackend(httpInfo, urlComplement);
   return response
}

async function createUsers(userInfo){
   const httpInfo = {
      method: 'POST',
      body: JSON.stringify(userInfo)
   }

   const response = await requestToBackend(httpInfo);
   return response
}

async function updateUsers(newUserInfo){
   const httpInfo = {
      method: 'PUT',
      body: JSON.stringify(newUserInfo)
   }

   const response = await requestToBackend(httpInfo);
   return response
}

async function requestToBackend(httpInfo, urlComplement=''){
   try{
      const request = await fetch(`http://localhost:5000/${urlComplement}`, httpInfo);
      const responseData = await request.json();
      return responseData;
   } catch(e) {
      return Error(e)
   }
}

export { getUsers, createUsers, updateUsers };