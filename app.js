'use strict';

var express = require('express');
var app = express();
var timestamp = require('./timestamp.js');

var port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.htm');
});

app.get('/:time', function (req, res) {
    res.send(timestamp(req.params.time));
});

app.listen(port, function () {
    console.log(`Server on http://localhost:${port}`)
});