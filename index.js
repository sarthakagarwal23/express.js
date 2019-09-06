const express = require('express');
const http = require('http');
const fs = require('fs');
const bodyParser=require('body-parser'); //to get the conentent of body of the request

const port = 3000;
const hostname = 'localhost';
const app = express();

app.use(bodyPatser.json());

app.all('./dishes',(req,res,next) =>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    next();
})
app.get('./dishes',(req,res,next) => {
    console.log("here the deatils are");
})
app.post('./dishes',(req,res,next) => {
    console.log("here the deatils are" + req.body.name +'done' );
})



const server = http.createServer(app);

server.listen(port , hostname , () =>{
    console.log(`Server is listening at http://${hostname}:${port}`);
})