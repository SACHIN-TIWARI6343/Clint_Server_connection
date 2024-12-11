const net = require('net'); // Here we include net module .
const server =net.createServer((socket)=>{ // Creating  Socket object .
socket.on('data',(clintData)=>{
    console.log("Data is recived from clint ",clintData.toString()); // When data recived from  clint side.
    socket.write("recived on server thanku ");  // give response back from clint side.

})
});
server.listen(8080,()=>{    // here,binding and listening both happening simultaneously .
    console.log("New server up to port number 8080");
});