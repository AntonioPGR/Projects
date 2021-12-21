console.clear();
const http = require('http')

http.createServer((res, req)=>{
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
         console.log("Unsuporthed method!")
   }
})
.listen(8080);

function handleGetMethod(req, res){
   const url = req.url;
   console.log("Url");
}

function handlePostMethod(req, res){
   const url = req.url;
   console.log("Url");
}