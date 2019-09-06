const express = require('express');
const http = require('http');
const fs = require('fs');
const bodyParser=require('body-parser');

const port = 3000;
const hostname = 'localhost';

const app = express();
app.use(bodyParser.json);
app.use((req,res,next) => {
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>HELLO</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port , hostname , () =>{
    console.log(`Server is listening http://${hostname}:${port}`);
})