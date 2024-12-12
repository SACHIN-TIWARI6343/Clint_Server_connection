const http = require('http');      // Import http module through this.
const server= http.createServer((req,response)=>{  // create server object
console.log(" New connection was created ");
    if(req.url == '/home')
    {
    response.end(" Welcome to Sachin website { SIRT-CSIT}!!!")
    }else{
    response.end("Something something !! ");
  }
});
server.listen(3333,()=>{   // connecting and binding socket object to port 3333.
    console.log("Server started at port 3333");
})