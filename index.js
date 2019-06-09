var express = require("express");


var server = express();

server.get("/", (req, res) => {
    res.send("Server started");
});

server.listen(4000, () => {
    console.log("Server started");
});