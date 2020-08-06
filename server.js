const express = require('express')


const server = express()

server.get('/', function (req, res) {
    return res.send("Open")
})

server.listen(7000, function() {
    console.log('Server ON | Port 7000')
})