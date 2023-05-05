const express = require("express");

const server = express();

server.get("/character", (req, res) => {
 res.send("Informacion sobre todos los personajes")
})

module.exports = server;