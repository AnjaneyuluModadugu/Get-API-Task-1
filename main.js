const express = require('express');
const os = require('os');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const secret = 'your-secret-key';
const authenticateToken= require('./authenticateToken');
const uuid = require('uuid');
const querystring = require("querystring");

let app= express();

app.listen(3000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3000);
})

app.use((req,res,next)=>{
    if(!req.headers['ID']){
        const reqID = uuid.v4();

        req.headers['ID'] = reqID;
    }
    next();
})
app.get('/stats',authenticateToken, (req, res) => {
    const stats = {
      hostname: os.hostname(),
      uptime: os.uptime(),
      loadavg: os.loadavg(),
      totalmem: os.totalmem(),
      freemem: os.freemem(),
      cpus: os.cpus(),
      networkInterfaces: os.networkInterfaces(),
    }  
console.log(os.cpus())
    const queryParams = req.query;
    console.log(queryParams);
    console.log(queryParams.module);

    if (queryParams.module === 'hostname') {
        

        res.writeHead(200, { 'Content-Type': 'application/json' });
    
        // res.end(`The os module version is ${os.hostname()}`);
        res.end(JSON.stringify(os.hostname()));
      } 
      else if (queryParams.module === 'uptime') {

        res.writeHead(200, { 'Content-Type': 'application/json' });
    
        // res.end(`The os module version is ${os.uptime()}`);
        res.end(JSON.stringify(os.uptime()));
    }
    else if(queryParams.module === 'loadavg') {

        res.writeHead(200, { 'Content-Type': 'application/json' });
    
        // res.end(`The os module version is ${os.loadavg()}`);
        res.end(JSON.stringify(os.loadavg()));
      } 
    else if  (queryParams.module === 'totalmem') {

        res.writeHead(200, { 'Content-Type': 'application/json' });
    
        // res.end(`The os module version is ${os.totalmem()}`);
        res.end(JSON.stringify(os.totalmem()));
    }
    else if  (queryParams.module === 'freemem') {

        res.writeHead(200, { 'Content-Type': 'application/json' });
    
        // res.end(`The os module version is ${os.freemem()}`);
        res.end(JSON.stringify(os.freemem()));
    }
    else if  (queryParams.module === 'cpus') {

        res.writeHead(200, { 'Content-Type': 'application/json' });
    
        // res.end(`The os module version is ${os.cpus()}`);
        res.end(JSON.stringify(os.cpus()));


    }
    else if(queryParams.module === 'networkInterfaces') {

        res.writeHead(200, { 'Content-Type': 'application/json' });
    
        // res.end(`The os module version is ${os.networkInterfaces()}`);
        res.end(JSON.stringify(os.networkInterfaces()));
      } 
      else{
        res.json(stats);
      }
    // console.log(req.headers)  
    // res.setHeader('Content-Type', 'application/json');
    // res.send('Authenticated!');
    // res.json(stats);
  });

