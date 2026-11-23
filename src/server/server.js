const path = require('path');
const express = require('express');

const work = require('./routes');
const home = require('./routes');

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, '../../build')));

server.use('/api/v1/', work);
server.get('*', home);

module.exports = server;