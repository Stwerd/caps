'use strict';

let events = require('../../eventEmitter.js');

const createPackage = (socket) => (storeName) => {
  let payload = {
    "store": storeName,
    "orderId": "q2434h8b8asd",
    "customer": "Jackson",
    "address": "1123 Fake Street"
  }
  socket.emit('global', {event:'pickup', payload:payload})
  socket.emit('pickup', payload);
}

function handleDelivered (payload) {
 console.log(`Thank you, ${payload.customer}`)
}

module.exports = {
  createPackage,
  handleDelivered,
}