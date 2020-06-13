const express = require('express');
const app = express();
const routes = require('./public/routes/routes');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(routes);

io.on('connection', socket => {
    console.log('Socket conectado');

    socket.on('testando', data => {
        console.log(data);
    });
});

module.exports = server;