'use strict';

let events = require('../eventEmitter.js');

function createPackage (storeName) {
  let payload = {
    "store": storeName,
    "orderId": "q2434h8b8asd",
    "customer": "Jackson",
    "address": "1123 Fake Street"
  }
  events.emit('global', {event:'pickup', payload:payload})
  events.emit('pickup', payload);
}

function handleDelivered (payload) {
 console.log(`Thank you, ${payload.customer}`)
}

module.exports = {
  createPackage,
  handleDelivered,
}