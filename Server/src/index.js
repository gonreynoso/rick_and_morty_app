const http = require("http");
const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

//[::1]:3001/rickandmorty/characters/10 para el thunderClient










http.createServer((req, res) => {res.setHeader('Access-Control-Allow-Origin', '*')

const {url} = req
console.log(url);

if (url.includes("rickandmorty/characters")) {
 console.log(" en la ruta");
 res.end("estoy en la ruta")
 
}


}).listen(PORT, "localhost")