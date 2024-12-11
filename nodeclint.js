const net = require('net');
const client =net.createConnection({port:8080},()=>{
    console.log("clint is connected");
    client.write("hello from node clint ");
})
client.on('data',(serverdata)=>{
    console.log("Data recived from server side ",serverdata.toString());
})