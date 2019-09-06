const express = require('express');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser'); //to get the conentent of body of the request

const port = 3000;
const hostname = 'localhost';
const app = express();

app.use(bodyParser.json());

app.all('/dishes', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  });
  
  app.get('/dishes', (req,res,next) => {
      res.end('Will send all the dishes to you!');
  });
  
  app.post('/dishes', (req, res, next) => {
   res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
  });
  
  app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
  });
   
  app.delete('/dishes', (req, res, next) => {
      res.end('Deleting all dishes');
  });


app.get('/dishes/:dishId', (req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});



const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
})