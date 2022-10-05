'use strict';

const io = require('socket.io-client');
const handlePickup = require('./driver.js');

const socket = io.connect('http://localhost:3002/driver');

socket.on('pickup', handlePickup(socket));