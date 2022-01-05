async function getUsers(search='', id=''){
   const httpInfo = {
      method: 'GET',
   }
   
   let urlComplement;
   if (search) {urlComplement=`?searchp=${search}`}
   else if (id) {urlComplement=`?id=${id}`}

   const response = await requestToBackend(httpInfo, urlComplement);
   return response
}

async function createUsers(userInfo){
   const request_body = {
      ...userInfo,
      "function": "create"
   }

   const httpInfo = {
      method: 'POST',
      body: JSON.stringify(request_body)
   }

   const response = await requestToBackend(httpInfo);
   return response
}

async function updateUsers(newUserInfo){
   const request_body = {
      ...newUserInfo,
      "function": "update"
   }

   const httpInfo = {
      method: 'POST',
      body: JSON.stringify(request_body)
   }

   const response = await requestToBackend(httpInfo);
   console.log(response)
   return response
}

async function deleteUsers(id){
   const httpInfo = {
      method: 'POST',
      body: JSON.stringify({
         "id": id,
         "function": "delete"
      })
   }

   const response = await requestToBackend(httpInfo);
   console.log(response)
   return response
}

async function requestToBackend(httpInfo, urlComplement=''){
   try{
      const request = await fetch(`http://localhost:5000/${urlComplement}`, httpInfo);
      try{
         const responseData = await request.json();
         return responseData;
      } catch(e) {
         return request
      }
   } catch(e) {
      return Error(e)
   }
}

export { getUsers, createUsers, updateUsers, deleteUsers };