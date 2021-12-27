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
   console.log(method)

   switch (method) {
      case 'GET':
         handleGetMethod(req, res);
         break;
      case 'POST':
         handlePostMethod(req, res);
         break;
      default: 
         res.writeHead(405, headers);
         res.end();
   }
})
.listen(5000);

function handleGetMethod(req, res){
   const url_parts = url.parse(req.url, true);
   const query = JSON.parse(JSON.stringify(url_parts.query));

   let users;
   if(Object.keys(query).length === 0){
      users = db.selectUsers()
   } else {

      if(query.searchp){
         const searchParam = query.searchp
         users = db.selectUsers(`nome LIKE '%${searchParam}%'`)
      } else if(query.id){
         const searchParam = query.id
         users = db.selectUsers(`id = ${searchParam}`)
      } else {
         res.writeHead(204, headers);
         res.end()
      }

   };

   users
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
      const func = body.function;

      switch(func){
         case 'create': 
            db.insertIntoUsers({
               "nome": body.nome,
               "idade": body.idade, 
               "sexo": body.sexo,
            });
            res.writeHead(200, headers)
            res.end();
            break;
         case 'update':
            db.updateUsers({
               "nome": body.nome,
               "idade": body.idade, 
               "sexo": body.sexo,
               "id": body.id,
            });
            res.writeHead(200, headers)
            res.end();
            break;
         case 'delete':
            db.deleteUsers(body.id)
            res.writeHead(200, headers)
            res.end();
            break;
         default:
            res.writeHead(405, headers)
            res.end();
      }
   });
}