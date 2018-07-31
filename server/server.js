const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const port = 3000;

const publicPath = path.join(__dirname,'/../public');


var app = express();
// This is needed for socket io
var server = http.createServer(app);

app.use(express.static(publicPath));

// app.get('/',(req,res) => {
//     res.render('index.html');
// });

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});


