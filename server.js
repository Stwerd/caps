'use strict';

const io = require('socket.io');
const PORT = process.env.PORT || 3002;

let server = io(PORT);
const vendor = server.of('/vendor');
const driver = server.of('/driver');

driver.on('connection', (socket) => {
  console.log('Driver connected', socket.id);
});

vendor.on('connection', (socket) => {
  console.log('Vendor connected', socket.id);
  vendor.emit('start', 'Wood Store');
});