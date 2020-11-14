const express = require('express');
const path = require('path');

const server = express();

server
.set('views', path.join(__dirname, 'views'))
.set('view engine','html')
.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

const host = 'localhost'
const port = 5000;
server.listen(port, () => {
    console.log(`Servidor rodando na url http://${host}:${port}`)
})