console.clear();

const db = require('./DataBase')
const http = require('http')
var url = require('url');

// headers de retorno a chamada
const headers = {
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, DELETE, PUT',
   'Access-Control-Max-Age': 2592000,
   'Content-Type': 'application/json',
 };

http.createServer((req, res)=>{
   const method = req.method

   switch (method) {
      case 'GET':
         handleGetMethod(req, res);
         break;
      case 'POST':
         handlePostMethod(req, res);
         break;
      case 'PUT':
         handlePutMethod(req, res);
         break;
      case 'DELETE':
         handleDeleteMethod(req, res);
         break;
      default: 
         res.writeHead(405, headers);
         res.end();
   }
})
.listen(5000);

function handleGetMethod(req, res){
   const url_parts = url.parse(req.url, true);
   const query = url_parts.query;
   const searchParam = query.searchp
   let loadUsers = searchParam !== undefined? db.selectUsers(`nome LIKE '%${searchParam}%'`): db.selectUsers();

   loadUsers
   .then(users_list => {
      const users = users_list

      res.writeHead(200, headers);
      res.write(JSON.stringify(users))

      res.end()
   })
   .catch(err => console.log(err))
}

function handlePostMethod(req, res){
   let data = '';
   req.on('data', chunk => {
      data += chunk.toString();
   });

   req.on('end', async () => {
      const body = JSON.parse(data);
      db.insertIntoUsers(body)
      .then(statusCode => {

         if(statusCode === 200){
            res.writeHead(201, headers);
         } else {
            res.writeHead(400, headers)
         }
         res.end();

      })
      .catch(err => console.log(err))
   });
}

function handlePutMethod(req, res){

}

function handleDeleteMethod(req, res){

}