//using http module(inbuilt given node) we can set up basic server
const http = require('http');
const PORT = 3000;
/**
 * http module contains a function called as createServer
 * this createServer function takes a callback as the input
 * Now inside the callback, we get two arguments
 * - request -> this argument contains all the details about th incoming req 
 * - response -> this argument contains funciton using which we can prepare the response
 * the createServer funtion returns us the server object 
 */

const server = http.createServer(function exec(request, response){
    console.log(request.url);
    response.end("hello world");
});  

server.listen(PORT, function process() {
    //once the server starts then this callback will be executed
    console.log("Server started on port", PORT);  
});    