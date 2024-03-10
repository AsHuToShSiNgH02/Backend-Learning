const express = require('express');

const app = express();
const PORT = 3000;

app.get('/',function(res,req){
    res.send("hello world");
});

app.post('/home', function(req, res){
    res.send("welcome to home");
});

app.patch('/home', function(req,res){
    res.json({
        message: "This is a patch request",
        success: true
    })
});

app.listen(PORT, function process(){
    console.log("server started");
});