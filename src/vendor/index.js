'use strict';

const io = require('socket.io-client');
const { createPackage, handleDelivered} = require('./vendor.js');

const socket = io.connect('http://localhost:3002/vendor');

socket.on('delivered', handleDelivered);
socket.on('start', console.log);


