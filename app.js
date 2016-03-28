'use strict';

const express = require('express');
const app = express();
const timestamp = require('./timestamp.js');

const port = 3000;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.htm'));

app.get('/:time', (req, res) => res.send(timestamp(req.params.time)));

app.listen(port, () => console.log(`Server on http://localhost:${port}`));